import React from "react"
import * as Layout from "../utils/LayoutConstants"
import * as SC from "../components/styled-components"
import styled from "styled-components";
import NavItem from "./NavItem";

interface HeaderNavBarProps
{
    currentItemName: string;
}

const HeaderNavBar = (props: HeaderNavBarProps) => (
    <SC.SubpageHeaderWrapper>
        <SC.Header>
            <NavItem currentItemName={props.currentItemName} itemName="softsound" />
        </SC.Header>
        <SC.SubpageSubheader>
            / <NavItem currentItemName={props.currentItemName} itemName="about" /> - <NavItem currentItemName={props.currentItemName} itemName="projects" /> - <NavItem currentItemName={props.currentItemName} itemName="contact" />
        </SC.SubpageSubheader>
    </SC.SubpageHeaderWrapper>
);

export default HeaderNavBar;
