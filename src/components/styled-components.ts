import * as Layout from "../utils/LayoutConstants"
import styled from "styled-components"
import { Link } from "gatsby"

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 32px;
    gap: ${Layout.CONTENT_GAP};
    background-color: black;
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        gap: ${Layout.CONTENT_GAP_DESKTOP};
    }
`

export const Header = styled.h1`
    text-align: left;
    color: white;
    margin: 0;
    font-family: "Josefin Sans";
    font-weight: 100;
    font-size: ${Layout.HEADER_FONT_SIZE};
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        font-size: ${Layout.DESKTOP_HEADER_FONT_SIZE};
    }
`

export const SubHeader = styled.div`
    text-align: left;
    width: 100%;
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    font-size: ${Layout.SUBHEADER_FONT_SIZE};
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Layout.HEADER_EMAIL_GAP};
    align-items: bottom;
    justify-content: flex-start;
    width: 100%;
    background-color: black;
`

export const SubpageSubheader = styled.h2`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    font-size: ${Layout.SUBPAGE_LINK_FONT_SIZE};
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        font-size: ${Layout.DESKTOP_SUBPAGE_LINK_FONT_SIZE};
    }
`
export const SubpageHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: bottom;
    justify-content: flex-start;
    width: 100%;
    background-color: black;
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        flex-direction: row;
        gap: 24px;
    }
`

export const VideoRowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
    background-color: black;
    color: white;
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        flex-direction: row;
        gap: 0;
    }
`

export const StyledLink = styled(Link)`
  color: aqua;
  text-decoration: none;
`

// https://medium.com/bleeding-edge/enforcing-an-aspect-ratio-on-an-html-element-in-react-and-css-27a13241c3d4

export const BorderlessIFrameWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
`
export const BorderlessIFrame = styled.iframe`
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

// ------------------------------------------------------