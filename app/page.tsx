import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black relative px-6 w-screen overflow-hidden">
      <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center fontBoskaBlack text-[#121212] z-20">
        Ze
      </div>
      <div className="text-7xl font-bold text-secondary my-6 fontBoska leading-20 text-center z-20">
        <span className="block text-xl fontBoskaitalic">A New</span>
        <h1 className="block ">
          Era of <span className="text-primary">Style</span>
        </h1>
        <span className="block text-2xl fontBoskaitalic">Begins Soon.</span>
      </div>
      <p className="text-neutral-300 text-center text-sm mb-8 z-20">
        Be among the first to experience the launch of our exclusive fashion
        brand.
      </p>
      <div className="flex flex-col gap-4 w-full max-w-sm items-center z-20">
        <div className="w-full border px-4 py-2 rounded-full relative bg-[#f3f3f3]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="outline-none text-black"
          />
          <div className="absolute top-1 right-1 w-fit bg-primary shadow p-2 rounded-full text-xs ">
            Get your Free Ticket
          </div>
        </div>
        <Link
          href={"/"}
          className="fontBoskaitalic text-primary text-sm hover:scale-105 transition-all duration-300 hover:underline"
        >
          -Join the WaitList-
        </Link>
      </div>
      <div className="absolute w-[300px] h-[600px] -left-[134px] -bottom-[350px] scale-[4] z-10 max-sm:hidden">
        <Image
          src={"/model5.png"}
          alt="Model Image"
          fill
          className="object-cover filter blur-[1px] grayscale-100 hover:grayscale-0 transition"
        />
      </div>

      <div className="absolute w-[300px] h-[600px] -right-32 -bottom-8 max-sm:hidden">
        <Image
          src={"/model4.png"}
          alt="Model Image"
          fill
          className="object-cover filter blur-[1px] grayscale-100 hover:grayscale-0 transition"
        />
      </div>
    </div>
  );
}
