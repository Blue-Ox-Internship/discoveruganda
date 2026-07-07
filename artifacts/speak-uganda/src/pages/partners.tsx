import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Hotel, Map, Utensils, Building, BadgeCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  businessType: z.string().min(1, "Please select a business type"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Please tell us a bit about your business"),
});

const partnerTypes = [
  { icon: Hotel, title: "Hotels & Lodges", desc: "Feature your property on cards. Offer QR codes for direct booking discounts." },
  { icon: Map, title: "Tour Operators", desc: "Sponsor destination cards. Let players book safaris directly through the game." },
  { icon: Utensils, title: "Restaurants", desc: "Feature in the Food & Culture expansion. Drive foot traffic with special coupons." },
  { icon: Building, title: "Attractions", desc: "Museums, cultural centers, and adventure parks can showcase their experiences." }
];

const tiers = [
  {
    name: "Bronze Partner",
    price: "$500 / year",
    features: ["Listed in the companion app", "1 standard sponsor card in base deck", "Basic QR code linkage"],
  },
  {
    name: "Silver Partner",
    price: "$1,200 / year",
    popular: true,
    features: ["3 featured cards in deck", "Custom QR landing page", "Social media promotion", "Listed as official distribution point"],
  },
  {
    name: "Gold Partner",
    price: "Custom Pricing",
    features: ["Your own branded mini-expansion (20 cards)", "Premium placement on box", "Full API integration for bookings", "Game night host certification"],
  }
];

export default function Partners() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      businessType: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Application Received!",
      description: "We'll be in touch with you shortly to discuss partnership opportunities.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-24 px-4 md:px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Partner with Speak Uganda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary-foreground/80 mb-8"
          >
            Turn gameplay into foot traffic. Put your tourism business directly into the hands of thousands of enthusiastic travelers.
          </motion.p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-background px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Who Can Join?</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Partnership Opportunities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                  <type.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-3">{type.title}</h4>
                <p className="text-muted-foreground text-sm">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-muted px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Sponsorship</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Partnership Tiers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative bg-card rounded-2xl border ${tier.popular ? 'border-primary shadow-lg scale-105 z-10' : 'border-border shadow-sm'} p-8 flex flex-col`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h4 className="text-2xl font-serif font-bold mb-2">{tier.name}</h4>
                <div className="text-3xl font-bold text-primary mb-6">{tier.price}</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <BadgeCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-24 bg-background px-4 md:px-6" id="apply">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Apply to Partner</h2>
            <p className="text-muted-foreground">Fill out the form below and our partnerships team will reach out within 24 hours.</p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Tours Ltd" {...field} data-testid="input-business-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-business-type">
                              <SelectValue placeholder="Select type..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hotel">Hotel / Lodge</SelectItem>
                            <SelectItem value="tour_operator">Tour Operator</SelectItem>
                            <SelectItem value="restaurant">Restaurant</SelectItem>
                            <SelectItem value="attraction">Attraction / Activity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="hello@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+256 700 000 000" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us about your business</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What kind of partnership are you interested in?" 
                          className="min-h-[120px]" 
                          {...field} 
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full text-lg h-14 bg-primary text-primary-foreground hover:bg-primary/90" data-testid="btn-submit-partner">
                  Submit Application
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

    </div>
  );
}
