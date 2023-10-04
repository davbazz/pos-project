import { useState, createContext } from "react";

interface MenuCategoriesContextType {
  menuCategories: string[] | null;
  setMenuCategories: (newMenuCategories: string[] | null) => void;
}

export const MenuCategoriesContext =
  createContext<MenuCategoriesContextType | null>(null);

export default function MenuCategoriesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuCategories, setMenuCategories] = useState<string[] | null>(null);

  return (
    <MenuCategoriesContext.Provider
      value={{ menuCategories, setMenuCategories }}
    >
      {children}
    </MenuCategoriesContext.Provider>
  );
}
