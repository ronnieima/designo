import React from "react";
import LocationsSection from "../about/components/LocationsSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
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
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="tel" placeholder="Phone" />
          <Input
            type="text"
            placeholder="Your Message"
            className="pb-32 pt-4"
          />
          <Button className="self-center px-8 py-4">SUBMIT</Button>
        </form>
      </section>
      <LocationsSection />
    </main>
  );
}
