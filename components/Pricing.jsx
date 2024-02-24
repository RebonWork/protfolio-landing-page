"use client";
import { CheckCircle, InfoIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PriceSettings } from "./PriceSettings";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [seat, setSeat] = useState(3);
  const plans = [
    [
      {
        title: "Basic",
        priceMontly: 12,
        priceAnnualy: 9,
        description:
          "Freelancers, solopreneurs, or small teams just starting out with project management.",
        features: [
          { title: "1 user" },
          {
            title: "Basic task management",
            tooltip:
              "Create and assign tasks, set due dates, mark tasks as complete",
          },
          {
            title: "Basic Reporting",
            tooltip:
              "Basic file sharing, limited communication features (e.g., comments)",
          },
          { title: "Mobile app access" },
          { title: "1GB file storage" },
        ],
      },
    ],
    [
      {
        title: "Standard",
        priceMontly: 14,
        priceAnnualy: 12,
        description:
          "Growing teams, agencies, or departments needing more advanced features and collaboration tools.",
        features: [
          { title: "Up to 5 users" },
          {
            title: "Advanced task management",
            tooltip: " Subtasks, dependencies, recurring tasks, time tracking",
          },
          {
            title: "Team collaboration",
            tooltip:
              " Improved communication features (e.g., group chat, @mentions), task comments, version history",
          },
          { title: "Kanban boards", tooltip: " Visualize project workflow" },
          { title: "Reporting", tooltip: " Basic project reports" },
          { title: "Increased storage: 5 GB per user" },
        ],
      },
    ],
    [
      {
        title: "Pro",
        priceMontly: 24,
        priceAnnualy: 19,
        description:
          "Large organizations, complex projects, or teams requiring detailed planning and analytics.",
        features: [
          { title: "Up to 15 users" },
          {
            title: "Project templates",
            tooltip: " Use pre-built templates to quickly start projects",
          },
          {
            title: "Resource management",
            tooltip:
              " Allocate resources (people, budget) to tasks, track resource utilization",
          },
          {
            title: "Gantt charts",
            tooltip: " Detailed project scheduling and visualization",
          },
          {
            title: "Time approvals",
            tooltip: " Track and approve employee time spent on projects",
          },
          {
            title: "Customizable dashboards",
            tooltip: " Track project progress with personalized dashboards",
          },
          {
            title: "Integrations",
            tooltip: " Integrate with popular third-party applications",
          },
          { title: "Increased storage: 10 GB per user" },
        ],
      },
    ],
  ];
  function PriceCard({
    title,
    priceMontly,
    priceAnnualy,
    description,
    features,
    index,
  }) {
    return (
      <>
        <Card
          className={cn(
            "w-full h-[850px] py-4 px-2 bg-background overflow-hidden border-2",
            title === "Standard" &&
              "border-primary h-[900px] border-2 pt-0 px-0"
          )}
        >
          {title === "Standard" && (
            <div className="h-[50px] mb-2 flex flex-col items-center justify-center bg-primary">
              <h5 className="text-white w-auto">Popular Choice</h5>
            </div>
          )}
          <div className={title === "Standard" ? "px-2 pt-2" : undefined}>
            <CardHeader className={"text-start"}>
              <div key={title}>
                <div>
                  <h2>{title}</h2>
                  <div className="flex items-center">
                    <h1>$</h1>
                    <h1>{isMonthly ? priceMontly : priceAnnualy}</h1>
                    <span className="ml-1">
                      seat/ <br /> month
                    </span>
                  </div>
                  <div className="flex flex-row gap-1 font-semibold">
                    <span>Total </span>
                    <span>
                      ${isMonthly ? priceMontly * seat : priceAnnualy * seat}
                    </span>
                    <span>/month</span>
                  </div>
                  <span className="font-extralight">Billed Monthly</span>
                </div>
              </div>
            </CardHeader>
            <CardDescription className={"text-start px-6"}>
              {description}
            </CardDescription>
            <CardContent className={"flex flex-col justify-start"}>
              <Button className="ml-auto mr-auto mt-8 text-white bg-accent">
                Take Action
              </Button>
              <Divider className="my-6 w-36 h-0.5 rounded-full mr-auto ml-auto" />
              <p>
                {title !== "Basic"
                  ? "Everthing in " + plans[index - 1][0].title + ", plus:"
                  : title + " Includes:"}
              </p>
              {features?.map(({ title, tooltip }) => (
                <span
                  key={title}
                  className="flex justify-between my-2 items-center pl-3"
                >
                  <span className="flex gap-1.5 items-center">
                    <CheckCircle
                      className="text-primary"
                      strokeWidth={2.5}
                      size={16}
                    />
                    {title}
                  </span>
                  {tooltip && (
                    <Tooltip
                      showArrow={true}
                      content={<span className="p-2">{tooltip}</span>}
                    >
                      <InfoIcon className="text-neutral-500" size={16} />
                    </Tooltip>
                  )}
                </span>
              ))}
            </CardContent>
          </div>
        </Card>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center w-full py-20">
      <div className="text-center pb-10">
        <h1>Pricing & Plans</h1>
        <span className="font-light text-lg">
          Unlock features, find your pricing sweet spot!
        </span>
      </div>
      <PriceSettings
        isMonthly={isMonthly}
        setIsMonthly={setIsMonthly}
        seat={seat}
        setSeat={setSeat}
      ></PriceSettings>
      <div className="flex flex-row gap-4 justify-between items-end w-full h-auto mt-10 max-sm:flex-wrap">
        {plans.map((card, index) => (
          <div className="w-full" key={index}>
            {card.map((item) => (
              <PriceCard key={index} {...item} index={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
