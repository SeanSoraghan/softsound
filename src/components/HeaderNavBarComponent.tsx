import React from "react"
import * as SC from "../components/styled-components"
import NavItem from "./NavItem";

interface HeaderNavBarProps
{
    currentItemName: string;
}

const HeaderNavBar = (props: HeaderNavBarProps) => (
    <SC.NavBarWrapper>
        <SC.NavBarMainPage>
            <NavItem currentItemName={props.currentItemName} itemName="softsound" />
        </SC.NavBarMainPage>
        <SC.NavBarSubPagesWrapper>
            <NavItem currentItemName={props.currentItemName} itemName="about" />
            <NavItem currentItemName={props.currentItemName} itemName="projects" />
        </SC.NavBarSubPagesWrapper>
    </SC.NavBarWrapper>
);

export default HeaderNavBar;
