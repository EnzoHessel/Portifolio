import React from 'react'
// imagens do protifolio
import Invest from '../assets/projects/invest.webp'

const Works = () => {
    const Works = [
        {
            id: 1,
            src: Invest,
            link: 'https://banco.bradesco/html/classic/produtos-servicos/investimentos/investmais.shtm'
        },
    ]

  return (
    <div name="works" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Works</p>
            <p className='py-6'>Confira alguns dos meus trabalhos aqui</p>
        </div>

        <div className='grid sm:grid-col-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-36 mb-7'>
        {Works.map(({ id, src }) => (
            <div key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
              <a href="https://banco.bradesco/html/classic/produtos-servicos/investimentos/investmais.shtm" target='_blank' rel="noreferrer">
                <img src={src} alt="teste" className='rounded-md duration-200 hover:scale-105 p-5'/>
              </a>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Works
