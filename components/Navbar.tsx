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
      router.push("https://github.com/jarb16633/weather-app-nextjs");
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
            className="source-code flex items-center gap-2"
            onClick={(e) => handleClick({ e, path: "/github" })}
          >
            {github} Source code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
