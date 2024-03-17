import kanabanimg from '@/assets/images/kanban.png'
import wikiimg from '@/assets/images/rickandmorty.png'
import nftcollection from '@/assets/images/nft_collection.png'
import ainotetaker from '@/assets/images/ai_note_taker.png'
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
    name: "ContactMe",
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