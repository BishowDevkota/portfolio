import { MdArrowForwardIos } from "react-icons/md";

const ActionButton = () => {
  return (
    <div className="p-4 bg-[--green] inline-flex rounded-md items-center gap-5">
      <span className="text-white">Getting Started</span>
      <div className="p-1 bg-white rounded-md">
        <MdArrowForwardIos color="green" />
      </div>
    </div>
  );
};

export default ActionButton;
