"use client";
import { Switch } from "@nextui-org/react";
import { SeatsDropdown } from "./SeatsDropdown";

export function PriceSettings(props) {
  return (
    <div className="flex flex-row justify-between w-full items-center">
      <div className="flex flex-row items-center justify-between gap-2 ml-4">
        <span>Seat : </span>
        <SeatsDropdown seat={props.seat} setSeat={props.setSeat}/>
      </div>
      <div className="flex flex-row items-center justify-between gap-2">
        <span className="mr-1.5">Montly</span>
        <Switch
          isSelected={!props.isMonthly}
          onValueChange={() => props.setIsMonthly(!props.isMonthly)}
          defaultSelected
          color="warning"
          size="sm"
        />{" "}
        <span>Yearly</span>
      </div>
    </div>
  );
}
