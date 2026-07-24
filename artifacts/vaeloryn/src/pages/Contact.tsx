import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SEO } from '@/components/SEO';

const formSchema = z.object({
  name:    z.string().min(2, "Name is required"),
  email:   z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Please provide a message"),
});

type FormValues = z.infer<typeof formSchema>;

async function postJson(url: string, data: unknown): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  // Safely attempt JSON parse regardless of Content-Type header
  let body: { ok?: boolean; error?: string } = {};
  try {
    body = await res.json();
  } catch {
    // Response was not JSON (e.g. HTML error page from a misconfigured proxy)
    if (!res.ok) {
      throw new Error(`Server returned ${res.status} with a non-JSON response.`);
    }
  }

  if (!res.ok) {
    throw new Error(body.error ?? `Unexpected server error (${res.status}). Please try again.`);
  }

  return { ok: true };
}

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await postJson('/api/contact', values);
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center space-y-6 px-6"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-3xl text-foreground">Message Sent</h2>
          <p className="text-muted-foreground">
            Thank you for reaching out. We have received your message and will respond as soon as possible.
          </p>
          <Button onClick={() => window.location.href = '/'} variant="outline" className="mt-8">
            Return to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <SEO
        title="Contact Us | Vaeloryn"
        description="Get in touch with Vaeloryn for general inquiries, media requests, or other matters."
        canonical="https://vaeloryn.com/contact"
      />
      <div className="container px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="space-y-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-light tracking-wider uppercase text-foreground">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              For general inquiries, media requests, or other matters.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10 mt-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="bg-black/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane@example.com" className="bg-black/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Optional" className="bg-black/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help?"
                          className="min-h-[200px] bg-black/20 resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitError && (
                  <p className="text-sm text-red-400/90 border border-red-500/20 bg-red-500/5 rounded-md px-4 py-3 leading-relaxed">
                    {submitError}
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full h-12 px-8 text-base" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
