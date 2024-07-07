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
  name: z.string({ required_error: "Can't be empty" }).min(1, "Can't be empty"),
  email: z
    .string({ required_error: "Can't be empty" })
    .email()
    .min(1, "Can't be empty"),
  phone: z
    .string({ required_error: "Can't be empty" })
    .min(1, "Can't be empty"),
  message: z
    .string({ required_error: "Can't be empty" })
    .min(1, "Can't be empty"),
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
          "relative z-20  h-full max-w-[698px] gap-12 overflow-clip bg-peach px-6 py-20 text-white md:rounded-radius",
          "md:px-[58px] md:py-[71px] md:shadow-2xl",
          "lg:h-[480px] lg:max-w-[1111px]  lg:px-[96px] lg:py-[51px]",
        )}
      >
        <div className={cn("flex flex-col", "lg:flex-row lg:gap-16")}>
          <header className="flex flex-col items-center gap-6 text-center md:items-start md:text-left lg:max-w-[60%] lg:self-center lg:pr-16">
            <h2>Contact Us</h2>
            <p className="text-lightGray">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </header>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex w-full flex-col gap-4 lg:max-w-[40%]"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input {...field} type="text" placeholder="Name" />
                    </FormControl>
                    <FormMessage className="absolute right-8 top-0" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input {...field} type="email" placeholder="Email" />
                    </FormControl>
                    <FormMessage className="absolute right-8 top-0" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input {...field} type="tel" placeholder="Phone" />
                    </FormControl>
                    <FormMessage className="absolute right-8 top-0" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Your Message"
                        className="pb-32 pt-4"
                      />
                    </FormControl>
                    <FormMessage className="absolute right-8 top-0" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="self-center px-8 py-4 md:self-end"
              >
                SUBMIT
              </Button>
            </form>
          </Form>
        </div>
        <img
          className={cn(
            "absolute -z-20 hidden size-[640px] md:-left-24 md:-top-24 md:block",
            "lg:bottom-0 lg:left-0 ",
          )}
          src="/assets/contact/desktop/bg-pattern-hero-desktop.svg"
        />
        <img
          className={cn("absolute top-0 flex min-w-[1000px] md:hidden")}
          src="/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
        />
      </section>
      <LocationsSection />
    </main>
  );
}
