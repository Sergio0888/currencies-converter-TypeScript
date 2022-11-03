import React from 'react';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import styles from "./Navbar.module.scss";

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <NavbarMenu />
            </div>
        </nav>
    )
};

export default Navbar;