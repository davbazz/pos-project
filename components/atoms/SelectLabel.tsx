import { useEffect, useContext } from "react";
import { MenuCategoriesContext } from "@/components/providers/MenuCategoriesProvider";
import { SelectedCategoryContext } from "@/components/providers/SelectedCategoryProvider";

interface SelectLabelProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  category: string;
  setCategory: (newCategory: string) => void;
}

export default function SelectLabel({
  category,
  setCategory,
}: SelectLabelProps) {
  const { menuCategories } = useContext(MenuCategoriesContext) as {
    menuCategories: string[];
  };

  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  ) as {
    selectedCategory: string;
    setSelectedCategory: (newCategory: string) => void;
  };

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <select
        value={category}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {menuCategories?.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
