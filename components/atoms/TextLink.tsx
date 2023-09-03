import Link from "next/link";

interface TextLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function TextLink({ href, children, ...props }: TextLinkProps) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
