import React from 'react';
import web1 from '../../assests/project 1.png'
import web2 from '../../assests/project 2.png'

function Projects() {
    const projectList = [
        {
            img: web1,
            link: 'https://ephemeral-babka-54e88c.netlify.app',
            title: 'Website 1',
            description: 'This is one of my projects I built during practicing.It is based on SCSS and Bootstrap.'
        },
        {
            img: web2,
            link: 'https://fastidious-youtiao-3e4488.netlify.app',
            title: 'Website 2',
            description: 'This is a website made with React and CSS.'
        }
    ]
    return (

        <div className='w-screen flex-col mb-32 flex justify-center items-center '>
            <div className="mb-12 flex justify-center items-center flex-col">
            <h2 className=' mb-1 font-black text-3xl text-green-700'>Projects</h2>
            <div className='headingline'></div>
            </div>
            <div className='flex lg:flex-row flex-col  justify-between items-center w-3/5 '>
                {projectList.map((project, index) => {
                    return <div key={project.img + index} className=' lg:my-0 my-8 rounded-lg mx-4 justify-center items-center shadow-md hover:shadow-lg hover:shadow-purple-600 shadow-purple-500 '>
                        <div>
                            <a href={project.link}><img src={project.img} alt={project.img} className='rounded-t-lg w-80' /></a>
                        </div>
                        <div className="w-80 p-4">
                            <h3 className=' text-2xl text-center font-mono my-4 font-bold'>{project.title}</h3>
                            <p className=' max-w-5xl flex-wrap text-center font-medium'>{project.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects