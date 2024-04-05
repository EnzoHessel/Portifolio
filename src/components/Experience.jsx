import React from 'react'
import html from '../assets/portifolio/html.svg'
import css from '../assets/portifolio/css.svg'
import js from '../assets/portifolio/javascript.svg'
import reactImage from '../assets/portifolio/react.svg'
import github from '../assets/portifolio/github.svg'
import tailwind from '../assets/portifolio/tailwind.svg'
import vue from '../assets/portifolio/Vue.svg'
import bootstrap from '../assets/portifolio/bootstrap.svg'
import typeScript from '../assets/portifolio/typescript.svg'
import vite from '../assets/portifolio/Vite.svg'
import next from '../assets/portifolio/next.svg'

const Experience = () => {
    const images = [
        {
            id: 1,
            label: 'HTML',
            src: html,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            label: 'CSS',
            src: css,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            label: 'JavaScript',
            src: js,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            label: 'React',
            src: reactImage,
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            label: 'Github',
            src: github,
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            label: 'Tailwind',
            src: tailwind,
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            label: 'Bootstrap',
            src: bootstrap,
            style: 'shadow-purple-800'
        },
        {
            id: 8,
            label: 'Vue',
            src: vue,
            style: 'shadow-green-500'
        },
        {
            id: 9,
            label: 'Typescript',
            src: typeScript,
            style: 'shadow-blue-500'
        },
        {
            id: 10,
            label: 'Next.js',
            src: next,
            style: 'shadow-white'
        },
        {
            id: 11,
            label: 'Vite',
            src: vite,
            style: 'shadow-purple-400'
        },
    ]

  return (
    <div name="experience" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>Essas são as tecnologias que ja trabalhei</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {images.map(({id, label, src, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={label} className='w-20 mx-auto'/>
                <p className='mt-4'>{label}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
