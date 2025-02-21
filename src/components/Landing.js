import React from 'react'
import BlogList from './BlogList'
import LandingTextDisplay from './LandingTextDisplay'
import LandingImageArea from './LandingImageArea'
import landingStyles from "../styles/components/landing.module.scss"
export default function NotFound() {
    return (
        <div>
            <div>
                <LandingTextDisplay/>
            </div>
            <BlogList />
        </div>
    )
}