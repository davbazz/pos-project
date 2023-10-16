interface MainHeaderType extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function MainHeader({ children, ...props }: MainHeaderType) {
  return (
    <h2 className="text-2xl text-secondary" {...props}>
      {children}
    </h2>
  );
}
