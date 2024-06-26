import React from 'react';
import EnzoImage from '../assets/enzo.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name="home" className='flex h-screen bg-gradient-to-b from-black to-gray-800 via-black'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm Front-end Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
              Sou desenvolvedor Front-end com experiência em desenvolvimento de sites e dispositivos móveis. Confira meus projetos e habilidades
            </p>
            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer'>
                    <Link to={'works'} smooth duration={500}>Works</Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </button>
            </div>
        </div>
        <div><img src={EnzoImage} alt="Imagem Enzo" className='rounded-2xl mx-auto w-2/3 md:w-full'/></div>
      </div>
    </div>
  )
}

export default Home
