import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Olá, sou Enzo! <br /><br />
            Sou um programador Front-end apaixonado por criar interfaces incríveis e responsivas. Estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos inovadores. Estou comprometido em oferecer soluções de alta qualidade e em acompanhar as últimas tendências do desenvolvimento web para proporcionar a melhor experiência aos usuários.
            <br />Tenho experiência sólida em HTML, JavaScript, CSS, Vue.js, acessibilidade, Google Analytics, Desenvolvimento de telas.</p>
        <br />
        {/* <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nibh eu lorem finibus posuere. Nunc vitae mauris augue. Donec eleifend justo vitae placerat euismod. Donec ipsum nunc, luctus et cursus sit amet, volutpat ac justo. Fusce quis enim quis velit ullamcorper mollis. Cras vehicula vehicula nunc, non porttitor elit gravida in. Phasellus tempus fermentum leo et posuere. Aenean ac enim consectetur tortor blandit rhoncus. Phasellus sodales dictum est sit amet mattis. Ut sodales, dolor quis feugiat cursus, metus leo congue diam, sit amet mollis mauris lectus aliquam nisi. Nunc bibendum felis et risus vehicula viverra. Vivamus commodo lacus mauris, nec rutrum dolor cursus vitae. Mauris cursus id lacus eu auctor. Vivamus pulvinar id arcu quis molestie.</p> */}
      </div>
    </div>
  )
}

export default About
