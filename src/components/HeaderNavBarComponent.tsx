
import React from "react"
import * as Layout from "../utils/LayoutConstants"
import * as SC from "../components/styled-components"
import styled from "styled-components";

interface HeaderNavBarProps
{

}

const HeaderNavBar = (props: HeaderNavBarProps) => (
    <SC.SubpageHeaderWrapper>
        <SC.Header>
            <SC.StyledLink to="/">softsound</SC.StyledLink>
        </SC.Header>
        <SC.SubpageSubheader>
            / projects
        </SC.SubpageSubheader>
    </SC.SubpageHeaderWrapper>
);

export default HeaderNavBar;
