import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

import { Button } from "@/components/shared/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/Card";
import { Input } from "@/components/shared/input";
import { Textarea } from "@/components/shared/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shared/form";

import {
  Mail,
  Phone,
  MapPin,
  Users,
  TrendingUp,
  Briefcase,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

// ✅ Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ✅ Component
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      message: "",
    },
  });

  // ✅ Submit Handler
  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_dbhpl3o",
        "template_pvo9ze8",
        {
          from_name: data.name,
          from_email: data.email,
          category: data.category,
          message: data.message,
        },
        "aybBR4G3naa4mqXJi"
      );

      toast.success("Message sent successfully 🚀");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Social Links
  const socialLinks = [
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
    {
      // Inline custom SVG wrapped as a React component
      Icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="20"
          height="20"
          viewBox="0 0 1226.37 1226.37"
          fill="currentColor"
        >
          <path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" />
        </svg>
      ),
      label: "Twitter",
      href: "#",
    },
    { Icon: Instagram, label: "Instagram", href: "#" },
  ];

  // ✅ Render
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-[120px]">
              Contact – <span className="text-gradient">Let's Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to revolutionize urban mobility? Get in touch with us to
              explore partnerships, investments, or career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="w-full lg:w-[50%] mx-auto">
            {/* Contact Form */}
            <Card className="bg-card/10 backdrop-blur-md border border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">
                  Get In Touch
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you soon.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Your full name" />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your.email@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="company">
                                Company / Fleet Operator
                              </SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                              <SelectItem value="job-applicant">
                                Job Applicant
                              </SelectItem>
                              <SelectItem value="general">
                                General Inquiry
                              </SelectItem>
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
                              {...field}
                              placeholder="Tell us more about your inquiry..."
                              className="min-h-[120px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-electric text-primary-foreground"
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Social Links */}
            {/* <Card className="bg-card/10 backdrop-blur-md border border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map(({ Icon, label, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
