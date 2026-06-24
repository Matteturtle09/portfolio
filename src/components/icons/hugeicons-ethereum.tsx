import * as React from "react";

export function EthereumIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m19 12l-5.76 2.578c-.611.281-.917.422-1.24.422s-.629-.14-1.24-.422L5 12m14 0c0-.532-.306-1-.917-1.937L14.58 4.696C13.406 2.899 12.82 2 12 2s-1.406.899-2.58 2.696l-3.503 5.368C5.305 11 5 11.468 5 12m14 0c0 .532-.306 1-.917 1.936l-3.503 5.368C13.406 21.1 12.82 22 12 22s-1.406-.899-2.58-2.696l-3.503-5.368C5.305 13 5 12.532 5 12"/>
    </svg>
  );
}
