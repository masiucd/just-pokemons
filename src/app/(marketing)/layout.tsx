import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

const MarketingLayout = ({children}: Props) => {
  return <>{children}</>;
};

export default MarketingLayout;
