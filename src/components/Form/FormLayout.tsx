import React from "react";
import * as Flex from "../_styled/Flex.module";

type TFormLayout = { children: React.ReactNode };

const FormLayout = ({ children }: TFormLayout) => {
  return (
    <Flex.CenterBetween $nowrap>
      {React.Children.map(children, (child) => (
        <div className="flex-1">{child}</div>
      ))}
    </Flex.CenterBetween>
  );
};

export default React.memo(FormLayout);
