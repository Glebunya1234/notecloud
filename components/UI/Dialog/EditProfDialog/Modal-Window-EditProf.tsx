import { FiCheck } from "react-icons/fi";

const ModalEditProf = () => {
    return(
        <dialog id="ModalEditProf" className="modal">
              <div className="modal-box bg-bg-mygrey">
                <h3 className="font-bold text-lg mb-2 ">
                  Fast edit your profile
                </h3>

                {/* Первая пара инпута и кнопки */}
                <span className="label-text">Edit your name</span>
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="New Name"
                    className="input input-ghost w-full bg-transparent max-w-4xl  ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
                  />
                  <button className="btn btn-square bg-transparent border-[#3a393c] ml-2 hover:bg-bg-mydurkgrey">
                    <FiCheck style={{ fontSize: "20px" }} />
                  </button>
                </div>
                <span className="label-text">Upload a photo...</span>
                {/* Вторая пара инпута и кнопки */}
                <div className="flex items-center">
                  <input
                    type="file"
                    className="file-input w-full bg-transparent max-w-4xl ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
                  />
                  <button className="btn btn-square bg-transparent border-[#3a393c]  ml-2 hover:bg-bg-mydurkgrey">
                    <FiCheck style={{ fontSize: "20px" }} />
                  </button>
                </div>

                {/* Текст ниже */}
                <p className="mt-5 text-xs text-right">
                  Press ESC key or click outside to close
                </p>
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
    )
}
export default ModalEditProf;