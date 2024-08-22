import React from 'react'
import { useFetchProjects } from  './fetchProjects';

const ProjectList = () => {


  const {loading, projects } = useFetchProjects();
console.log(loading, projects);

  return(
    <section>
        <div className='projects'>
            <div className='title'>
                <h2>Project Portfolio</h2>
            </div>
            <div className="d-grid gap-3">
                <div className="p-2 bg-light border">Grid item 1</div>
                <div className="p-2 bg-light border">Grid item 2</div>
                <div className="p-2 bg-light border">Grid item 3</div>
            </div>
            <div className='title-underline'>
                
            </div>

            <div className='projects-center'>
            {
                projects.map((project) => {
                const {id, img, url, title} = project;
                return (
                <a
                    key={id}
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='project'>
                    

                    <img src={img} alt={title} className='img' />
                    <h5>{title}</h5>
                </a>
                );
            })}
            </div>


            <div className='title'>
                <h2>E-Commerce Projects</h2>
            </div>

            <div className='title-underline'>
                
            </div>

            <div className='projects-center'>
            {
                projects.map((project) => {
                const {id, img, url, title} = project;
                return (
                <a
                    key={id}
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='project'>
                    

                    <img src={img} alt={title} className='img' />
                    <h5>{title}</h5>
                </a>
                );
            })}
            </div>



            <div className='title'>
                <h2>Microservice Projects</h2>
            </div>

            <div className='title-underline'>
                
            </div>

            <div className='projects-center'>
            {
                projects.map((project) => {
                const {id, img, url, title} = project;
                return (
                <a
                    key={id}
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='project'>
                    

                    <img src={img} alt={title} className='img' />
                    <h5>{title}</h5>
                </a>
                );
            })}
            </div>




        </div>
    </section>
)
}

export default ProjectList