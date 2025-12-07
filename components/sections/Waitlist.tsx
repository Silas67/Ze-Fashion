"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { HiOutlineArrowLeftEndOnRectangle } from "react-icons/hi2";

const WaitList = ({
  onNext,
  onReturn,
  updateForm,
  initialEmail,
}: {
  onNext: () => void;
  onReturn: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateForm: (data: any) => void;
  initialEmail: string;
}) => {
  const [email, setEmail] = useState(initialEmail);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Enter a valid email.");
      return;
    }

    updateForm({ email });
    onNext();
  }

  // Animations
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(
      [".text1", ".text2", ".text2", ".text3", ".subtext", ".input", ".text4"],
      {
        opacity: 0,
      }
    );

    tl.set(".logo", {
      y: 160,
      opacity: 0,
      scale: 0.5,
      filter: "blur(4px)",
    });

    // Logo Animation
    tl.fromTo(
      ".logo",
      { opacity: 0, scale: 0.5, filter: "blur(4px)" },
      {
        opacity: 100,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
    tl.fromTo(
      ".logo",
      { y: 160 },
      {
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "+=0.5"
    );

    // Text Animation
    tl.fromTo(
      ".text1",
      { opacity: 0, filter: "blur(4px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1.inOut",
      },
      "-=0.5"
    );

    tl.fromTo(
      ".subtext",
      { opacity: 0, scale: 1.5, filter: "blur(4px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1.inOut",
      }
    );

    // Input Animaition
    tl.fromTo(
      ".input",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power1.inOut" },
      "-=0.8"
    );
  }, []);

  return (
    <section className="w-full h-full flex flex-col items-center justify-center relative">
      {/* Arrow */}
      <button
        onClick={onReturn}
        className="w-9 h-9 rounded-md  z-20 absolute flex items-center justify-center top-4 left-4 hover:scale-[0.8] transition hover:bg-secondary cursor-pointer scale-[0.9]"
      >
        <HiOutlineArrowLeftEndOnRectangle className="text-2xl text-neutral-700" />
      </button>

      {/* Logo */}
      <div className="w-9 h-9 rounded-md bg-primary z-20 relative logo">
        <Image
          src={"/Logo.png"}
          alt="Model Image"
          fill
          className="object-cover w-full h-full scale-[1.5]"
        />
      </div>

      {/* Texts */}
      <div className="text-7xl font-bold text-secondary my-6 fontBoska leading-24 text-center z-20 ">
        <h1 className="fontBoskaitalic text1">
          Join the <span className="fontBoskaBlack">ZË</span> Waitlist
        </h1>
      </div>

      {/* Subtext */}
      <p className="text-neutral-900 text-center text-sm mb-8 z-20 subtext dark:text-neutral-300">
        Be among the first to experience the launch of our exclusive fashion
        brand.
      </p>

      {/* Input */}
      <div className="flex flex-col gap-4 w-full max-w-sm items-center z-20 input">
        <form
          onSubmit={handleSubmit}
          className="w-full px-4 py-2 rounded-full relative bg-[#f3f3f3] shadow"
        >
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="outline-none text-black"
          />

          <button
            type="submit"
            className="absolute top-1 right-1 w-fit bg-secondary shadow p-2 rounded-full text-xs hover:scale-[0.9] transition cursor-pointer text-white hover:bg-primary focus:shadow-2xl shadow-primary "
          >
            Join Now
          </button>
        </form>
        <button className="fontBoska text-secondary text-xs hover:scale-105 transition-all duration-300 hover:font-bold text4 cursor-pointer italic">
          Have Time For A Quick Survey?
        </button>
      </div>
      <div className="">
        <div className="absolute w-[300px] h-[300px] border-2 border-primary -top-16 right-[200px] rounded-full circle blur-[3px]">
          <div className=" w-[200px] h-[200px] border-2 border-primary rounded-full relative top-32 rotateobj ">
            <div className="w-9 h-9 rounded-full bg-primary absolute top-0 left-6"></div>
          </div>
        </div>
      </div>

      <div className="absolute w-[300px] h-[300px] border-2 border-primary -bottom-32 left-[200px] rounded-full circle blur-[3px] rotateobj">
        <div className="w-9 h-9 rounded-full bg-primary absolute top-0 left-16"></div>
      </div>
    </section>
  );
};

export default WaitList;
