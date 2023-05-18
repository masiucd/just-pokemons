import {type ReactNode} from "react";

interface Props {
  children: ReactNode;
}
function Label({children}: Props) {
  return <strong className="text-xl capitalize">{children}</strong>;
}

export default Label;
