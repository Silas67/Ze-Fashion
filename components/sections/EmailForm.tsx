"use client";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const EmailForm = ({
  onNext,
  updateForm,
  initialEmail,
}: {
  onNext: () => void;
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
        duration: 1,
        ease: "power1.inOut",
      },
      "-=0.5"
    );

    tl.fromTo(
      ".text2",
      { opacity: 0, filter: "blur(4px)" },
      {
        opacity: 1,

        filter: "blur(0px)",
        duration: 1,
        ease: "power3.inOut",
      }
    );

    tl.fromTo(
      ".text3",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
      "-=0.5"
    );

    tl.fromTo(
      ".subtext",
      { opacity: 0, scale: 1.5, filter: "blur(4px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power1.inOut",
      },
      "+=0.5"
    );

    // Input Animaition
    tl.fromTo(
      ".input",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
      "-=0.8"
    );
    tl.fromTo(
      ".text4",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
      "-=1"
    );

    // Textsub Animation
    tl.fromTo(
      ".text2sub",
      { backgroundColor: "transparent" },
      { backgroundColor: "#ab7d7d", duration: 1, ease: "power2.inOut" },
      "+=0.8"
    );
  }, []);

  return (
    <section className="w-full h-full flex flex-col items-center justify-center relative">
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
      <div className="text-7xl font-bold text-secondary my-6 fontBoska leading-24 text-center z-20">
        <span className="block text-xl fontBoskaitalic text-secondary text1">
          A New
        </span>
        <h1 className="block text2">
          Era of{" "}
          <span className="text-primary text2sub px-2 rounded-2xl">Style</span>
        </h1>
        <span className="block text-2xl fontBoskaitalic text3">
          Begins Soon..
        </span>
      </div>

      {/* Subtext */}
      <p className="text-neutral-900 text-center text-sm mb-8 z-20 subtext">
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
            className="absolute top-1 right-1 w-fit bg-primary shadow p-2 rounded-full text-xs hover:scale-[0.9] transition cursor-pointer"
          >
            Get your Free Ticket
          </button>
        </form>

        <Link
          href={"/"}
          className="fontBoska text-secondary text-md hover:scale-105 transition-all duration-300 hover:font-bold text4"
        >
          Join the WaitList
        </Link>
      </div>
    </section>
  );
};

export default EmailForm;
