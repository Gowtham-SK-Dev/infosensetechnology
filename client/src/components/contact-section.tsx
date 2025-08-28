import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Linkedin, MessageCircle, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 2-4 hours during business days.",
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 97873 04714",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      value: "gowtham3cse@gmail.com",
      color: "bg-success/10 text-success"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with us professionally",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick chat and support",
      color: "bg-green-100 text-green-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
            Let's Build Something <span className="gradient-text">Great</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with us today and let's discuss your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="modern-card p-8" data-testid="contact-form-container">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          {...field}
                          data-testid="input-name"
                        />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="custom-development">Custom Software Development</SelectItem>
                          <SelectItem value="web-mobile">Web & Mobile Development</SelectItem>
                          <SelectItem value="saas-solutions">SaaS Solutions</SelectItem>
                          <SelectItem value="api-development">API Development</SelectItem>
                          <SelectItem value="erp-integration">ERP Integration</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          rows={5}
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6" data-testid="contact-info-title">
                Get in Touch
              </h3>
              <div className="space-y-6" data-testid="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center" data-testid={`contact-info-${index}`}>
                    <div className={`p-3 rounded-lg mr-4 ${info.color}`}>
                      <info.icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="modern-card p-6" data-testid="business-hours">
              <h4 className="text-xl font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-muted-foreground">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Response Time */}
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20" data-testid="response-time">
              <div className="flex items-center mb-3">
                <Clock className="text-primary mr-3" />
                <h4 className="text-xl font-bold">Quick Response</h4>
              </div>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 2-4 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
