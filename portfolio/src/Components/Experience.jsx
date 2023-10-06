import React from 'react'
import boot from "../assets/bootstrap.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/Node.png"
import express from "../assets/express.png"
import redux from '../assets/download.png'
import next from "../assets/Next.png"
import mui from '../assets/mui.png'
import mongo from '../assets/mongo.png'
const Experience = () => {
    const langLink = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: "Java Script",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: "React js",
            style: 'shadow-blue-600'
        },
        {
            id: 11,
            src: node,
            title: "Node js",
            style: "shadow-green-500"
        },
        {
            id: 5,
            src: boot,
            title: "Bootstrap",
            style: 'shadow-purple-500'
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: github,
            title: "Github",
            style: 'shadow-white'
        },
        {
            id: 8,
            src: git,
            title: "Git",
            style: 'shadow-red-500'
        },
        {
            id: 9,
            src: next,
            title: "Next js",
            style: "shadow-white"
        },
        {
            id: 10,
            src: redux,
            title: "Redux js",
            style: "shadow-purple-500"
        },
       
        {
            id: 12,
            src: mongo,
            title: "Mongo DB",
            style: "shadow-green-500"
        },
        
    ]
    return (
        <div name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className='py-6'>these are the tech stack I've worked on</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {langLink.map(({ id, src, title, style }) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img className="w-20 mx-auto mix-blend-difference" src={src} alt="" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience