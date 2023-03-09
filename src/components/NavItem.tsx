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
    const isHomeLink: boolean = props.itemName == "softsound"
    return (
        <>{
            !isLink ? (isHomeLink ? (<SC.InactiveLinkCurrentPageHome>{props.itemName}</SC.InactiveLinkCurrentPageHome>) : (<SC.InactiveLinkCurrentPage>{props.itemName}</SC.InactiveLinkCurrentPage>))
                : isHomeLink ? <SC.StyledLinkHome to={"/"}>{props.itemName}</SC.StyledLinkHome> : (<SC.StyledLink to={"/" + props.itemName}>{props.itemName}</SC.StyledLink>)
        }</>
    )
};

export default NavItem;