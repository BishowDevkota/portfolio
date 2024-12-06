import { MdArrowForwardIos } from "react-icons/md";

const ActionButton = () => {
    return (
        <div className="p-4 bg-[--green] border-[--background] border-2 inline-flex rounded-md items-center gap-5 w-max hover:bg-[--background] hover:text-[--green] hover:border-[--green] cursor-pointer transition-all"><span className="text-white font-bold">GETTING STARTED</span>
            <div className="p-1 bg-white rounded-md">
                <MdArrowForwardIos color="green" />
            </div>
        </div>
    )
}

export default ActionButton
