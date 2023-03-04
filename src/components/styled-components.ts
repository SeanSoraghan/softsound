import * as Layout from "../utils/LayoutConstants"
import styled from "styled-components"

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
`

export const SubHeader = styled.div`
    text-align: left;
    width: 100%;
    color: white;
    margin: 0;
    font-family: "Josefin Sans";
    font-weight: 100;
    font-size: ${Layout.SUBHEADER_FONT_SIZE};
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
`
export const SubpageHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: bottom;
    justify-content: flex-start;
    width: 100%;
    background-color: black;
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