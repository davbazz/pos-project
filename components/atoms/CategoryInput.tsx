import { forwardRef } from 'react'

interface CategoryInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CategoryInput = forwardRef<HTMLInputElement, CategoryInputProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        className="removeOnOusideClick rounded-[32px] whitespace-nowrap text-base px-6 py-[10px] bg-transparent text-secondary border-[1px] border-linear hover:bg-white outline-primary"
        {...props}
      />
    )
  },
)

export default CategoryInput
