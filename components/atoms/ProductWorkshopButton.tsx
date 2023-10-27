interface ProductWorkshopButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | number
  onClick?: (e: any) => any
  cssSet: 'save' | 'delete'
}

export default function ProductWorkshopButton({
  children,
  onClick,
  cssSet,
}: ProductWorkshopButtonProps) {
  const saveSet = `text-success bg-success/10 border-success/40 hover:bg-success/20`
  const deleteSet = `text-error bg-error/10 border-error/40 hover:bg-error/20`

  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-[32px] border-[1px] ${
        cssSet === 'save' && saveSet
      } ${cssSet === 'delete' && deleteSet}`}
    >
      {children}
    </button>
  )
}
