import { forwardRef } from "react";

interface CategoryInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CategoryInput = forwardRef<HTMLInputElement, CategoryInputProps>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  }
);

export default CategoryInput;
