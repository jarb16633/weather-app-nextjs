"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { github } from "@/utils/Icons";

type Props = {};

interface HandleClickParams {
  e: React.MouseEvent<HTMLButtonElement>;
  path: string;
}

const Navbar = (props: Props) => {
  const router = useRouter();

  const handleClick = ({ e, path }: HandleClickParams) => {
    e.preventDefault();

    if (path === "/github") {
      router.push("github.com/jarb16633");
    }
  };
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <ModeToggle />
        <Button
          className="source-code flex items-center gap-2"
          onClick={(e) => handleClick({ e, path: "/github" })}
        >
          {github} Source code
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
