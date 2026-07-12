"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Errors = {
  name?: string;
  email?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) {
      next.name = "We'd love to know who we're talking to.";
    }
    if (!email.trim()) {
      next.email = "We need an email so we can get back to you.";
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = "That email looks a little off. Mind double checking it?";
    }
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot: real people never see or fill this field.
    const form = e.currentTarget;
    const honeypot = form.elements.namedItem("company") as HTMLInputElement;
    if (honeypot?.value) return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: wire to form delivery (Web3Forms/Resend), decision deferred.
    // For now we simulate a successful send so the page flow is complete.
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        role="status"
        className="flex flex-col items-center border border-sand bg-linen px-8 py-16 text-center sm:px-14 sm:py-20"
      >
        <Image
          src="/brand/circle-logo.png"
          alt="A List Home Styling seal"
          width={112}
          height={112}
          className="h-24 w-24 sm:h-28 sm:w-28"
        />
        <h2 className="display mt-8 text-4xl text-ink sm:text-5xl">
          Thank you
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
          We got it. We&apos;ll be in touch within one business day to set up
          your consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      {/* Honeypot field: hidden from people, tempting to bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-taupe-dark">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-taupe-dark">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="field-label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="role" className="field-label">
            I am a...
          </label>
          <select id="role" name="role" className="field" defaultValue="Realtor">
            <option value="Realtor">Realtor</option>
            <option value="Homeowner">Homeowner</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className="field-label">
            Property address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="street-address"
            className="field"
            placeholder="Street, city"
          />
        </div>

        <div>
          <label htmlFor="sqft" className="field-label">
            Approximate square footage
          </label>
          <input
            type="text"
            id="sqft"
            name="sqft"
            inputMode="numeric"
            className="field"
            placeholder="e.g. 2,400"
          />
        </div>

        <div>
          <label htmlFor="timeline" className="field-label">
            Ideal timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            className="field"
            defaultValue="ASAP"
          >
            <option value="ASAP">ASAP</option>
            <option value="Within a month">Within a month</option>
            <option value="1 to 3 months">1 to 3 months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Tell us about the space
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="field resize-y"
            placeholder="Vacant or occupied, how many rooms, anything you want us to know"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-consultation mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request My Consultation"}
      </button>

      <p className="mt-4 text-center text-xs text-ink-soft">
        No pressure, no spam. Just a friendly reply about your listing.
      </p>
    </form>
  );
}
