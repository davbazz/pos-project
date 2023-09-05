"use client";

import { useState, useEffect } from "react";
import Flex from "../atoms/Flex";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

export default function MenuProductWorkshop() {
  return (
    <aside>
      <Flex className="">
        <Label htmlFor="category">Category</Label>
        <Input type="text" id="category" placeholder="e.g Coffee" />
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="e.g Latte" />
      </Flex>
    </aside>
  );
}
