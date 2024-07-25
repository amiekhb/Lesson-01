const Skills = () => {
  return (
    <div>
      <div className=" p-20 flex flex-col gap-24">
        <div className="flex flex-col items-center gap-5">
          <p className="text-gray-600 bg-gray-200 rounded-xl text-center h-[28px] w-[105px]">
            Skills
          </p>
          <p className="text-gray-600">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="grid-cols-8">
          <img src="./zurag/Tech.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
