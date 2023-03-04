import React from "react"
import styled from "styled-components";
import { getImage, StaticImage } from 'gatsby-plugin-image'

const ProjectHeader = styled.h2`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
`

const ProjectText = styled.h3`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
`

const ProjectImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 24px;
    width: 100%;
    background-color: black;
`

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 24px;
    width: 100%;
    background-color: black;
`


function getImageURL(imageName: string): string { return '../../src/images/' + imageName }

interface ProjectProps
{
    header: string,
    imageName: string,
    text: string
}

const Project = (props: ProjectProps) =>
{
    const imageURL = getImageURL(props.imageName)
    console.log({ imageURL })
    return (
        <ProjectWrapper>
            <ProjectHeader>{props.header}</ProjectHeader>
            {/* <ProjectImage> */}
            <img alt="" src={'src/images/icon.png'} height="30px" width="30px" />
            {/* </ProjectImage> */}
            <ProjectText>{props.text}</ProjectText>
        </ProjectWrapper>
    )
}

export default Project;


