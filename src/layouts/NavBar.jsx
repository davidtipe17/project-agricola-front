const NavBar = () => {
  return (
    <>
      <div className="bg-indigo-500">
        <div className="flex mx-5 py-3">
          <div>
            logo
          </div>
          <ul className="flex">
            <li>Explorar</li>
            <li><input type="text" placeholder="Buscar" /></li>
          </ul>
          <ul className="flex gap-10 ">
            <li>Home</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavBar;
