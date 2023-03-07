import React from "react";
import styled from "styled-components";
import VideoComponent from "./Video";

const VideoHeader = styled.h2`
    color: white;
    margin: 0;
    font-family: "Heebo";
    font-weight: 100;
`

const VideoColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 24px;
    width: 100%;
    background-color: black;
`

interface TitledVideoProps
{
    header: string,
    embedURL: string,
}

const TitledVideo = (props: TitledVideoProps) => (
    <VideoColumnWrapper>
        <VideoHeader>{props.header}</VideoHeader>
        <VideoComponent embedURL={props.embedURL} title={props.header} />
    </VideoColumnWrapper>
);

export default TitledVideo;