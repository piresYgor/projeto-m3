import styles from './Home.module.css'

import escola from '../img/school.png'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h2>Bem-vindo ao banco de dados do</h2>
            <h1><span>Colégio Cabral</span></h1>
            <img src={escola} alt="escola" />
            <div>
            <LinkButton to="/Matricular aluno" text="Matricular aluno" />
            <LinkButton to="/Cadastrar professor" text="Cadastrar professor" />
            <LinkButton to="/Criar turma" text="Criar turma" />
            </div>
        </section>
    )
}

export default Home