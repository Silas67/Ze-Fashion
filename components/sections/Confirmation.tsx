"use client";
import { motion } from "framer-motion";
import { TicketFormType } from "@/app/page";
import { HiOutlineArrowLeftEndOnRectangle } from "react-icons/hi2";

export default function ConfirmationStep({
  formData,
  onJoinWaitlist,
  onReturn,
}: {
  formData: TicketFormType;
  onJoinWaitlist: () => void;
  onReturn: () => void;
}) {
  return (
    <div className="flex items-center justify-center relative w-full h-full">
      <button
        onClick={onReturn}
        className="w-9 h-9 rounded-md bg-primary z-20 absolute flex items-center justify-center top-4 left-4 hover:scale-[0.8] transition hover:bg-secondary cursor-pointer scale-[0.9]"
      >
        <HiOutlineArrowLeftEndOnRectangle className="text-2xl text-neutral-700" />
      </button>
      <div className="space-y-4 text-center  p-8 rounded-3xl backdrop-blur-xs shadow z-30">
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
    </div>
  );
}
