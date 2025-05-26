import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
        id:1,
        title: "MeetUp",
        description: "React Js | Node Js | Express Js | MongoDb | Tailwind Css ",
        image: "images/meet.png",
        gitUrl:"https://github.com/soham8167/meetUp",
        viewUrl:"https://meet-up-client-six.vercel.app/",
    },
    {
        id:2,
        title: "Stdudent id card generator",
        description: "React Js | Node Js | Express Js | Css ",
        image: "images/qrcode.png",
        gitUrl:"https://github.com/soham8167/qr-code",
        viewUrl:"https://drive.google.com/file/d/1f1HTu2BVIYZ2K49i-Pi0925wOnSL6o4v/view?usp=drivesdk/",
    },
    {
        id:3,
        title: "Calculator",
        description: "Html | Css | JavaScript",
        image: "images/calculator.png",
        gitUrl:"https://github.com/soham8167/calculator",
        viewUrl:"https://calculator-lac-phi-29.vercel.app/",
    },
    {
        id:4,
        title: "Weather App",
        description: "Html | Css | JavaScript",
        image: "images/weather.png",
        gitUrl:"https://github.com/soham8167/Weather_app_javascript",
        viewUrl:"https://weather-app-javascript-ten.vercel.app/",
    },
    {
        id:5,
        title: "Tic-Tac-Toe",
        description: "Html | Css | JavaScript",
        image: "images/tic-tac.png",
        gitUrl:"https://github.com/soham8167/Tic-tac-toe",
        viewUrl:"https://tic-tac-toe-iota-gules-79.vercel.app/",
    },
    {
        id:6,
        title: "Notes app",
        description: "Html | Css | JavaScript",
        image: "images/notes.png",
        gitUrl:"https://github.com/soham8167/Notes_app_javascript",
        viewUrl:"https://notes-app-javascript-teal.vercel.app/",
    },
    
    
    
    {
        id:7,
        title: "To-do-list",
        description: "Html | Css | JavaScript",
        image: "images/to-do.png",
        gitUrl:"https://github.com/soham8167/To-do-list",
        viewUrl:"https://to-do-list-bay-three.vercel.app/",
    },
    {
        id:8,
        title: "Audio Converter",
        description: "Html | Css | JavaScript",
        image: "images/audio.png",
        gitUrl:"https://github.com/soham8167/Audio_converter",
        viewUrl:"https://audio-converter-steel.vercel.app/",
    }
]

const ProjectSection = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2> 
      <br></br>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12 '>{projectsData.map((project)=> <ProjectCard
     key={project.id}
      title={project.title}
       description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        viewUrl={project.viewUrl}
        />)}</div>
    </>
  )
}

export default ProjectSection
