import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";
import { cn, variantsType, variants } from "~/lib/cva";

interface NextLinkProps extends LinkProps, variantsType {
  className?: string;
  children: ReactNode;
}

export const NextLink: FC<NextLinkProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <Link
      className={cn(
        variants({
          variant: variant || "none",
          className: "cursor-pointer",
        }),
        className,
      )}
      {...props}
    />
  );
};
