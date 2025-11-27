"use client";
import ConfirmationStep from "@/components/sections/Confirmation";
import EmailForm from "@/components/sections/EmailForm";
import FullTicketStep from "@/components/sections/FullTicketStep";
import WaitList from "@/components/sections/Waitlist";
import { useState } from "react";
import { motion } from "framer-motion";

export type TicketFormType = {
  fullName: string;
  email: string;
  phone?: string;
  ageRange?: string;
  heardFrom?: string;
  isCreative?: string;
  creativeField?: string;
  confirmAttendance?: boolean;
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TicketFormType>({
    fullName: "",
    email: "",
    phone: "",
    ageRange: "",
    heardFrom: "",
    isCreative: "",
    creativeField: "",
    confirmAttendance: false,
  });
  function updateForm(data: Partial<TicketFormType>) {
    setFormData((prev) => ({ ...prev, ...data }));
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background relative px-6 w-screen overflow-hidden">
      {step === 1 && (
        <EmailForm
          onNext={() => setStep(2)}
          Waitlist={() => setStep(4)}
          updateForm={updateForm}
          initialEmail={formData.email}
        />
      )}

      {step === 2 && (
        <FullTicketStep
          formData={formData}
          updateForm={updateForm}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <ConfirmationStep
          formData={formData}
          onJoinWaitlist={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <WaitList
          onNext={() => setStep(5)}
          updateForm={updateForm}
          initialEmail={formData.email}
        />
      )}

      {step === 5 && (
        <div className="w-full h-full flex items-center justify-center flex-col gap-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-md fontBoska font-semibold text-md text-center"
          >
            Congratulations, You have been Added to the{" "}
            <span className="block text-4xl">ZË Waitlist</span>
          </motion.div>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            onClick={() => setStep(1)}
            className=" w-fit bg-primary shadow p-2 rounded-full text-xs hover:scale-[0.9] transition cursor-pointer dark:text-black hover:bg-secondary"
          >
            Go Back
          </motion.button>
        </div>
      )}
    </div>
  );
}
