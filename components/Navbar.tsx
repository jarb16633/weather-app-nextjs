"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { github } from "@/utils/Icons";
import SearchDialog from "./SearchDialog";
import { useGlobalContext } from "@/app/context/globalContext";

type Props = {};

interface HandleClickParams {
  e: React.MouseEvent<HTMLButtonElement>;
  path: string;
}

const Navbar = (props: Props) => {
  const router = useRouter();
  const { state } = useGlobalContext();

  // console.log(state);

  const handleClick = ({ e, path }: HandleClickParams) => {
    e.preventDefault();

    if (path === "/github") {
      window.open("https://github.com/jarb16633/weather-app-nextjs", "_blank");
    }
  };
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ModeToggle />
          <Button
            className="source-code items-center gap-2 sm:flex"
            onClick={(e) => handleClick({ e, path: "/github" })}
          >
            {github} <span className="hidden md:inline">Source code</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
