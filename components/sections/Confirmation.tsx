"use client";

import { TicketFormType } from "@/app/page";

export default function ConfirmationStep({
  formData,
  onJoinWaitlist,
}: {
  formData: TicketFormType;
  onJoinWaitlist: () => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Your ZË Ticket Has Been Confirmed 🎟️
      </h2>

      <p className="text-gray-600">
        A confirmation email has been sent to:
        <strong> {formData.email}</strong>
      </p>

      <button
        onClick={onJoinWaitlist}
        className="bg-sky-600 text-white px-4 py-2 rounded-md"
      >
        Join Waitlist
      </button>
    </div>
  );
}
