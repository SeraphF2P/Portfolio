"use client";

import { motion as m } from "framer-motion";

type LllineProps = {};

export const Llline = ({}: LllineProps) => {
  return (
    <svg
      className=" absolute -z-10"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 800 400"
    >
      <m.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        d="M262.5447998046875,110.57347869873047C211.4695307413737,130.5854237874349,44.802858988444015,162.24611155192056,109.3189926147461,170.60931396484375C173.83512624104816,178.97251637776694,416.6666742960612,107.5866190592448,456.09320068359375,135.6630859375C495.5197270711263,163.73955281575522,177.12068684895834,246.77420043945312,227.59857177734375,254.83871459960938C278.0764567057292,262.9032287597656,517.9211222330729,152.38948567708334,607.52685546875,159.85662841796875C697.1325887044271,167.32377115885416,475.50775146484375,244.38470458984375,496.415771484375,277.2401428222656C517.3237915039062,310.0955810546875,633.5125732421875,244.38471476236978,670.2509155273438,258.4229431152344C706.9892578125,272.46117146809894,627.8375040690104,299.04419962565106,606.6307983398438,319.3548278808594"
        fill="none"
        strokeWidth="20"
        stroke='url("#SvgjsLinearGradient1001")'
        strokeLinecap="round"
        strokeDasharray="0 0"
      ></m.path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1001">
          <stop stopColor="hsl(265, 55%, 30%)" offset="0"></stop>
          <stop stopColor="hsl(265, 55%, 60%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
