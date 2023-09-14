const NavBar = () => {
  return (
    <>
      {/* <div className="bg-indigo-500">
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
      </div> */}
      <div className="navbar bg-sky-100">
        <div className="flex">
          <a className="btn btn-ghost normal-case text-xl">Logo</a>
        </div>
        <div>
          Explorar
        </div>
        <div className="flex-none gap-5">
          <label class="relative block">
            {/* <span class="sr-only">Search</span> */}
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

            </span>
            <input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:border-none focus:outline-none  sm:text-sm" placeholder="Buscar" type="text" name="search" />
          </label>
        </div>
        <div className="">Raise Money</div>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn m-1 bg-inherit hover:bg-inherit">Learn</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Links a conversar con david</a></li>
            <li><a>Links a conversar con david</a></li>
            <li><a>Links a conversar con david</a></li>
            <li><a>Links a conversar con david</a></li>
            <li><a>Links a conversar con david</a></li>
            <li><a>Links a conversar con david</a></li>
            <li><a>Links a conversar con david</a></li>
          </ul>
        </div>
        <div>
          <div className="">Iniciar Sesión</div>
          <div className="">Registrarse</div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
