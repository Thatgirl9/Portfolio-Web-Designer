"use client"
// import ToggleButton from "@/components/ToggleButton";
import Image from "next/image";
import Author from "@/assets/albert-dera-ILip77SbmOE-unsplash.jpg";

export default function Home() {
  return (
   <main className=" w-full min-h-screen">
    <section className="relative flex justify-center items-center h-screen bg-background-0 dark:bg-background-5">
      <div className="yellow-bg"></div>
    <div className="bg-red-500 z-11">
      <aside className="rounded-[30px]">
        <Image src={Author} alt="A Web Designer"
         className="w-[422px] h-[513px] rounded-[30px]" 
         />
      </aside>
    </div>
    </section>
    {/* <di className="bg-red-500 w-20 h-80"></di */}
   </main>
  );
}
