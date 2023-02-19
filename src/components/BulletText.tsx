import * as React from 'react'
import Logo from './LogoComponent'
import styled from 'styled-components'

const BulletTextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

interface BulletTextProps
{
    text: string
}

const BulletText = (props: BulletTextProps) =>
{
    return (
        <BulletTextContainer>
            <Logo /><h1>{props.text}</h1>
        </BulletTextContainer>
    )
}

export default BulletText