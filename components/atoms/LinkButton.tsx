import Link from "next/link";

interface LinkButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function LinkButton({
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
