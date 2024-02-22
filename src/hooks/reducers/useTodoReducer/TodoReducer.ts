import {
  TTodo,
  TTodo_Read,
  EType,
  TPayload_Write,
  TPayload,
  TState,
  TAction,
} from "./TodoReducer.type";

export default class TodoReducer {
  public constructor(private readonly s: TState) {}
  //
  protected autoIncrement = (): number =>
    this.s.length > 0 ? this.s[this.s.length - 1].id + 1 : 1;

  public findIndexById = (id: number) =>
    this.s.findIndex((prev) => prev.id == id);

  public newTask = (row: TTodo): TTodo_Read => ({
    ...row,
    done: Boolean(row.done),
    id: this.autoIncrement(),
  });
  //
  public doGet(payload: TPayload): TState {
    let p = payload as number;
    return this.s.filter((prev) => prev.id == p);
  }

  public doPost(payload: TPayload): TState {
    let p = <TTodo>payload;
    return [...this.s, this.newTask(p)];
  }

  public doPatch(payload: TPayload): TState {
    let p = payload as number;
    let i = this.findIndexById(p);
    let data = [...this.s];
    i > -1 && (data[i] = { ...data[i], done: !data[i]["done"] });
    return data;
  }

  public doPut(payload: TPayload): TState {
    let p = <TPayload_Write>payload;
    let i = this.findIndexById(p.id);
    let data = [...this.s];
    i > -1
      ? (data[i] = { ...data[i], ...p.body })
      : data.push(this.newTask(p.body));
    return data;
  }

  public doDelete(payload: TPayload): TState {
    let p = payload as number;
    return this.s.filter((prev) => prev.id != p);
  }
}