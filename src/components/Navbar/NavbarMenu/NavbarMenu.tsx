import React from "react";
import { NavLink } from "react-router-dom";
import items from "./items";
import styles from "./NavbarMenu.module.scss"

interface INavbarMenu {
    isActive: boolean,
    isPending: boolean
}

const NavbarMenu = () => {

    const getClassName = (props: INavbarMenu) => {
        const {isActive} = props;
        return isActive ? `${styles.link} ${styles.isActive}` : styles.link
    };

    const elements = items.map(({id, text, to}) => (
            <li className={styles.item} key={id}>
                <NavLink className={getClassName} to={to} end>{text}</NavLink>
            </li>
        ))
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
};

export default NavbarMenu;