import { useContext } from 'react'
import { SelectedCategoryContext } from '@/components/providers/SelectedCategoryProvider'

interface MainButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string
  cssSet: 'categorySet' | 'cartSet' | 'productSet' | 'authSet' | 'newProdSet'
  onClick?: (e: any) => any
}

export default function MainButton({
  children,
  cssSet,
  onClick,
}: MainButtonProps) {
  const { selectedCategory } = useContext(SelectedCategoryContext) as {
    selectedCategory: string
  }

  const cartSet = `text-white text-[12px] px-6 py-[10px] bg-primary hover:bg-softPrimary`

  const categorySet = `text-base px-6 py-[10px] ${
    children === selectedCategory
      ? 'bg-primary text-white border-[1px] border-primary'
      : 'bg-transparent text-secondary border-[1px] border-linear hover:bg-white'
  }`

  const productSet = `text-white bg-primary hover:bg-softPrimary px-6 py-2 text-sm w-[calc(65%-12px)]`

  const newProdSet = `text-sm px-6 py-[10px] bg-transparent text-secondary border-[1px] border-linear hover:bg-secondary hover:text-white`

  return (
    <button
      onClick={onClick}
      className={`rounded-[32px] whitespace-nowrap ${
        cssSet === 'categorySet' && categorySet
      } ${cssSet === 'cartSet' && cartSet} ${
        cssSet === 'productSet' && productSet
      } ${cssSet === 'newProdSet' && newProdSet}`}
    >
      {children}
    </button>
  )
}
