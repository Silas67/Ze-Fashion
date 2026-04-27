import React from "react";
import { TicketFormType } from "@/app/page";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { HiOutlineArrowLeftEndOnRectangle } from "react-icons/hi2";

const FullTicketStep = ({
  formData,
  updateForm,
  onNext,
  onReturn,
}: {
  formData: TicketFormType;
  updateForm: (data: Partial<TicketFormType>) => void;
  onNext: () => void;
  onReturn: () => void;
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
      },
    );

    tl.fromTo(
      ".formContainer",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "center center",
        duration: 0.5,
        ease: "power4.inOut",
      },
      "",
    );

    tl.fromTo(
      ".formDet",
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" },
      "-=0.5",
    );

    tl.fromTo(
      ".input1",
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        transformOrigin: "left left",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.5",
    );
    tl.fromTo(
      ".input2",
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        transformOrigin: "left left",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.8",
    );
    tl.fromTo(
      ".input3",
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        transformOrigin: "left left",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.8",
    );
    tl.fromTo(
      ".input4",
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        transformOrigin: "left left",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.8",
    );
    tl.fromTo(
      ".input5",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      "-=0.8",
    );
    tl.fromTo(
      ".input6",
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        transformOrigin: "left left",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.8",
    );

    tl.fromTo(
      ".heading",
      { filter: "blur(4px", opacity: 0 },
      {
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      },
    );

    tl.to(
      ".circle",
      { opacity: 1, duration: 1, ease: "power1.inOut" },
      "-=0.5",
    );
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.fullName) {
      alert("Name is required.");
      return;
    }

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        ageRange: formData.ageRange,
        phone: formData.phone,
        creative: formData.isCreative,
        creativeField: formData.creativeField,
      }),
    });

    onNext();
  }
  return (
    <>
      <div className="container w-full flex items-center justify-center relative overflow-hidden h-screen">
        <button
          onClick={onReturn}
          className="w-9 h-9 rounded-md  z-20 absolute flex items-center justify-center top-4 left-4 hover:scale-[0.8] transition hover:bg-secondary cursor-pointer scale-[0.9]"
        >
          <HiOutlineArrowLeftEndOnRectangle className="text-2xl text-neutral-700" />
        </button>
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
            className="space-y-4 formContainer lg:w-xl  shadow shadow-[#c2c1bf] backdrop-blur-xs px-8 py-12 rounded-xl overflow-y-scroll h-[400px]"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium formDet">
                Full Name *
              </label>
              <input
                className="w-full border-b input1 outline-none border-neutral-400 p-2"
                value={formData.fullName}
                onChange={(e) => updateForm({ fullName: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium formDet">
                Email *
              </label>
              <input
                type="email"
                className="w-full border-b input2 outline-none border-neutral-400 p-2"
                value={formData.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium formDet">
                Phone (optional)
              </label>
              <input
                className="w-full border-b input3 outline-none border-neutral-400 p-2"
                value={formData.phone}
                onChange={(e) => updateForm({ phone: e.target.value })}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium formDet">
                Age Range
              </label>
              <select
                className="w-full border-b input4 outline-none border-neutral-400 p-2 "
                value={formData.ageRange}
                onChange={(e) => updateForm({ ageRange: e.target.value })}
              >
                <option value="" className="dark:text-neutral-900">
                  Select
                </option>
                <option value="18-25" className="dark:text-neutral-900">
                  18–25
                </option>
                <option value="26-35" className="dark:text-neutral-900">
                  26–35
                </option>
                <option value="36plus" className="dark:text-neutral-900">
                  36+
                </option>
              </select>
            </div>

            {/* Creative */}
            <fieldset className="input5">
              <legend className="block text-sm font-medium formDet">
                Are you a creative?
              </legend>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="creative_choice"
                    checked={formData.isCreative === true}
                    onChange={() => updateForm({ isCreative: true })}
                  />
                  Yes
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="creative_choice"
                    checked={formData.isCreative === false}
                    onChange={() =>
                      updateForm({ isCreative: false, creativeField: "" })
                    }
                  />
                  No
                </label>
              </div>
            </fieldset>

            {/* Creative Field */}
            {formData.isCreative && (
              <div>
                <label className="block text-sm font-medium formDet">
                  What field of creativity?
                </label>
                <input
                  className="w-full border-b input3 outline-none border-neutral-400 p-2"
                  value={formData.creativeField ?? ""}
                  onChange={(e) =>
                    updateForm({ creativeField: e.target.value })
                  }
                />
              </div>
            )}

            {/* Buttons */}
            <div
              className="flex gap-3 
            mt-4 w-full items-center justify-center"
            >
              <button
                type="submit"
                className=" w-fit bg-secondary 
                shadow p-2 rounded-full text-xs 
                hover:scale-[1.1] transition 
                cursor-pointer text-white
                 hover:bg-primary"
              >
                Get Ticket
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
