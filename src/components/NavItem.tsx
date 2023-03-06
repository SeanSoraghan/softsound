import React from "react"
import * as SC from "../components/styled-components"

interface NavItemProps
{
    currentItemName: string;
    itemName: string;
}

const NavItem = (props: NavItemProps) =>
{
    const isLink: boolean = props.currentItemName != props.itemName;
    return (
        <>{isLink ? (<SC.StyledLink to={"/" + (props.itemName == "softsound" ? "" : props.itemName)}>{props.itemName}</SC.StyledLink>) : (<>{props.itemName}</>)}</>
    )
};

export default NavItem;