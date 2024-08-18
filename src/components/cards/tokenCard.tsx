import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function TokenCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Trending Cards</CardTitle>
          <CardDescription><img src="" alt="" className="w-10 h-10"/></CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Data</p>
        </CardContent>
        <CardFooter>
          <p>copyrights</p>
        </CardFooter>
      </Card>
    </div>
  );
}
