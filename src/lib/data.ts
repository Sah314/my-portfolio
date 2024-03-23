import kanabanimg from '@/assets/images/kanban.png'
import wikiimg from '@/assets/images/rickandmorty.png'
import nftcollection from '@/assets/images/nft_collection.png'
import ainotetaker from '@/assets/images/ai_note_taker.png'
import { LuGraduationCap } from 'react-icons/lu';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
export const links = [
{
    name: "Home",
    hash:"#home",
},
{
    name: "About",
    hash:"#about",
},
{
    name: "Projects",
    hash:"#projects",
},
{
    name: "Skills",
    hash:"#skills",
},
{
    name: "Experience",
    hash:"#experience",
},
{
    name: "Contact",
    hash:"#contact",
},

] as const;

export const projectData=[
    {
        title:"Rick and Morty Wiki",
        description:"This is a Wiki application that has several features like searching and filtering characters based on several factors",
        tags: ["React", "Bootstrap", "Axios","Scss"],
        imageUrl: wikiimg,
    },
    {
        title:"Note Taker Application",
        description:"",
        tags: ["React", "Tailwind", "Next.js","Postgresql","OpenAI API, Drizzle ORM","Firebase"],
        imageUrl:ainotetaker,
    },
    {
        title:"Kanban Application",
        description:"",
        tags: ["React", "Bootstrap", "Axios","Scss"],
        imageUrl:kanabanimg,
    },
    {
        title:"NFT_Collection",
        description:"",
        tags: ["Next.js", "scss", "solidity","hardhat","vercel"],
        imageUrl:nftcollection,
    },
] as const

export const skillData = [
    "HTML","CSS","Javascript","React", "Next.js", "Node.js", "C++","TypeScript", "Golang", "Tailwind","Express","Git","Docker","GCP", "MongoDB","PostgreSQL","Solidity", "PolygonID","Hardhat","web3js","Ethers.js"
] as const

export const experienceData = [
    {
        title:"Pandit Deendayal Energy University",
        location:"Gandhinagar,Gujarat",
        description:"Graduated with an impressive CGPA of 9.75 in Computer Science and Engineering",
        icon: React.createElement(LuGraduationCap),
        date: "2020-2024",
    },
    {
        title:"Einfochips- an Arrow Company",
        location:"Ahmedabad,Gujarat",
        description:"Technical Intern: Worked on creating responsive frontend for web-applications",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        title:"Bugsmirror Research Pvt. Ltd.",
        location:"Indore,Madhyapradesh",
        description:"Member of technical staff Intern",
        icon: React.createElement(CgWorkAlt),
        date: "2024",
    }
] as const