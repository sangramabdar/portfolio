import cn from "@/utils/cn";
import React from "react";

function Button({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <button
      className={cn(
        "font-normal text-primary cursor-pointer py-2 px-4 md:text-xl bg-secondary rounded-md hover:bg-secondary/80 hover:text-t-primary active:ring-2 active:ring-white active:ring-offset-gray-200",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
