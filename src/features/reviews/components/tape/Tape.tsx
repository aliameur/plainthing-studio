import { FC } from "react";
import clsx from "clsx";

interface TapeProps {
  className: string;
}

export const Tape: FC<TapeProps> = ({ className }) => {
  return (
    <div className={clsx("", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ width: "100%", height: "100%" }}
        viewBox="0 0 147 97"
        preserveAspectRatio="none"
        width="206"
        height="136"
      >
        <defs>
          <svg
            width="147"
            height="97"
            viewBox="-1 -1 147 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg711178783_266"
          >
            <path
              d="M145 60L34 0H22.5L18.5 6H12V17.5H7L4.5 19.5L9 21L0 26.5L3.5 29.5L128 95L134.5 89.5V80.5L132 75L138.5 73V68L145 60Z"
              fill="#FFFFFF"
              fillOpacity="0.1"
            ></path>
          </svg>
        </defs>
        <g>
          <path
            d="M145 60L34 0H22.5L18.5 6H12V17.5H7L4.5 19.5L9 21L0 26.5L3.5 29.5L128 95L134.5 89.5V80.5L132 75L138.5 73V68L145 60Z"
            fill="#FFFFFF"
            fillOpacity="0.1"
          ></path>
        </g>
      </svg>
    </div>
  );
};
