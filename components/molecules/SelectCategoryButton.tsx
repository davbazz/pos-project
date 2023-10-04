import { supabase } from "@supabase/auth-ui-shared";
import getAllMenuCategories from "@/lib/getAllMenuCategories";
import { useEffect, useState } from "react";

export default function SelectCategoryButton({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const [menuCategories, setMenuCategories] = useState<string[]>([]);

  useEffect(() => {}, []);
  return (
    <select value={selectedCategory} onChange={onChange}>
      <option value="">Select a category</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
