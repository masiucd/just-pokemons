import {ReactNode} from "react";

import {Icons} from "./icons";

interface Props {
  goNext: () => void;
  goPrevious: () => void;
  leftEnabled: boolean;
  rightEnabled: boolean;
}

interface PaginagtionButtonProps {
  changePage: () => void;
  disabled: boolean;
  icon: ReactNode;
}

function PaginationButton({
  changePage,
  disabled,
  icon,
}: PaginagtionButtonProps) {
  return (
    <button
      className="hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:opacity-40"
      disabled={disabled}
      onClick={() => {
        changePage();
      }}
    >
      <span>
        <span>{icon}</span>
      </span>
    </button>
  );
}

function Paginate({goNext, goPrevious, leftEnabled, rightEnabled}: Props) {
  return (
    <div className="flex justify-end gap-5  px-1 py-2">
      <PaginationButton
        changePage={goPrevious}
        disabled={!leftEnabled}
        icon={<Icons.chevronFirst />}
      />
      <PaginationButton
        changePage={goNext}
        disabled={!rightEnabled}
        icon={<Icons.chevronLast />}
      />
    </div>
  );
}

export default Paginate;
