import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
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

const interestOptions = [
  { value: 'initial-private-allocation', label: 'Explore an initial private allocation' },
  { value: 'institutional-participation', label: 'Represent a fund, treasury, or institution' },
  { value: 'strategic-partnership', label: 'Discuss a strategic partnership' },
  { value: 'other', label: 'Something else' },
];

const privateSalesStages = [
  {
    stage: '01',
    label: 'Expression of interest',
    description: 'Open now — share your details and the conversation you want to have.',
    active: true,
  },
  {
    stage: '02',
    label: 'Initial review',
    description: 'We review the context, jurisdiction and fit for a private conversation.',
    active: false,
  },
  {
    stage: '03',
    label: 'Private discussion',
    description: 'Selected contacts move into a direct conversation with the Vaeloryn team.',
    active: false,
  },
  {
    stage: '04',
    label: 'Documentation',
    description: 'Any next step requires separate documentation, review and final terms.',
    active: false,
  },
];

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  organization: z.string().optional(),
  jurisdiction: z.string().optional(),
  interest: z.string().min(1, 'Please select an option'),
  message: z.string().min(10, 'Please provide a little more context'),
});

type FormValues = z.infer<typeof formSchema>;

async function postJson(url: string, data: unknown): Promise<void> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  let body: { error?: string } = {};
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
}

const inputClassName = 'bg-black/20';

export function PrivateSales() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      jurisdiction: '',
      interest: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await postJson('/api/private-sales', values);
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
        <SEO
          title="Private Sales Inquiry Received | Vaeloryn"
          description="Your Vaeloryn private-sales inquiry has been received."
          canonical="https://vaeloryn.com/private-sales"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center space-y-6 px-6"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80">Inquiry received</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground">We’ll be in touch.</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you for your interest in an initial private-sales conversation. We’ll review your note and respond directly.
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
        title="VAELO Private Sales | Vaeloryn"
        description="Contact Vaeloryn to discuss an initial private-sales conversation for VAELO. No public sale is active."
        canonical="https://vaeloryn.com/private-sales"
        keywords="VAELO private sales, Vaeloryn private allocation, initial VAELO inquiry"
      />

      <div className="container px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start"
        >
          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Private Sales</p>
              <h1 className="font-display text-4xl md:text-6xl font-light tracking-wider uppercase text-foreground leading-[1.05]">
                Early access, handled directly.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We are speaking with a limited number of prospective participants about initial private-sales conversations. Share your details and we’ll follow up directly.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: LockKeyhole,
                  title: 'Direct conversation',
                  copy: 'Private-sales inquiries are reviewed individually, with no public checkout or automated allocation flow.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Clear boundaries',
                  copy: 'Any next step depends on separate review, documentation, jurisdiction and final terms.',
                },
                {
                  icon: Mail,
                  title: 'A human follow-up',
                  copy: 'Your note goes to the Vaeloryn team so the right conversation can start without unnecessary noise.',
                },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-sm font-medium text-foreground">{title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground/60">Private-sales tracker</p>
                  <p className="text-sm text-foreground/80 mt-2">Current stage: Expression of interest</p>
                </div>
                <span className="text-xs font-mono text-primary/80">01 / 04</span>
              </div>

              <div className="flex gap-1" aria-label="Private-sales process progress">
                {privateSalesStages.map((item) => (
                  <span
                    key={item.stage}
                    className={`h-1.5 flex-1 rounded-full ${item.active ? 'bg-primary' : 'bg-white/10'}`}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {privateSalesStages.map(({ stage, label, description, active }) => (
                  <div
                    key={stage}
                    className={`flex gap-4 p-3 rounded-md border ${
                      active ? 'border-primary/25 bg-primary/5' : 'border-white/8 bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 min-w-[42px]">
                      <span className={`text-xs font-medium tracking-widest uppercase ${active ? 'text-primary/80' : 'text-muted-foreground/40'}`}>
                        {stage}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <p className={`text-sm font-light ${active ? 'text-foreground/90' : 'text-muted-foreground/50'}`}>
                        {label}
                      </p>
                      <p className={`text-xs leading-relaxed ${active ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-2 border-primary/40 pl-5 text-sm text-muted-foreground leading-relaxed">
              This is an expression of interest only. It is not an offer, solicitation, price quote, allocation guarantee or public token sale. No public sale is currently active.
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10">
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground/60 mb-3">Start the conversation</p>
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Private-sales inquiry</h2>
              </div>
              <ArrowRight className="w-5 h-5 text-primary/70 mt-1 shrink-0" />
            </div>

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
                          <Input placeholder="Jane Doe" className={inputClassName} {...field} />
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
                          <Input type="email" placeholder="jane@example.com" className={inputClassName} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organisation or fund</FormLabel>
                        <FormControl>
                          <Input placeholder="Optional" className={inputClassName} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jurisdiction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jurisdiction</FormLabel>
                        <FormControl>
                          <Input placeholder="Country or region" className={inputClassName} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How would you like to engage? *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-black/20 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="" disabled>Select an option</option>
                          {interestOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-background">
                              {option.label}
                            </option>
                          ))}
                        </select>
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
                          placeholder="Tell us a little about your interest and the conversation you would like to have."
                          className="min-h-[170px] bg-black/20 resize-y"
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
                  {isSubmitting ? 'Sending…' : 'Send private-sales inquiry'}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}