import Image, { type ImageProps } from "next/image";
import type { FC } from "react";
import { cn } from "~/lib/cva";

interface NextImageProps extends ImageProps {
  className?: string;
  imageClassName?: string;
  sizes: string;
}

export const NextImage: FC<NextImageProps> = ({
  className,
  sizes,
  imageClassName,
  ...props
}) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        className={cn("absolute inset-0  object-cover  ",imageClassName)}
        fill
        sizes={sizes}
        {...props}
        alt={props.alt}
      />
    </div>
  );
};
