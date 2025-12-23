import styles from '../home/home.module.css';
import { FileUser, Linkedin, Github, MessageCircle } from 'lucide-react'

function Home() {
    
    return (
        <main className={styles.container}>
            
            <section className={styles.hero}>

                <div className={styles.conteudo}>
        
                    <h1> Davi Rocha Pereira </h1>
                    <h2> Desenvolvedor Web </h2>

                    <div className={styles.buttons}>
                        <a href="https://github.com/Davi2004" target='_blank' rel='noreferrer' className={styles.btn}> <Github size={20} color='black' /> GitHub </a>
                        
                        <a href="/curriculo-davi-pereira.pdf" target='_blank' rel='noreferrer' className={styles.btn}> <FileUser size={20} color='black'/> Download CV </a>

                        <a href="https://wa.me/5577991718244?text=Olá,%20gostaria%20de%20conversar%20sobre%20algumas%20ideias!" target='_blank' rel='noreferrer' className={styles.btn}> <MessageCircle size={20} color='black'/> Entre em contato </a>

                        <a href="https://www.linkedin.com/in/davipereira-dev" target='_blank' rel='noreferrer' className={styles.btn}> <Linkedin size={20} color='black' /> LinkedIn </a>
                    </div>

                    <p>
                        Olá, sou formado em Análise e desenvolvimento de Sistemas na Impacta SP e estou em constante aprendizado. Tenho foco em usabilidade, performance e boas práticas de desenvolvimento, criando soluções que realmente agregam valor ao usuário.
                    </p>

                    <p>
                        Estou iniciando minha carreira em desenvolvimento web e procuro minha primeira oportunidade profissional para colaborar em projetos inovadores, aprender com profissionais experientes e contribuir para resultados concretos. Acredito que tecnologia é ferramenta de transformação e estou pronto para gerar impacto real com meu trabalho.
                    </p>

                </div>

            </section> 
            
        </main>

    );
}

export default Home;