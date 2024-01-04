import c from "tailwindcss/colors"
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

import { hexToHSL } from "../utils"

export const shadcnPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ":root": {
        "--background": hexToHSL(c.slate["900"]),
        "--foreground": hexToHSL(c.slate["200"]),
        "--accent": hexToHSL(c.indigo["600"]),
        "--accent-foreground": hexToHSL(c.slate["200"]),
        "--popover": hexToHSL(c.red["400"]),
        "--popover-foreground": hexToHSL(c.red["800"]),
        "--border": hexToHSL(c.slate["500"]),
        "--input": hexToHSL(c.slate["600"]),
        "--primary": hexToHSL(c.indigo["700"]),
        "--primary-foreground": hexToHSL(c.slate["100"]),
        "--secondary": hexToHSL(c.sky["500"]),
        "--secondary-foreground": hexToHSL(c.slate["100"]),
        "--destructive": hexToHSL(c.red["600"]),
        "--destructive-foreground": hexToHSL(c.slate["300"]),
        "--ring": hexToHSL(c.slate["600"]),
        "--radius": "0.5rem",
      },
    }),
      addBase({
        "*": {
          " @apply border-border": {},
        },
        body: {
          "@apply bg-background text-foreground": {},
          "font-feature-settings": '"rlig" 1, "calt" 1',
        },
      }),
      addUtilities({
        ".remove-scroll-bar": {
          "scroll-behavior": "smooth",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".remove-scroll-bar::-webkit-scrollbar": {
          display: "none",
        },
        ".custom_scrollBar": {
          "@apply scrollbar-track-primary/40 scrollbar-w-1  scrollbar  remove-scroll-bar scrollbar-thumb-primary scrollbar-thumb-rounded-full": {}
        }

      })
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border),<alpha-value>)",
          input: "hsl(var(--input),<alpha-value>)",
          ring: "hsl(var(--ring),<alpha-value>)",
          background: "hsl(var(--background),<alpha-value>)",
          foreground: "hsl(var(--foreground),<alpha-value>)",
          primary: {
            DEFAULT: "hsl(var(--primary),<alpha-value>)",
            foreground: "hsl(var(--primary-foreground),<alpha-value>)",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary),<alpha-value>)",
            foreground: "hsl(var(--secondary-foreground),<alpha-value>)",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive),<alpha-value>)",
            foreground: "hsl(var(--destructive-foreground),<alpha-value>)",
          },
          accent: {
            DEFAULT: "hsl(var(--accent),<alpha-value>)",
            foreground: "hsl(var(--accent-foreground),<alpha-value>)",
          },
          popover: {
            DEFAULT: "hsl(var(--popover),<alpha-value>)",
            foreground: "hsl(var(--popover-foreground),<alpha-value>)",
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
          outfit: ["var(--font-outfit)", ...fontFamily.sans],
        },
        screens: {
          mn: "420px",
          xs: "576px",
        },
        gridAutoColumns: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        gridAutoRows: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          reset: {
            "50%": {
              transform:
                "translate(0,0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);",
            },
            "0%,100%": {
              transform:
                "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          reset: "reset var(--reset-duration) infinite var(--reset-delay)",
        },
      },
    },
  }
)
