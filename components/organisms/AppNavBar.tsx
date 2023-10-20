"use client";

import { useState } from "react";
import BZVLogo from "../svg's/BZVLogo";
import Flex from "../atoms/Flex";
import LogoutButton from "../atoms/LogoutButton";
import MenuIconLink from "../molecules/MenuIconLink";
import HistoryIconLink from "../molecules/HistoryIconLink";
import HomeIconLink from "../molecules/HomeIconLink";

export default function AppNavBar() {
  const [selectedPath, setSelectedPath] = useState<string>("/home");

  return (
    <aside className="fixed top-0 left-0 w-[170px] h-screen px-5 py-6 border-r-[1px] border-r-linear">
      <Flex className="w-full h-full justify-between flex-col">
        <Flex className="justify-start flex-col gap-24">
          <BZVLogo />

          <Flex className="flex-col gap-5">
            <HomeIconLink
              selectedPath={selectedPath}
              setSelectedPath={setSelectedPath}
            />
            <MenuIconLink
              selectedPath={selectedPath}
              setSelectedPath={setSelectedPath}
            />
            <HistoryIconLink
              selectedPath={selectedPath}
              setSelectedPath={setSelectedPath}
            />
          </Flex>
        </Flex>

        <LogoutButton />
      </Flex>
    </aside>
  );
}
