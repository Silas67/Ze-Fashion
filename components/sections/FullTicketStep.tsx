import React from "react";
import { TicketFormType } from "@/app/page";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const FullTicketStep = ({
  formData,
  updateForm,
  onNext,
  onBack,
}: {
  formData: TicketFormType;
  updateForm: (data: Partial<TicketFormType>) => void;
  onNext: () => void;
  onBack: () => void;
}) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set([".logo", ".heading", ".circle"], {
      opacity: 0,
    });

    tl.fromTo(
      ".logo",
      { filter: "blur(4px", opacity: 0, scale: 0.95 },
      {
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    tl.fromTo(
      ".formContainer",
      { scaleY: 0, opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        transformOrigin: "center center",
        duration: 1,
        ease: "power1.inOut",
      },
      ""
    );

    tl.fromTo(
      ".heading",
      { filter: "blur(4px", opacity: 0 },
      {
        filter: "blur(0px)",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    tl.to(
      ".circle",
      { opacity: 1, duration: 1, ease: "power1.inOut" },
      "-=0.5"
    );
  }, []);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.fullName) {
      alert("Name is required.");
      return;
    }

    await fetch("/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    onNext();
  }
  return (
    <>
      <div className="container w-full flex items-center justify-center relative overflow-hidden">
        {/* Form */}
        <div className="lg:flex items-center flex-col scale-[0.95] z-20 max-sm:w-full ">
          <div className="w-full flex items-center justify-center">
            <div className="w-9 h-9 rounded-md bg-primary z-20 relative logo mb-4">
              <Image
                src={"/Logo.png"}
                alt="Model Image"
                fill
                className="object-cover w-full h-full scale-[1.5]"
              />
            </div>
          </div>

          <h1 className="text-3xl fontBoska mb-8 max-sm:text-center heading">
            Ticket Registration
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 formContainer lg:w-xl  shadow shadow-[#c2c1bf] backdrop-blur-xs px-8 py-12 rounded-xl overflow-hidden "
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium">Full Name *</label>
              <input
                className="w-full border-b outline-none border-neutral-400 p-2"
                value={formData.fullName}
                onChange={(e) => updateForm({ fullName: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                className="w-full border-b outline-none border-neutral-400 p-2"
                value={formData.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium">
                Phone (optional)
              </label>
              <input
                className="w-full border-b outline-none border-neutral-400 p-2"
                value={formData.phone}
                onChange={(e) => updateForm({ phone: e.target.value })}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium">Age Range</label>
              <select
                className="w-full border-b outline-none border-neutral-400 p-2"
                value={formData.ageRange}
                onChange={(e) => updateForm({ ageRange: e.target.value })}
              >
                <option value="">Select</option>
                <option value="18-25">18–25</option>
                <option value="26-35">26–35</option>
                <option value="36plus">36+</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4 w-full items-center justify-center">
              <button
                type="submit"
                className=" w-fit bg-primary shadow p-2 rounded-full text-xs hover:scale-[1.1] transition cursor-pointer"
              >
                Submit Ticket
              </button>

              <button
                type="button"
                onClick={onBack}
                className="w-fit px-4 py-2 fontBoska text-sm transition rounded-full border border-transparent hover:border-primary hover:scale-[0.9] font-bold"
              >
                Back
              </button>
            </div>
          </form>
        </div>

        {/* Circle */}
        <div className="absolute w-[300px] h-[300px] border-2 border-primary -top-16 right-[200px] rounded-full circle">
          <div className=" w-[200px] h-[200px] border-2 border-primary rounded-full relative top-32"></div>
        </div>

        <div className="absolute w-[300px] h-[300px] border-2 border-primary -bottom-32 left-[200px] rounded-full circle">
          {/* <div className=" w-[200px] h-[200px] border-2 border-primary rounded-full relative bottom-32"></div> */}
        </div>
      </div>
    </>
  );
};

export default FullTicketStep;
