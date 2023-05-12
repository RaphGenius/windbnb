import { AiFillStar } from "react-icons/ai";

type Props = {
  note: number;
};

function Note({ note }: Props) {
  return (
    <div className="flex items-center text-sizeMiddle02 ">
      <span className="text-mainOrange">
        <AiFillStar />
      </span>
      <span className="ml-2">{note}</span>
    </div>
  );
}

export default Note;
