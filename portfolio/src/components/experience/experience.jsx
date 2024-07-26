const ExperienceCard = ({ title, companyLogo, jobRoles }) => {
  return (
    <div className="bg-gray-50 h-96 ">
      {" "}
      <div className=" bg-white flex justify-between h-40 w-[896px] drop-shadow-2xl rounded-xl m-auto mb-3">
        <div className="flex-1">
          <img src={companyLogo} alt="" />
        </div>
        <div className="flex-1 ">
          <h1 className="font-bold text-2xl text-gray-900">{title}</h1>
          <ul>
            {jobRoles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-gray-700 ">
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
