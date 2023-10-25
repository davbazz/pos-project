import { useContext } from "react";
import { MenuCategoriesContext } from "@/components/providers/MenuCategoriesProvider";

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

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {menuCategories?.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
