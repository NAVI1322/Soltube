"use client"
import { Button } from "../ui/button";


export function NavBar()
{

    return <div className="flex justify-center space-x-4 p-5 bg-slate-400 ">
        <div><Button variant={"link"} value={"HOME"} /></div>
        <div><Button variant={"link"} value={"MarketPlace"} /></div>
        <div><Button variant={"link"} value={"Create Token"} /></div>
        <div><Button variant={"link"} value={"DashBoard"} /></div>
        <div><Button variant={"link"} value={"Support"} /></div>
        <div><Button variant={"link"} value={"Login"} /></div>
        <div><Button variant={"link"} value={"SignUp"} /></div>
        <div><Button variant={"link"} value={"WALLET"} /></div>
    </div>
}