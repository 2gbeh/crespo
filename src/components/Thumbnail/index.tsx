import React from "react";
import { styles } from "./Thumbnail.service";

export type TThumbnail = {
  src: string;
  size?: number | readonly [width: number, height: number];
  radius?: number;
  fill?: boolean;
};

const Thumbnail = ({
  src,
  size = 160,
  radius = 5,
  fill = true,
}: TThumbnail) => {
  const [width, height] =
    typeof size === "number" ? [size, size] : [size[0], size[1]];
  //
  return (
    <figure {...styles.figure(width, height, radius)}>
      <img
        src={src}
        alt=""
        // width={500}
        // height={500}
        style={{
          width,
          height,
          objectFit: fill ? "cover" : "contain",
        }}
        // {...styles.img(width, height, fill)}
      />
    </figure>
  );
};

export default React.memo(Thumbnail);
