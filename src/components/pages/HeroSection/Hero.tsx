"use client"
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/authOptions/authOptions";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";



export  function HeroSection()
{
      const session = useSession();
        
      console.log(session)
    return  <div className="container flex flex-col md:items-center items-start md:mt-52 space-y-10 mt-36  p-4">
            {session.data?.user?.name? <div className=" flex font-bold">
             Welcome, <span className="text-pretty ml-3 font-extralight"> {session.data?.user?.name}</span>
             </div>:
             ""}
            <div className="text-7xl font-normal"><span className="bg-slate-200 p-2 font-extrabold dark:text-black">SOL</span>|TUBE</div>
            <p className=" md:max-w-lg md:text-center text-start max-w-sm text-md font-extralight   ">When Youtube meets Blockchain
                Trade your favourite channel
            </p>
            <div className="flex space-x-6">
                <div><Button variant={"default"}>GET STARTED</Button></div>
                <div><Button variant={"secondary"}>EXPLORE TOKENS</Button></div>
            </div>

    </div>
  
}