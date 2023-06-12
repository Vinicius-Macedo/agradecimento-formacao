import React from "react";

type Props = {
  number: string;
  text: string;
};

export default function SquareWithNumbers(props: Props) {
  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-[350px]">
      <p className="w-60 h-60 xl:w-60 xl:h-60 lg:w-30 lg:h-30 flex justify-center items-center border-[#d9c034] border-[2px] xl:border-[3px] border-solid text-[64px] lg:text-[36px] xl:text-[64px] font-semibold text-[#d9c034]">
        {props.number}
      </p>
      <p className="text-[#ffffff] text-center font-montserrat">{props.text}</p>
    </div>
  );
}
