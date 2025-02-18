import ProjectForm from '../project/ProjectForm';
import {useNavigate} from 'react-router-dom';
import styles from './NewProject.module.css';

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){
        project.cost = 0;
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data)=>{
            console.log(data)
            navigate('/projects', {message: 'Projetco criado com sucesso!'})
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject;