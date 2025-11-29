"use client";
import { motion } from "framer-motion";
import { TicketFormType } from "@/app/page";

export default function ConfirmationStep({
  formData,
  onJoinWaitlist,
}: {
  formData: TicketFormType;
  onJoinWaitlist: () => void;
}) {
  return (
    <div className="space-y-4 text-center  p-8 rounded-3xl backdrop-blur-xs shadow  z-30">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-xl font-semibold fontBoska"
      >
        Your ZË Ticket Has Been Confirmed 🎟️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        className="text-gray-600"
      >
        A confirmation email has been sent to:
        <strong> {formData.email}</strong>
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        onClick={onJoinWaitlist}
        className=" w-fit bg-primary shadow p-2 rounded-full text-xs hover:scale-[0.9] transition cursor-pointer dark:text-black hover:bg-secondary"
      >
        Join Waitlist
      </motion.button>
    </div>
  );
}
