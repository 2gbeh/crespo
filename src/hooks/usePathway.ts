import { useLocation } from "react-router-dom";

type intStrType = number | string;

export default function usePathway() {
  // /dashboard/orders/1/
  const { pathname } = useLocation();
  // console.log("🚀 ~ usePathway ~ pathname:", pathname);

  // /:id?page=2
  const push = (params: intStrType) => {
    let p = stripSlash(pathname);
    let q = stripSlash(params, true);
    return p + "/" + q;
  };

  // 1 | /orders
  const pop = (params: intStrType = 1) => {
    let p = stripSlash(pathname);
    let arr = p.split("/");
    if (typeof params === "number") {
      for (let i = 1; i <= params; i++) arr.pop();
      return arr.join("/");
    } else {
      return p.replaceAll(params, "");
    }
  };

  return { pathname: stripSlash(pathname), push, pop };
}

const stripSlash = (path: intStrType, fromStart: boolean = false) => {
  let p = path.toString();
  return fromStart
    ? p.slice(0, 1) == "/"
      ? p.slice(1)
      : p
    : p.slice(-1) == "/"
      ? p.slice(0, -1)
      : p;
};
