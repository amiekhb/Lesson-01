import NavButtons from "./nav-buttons";
const Header = () => {
  return (
    <div className=" m-20 flex  justify-between ">
      <h1 className="font-black text-3xl">TOM</h1>
      <div className="flex items-center">
        {" "}
        <ul className="flex gap-5 text-gray-600 mr-10">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <div className="border-l border-gray-600 ">
          <div className=" flex items-center ml-10 gap-5">
            <NavButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
