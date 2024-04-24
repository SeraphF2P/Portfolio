import { ComponentPropsWithoutRef } from "react";
import { cn } from "~/lib/cva";

export const Shape = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"svg">) => {
  return (
    <div className={cn(" ", className)}>
      <div className=" ">{children}</div>
    </div>
  );
};
