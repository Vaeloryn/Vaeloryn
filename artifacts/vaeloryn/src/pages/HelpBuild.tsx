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
import { Checkbox } from '@/components/ui/checkbox';
import { SEO } from '@/components/SEO';

const helpOptions = [
  { id: "advisory",      label: "Advisory" },
  { id: "expertise",     label: "Expertise / Consultation" },
  { id: "introductions", label: "Introductions & Connections" },
  { id: "mentorship",    label: "Mentorship" },
  { id: "governance",    label: "Governance" },
  { id: "other",         label: "Other" },
];

const formSchema = z.object({
  name:      z.string().min(2, "Name is required"),
  email:     z.string().email("Invalid email address"),
  expertise: z.string().min(2, "Area of expertise is required"),
  role:      z.string().optional(),
  profile:   z.string().url("Must be a valid URL").optional().or(z.literal('')),
  helpTypes: z.array(z.string()).refine((v) => v.some(Boolean), {
    message: "Please select at least one option.",
  }),
  message:   z.string().min(10, "Please provide a brief message"),
});

type FormValues = z.infer<typeof formSchema>;

async function postJson(url: string, data: unknown): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  let body: { ok?: boolean; error?: string } = {};
  try {
    body = await res.json();
  } catch {
    if (!res.ok) {
      throw new Error(`Server returned ${res.status} with a non-JSON response.`);
    }
  }

  if (!res.ok) {
    throw new Error(body.error ?? `Unexpected server error (${res.status}). Please try again.`);
  }

  return { ok: true };
}

export function HelpBuild() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", expertise: "", role: "", profile: "", helpTypes: [], message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await postJson('/api/help-build', values);
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
          <h2 className="font-display text-3xl text-foreground">Thank You</h2>
          <p className="text-muted-foreground">
            Your information has been received. We appreciate your willingness to contribute to Vaeloryn's mission. We will be in touch.
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
        title="Help Build Vaeloryn | Connect Ideas and Expertise Together"
        description="Help Vaeloryn connect talent, ideas, expertise, resources and opportunities that can accelerate scientific, medical and technological progress."
        canonical="https://vaeloryn.com/help-build"
        keywords="help build Vaeloryn, scientific progress, technical expertise, innovation community, ecosystem partners"
      />
      <div className="container px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-5xl font-light tracking-wider uppercase text-foreground">
              Help Build Vaeloryn
            </h1>
            <p className="text-lg text-muted-foreground">
              We are seeking people willing to contribute their expertise, perspective, advice or connections as Vaeloryn develops. This is a preliminary intake form.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

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
                  name="expertise"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of Expertise *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Molecular Biology, Venture Capital, Corporate Law" className="bg-black/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Role or Organisation</FormLabel>
                        <FormControl>
                          <Input placeholder="Optional" className="bg-black/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Profile / LinkedIn</FormLabel>
                        <FormControl>
                          <Input placeholder="https://..." className="bg-black/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="helpTypes"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">How would you like to help? *</FormLabel>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {helpOptions.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="helpTypes"
                            render={({ field }) => (
                              <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) =>
                                      checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(field.value?.filter((v) => v !== item.id))
                                    }
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-muted-foreground cursor-pointer">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
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
                          placeholder="Please share a brief note about your background and how you might envision contributing..."
                          className="min-h-[150px] bg-black/20 resize-y"
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

                <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8 text-base" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Submit Information'}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
