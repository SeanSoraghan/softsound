// https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
import React from "react"
import * as Layout from "../utils/LayoutConstants"
import * as SC from "../components/styled-components"
import styled from "styled-components";
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import VideoComponent from "../components/Video";
import { Projects } from "../content/projects-content";
import HeaderNavBar from "../components/HeaderNavBarComponent";

const PROJECT_MEDIA_DESKTOP_WIDTH_PX: string = "640px";
const PROJECT_MEDIA_DESKTOP_WIDTH: number = 640;


const ProjectsPage: React.FC<PageProps> = () =>
{
    return (
        <>
            <HeaderNavBar currentItemName="projects" />
            <SC.OuterWrapper>
                <SC.ContentWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Baldur's Gate III - Larian Studios</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.Media><StaticImage alt="" src={'../images/bg3.jpg'} aspectRatio={1920 / 1080} /></SC.Media>
                            <SC.MediaText>{Projects.bgText}</SC.MediaText>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Impacter Wwise Plugin - Audiokinetic</SC.MediaHeader>
                        <SC.MediaTextWrapper reverseImageTextOrder>
                            <SC.Media>
                                <VideoComponent title="Impacter Plugin - Audiokinetic" embedURL="https://www.youtube.com/embed/tSgAbM6N7lw" />
                            </SC.Media>
                            <SC.MediaText>{Projects.impacterText}</SC.MediaText>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Wwise Unreal Spatial Audio Features - Audiokinetic</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.Media>
                                <VideoComponent title="Wwise Unreal Integration - Audiokinetic" embedURL="https://www.youtube.com/embed/mjzCPgUcjiA?start=28" />
                            </SC.Media>
                            <SC.MediaText>{Projects.akUnrealText}</SC.MediaText>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>Ambisonics 3D Meter - Audiokinetic</SC.MediaHeader>
                        <SC.MediaTextWrapper reverseImageTextOrder>
                            <SC.Media><StaticImage alt="" src={'../images/AK3DMeter.png'} aspectRatio={1920 / 1080} /></SC.Media>
                            <SC.MediaText>{Projects.ak3DMeterText}</SC.MediaText>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                    <SC.MediaWrapper>
                        <SC.MediaHeader>KIMA - The Wheel - Analema Group</SC.MediaHeader>
                        <SC.MediaTextWrapper>
                            <SC.Media>
                                <VideoComponent title="KIMA - Analema Group" embedURL="https://www.youtube.com/embed/ySDcSYw5jC0" />
                            </SC.Media>
                            <SC.MediaText>{Projects.kimaText}</SC.MediaText>
                        </SC.MediaTextWrapper>
                    </SC.MediaWrapper>
                </SC.ContentWrapper>
            </SC.OuterWrapper>
        </>
    )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Soft Sound | Projects</title>