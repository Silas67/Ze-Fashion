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
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-semibold fontBoska">
        Your ZË Ticket Has Been Confirmed 🎟️
      </h2>

      <p className="text-gray-600">
        A confirmation email has been sent to:
        <strong> {formData.email}</strong>
      </p>

      <button
        onClick={onJoinWaitlist}
        className=" w-fit bg-primary shadow p-2 rounded-full text-xs hover:scale-[0.9] transition cursor-pointer"
      >
        Join Waitlist
      </button>
    </div>
  );
}
