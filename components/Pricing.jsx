import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
const Pricing = () => {
  return (
    <div className="flex flex-row gap-4 justify-between w-full h-96">
      <Card className={"w-full"}>
        <CardHeader className={"text-center"}>
          <CardTitle><h2>Basic</h2></CardTitle>
        </CardHeader>
        <CardContent className={"flex felx-col justify-center"}>
          <h4>$10</h4>
        </CardContent>
      </Card>
      <Card className={"w-full"}>
        <CardHeader className={"text-center"}>
          <CardTitle><h2>Pro</h2></CardTitle>
        </CardHeader>
        <CardContent className={"flex felx-col justify-center"}>
          <h4>$10</h4>
        </CardContent>
      </Card>
      <Card className={"w-full"}>
        <CardHeader className={"text-center"}>
          <CardTitle><h2>Enterprise</h2></CardTitle>
        </CardHeader>
        <CardContent className={"flex felx-col justify-center"}>
          <h4>$10</h4>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pricing;
