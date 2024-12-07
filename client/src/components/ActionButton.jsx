import { MdArrowForwardIos } from "react-icons/md";

const ActionButton = ({ text }) => {
  return (
    <div className="p-4 bg-[--green] w-fit inline-flex rounded-md border-2 border-[--background] items-center gap-5 hover:bg-[--background] hover:border-[--green] transition-all">
      <span className="text-white font-bold">{text}</span>
      <div className="p-1 bg-white rounded-md">
        <MdArrowForwardIos color="green" />
      </div>
    </div>
  );
};

export default ActionButton;
