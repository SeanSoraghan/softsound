import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import * as SC from "../components/styled-components"
import HeaderNavBar from "../components/HeaderNavBarComponent"

const aboutText: string = "Hello. I'm Sean Soraghan, a technical sound designer and audio programmer specialising in interactive audio. I'm based in Glasgow, Scotland, and I operate as the limited company Soft Sound Limited.\n\nYou can reach me at "
const AboutPage: React.FC<PageProps> = () =>
{
    return (
        <main>
            <SC.ContentWrapper>
                <HeaderNavBar currentItemName="about" />
                <SC.MediaWrapper>
                    {/* <SC.MediaHeader>Baldur's Gate III - Larian Studios</SC.MediaHeader> */}
                    <SC.MediaTextWrapper reverseImageTextOrder>
                        <SC.Media><StaticImage alt="" src={'../images/office.png'} aspectRatio={1920 / 1080} /></SC.Media>
                        <SC.AboutMediaTextEmailWrapper><SC.AboutMediaText>{aboutText}</SC.AboutMediaText><SC.AboutMediaTextBold>sean@softsound.uk</SC.AboutMediaTextBold></SC.AboutMediaTextEmailWrapper>
                    </SC.MediaTextWrapper>
                </SC.MediaWrapper>
            </SC.ContentWrapper>
            {/* <SC.ContentWrapper>
                <HeaderNavBar currentItemName="about" />
                <SC.Paragraph>Hello. I'm Sean Soraghan, a technical sound designer and audio programmer specialising in interactive audio.</SC.Paragraph>
                <SC.Paragraph>I'm based in Glasgow, Scotland, and I operate as the limited company Soft Sound Limited.</SC.Paragraph>
                <SC.Paragraph>You can reach me at sean@softsound.uk</SC.Paragraph>
            </SC.ContentWrapper> */}
        </main>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>Soft Sound | About</title>