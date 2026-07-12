"use client";

import { useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "b2de54d3-e1c9-452b-a488-80d7385e8f98";

export default function ComingSoonForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New inquiry from alisthomestyling.com");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="mt-8 text-ink">
        Thanks — we got your message and will be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full max-w-md text-left">
      {/* Honeypot: real people never see or fill this field. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="field"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="field"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <textarea id="message" name="message" rows={4} className="field resize-y" required />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-taupe-dark">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
