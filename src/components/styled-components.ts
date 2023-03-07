import * as Layout from "../utils/LayoutConstants"
import styled from "styled-components"
import { Link } from "gatsby"

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    min-height: calc(100vh - ${Layout.OUTER_PADDING_DOUBLE});
    padding: 32px;
    gap: ${Layout.CONTENT_GAP};
    background-color: black;
`

export const NavBarMainPage = styled.h1`
    display: flex;
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

export const NavBarSubPagesWrapper = styled.h2`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    font-size: ${Layout.SUBPAGE_LINK_FONT_SIZE};
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        font-size: ${Layout.DESKTOP_SUBPAGE_LINK_FONT_SIZE};
    }
`
export const NavBarWrapper = styled.div`
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

export const MediaHeader = styled.h2`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    font-size: ${Layout.MEDIA_TEXT_LARGE_SIZE};
`

export const Media = styled.div`
    width: 100%;
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        width: 50%;
    }
`

export const MediaText = styled.h3`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    white-space: pre-line;
    font-size: ${Layout.MEDIA_TEXT_SIZE};
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        width: 50%;
    }
`

export const AboutMediaText = styled.h3`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    white-space: pre-line;
    font-size: ${Layout.ABOUT_MEDIA_TEXT_SIZE};
`

export const AboutMediaTextBold = styled.h4`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 400;
    white-space: pre-line;
    font-size: ${Layout.ABOUT_MEDIA_TEXT_SIZE};
`

export const AboutMediaTextEmailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        width: 50%;
    }
`

export const MediaTextCentredLarge = styled.h3`
    display: flex;
    align-items: center;
    justify-content: left;
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    white-space: pre-line;
    font-size: ${Layout.MEDIA_TEXT_LARGE_SIZE};
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        width: 50%;
        font-size: ${Layout.DESKTOP_MEDIA_TEXT_LARGE_SIZE};
        justify-content: center;
    }
`

interface MediaTextWrapperProps
{
    reverseImageTextOrder?: boolean
}

export const MediaTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: ${Layout.MEDIA_TEXT_GAP};
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        flex-direction: ${(props: MediaTextWrapperProps) => (props.reverseImageTextOrder ? "row-reverse" : "row")};
        width: 100%;
        gap: ${Layout.DESKTOP_MEDIA_TEXT_GAP};
    }
`

export const MediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: ${Layout.MEDIA_HEADER_CONTENT_GAP};
    width: 100%;
    background-color: black;
`

export const Paragraph = styled.h3`
    align-items: left;
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    white-space: pre-line;
`
export const StyledLink = styled(Link)`
  color: teal;
  text-decoration: none;
  font-weight: 400;
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