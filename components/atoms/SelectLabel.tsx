import { useContext } from 'react'
import { MenuCategoriesContext } from '@/components/providers/MenuCategoriesProvider'
import Flex from './Flex'
import Label from './Label'

interface SelectLabelProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  category: string
  setCategory: (newCategory: string) => void
}

export default function SelectLabel({
  category,
  setCategory,
}: SelectLabelProps) {
  const { menuCategories } = useContext(MenuCategoriesContext) as {
    menuCategories: string[]
  }

  return (
    <Flex className="flex-col gap-1">
      <Label htmlFor="category">Category</Label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="text-sm rounded-md border-[1px] border-linear px-4 py-2 focus:outline-primary bg-alternative"
      >
        {menuCategories?.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </Flex>
  )
}
