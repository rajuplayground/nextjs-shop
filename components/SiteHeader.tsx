const navlist = [
    {
      path: "/shop",
      label: "Shop",
    },
    {
      path: "/blog",
      label: "Blog",
    },
    {
      path: "/about",
      label: "About",
    },
  ];

  const SiteHeader = () => {
    return (
      <header className="bg-gray-100">
        <div className="p-5 flex flex-col justify-between xsm:flex-row">
          <a href="/" className="font-cursive text-2xl">
            <span>🌭</span>sndwch
          </a>
          <nav>
            <ul className="flex gap-5 font-semibold text-2xl">
              {navlist.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  };

  export default SiteHeader;
