"use client";
// import ToggleButton from "@/components/ToggleButton";
import Image from "next/image";
import Author from "@/assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import { GoDash } from "react-icons/go";
import { TiArrowRightThick } from "react-icons/ti";
import * as motion from "motion/react-client";
import SideBarNav from "@/components/SideBarNav";

export default function Home() {
  return (
    <main className=" w-full min-h-screen">
      <section className="relative flex justify-center items-center h-screen bg-background-0 dark:bg-background-5">
        <div className="yellow-bg"></div>

        
        <div className="z-30 flex items-center border border-red-500 justify-between w-full mx-10">
<aside className="rounded-[30px] z-30">
          <Image
            src={Author}
            alt="A Web Designer"
            className="max-w-[800px] max-lg:[250px] rounded-[30px] designer-image bg-cover"
          />
        </aside>


          <article className="flex flex-col gap-5">
            <div className="flex gap-3 uppercase font-poppins">
              <span>
                <GoDash className="text-6xl text-background-1" />
              </span>
              <h1 className="text-6xl font-bold">
                <span className="text-background-1">
                  I&apos;m steve milner.
                </span>
                <br></br>
                <span className="text-primaryText-0">web designer</span>
              </h1>
            </div>

            <p className="w-[58ch] text-primaryText-0 text-base font-normal font-openSans leading-[2]">
              I&apos;m a Tunisian based web designer & front‑end developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>

            <motion.button
              className="relative overflow-hidden bg-transparent border pl-6 rounded-full w-[229px] h-[54px] uppercase border-background-1 text-primaryText-0 font-poppins font-semibold flex justify-between items-center hover:text-background-0"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              initial="rest"
            >
              <motion.div
                className="absolute top-0 bottom-0 right-0 bg-background-1 rounded-full"
                initial={{ width: "55px" }}
                variants={{
                  hover: {
                    width: "100%",
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                }}
              />
              <span className="relative z-10">More about me</span>
              <div className="relative z-10 bg-background-1 h-[53px] w-[55px] rounded-full flex items-center justify-center">
                <TiArrowRightThick className="text-2xl text-background-0" />
              </div>
            </motion.button>
          </article>

          <SideBarNav/>
        </div>
      </section>
      {/* <di className="bg-red-500 w-20 h-80"></di */}
    </main>
  );
}
