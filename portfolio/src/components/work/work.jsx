import { RiShareBoxLine } from "react-icons/ri";
const Work = ({ zurag, project_name, project, tools }) => {
  return (
    <div>
      <div className="flex mx-36 mt-12">
        <div className="bg-gray-100 flex-1 justify-center items-center">
          <img className=" h-[384px] w-[480px]" src={zurag} alt="zurag" />
        </div>

        <div className=" bg-pink-300 flex-1">
          <h1>{project_name}</h1>
          <p>{project}</p>
          <div>{tools}</div>
          <button>
            <RiShareBoxLine />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Work;
