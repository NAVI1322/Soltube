"use client";
import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function WelcomePage() {
  const router = useRouter();
  return (
    <section className=" ">
      <div className="flex justify-end p-10 items-center space-x-8">
        <ModeToggle />
        <div>
          <Button variant={"secondary"} onClick={() => router.back()}>
            Back
          </Button>
        </div>
      </div>
      <div className="flex-col flex  items-center md:justify-center  space-y-10 mt-44">
        <div className="md:text-8xl text-6xl font-normal">
          <span className="bg-slate-200 p-2 font-extrabold dark:text-black">
            SOL
          </span>
          |TUBE
        </div>
        <p className=" md:max-w-lg md:text-center text-start max-w-sm text-md font-extralight   ">
          When Youtube meets Blockchain Join a Vibrant community where Youtube
          creator can monetize their content and traders can invest in their
          favorite Channel
        </p>
        <div className="flex space-x-6 ">
          <div>
            <Button
              variant={"default"}
              className="font-light"
              onClick={() =>
                signIn()
              }
            >
              Signup as a Trader
            </Button>
          </div>
          <div>
            <Button variant={"secondary"} className="font-light">
              Sign up as Creator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
