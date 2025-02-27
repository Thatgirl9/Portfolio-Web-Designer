"use client";
// import ToggleButton from "@/components/ToggleButton";
import Image from "next/image";
import Author from "@/assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import { GoDash } from "react-icons/go";
import { TiArrowRightThick } from "react-icons/ti";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <main className="w-full min-h-full border border-blue-500 justify-center items-center flex lg:block">
      <section className="w-[80%] lg:w-full relative flex justify-center items-center h-screen border border-red-500">
        <div className="yellow-bg hidden lg:block"></div>

        <div className="lg:z-30 flex items-center text-center justify-center lg:flex-row flex-col gap-7 lg:gap-10 xl:justify-between  2xl:justify-stretch w-full lg:pl-9 lg:text-left">
          <aside className="lg:rounded-[30px] z-30 rounded-full ">
            <Image
              src={Author}
              alt="A Web Designer"
              className="max-w-[850px] max-lg:[250px] w-[250px] h-[250px] rounded-full lg:rounded-[30px] designer-image bg-cover dark:shadow-2xl border-1 border-background-2 lg:border-none"
              loading="lazy"
            />
          </aside>

          <article className="flex flex-col gap-5 justify-center items-center lg:items-start">
            <div className="flex gap-3 uppercase font-poppins">
              <span className="hidden xl:inline-block">
                <GoDash className="text-6xl text-background-1" />
              </span>
              <h1 className="text-4xl lg:text-[51px] leading-tight font-bold text-center w-full">
                <span className="text-background-1">
                  I&apos;m steve milner.
                </span>
                <br></br>
                <span className="text-primaryText-0 dark:text-white">
                  web designer
                </span>
              </h1>
            </div>

            <p className="lg:w-[48ch] xl:w-[60ch] text-primaryText-0 dark:text-white xl:text-base font-normal font-openSans leading-[2]">
              I&apos;m a Tunisian based web designer & front‑end developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>

            <motion.button
              className="relative overflow-hidden bg-transparent border pl-6 rounded-full w-[229px] h-[54px] uppercase border-background-1 text-primaryText-0 dark:text-white font-poppins font-semibold flex justify-between items-center hover:text-background-0"
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

            <p className="lg:w-[48ch] xl:w-[60ch] text-primaryText-0 dark:text-white xl:text-base font-normal font-openSans leading-[2]">
              I&apos;m a Tunisian based web designer & front‑end developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>

            <motion.button
              className="relative overflow-hidden bg-transparent border pl-6 rounded-full w-[229px] h-[54px] uppercase border-background-1 text-primaryText-0 dark:text-white font-poppins font-semibold flex justify-between items-center hover:text-background-0"
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


            <p className="lg:w-[48ch] xl:w-[60ch] text-primaryText-0 dark:text-white xl:text-base font-normal font-openSans leading-[2]">
              I&apos;m a Tunisian based web designer & front‑end developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>

            <motion.button
              className="relative overflow-hidden bg-transparent border pl-6 rounded-full w-[229px] h-[54px] uppercase border-background-1 text-primaryText-0 dark:text-white font-poppins font-semibold flex justify-between items-center hover:text-background-0"
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

            <p className="lg:w-[48ch] xl:w-[60ch] text-primaryText-0 dark:text-white xl:text-base font-normal font-openSans leading-[2]">
              I&apos;m a Tunisian based web designer & front‑end developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>

            <motion.button
              className="relative overflow-hidden bg-transparent border pl-6 rounded-full w-[229px] h-[54px] uppercase border-background-1 text-primaryText-0 dark:text-white font-poppins font-semibold flex justify-between items-center hover:text-background-0"
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

          {/* <SideBarNav /> */}
        </div>
       
      </section>
      {/* <di className="bg-red-500 w-20 h-80"></di */}
    </main>
  );
}
