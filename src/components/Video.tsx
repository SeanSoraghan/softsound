import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as SC from "./styled-components"

interface VideoProps
{
    title: string,
    embedURL: string,
}

const VideoComponent = (props: VideoProps) => (
    <SC.BorderlessIFrameWrapper>
        <SC.BorderlessIFrame
            src={props.embedURL}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={props.title}
        />
    </SC.BorderlessIFrameWrapper>
);

export default VideoComponent;