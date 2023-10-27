import { useState, createContext } from 'react'

interface SelectedCategoryContextType {
  selectedCategory: string | null
  setSelectedCategory: (newSelectedCategory: string | null) => void
}

export const SelectedCategoryContext =
  createContext<SelectedCategoryContextType | null>(null)

export default function SelectedCategoryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  )
}
