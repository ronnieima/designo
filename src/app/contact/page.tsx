"use client";

import React from "react";
import LocationsSection from "../about/components/LocationsSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  message: z.string().min(1, "Required"),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="flex flex-col items-center ">
      <section className="space-y-12 bg-peach px-6 py-20 text-white">
        <header className="flex flex-col items-center gap-6 text-center ">
          <h2>Contact Us</h2>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </header>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Name" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="tel" placeholder="Phone" />
            <Input
              type="text"
              placeholder="Your Message"
              className="pb-32 pt-4"
            />
            <Button type="submit" className="self-center px-8 py-4">
              SUBMIT
            </Button>
          </form>
        </Form>
      </section>
      <LocationsSection />
    </main>
  );
}
