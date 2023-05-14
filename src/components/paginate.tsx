import {Icons} from "./icons";

interface Props {
  goNext: () => void;
  goPrevious: () => void;
}

const Paginate = ({goNext, goPrevious}: Props) => {
  return (
    <div className="flex justify-end gap-5  px-1 py-2">
      <button
        onClick={async () => {
          goPrevious();
        }}
      >
        <span>
          <span>
            <Icons.chevronFirst />
          </span>
        </span>
      </button>
      <button
        onClick={async () => {
          goNext();
        }}
      >
        <span>
          <Icons.chevronLast />
        </span>
      </button>
    </div>
  );
};

export default Paginate;
