"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Smith",
    company: "TechStart Co.",
    rating: 4,
    review:
      "Chaotic projects? This app saved us! Deadlines met, team on track, sales up 20%. Highly recommend!",
  },
  {
    name: "Sarah Jones",
    company: "Creative Agency",
    rating: 5,
    review:
      "Juggling projects? This app is a lifesaver! Team focused, clients happy, retention soaring! 15% boost? Yes please!",
  },
  {
    name: "David Lee",
    company: "Construction Company",
    rating: 5,
    review:
      "No more last-minute stress! This app keeps deadlines met, team morale high, and projects on track. Must-have for any construction team!",
  },
  {
    name: "Maria Garcia",
    company: "Design Studio",
    rating: 5,
    review:
      "Freelancers, rejoice! This app simplifies handoff, tracks time accurately, and boosts project completion by 30%. My secret weapon!",
  },
  {
    name: "Michael Chen",
    company: "Healthcare Organization",
    rating: 5,
    review:
      "Taming complex projects? This app is the answer! Reduced bottlenecks, improved collaboration, fantastic support. Healthcare IT just got easier!",
  },
];

function ReviewCard({ index, rating, name, review, company }) {
  return (
    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card>
          <CardContent className="flex flex-col gap-2.5 h-[500px] items-center justify-center p-6 pt-3">
            <Avatar className="h-20 w-20 object-cover">
              <AvatarImage src={`/user-0${index + 1}.jpg`} />
            </Avatar>
            <div className="flex flex-col text-center">
              <h4>{name}</h4>
              <small>{company}</small>
            </div>
            <div className="flex mx-auto my-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className="text-primary h-5 w-5" />
              ))}
            </div>
            <div className="space-y-3 flex flex-col">
              <span className="ml-0 mr-auto">
                <FaQuoteLeft className="text-primary h-10 w-10 inline" />
              </span>
              <p className="text-center px-4 font-medium text-pretty">{review}</p>
              <span className="mr-0 ml-auto">
                <FaQuoteRight className="text-primary h-7 w-7" />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}

export default function Review() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h1> Project Management Made Easy</h1>
        <h5 className="text-neutral-600">
          Discover work-life balance they never thought possible.
        </h5>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mt-10"
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} index={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
