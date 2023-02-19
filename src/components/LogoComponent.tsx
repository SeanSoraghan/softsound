import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = () =>
{
    return (
        <StaticImage
            alt=""
            src="../../src/images/icon.png"
            height={30}
            width={30}
        />
    )
}

const BulletText = () =>
{
    return (
        <>
            <Logo /><h1>Bullet text</h1>
        </>
    )
}

export default Logo