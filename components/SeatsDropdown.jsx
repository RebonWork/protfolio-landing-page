"use client";
import { Divider } from "@nextui-org/react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

const seatsNumbers = [3, 5, 10, 15, 20, 25, 30];
export function SeatsDropdown(props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-accent text-white dark:text-white dark:bg-accent flexs justify-between md:px-4 gap-2 md:gap-4 items-center lg:h-11 lg:rounded-md lg:px-8"
        >
          <span className="text-white">
            {props.seat} {props.seat > 1 ? "seats" : "seat"}
          </span>
          <div className="flex items-center lg:gap-2">
            <Divider orientation="vertical" className="w-0.5 h-6 bg-white" />
            <ChevronDown />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={props.seat}
          onValueChange={(value) => props.setSeat(value)}
        >
          {seatsNumbers.map((seat) => (
            <DropdownMenuRadioItem key={seat} value={seat}>
              {seat} {seat > 1 ? "seats" : "seat"}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
