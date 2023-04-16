import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../images/logo.jpg'

function NavBar() {
    return (
        <div className="selection:text-white selection:bg-[#97D9BD]">
            <nav className="bg-zinc-600 bg-opacity-20 w-full h-[60px] flex">
                <div className="m-2 ml-10 flex cursor-pointer">
                    <img src={Logo} alt="Logo not found" className="rounded-full w-10 h-10" />
                    <h1 className="text-4xl font-['Poppins'] ml-2 font-bold text-white">PORTFOLIO.</h1>
                </div>
                <div className="absolute inset-y-3 right-10 flex">
                    <a className="text-lg font-normal ml-10 text-white hover:text-emerald-500 duration-200"><Link to="/">Home</Link></a>
                    <a className="text-lg font-normal ml-10 text-white hover:text-emerald-500 duration-200"><Link to="/projects">Projects</Link></a>
                    <a className="text-lg font-normal ml-10 text-white hover:text-emerald-500 duration-200"><Link to="/contact">Contact</Link></a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;