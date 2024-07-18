const Header = () => {
  return (
    <header
      style={{
        color: "white",
        display: "flex",
        height: "80px",
        backgroundColor: "#333",
      }}
    >
      <img src="url" alt="logo" />
      <div>
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
