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
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";

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
    toast("*DEMO* Successfully submitted!", { type: "success" });
  }

  return (
    <main className="flex flex-col items-center gap-32 pb-32">
      <section
        className={cn(
          "flex max-w-[698px] flex-col gap-12 bg-peach px-6 py-20 text-white md:rounded-radius",
          "md:px-[58px] md:py-[71px] md:shadow-2xl",
          "lg:max-h-[480px] lg:max-w-[1111px] lg:flex-row lg:py-[51px]",
        )}
      >
        <header className="flex flex-col items-center gap-6 text-center md:items-start md:text-left lg:max-w-[50%] lg:self-center">
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
            className="flex w-full flex-col gap-4 lg:max-w-[50%]"
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

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="email" placeholder="Email" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="tel" placeholder="Phone" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Your Message"
                      className="pb-32 pt-4"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="self-center px-8 py-4 md:self-end">
              SUBMIT
            </Button>
          </form>
        </Form>
      </section>
      <LocationsSection />
    </main>
  );
}
