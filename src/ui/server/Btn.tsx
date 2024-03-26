import { ElementRef, forwardRef, type ComponentPropsWithoutRef } from "react"
import { cn, variants, type variantsType } from "~/lib/cva"

export interface BtnProps
  extends ComponentPropsWithoutRef<"button">,
    variantsType {}

export const Btn = forwardRef<ElementRef<"button">, BtnProps>(
  ({ className, variant, children, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={cn(variants({ variant }), className)}
      >
        {children}
      </button>
    )
  }
)
Btn.displayName = "Btn"
