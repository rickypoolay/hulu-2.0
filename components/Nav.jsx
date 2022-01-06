import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 space-x-5 text-2xl sm:px-20 whitespace-nowrap sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="transition duration-100 cursor-pointer hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
