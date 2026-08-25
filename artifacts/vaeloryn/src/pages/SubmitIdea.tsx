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
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle } from 'lucide-react';
import { SEO } from '@/components/SEO';

const supportOptions = [
  { id: "expertise", label: "Expertise & Advice" },
  { id: "funding", label: "Funding & Capital" },
  { id: "research", label: "Research Collaboration" },
  { id: "connections", label: "Connections & Introductions" },
  { id: "other", label: "Other" },
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  projectName: z.string().optional(),
  sector: z.string().min(2, "Field or sector is required"),
  stage: z.string().min(1, "Please select a stage"),
  description: z.string().min(20, "Please provide a description").max(1000, "Maximum 1000 characters"),
  blockers: z.string().min(10, "Please describe what is preventing progress"),
  supportTypes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function SubmitIdea() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectName: "",
      sector: "",
      stage: "",
      description: "",
      blockers: "",
      supportTypes: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
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
          <h2 className="font-display text-3xl text-foreground">Submission Received</h2>
          <p className="text-muted-foreground">
            Thank you for sharing your idea. A member of our team will review the high-level details and reach out if there is potential alignment.
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
        title="Submit an Idea to Vaeloryn | Scientific Innovation"
        description="Submit a high-level scientific, medical or technological idea for consideration within Vaeloryn’s transparent ecosystem for innovation and progress."
        canonical="https://vaeloryn.com/submit-idea"
        keywords="submit scientific idea, Vaeloryn innovation, medical technology, technological progress"
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
              Submit an Idea or Project
            </h1>
            <p className="text-lg text-muted-foreground">
              We are looking for exceptional ideas that have the potential to advance scientific, medical or technological progress.
            </p>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 flex gap-4 text-destructive-foreground items-start">
            <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="font-medium text-destructive">Important Notice</h4>
              <p className="text-sm opacity-90 leading-relaxed">
                Please do not submit confidential information, unpublished scientific details, trade secrets or sensitive intellectual property through this form. At this stage, describe your idea or project only at a high level.
              </p>
            </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="projectName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project or Idea Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Optional" className="bg-black/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Field or Sector *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Biotechnology, Energy" className="bg-black/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="stage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Stage *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/20">
                            <SelectValue placeholder="Select a stage" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="concept">Concept</SelectItem>
                          <SelectItem value="early_research">Early Research</SelectItem>
                          <SelectItem value="prototype">Prototype</SelectItem>
                          <SelectItem value="validation">Seeking Validation</SelectItem>
                          <SelectItem value="partners">Looking for Partners</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>High-level Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the problem you are solving and your proposed solution..."
                          className="min-h-[150px] bg-black/20 resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <div className="flex justify-between items-center mt-2">
                        <FormDescription>
                          Remember: Keep it high-level. Do not include trade secrets.
                        </FormDescription>
                        <span className="text-xs text-muted-foreground">{field.value.length}/1000</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="blockers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What is currently preventing progress? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g. Lack of lab access, need for specific engineering expertise, funding for a prototype..."
                          className="min-h-[100px] bg-black/20 resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="supportTypes"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">What type of support may be helpful? *</FormLabel>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {supportOptions.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="supportTypes"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, item.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-muted-foreground cursor-pointer">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
                  Submit Project
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
