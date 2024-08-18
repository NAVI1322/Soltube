import { Button } from "@/components/ui/button";


export function HeroSection()
{
   
    return  <div className="container flex flex-col md:items-center items-start md:mt-52 space-y-10 mt-36  p-4">
            <div className="text-7xl font-normal"><span className="bg-slate-200 p-2 font-extrabold">SOL</span>|TUBE</div>
            <p className=" md:max-w-lg md:text-center text-start max-w-sm">When Youtube meets Blockchain
                Trade your favourite channel
            </p>
            <div className="flex space-x-6">
                <div><Button variant={"default"}>GET STARTED</Button></div>
                <div><Button variant={"secondary"}>EXPLORE TOKENS</Button></div>
            </div>

    </div>
  
}