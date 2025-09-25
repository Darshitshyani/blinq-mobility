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
  Twitter,
  Instagram,
  Send
} from "lucide-react";

// ------------------- Validation Schema -------------------
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

// ------------------- Component -------------------
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      message: ""
    }
  });

  // ------------------- Submit Handler -------------------
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

  // ------------------- CTA & Info -------------------
  const ctaCards = [
    {
      icon: Users,
      title: "Join the Fleet",
      description: "Partner with Blinq for pilot programs and fleet deployment. Transform your taxi operations with sustainable mobility solutions.",
      buttonText: "Partner With Us",
    },
    {
      icon: TrendingUp,
      title: "Invest in the Future",
      description: "Explore partnership opportunities in the next generation of urban mobility. Be part of the electric revolution.",
      buttonText: "Investment Opportunities",
    },
    {
      icon: Briefcase,
      title: "Careers",
      description: "Join our mission to revolutionize urban mobility. We're looking for engineers, designers, and business professionals.",
      buttonText: "View Openings",
    }
  ];

  const contactInfo = [
    { icon: MapPin, label: "Headquarters", value: "Gurugram, Haryana, India" },
    { icon: Mail, label: "Email", value: "info@blinqmobility.com" },
    { icon: Phone, label: "Phone", value: "+91-9555869337" }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" }
  ];

  // ------------------- JSX -------------------
  return (
    <div className="min-h-screen bg-gradient-hero ">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-[120px]">
              Contact – <span className="text-gradient">Let's Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to revolutionize urban mobility? Get in touch with us to explore partnerships, 
              investments, or career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ctaCards.map((card, index) => (
              <Card key={index} className="bg-card/10 backdrop-blur-md border border-primary/20 shadow-xl transition-all duration-500 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-lg">
                    <card.icon className="w-full h-full text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-gradient">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{card.description}</p>
                  <Button variant="outline">{card.buttonText}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="bg-card/10 backdrop-blur-md border border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Get In Touch</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                            <Input {...field} type="email" placeholder="your.email@example.com" />
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
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="company">Company / Fleet Operator</SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                              <SelectItem value="job-applicant">Job Applicant</SelectItem>
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
                            <Textarea {...field} placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
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
                      {loading ? "Sending..." : (<><Send className="w-4 h-4 mr-2" /> Send Message</>)}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info & Socials */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card className="bg-card/10 backdrop-blur-md border border-primary/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">Office & Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/10 backdrop-blur-md border border-primary/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
