import { Book } from "lucide-react"
import { House } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
        <div className="avatar">
            <div className="w-10">
                <img src="logo.png" alt="" />
            </div>
        </div>
        <span>Kitchen Tales</span>
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to={'/'}>
        <House />
        <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/resep'}>
        <Book />
        <span>Recipe</span>
        </NavLink>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar