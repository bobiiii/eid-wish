"use client";
import { useSearchParams } from "next/navigation";
import Typewriter from "typewriter-effect";

export default function WishComp() {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name") || "Guest";
  const name = nameParam
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="h-screen min-w-screen bg-black">
      <div className="px-4 z-20 absolute flex flex-col justify-center items-center w-full h-full">
        <h1 className="animate__animated animate__fadeIn animate__delay-2s animate__slow  py-16 text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white text-3xl text-center font-bold font-[Roboto]">
          <span className="text-foreground animate-pulse  ">🌙</span> Eid
          Mubarak {name}{" "}
          <span className="text-foreground animate-pulse">✨</span>
        </h1>

        <h1 className=" h-[40%] text-indigo-100/80 from-white via-blue-200 to-white text-4xl text-center font-bold font-[Lobster]">
          <Typewriter
            options={{
              delay: 60,
              deleteSpeed: 1, // Adjust this value (lower = faster, higher = slower)
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString(
                  'Wishing you peace this EID  <span className="text-foreground">🌙</span>'
                )
                .pauseFor(500)
                .changeDeleteSpeed(1)
                .deleteChars(7)
                .typeString("WEEK 🕊️")
                .pauseFor(500)
                .changeDeleteSpeed(1)
                .deleteAll()
                .typeString("May your Eid be bright ✨")
                .pauseFor(500)
                .deleteAll()
                .typeString("Joy, love, and Eid vibes 💖")
                .pauseFor(500)
                .deleteAll()
                .typeString("Celebrate with sweets and smiles 🍬😊")
                .pauseFor(500)
                .deleteAll()
                .typeString("May blessings find your home 🏡🌟")
                .pauseFor(500)
                .deleteAll()
                .typeString("Have a peaceful, blessed Eid 🙏🌙")
                .pauseFor(500)
                .start();
            }}
          />
        </h1>
      </div>

      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="h-screen w-screen object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      <footer className="absolute z-20 bottom-0 w-full py-3 bg-sky-50/60 text-center shadow-inner font-[Poppins]">
        <h3 className="text-lg font-bold">Made with ❤️ by @babar</h3>
      </footer>
    </div>
  );
}
