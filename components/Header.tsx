import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from 'next-themes'
import Link from "next/link";
import Search from "@/components/Search";

function Header() {

  const { theme, setTheme } = useTheme()

  return (
    <header className="not-prose px-2 sm:px-4 py-2.5 w-full p-2">

      <div className="container flex flex-wrap items-center justify-between mx-auto ">

        <Link href="/" className="mx-auto block font-semibold dark:text-white">PK's Blog </Link>


        <ul className="mx-auto flex flex-wrap p-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">


          <li className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-400 dark:hover:text-blue-400 rounded md:p-0 dark:text-white" aria-current="page">
            <Search/>
          </li>

          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-400 dark:hover:text-blue-400 md:p-0 dark:text-white" aria-current="page">
              <FaTwitter size={28} />
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded  hover:text-blue-400 dark:hover:text-blue-400 md:p-0 dark:text-white"> 
            <FaFacebook size={28}/>
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-400 dark:hover:text-blue-400 md:p-0 dark:text-white">
              <FaLinkedin size={28} />
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-400 dark:hover:text-blue-400 md:p-0 dark:text-white">
              <FaInstagram size={28} />
            </Link>
          </li>
          <li >
            <button className="block py-2 pl-3 pr-4 rounded md:p-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <FaSun size={28} /> : <FaRegMoon size={28} />}
            </button>
          </li>
        </ul>

      </div>

    </header>
  )

}
export default Header
