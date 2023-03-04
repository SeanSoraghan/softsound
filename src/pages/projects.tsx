// https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
import React from "react"
import * as Layout from "../utils/LayoutConstants"
import * as SC from "../components/styled-components"
import styled from "styled-components";
import type { HeadFC, PageProps } from "gatsby"
import { getImage, StaticImage } from 'gatsby-plugin-image'
import VideoComponent from "../components/Video";
import { Projects } from "../content/projects-content";

const ProjectHeader = styled.h2`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
`

const ProjectImage = styled.div`
    width: 100%;
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        width: 50%;
    }
`

const ProjectText = styled.h3`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
    white-space: pre-line;
`

const ProjectImageTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: ${Layout.PROJECT_IMAGE_TEXT_GAP};
    @media (min-width: ${Layout.DESKTOP_BREAKPOINT}){
        flex-direction: row;
        width: 100%;
    }
`

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: ${Layout.PROJECT_CONTENT_GAP};
    width: 100%;
    background-color: black;
`

const ProjectsPage: React.FC<PageProps> = () =>
{
    return (
        <SC.ContentWrapper>
            <SC.SubpageHeaderWrapper><SC.Header>softsound</SC.Header><SC.SubpageSubheader> / projects</SC.SubpageSubheader></SC.SubpageHeaderWrapper>
            <ProjectWrapper>
                <ProjectHeader>Baldur's Gate III - Larian Studios</ProjectHeader>
                <ProjectImageTextWrapper>
                    <ProjectImage><StaticImage alt="" src={'../images/bg3.jpg'} aspectRatio={1920 / 1080} /></ProjectImage>
                    <ProjectText>{Projects.bgText}</ProjectText>
                </ProjectImageTextWrapper>
            </ProjectWrapper>
            <ProjectWrapper>
                <ProjectHeader>Impacter Wwise Plugin - Audiokinetic</ProjectHeader>
                <ProjectImageTextWrapper>
                    <ProjectImage>
                        <VideoComponent title="Impacter Plugin - Audiokinetic" embedURL="https://www.youtube.com/embed/tSgAbM6N7lw" />
                    </ProjectImage>
                    <ProjectText>{Projects.impacterText}</ProjectText>
                </ProjectImageTextWrapper>
            </ProjectWrapper>
        </SC.ContentWrapper>
    )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Soft Sound | Projects</title>