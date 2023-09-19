import { useState } from "react";
import Link from "../../Link/Link";
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/products/:id', name: 'ProductDetail' },
        { id: 6, path: '/profile', name: 'Profile' },
    ];

    return (
        <nav className="bg-orange-400 p-5 shadow-lg ">
            <div className="md:hidden text-4xl " onClick={() => { setOpen(!open) }}>
                {open === true ?
                    <CgCloseR ></CgCloseR>
                    : <GiHamburgerMenu ></GiHamburgerMenu>
                }

            </div>

            <ul className={` absolute md:static duration-1000 md:flex ${open ? ' top-20' : ' -top-60'} bg-orange-400 p-5 shadow-2xl md:shadow-none rounded-lg `}>
                {
                    routes.map((route) => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav >
    );
};

export default NavBar;