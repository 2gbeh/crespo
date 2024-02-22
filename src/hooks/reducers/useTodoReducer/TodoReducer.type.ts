export type TTodo = {
  task: string;
  done?: boolean;
};

export type TTodo_Read = TTodo & { id: number };

export enum EType {
  Get = "GET",
  Post = "POST",
  Patch = "PATCH", // toggle
  Put = "PUT", // edit
  Delete = "DELETE",
}

export type TPayload_Write = {
  id: number;
  body: TTodo;
};

export type TPayload = number | TTodo | TPayload_Write;

export type TState = TTodo_Read[];

export type TAction = {
  type: EType;
  payload: TPayload;
};

export const mockTodos: TState = [
  {
    id: 1,
    task: "Odara TV w/Next",
    done: true,
  },
  {
    id: 2,
    task: "ZEntry w/Laravel",
    done: true,
  },
  {
    id: 3,
    task: "Fedora w/Expo",
    done: false,
  },
];