import React from "react";

import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiAtSymbol } from 'react-icons/hi2'

import cv_robbe_eng from '../assets/cv_robbe_eng.pdf'
import cv_robbe_nl from '../assets/cv_robbe_nl.pdf'

export default function NavBar(isDutch:boolean) {

    function copyToClipboard(event:React.MouseEvent, url:string) {
        event.preventDefault()

        navigator.clipboard.writeText(url)

        alert(`Copied "${url}" to your clipboard!`)
    }

    function openInNewTab (event:React.MouseEvent, url:string) {
        event.preventDefault()

        window.open(url, '_blank')
    }

    return <div className="navbar">
        <ul 
            key={"linkedin"} 
            title="LinkedIn"
            onClick={(event) => {openInNewTab(event, 'https://www.linkedin.com/in/robbe-michiels-056956252/')}}>
                <AiOutlineLinkedin className="icon"/></ul>
        <ul 
            key={"email"}
            title="email: robbe.mic@gmail.com"
            onClick={(event) => {copyToClipboard(event, 'robbe.mic@gmail.com')}}>
                <HiAtSymbol className="icon"/></ul>
        <a 
            key={"cv"}
            title="download cv"
            href={(!isDutch)? cv_robbe_eng: cv_robbe_nl} 
            download="CV_Robbe_Michiels">
                CV</a>
    </div>
}