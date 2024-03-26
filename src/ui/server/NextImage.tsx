import Image, { type ImageProps } from "next/image";
import type { ElementType, FC } from "react";
import { cn } from "~/lib/cva";

interface NextImageProps extends ImageProps {
  className?: string;
  wrapperClassName?: string;
  resoloution?: { w: number; h: number };
  wrapper?: ElementType;
  sizes: string;
}

export const NextImage: FC<NextImageProps> = ({
  className,
  sizes,
  ...props
}) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        className={"absolute inset-0 object-cover "}
        fill
        sizes={sizes}
        {...props}
        alt={props.alt}
      />
    </div>
  );
};
