const Experience = ({ title, companyLogo, jobRoles }) => {
  return (
    <div className="flex justify-between h-40 w-[896px] drop-shadow-2xl rounded-xl m-auto mb-3">
      <div className="flex-1 bg-amber-600">
        <img src={companyLogo} alt="" />
      </div>
      <div className="flex-1 bg-emerald-800">
        <h1 className="font-bold text-2xl text-gray-900">{title}</h1>
        <ul>
          {jobRoles.map((role) => (
            <li>{role}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-fuchsia-200">
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};
export default Experience;
