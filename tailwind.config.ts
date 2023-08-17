import typography from "@tailwindcss/typography"
import twScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"

import { shadcnPlugin } from "./lib/tw-plugins/shadcnPlugin"

const config = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  plugins: [shadcnPlugin, twScrollbar({ nocompatible: true }), typography],
} satisfies Config
export default config
