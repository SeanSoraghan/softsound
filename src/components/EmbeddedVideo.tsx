import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// https://medium.com/bleeding-edge/enforcing-an-aspect-ratio-on-an-html-element-in-react-and-css-27a13241c3d4

const BorderlessIFrameWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
`
const BorderlessIFrame = styled.iframe`
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

interface EmbeddedVideoProps
{
    header: string,
    embedURL: string,
}

const EmbeddedVideo = (props: EmbeddedVideoProps) => (
    <VideoColumnWrapper>
        <VideoHeader>{props.header}</VideoHeader>
        <BorderlessIFrameWrapper>
            <BorderlessIFrame
                src={props.embedURL}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </BorderlessIFrameWrapper>
    </VideoColumnWrapper>
);

export default EmbeddedVideo;