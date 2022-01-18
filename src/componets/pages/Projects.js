import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from '../layout/Message'

import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'


function Projects() {


    const [projects, setProjects] = useState([])
    const [removeLoaing, setRemoveLoaing] = useState(false)
    const [projectMessege, setProjectsMessege] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {



    }, [])
    useEffect(() => {
        setTimeout(
            () => {
                fetch('http://localhost:5000/projects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        console.log(data)
                        setProjects(data)
                        setRemoveLoaing(true)
                    })
                    .catch((err) => console.log(err))

            },300)

    }, [])

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`, {
            method:'DELETE',
            headers: {'Content-Type': 'application/json'

        },
    }).then(resp => resp.json())
    .then(data => {
        setProjects(projects.filter(project => project.id !== id))
        setProjectsMessege('Projeto Removido com sucesso!')
    })
    .catch((err) => console.log(err))

    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar projeto" />
            </div>

            {message && <Message type="success" msg={message} />}
            {projectMessege && <Message type="success" msg={projectMessege} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}

                        />
                    ))}
                {!removeLoaing && <Loading />}
                {removeLoaing && projects.length === 0 &&(
                <p>Não a projetos Cadastrados</p>
                   
                )}
            </Container>

        </div>
    )
}

export default Projects