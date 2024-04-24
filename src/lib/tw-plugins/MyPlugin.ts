import plugin from "tailwindcss/plugin";
export const MyPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ":root": {
        "--neutral": "30,41,59",
        "--neutral-hover": "63,63,70",
        "--neutral-revert": "226,232,240",
        "--primary": "135,43,229",
        "--primary-contant": "255,255,255",
        "--primary-hover": "161,88,235",
        "--secondary": "43,137,229",
        "--secondary-hover": "24,111,197",
        "--alert": "229,43,43",
        "--alert-hover": "220,70,70",
        "--success": "43,229,43",
        "--success-hover": "110,231,183",//? emerald 300
        "--info": "8,145,178", //? cyan 600 
        "--info-hover": "28,165,198",
        "--warn": "245,158,11",
        "--warn-hover": "245,178,31"

      },
      "::-ms-reveal": {
        filter: "invert(100%)"
      }
    });
    addBase({
      body: {
        "@apply bg-neutral  h-svh text-neutral-revert": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
      h1: { "@apply capitalize text-2xl": {} },
      h2: { "@apply capitalize text-xl": {} },
      h3: { "@apply capitalize text-lg": {} },
      h4: { "@apply capitalize text-base": {} },
      p: { "@apply text-sm": {} },
      li: { "@apply list-none": {} },
      a: { "@apply !text-current": {} },

    });
    addUtilities({
      ".remove-scroll-bar": {
        "scroll-behavior": "smooth",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
      ".remove-scroll-bar::-webkit-scrollbar": {
        display: "none",
      },
      ".scrollbar::-webkit-scrollbar": {
        width: "8px"
      },
      ".scrollbar::-webkit-scrollbar-track": {
        "border-radius": "100vh",
        background: "black"
      },
      ".scrollbar::-webkit-scrollbar-thumb": {
        background: "rgb(var(--primary))",
        "border-radius": "100vh"
      },
      ".scrollbar::-webkit-scrollbar-thumb:hover": {
        background: "rgb(var(--primary-hover))",
        width: "16px"
      },
      '.backface-visible': {
        'backface-visibility': 'visible',
        '-moz-backface-visibility': 'visible',
        '-webkit-backface-visibility': 'visible',
        '-ms-backface-visibility': 'visible'
      },
      '.backface-hidden': {
        'backface-visibility': 'hidden',
        '-moz-backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden',
        '-ms-backface-visibility': 'hidden'
      },
      ".text-border": {
        "text-shadow":
          `-1px -1px 0 rgb(var(--neutral-revert)),
            1px -1px 0 rgb(var(--neutral-revert)),
           -1px 1px 0 rgb(var(--neutral-revert)),
            1px 1px 0 rgb(var(--neutral-revert))`
      },
    });
  },
  {
    theme: {

      fontFamily: {
        inter: ["var(--font-inter)"],
        outfit: ["var(--font-outfit)"]
      },
      extend: {
        colors: {
          neutral: "rgb(var(--neutral),<alpha-value>)",
          "neutral-revert": "rgb(var(--neutral-revert),<alpha-value>)",
          primary: "rgb(var(--primary),<alpha-value>)",
          "primary-hover": "rgb(var(--primary-hover),<alpha-value>)",
          "primary-contant": "rgb(var(----primary-contant),<alpha-value>)",
          variant: "rgb(var(--variant,0,0,0),<alpha-value>)",
          alert: "rgb(var(--alert),<alpha-value>)",
          "alert-hover": "rgb(var(--alert-hover),<alpha-value>)",
          success: "rgb(var(--success),<alpha-value>)",
          "success-hover": "rgb(var(--success-hover),<alpha-value>)",
          secondary: "rgb(var(--secondary),<alpha-value>)",
          "secondary-hover": "rgb(var(--secondary-hover),<alpha-value>)",
          info: "rgb(var(--info),<alpha-value>)",
          "info-hover": "rgb(var(--info-hover),<alpha-value>)",
          warn: "rgb(var(--warn),<alpha-value>)",
          "warn-hover": "rgb(var(--warn-hover),<alpha-value>)",
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
        animation: {
          reset: "reset var(--reset-duration) infinite var(--reset-delay)",
          fadein:
            "fadein var(--fadein-duration,0.3s) forwards  var(--fadein-delay,0s)",
          fadeout:
            "fadeout var(--fadeout-duration,0.3s) forwards var(--fadeout-delay,0s)",
          buzz: "buzz 2s infinite linear  ",
          slideDown: "slideDown 0.3s forwards linear  ",
          slideUp: "slideUp 0.3s forwards linear  ",
        },
        keyframes: {
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
          fadein: {
            to: {
              opacity: "var(--fadein-opacity,1)",
              transform:
                "translate(var(--fade-translate-x,0) , var(--fade-translate-y,0)) rotate(var(--fade-rotate)) skewX(var(--fade-skew-x,0)) skewY(var(--fade-skew-y,0)) scaleX(var(--fade-scale-x,1)) scaleY(var(--fade-scale-y,1));",
            },
          },
          fadeout: {
            from: {
              opacity: "var(--fadeout-opacity,1)",
              transform:
                "translate(var(--fade-translate-x,0) , var(--fade-translate-y,0)) rotate(var(--fade-rotate)) skewX(var(--fade-skew-x,0)) skewY(var(--fade-skew-y,0)) scaleX(var(--fade-scale-x,1)) scaleY(var(--fade-scale-y,1));",
            },
          },
          buzz: {
            "0%,20%,40%,60%,80%,100%": {
              transform:
                "rotate(0deg) ",
            },
            "10%,50%": {
              transform:
                "rotate(-12.5deg) ",
            },
            "30%,70%": {
              transform:
                "rotate(12.5deg)",
            },
          },
          slideDown: {
            from: {
              height: "0"
            },
            to: {
              height: "var(--radix-collapsible-content-height)"
            }
          }
          , slideUp: {
            from: {
              height: "var(--radix-collapsible-content-height)"
            },
            to: {
              height: "0"
            }
          }
        },
      },
    },
  });
export default MyPlugin;
