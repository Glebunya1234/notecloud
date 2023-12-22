import ButtonAddBlock from "@/components/Buttons/DropDown-Buttons/EditDropDownBlock-Button/ButtonAddBlock";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";
import { ButtonDellBlock, ButtonEditBlock, showSuccessToast } from "@/components";
import { UpdatePriority } from "@/services/Firebase-Methods/Task-Management-methods";

const PriorityButton: React.FC<{
  priorityButtonName:string
  id: string;
  blockName: string;
  titleTodos: string;

  onTaskAdded: () => void;
}> = ({priorityButtonName, id, blockName, titleTodos, onTaskAdded }) => {
  const handlClickPriority = () => {
    UpdatePriority(id, blockName, titleTodos, priorityButtonName).then(() => {
      onTaskAdded();
      showSuccessToast("The Block has been created!");
    });
  };

  return (
    <button className="flex badge badge-xs w-full" onClick={handlClickPriority}>
      {priorityButtonName}
    </button>
  );
};
export default PriorityButton;
{
  /* <button className="flex badge badge-xs w-full">medium priority</button> */
}

{
  /* <button className="flex badge badge-xs w-full">low priority</button> */
}
