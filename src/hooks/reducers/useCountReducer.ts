import React from "react";

enum EType {
  Increase = "increase",
  Decrease = "decrease",
}

type TPayload = number | undefined;

type TAction = {
  type: EType;
  payload?: TPayload;
};

export default function useCountReducer(initialArg: TPayload = 0) {
  const [count, dispatch] = React.useReducer(
    (state: number, { type, payload }: TAction) => {
      // console.log("🚀 ~ useCountReducer ~ state:", state);
      switch (type) {
        case EType.Increase:
          return payload ? state + payload : state + 1;
        case EType.Decrease:
          return payload ? state - payload : state - 1;
        default:
          return state;
      }
    },
    initialArg,
  );

  // step value (+1)
  const increaseCount = (payload?: TPayload) =>
    dispatch({ type: EType.Increase, payload });

  // step value (-1)
  const decreaseCount = (payload?: TPayload) =>
    dispatch({ type: EType.Decrease, payload });

  return {
    count,
    increaseCount,
    decreaseCount,
  };
}