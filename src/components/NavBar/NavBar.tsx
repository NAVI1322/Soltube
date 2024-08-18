"use client"
import { Button } from "../ui/button";


export function NavBar()
{
    return <div className=" hidden md:flex lg:space-x-7  md:space-x-0 p-5 justify-center  shadow-sm">
         <div>
            <Button variant={"link"} className="font-light">HOME</Button>
        </div>
        <div>
            <Button variant={"link"} className="font-light">MARKETPLACE</Button>
        </div>
        <div>
            <Button variant={"link"} className="font-light">CREATETOKEN</Button>
        </div>
        <div>
            <Button variant={"link"} className="font-light">DASHBOARD</Button>
        </div>
        <div>
            <Button variant={"link"} className="font-light">SUPPORT</Button>
        </div>
        <div>
            <Button variant={"link"} className="font-light">SIGNIN</Button>
        </div>
        <div>
            <Button variant={"link"} className="font-light">SIGNUP</Button>
        </div>
        <div>
            <Button variant={"link"} className="font-light">CREATE WALLET</Button>
        </div>
          
    </div>
}