import React from "react";
import clsx from "clsx";

const GridContainer = ({
  children,
  cols = 3,
}: {
  children: React.ReactNode;
  cols?: number;
}) => {
  return (
    <div
      className={clsx(
        cols === 1 && `grid-cols-1`,
        cols === 2 && `grid-cols-2`,
        cols === 3 && `grid-cols-3`,
        cols === 4 && `grid-cols-4`,
        "mt-5 mx-5 grid gap-5 place-items-center"
      )}
    >
      {children}
    </div>
  );
};

export default React.memo(GridContainer);

export const GridItem = ({
  children,
  flex = false,
  show = false,
}: {
  children: React.ReactNode;
  flex?: boolean;
  show?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "w-[100px] h-[100px]",
        show && "border",
        flex && "flex flex-col flex-wrap items-center justify-center"
      )}
    >
      {children}
    </div>
  );
};
