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
  shape,
  deActivated,
  hover,
  ...props
}) => {
  return (
    <Link
      className={cn(
        variants({
          variant: variant || "none",
          shape,
          deActivated: deActivated ?? "link",
          hover: hover ?? "flicker",
          className: "cursor-pointer",
        }),
        className,
      )}
      {...props}
    />
  );
};
