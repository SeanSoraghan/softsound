// https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
import React from "react"
import * as Layout from "../utils/LayoutConstants"
import * as SC from "../components/styled-components"
import styled from "styled-components";
import type { HeadFC, PageProps } from "gatsby"
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { ProjectsContent } from "../content/ProjectsContent";
import Project from "../components/ProjectComponent"

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

const ProjectListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: ${Layout.PROJECTS_LIST_GAP};
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
                    <ProjectText>I'm currently helping with technical sound design for the upcoming Baldur's Gate III, working with the fantastic audio team at Larian Studios. It's something of a dream role for me because Divinity Original Sin II was one of my favourite games in recent memory.</ProjectText>
                </ProjectImageTextWrapper>
            </ProjectWrapper>
            <ProjectWrapper>
                <ProjectHeader>Baldur's Gate III - Larian Studios</ProjectHeader>
                <ProjectImageTextWrapper>
                    <ProjectImage><StaticImage alt="" src={'../images/bg3.jpg'} aspectRatio={1920 / 1080} /></ProjectImage>
                    <ProjectText>I'm currently helping with technical sound design for the upcoming Baldur's Gate III, working with the fantastic audio team at Larian Studios. It's something of a dream role for me because Divinity Original Sin II was one of my favourite games in recent memory.</ProjectText>
                </ProjectImageTextWrapper>
            </ProjectWrapper>
        </SC.ContentWrapper>
    )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Soft Sound | Projects</title>