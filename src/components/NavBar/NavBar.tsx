"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function NavBar() {
  const session = useSession();
  const router = useRouter();
  const [Menu , Setmenu] = useState(true)

  async function HandleSignOut() {
    await signOut();
    router.push("/api/auth/signin");
  }

  return (
    <div>
      <div className="md:hidden left-0 fixed right-0 top-0 md:space-x-0 p-5 justify-center  shadow-sm">
        <div className="flex justify-end p-3" onClick={() => Setmenu(!Menu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>

      <div className={!Menu ? '  md:hidden fixed left-0 top-0  w-[100%] cursor-pointer bg-slate-50 h-screen border-y border-4 ease-in-out duration-700' : 'fixed left-[-100%] top-0  w-[60%]  border-r bg-blue-50 border-r-slate-400 h-full ease-in-out duration-700 '}>
        <div className=" mt-2 flex justify-end p-6" onClick={() => Setmenu(!Menu)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg></div>
        
         <div className="flex items-center justify-center  gap-4 mb-20"> 
        
        <div className="text-4xl font-semibold"> <span className="bg-slate-200 font-extrabold    p-2">SOL</span>|TUBE</div>
      </div>
        <ul className="flex flex-col items-center font-light" >
          <li className=' p-2 hover:bg-slate-100 w-full text-center text-xl' >HOME</li>
          <li className=' p-2 hover:bg-slate-100 w-full text-center text-xl'>MARKETPLACE</li>
          <li className=' p-2 hover:bg-slate-100 w-full text-center text-xl'>CREATE TOKEN</li>
          <li className=' p-2 hover:bg-slate-100 w-full text-center text-xl'>DASHBOARD</li>
          <li className=' p-2 hover:bg-slate-100 w-full text-center text-xl'>SUPPORT</li>
           {session.data?.user ? <li className=' p-2 hover:bg-slate-100 w-full text-center text-xl'  onClick={HandleSignOut}>LOGOUT</li>
            : <li className=' p-2 hover:bg-slate-100 w-full text-center text-xl' onClick={() => signIn()}>SIGNIN</li>
          }
          <li className=' p-2 hover:bg-slate-100 w-full text-center text-xl'>CREATE WALLET</li>
        </ul>
      </div>
      

      
      <div className=" hidden md:flex fixed lg:space-x-6 left-0 right-0 top-0 p-5 justify-center  shadow-sm">
        <div>
          <Button variant={"link"} className="font-light">
            HOME
          </Button>
        </div>
        <div>
          <Button variant={"link"} className="font-light">
            MARKETPLACE
          </Button>
        </div>
        <div>
          <Button variant={"link"} className="font-light">
            CREATETOKEN
          </Button>
        </div>
        <div>
          <Button variant={"link"} className="font-light">
            DASHBOARD
          </Button>
        </div>
        <div>
          <Button variant={"link"} className="font-light">
            SUPPORT
          </Button>
        </div>
        {session.data?.user ? (
          <div>
            <Button
              variant={"link"}
              onClick={HandleSignOut}
              className="font-light"
            >
              LOGOUT
            </Button>
          </div>
        ) : (
          <div>
            <Button
              variant={"link"}
              onClick={() => signIn()}
              className="font-light"
            >
              SIGNIN
            </Button>
          </div>
        )}
        <div>
          <Button variant={"link"} className="font-light">
            CREATE WALLET
          </Button>
        </div>
      </div>
    </div>
  );
}
