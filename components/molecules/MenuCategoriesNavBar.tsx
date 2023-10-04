"use client";

import { supabase } from "@/lib/clientSupabase";
import { useEffect, useState, useContext, useRef } from "react";
import { SelectedCategoryContext } from "@/components/providers/SelectedCategoryProvider";
import { MenuCategoriesContext } from "../providers/MenuCategoriesProvider";
import getAllMenuCategories from "@/lib/getAllMenuCategories";
import Flex from "../atoms/Flex";
import MainButton from "../atoms/MainButton";
import CategoryInput from "../atoms/CategoryInput";
import goOnEnter from "@/lib/goOnEnter";
import capitaliseFirstLetter from "@/lib/capitaliseFirstLetter";
import getFirstCategory from "@/lib/selectInitialCategory";

export default function MenuCategoriesNavBar() {
  const [addingNewCategory, setAddingNewCategory] = useState<boolean>(false);
  const [newCaterory, setNewCategory] = useState<string>("");

  const { setSelectedCategory } = useContext(SelectedCategoryContext) as {
    setSelectedCategory: (newCategory: string) => void;
  };

  const { menuCategories, setMenuCategories } = useContext(
    MenuCategoriesContext
  ) as {
    menuCategories: string[];
    setMenuCategories: (newCategories: string[]) => void;
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const addNewCategory = async () => {
    // get the latest listing number for that user categories table
    const { data: prevListingNumber, error } = await supabase
      .from("menu_categories")
      .select("listing_order")
      .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
      .order("listing_order", { ascending: false })
      .limit(1);

    if (error) {
      console.log(error.message);
    }

    // if there is a prev listing number, then add 1 to it
    if (prevListingNumber !== null && prevListingNumber.length > 0) {
      const newListingOrder = prevListingNumber[0].listing_order + 1;
      const { data: addedCategory, error } = await supabase
        .from("menu_categories")
        .insert([
          {
            user_id: (await supabase.auth.getUser()).data.user?.id,
            name: capitaliseFirstLetter(newCaterory),
            listing_order: newListingOrder,
          },
        ])
        .select();
      if (error) {
        console.log(error.message);
      }
      if (addedCategory) {
        setMenuCategories([...menuCategories, addedCategory[0].name]);
        console.log(addedCategory);
      }
    }

    // if there is no prev listing number, then add it to the table
    if (prevListingNumber !== null && prevListingNumber.length === 0) {
      const { data: addedCategory, error } = await supabase
        .from("menu_categories")
        .insert([
          {
            user_id: (await supabase.auth.getUser()).data.user?.id,
            name: capitaliseFirstLetter(newCaterory),
            listing_order: 1,
          },
        ])
        .select();
      if (error) {
        console.log(error.message);
      }
      if (addedCategory) {
        setMenuCategories([...menuCategories, addedCategory[0].name]);
      }

      // set selected category to new one if there was no existing categories before
      getFirstCategory({ setSelectedCategory });
    }

    // remove input field, erase newCategory value and show menu categories if hasn't been shown before
    setAddingNewCategory(false);
    setNewCategory("");
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      return setAddingNewCategory(false), setNewCategory("");
    }
  };

  useEffect(() => {
    getAllMenuCategories({ setMenuCategories });
  }, []);

  useEffect(() => {
    if (addingNewCategory === true) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  });

  return (
    <Flex className="justify-center items-center gap-6">
      {menuCategories === null || menuCategories.length === 0 ? (
        <Flex className="">
          <MainButton onClick={() => setAddingNewCategory(true)}>
            Add new category
          </MainButton>
          {addingNewCategory && (
            <CategoryInput
              type="text"
              placeholder="e.g Coffee"
              className="removeOnOusideClick"
              value={newCaterory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={(e) => goOnEnter(e, addNewCategory)}
              ref={inputRef}
            />
          )}
        </Flex>
      ) : (
        <Flex className="">
          {menuCategories.map((cat, i) => (
            <MainButton key={i} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </MainButton>
          ))}
          <MainButton onClick={() => setAddingNewCategory(true)}>
            Add new
          </MainButton>
          {addingNewCategory && (
            <CategoryInput
              type="text"
              placeholder="e.g Coffee"
              className="removeOnOusideClick"
              value={newCaterory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={(e) => goOnEnter(e, addNewCategory)}
              ref={inputRef}
            />
          )}
        </Flex>
      )}
    </Flex>
  );
}
