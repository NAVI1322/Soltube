import { TokenCard } from "@/components/cards/tokenCard";
import { Card } from "@/components/ui/card";



export function TSection()
{

    return <section className="flex flex-col space-y-10 items-center mt-96">
        <div className="text-center font-light text-5xl">
            Trending Token
        </div>
            <div className="flex">
            <TokenCard  />
            <TokenCard  />
            <TokenCard  />
            <TokenCard  />
            </div>
    </section>
}