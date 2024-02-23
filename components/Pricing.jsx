"use client";
import { CheckCircle, InfoIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { cn } from "@/lib/utils";
const Pricing = () => {
  const basic = [
    {
      title: "Basic",
      price: 12,
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
  ];
  const standard = [
    {
      title: "Standard",
      price: 14,
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
  ];
  const pro = [
    {
      title: "Pro",
      price: 24,
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
  ];
  const cards = [basic, standard, pro];

  function PriceCard({ title, price, description, features }) {
    return (
      <>
        <Card
          className={cn(
            "w-full h-[825px] py-8 px-2 bg-background overflow-hidden border-2",
            title === "Standard" &&
              "border-primary h-[875px] border-2 pt-0 px-0"
          )}
        >
          {title === "Standard" && (
            <div className="h-[50px] mb-1.5 flex flex-col items-center justify-center bg-primary">
              <h5 className="text-white w-auto">Popular Choice</h5>
            </div>
          )}
          <div className={title === "Standard" ? "px-2" : undefined}>
            <CardHeader className={"text-start"}>
              <div key={title}>
                <div>
                  <h2>{title}</h2>
                  <div className="flex items-center">
                    <h1>$</h1>
                    <h1>{price}</h1>
                    <span className="ml-1">
                      seat/ <br /> month
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardDescription className={"text-start px-6"}>
              {description}
            </CardDescription>
            <CardContent className={"flex flex-col justify-start"}>
              <Button className="ml-auto mr-auto mt-8 text-white bg-primary">
                Take Action
              </Button>
              <Divider className="my-8 w-36 h-0.5 rounded-full mr-auto ml-auto" />
              <h5>{title} Includes :</h5>
              {features?.map(({ title, tooltip }) => (
                <span
                  key={title}
                  className="flex justify-between my-2 items-center pl-3"
                >
                  <span className="flex gap-1.5 items-center">
                    <CheckCircle
                      className="text-accent"
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
    <div className="flex flex-col items-center py-20">
      <h1>Pricing & Plans</h1>
      <div className="flex flex-row gap-4 justify-between items-end w-full h-auto mt-10">
        {cards.map((card) => (
          <div className="w-full" key={card[0].title}>
            {card.map((item) => (
              <PriceCard key={item.title} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
