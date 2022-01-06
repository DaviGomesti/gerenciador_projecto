import styles from './ProjectForm.module.css'
import Input from '../form/Imput'

function ProjectForm() {
    return (
        <form className={styles.form}>
            <div>
                <Input
                    type="text"
                    text="Nome do Projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                />

            </div>

            <div>
            <Input
                    type="number"
                    text="Valor do projeto"
                    name="budget"
                    placeholder="Insira o valor do projeto"
                />
               
            </div>

            <div>
                <select name="category_id">
                    <option disabled>Selecione a categoria</option>
                    <option disabled>Aplicativo mobile</option>
                    <option disabled>Big Data</option>
                    <option disabled>Automatização de projetos</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>

        </form>
    )
}

export default ProjectForm