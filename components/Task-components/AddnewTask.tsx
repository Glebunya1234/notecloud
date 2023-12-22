import { useContext, useState } from "react";

import { AddNewTaskInBlock } from "@services/Firebase-Methods/Task-Management-methods";

import { HiOutlinePlusSm } from "react-icons/hi";

import { showErrorToast, showSuccessToast } from "@/components";
import { UpdateArray } from "../Context";

const AddNewTaskComnponent: React.FC<{
  id: string;
  nameBlock: string;
}> = ({ id, nameBlock }) => {
  const [taskname, setTaskname] = useState("");
  const updateContext = useContext(UpdateArray);

  const handleClickAddButton = () => {
    setTaskname("");
    if (taskname.trim() !== "" && nameBlock.trim() !== "") {
      AddNewTaskInBlock(id, nameBlock, taskname).then(() => {
        updateContext?.onTaskAdded();
        showSuccessToast("The task has been created!");
      });
    } else {
      showErrorToast("The task was not created!");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name task"
        className="input input-bordered input-xs w-full bg-bg-mygrey max-w-4xl  py-2 ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
        onChange={(e) => {
          setTaskname(e.target.value);
        }}
        value={taskname}
      />
      <button
        className="btn btn-circle btn-xs mx-1"
        onClick={handleClickAddButton}
      >
        <HiOutlinePlusSm style={{ fontSize: "18px" }} />
      </button>
    </>
  );
};
export default AddNewTaskComnponent;
