import '../home/style.css'
import { Mail, FileUser, Linkedin, Github } from 'lucide-react'

const skills = [
    { name: 'HTML', img: 'https://cdn-icons-png.flaticon.com/128/174/174854.png'},
    { name: 'CSS', img: 'https://cdn-icons-png.flaticon.com/128/732/732190.png'},
    { name: 'JavaScript', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png'},
    { name: 'React JS', img: 'https://cdn-icons-png.flaticon.com/128/10832/10832132.png'},
    { name: 'Node JS', img: 'https://cdn-icons-png.flaticon.com/128/919/919825.png'},
    { name: 'Git', img: 'https://cdn-icons-png.flaticon.com/128/11518/11518876.png'},
    { name: 'GitHub', img: 'https://cdn-icons-png.flaticon.com/128/733/733609.png'},
]

function Home() {
    return (
        <main>
            
            <section className='container'>
                <div className='content'>
            
                    <div className='left'>
                        <img src="/perfil.png" alt="Foto de perfil" className='profileImg'/>
                    </div>
            
                    <div className='right'>
            
                        <h1> Davi Rocha Pereira </h1>
                        <h2> Desenvolvedor Web </h2>
            
                        <div className='buttons'>
                            <a href="/Currículo.pdf" target='_blank' rel='noreferrer' className='btn'> <FileUser size={20} color='black'/> Download CV </a>
                            <a href="mailto: davipereirar39@gmail.com" target='_blank' rel='noreferrer' className='btn'> <Mail size={20} color='black'/> Entre em contato </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id='sobre' className='sobre'>
                <div className='containerSobre'>

                    <div className='texto'>

                        <h3> SOBRE MIM </h3>
                        <h2> Sou o Davi... </h2>
                        <p>
                            Sou um entusiasta da tecnologia, com verdadeira paixão pela criação de interfaces web modernas. Estou em constante aprendizado e busco sempre melhorar minhas habilidades como desenvolvedor, buscando estar atento e com foco na usabilidade do usuário, performance dos projetos e boas práticas de código.
                        </p>
                        <p>
                            Sou movido por desafios e estou em constante busca por oportunidades que impulsionem meu crescimento profissional. Tenho como objetivo criar experiências de usuário envolventes, acessíveis e eficientes. Este é o início da minha jornada no desenvolvimento web, e estou em busca da minha primeira oportunidade profissional em um ambiente inovador, onde eu possa contribuir com dedicação, aprender com profissionais experientes e desenvolver soluções que gerem impacto real.
                        </p>
                        
                    </div>

                    <div className='conteudo-midiatico'>

                        <div className='aspas'>“</div>
                        <img src="./perfil-sobre.png" alt="Foto de perfil do sobre"/>

                        <div className='redesSociais'>
                            <a href="https://github.com/Davi2004" target='_blank' rel='noreferrer'> <Github size={30} color='white' /> </a>
                            <a href="https://www.linkedin.com/in/davi-rocha-pereira-809548225/" target='_blank' rel='noreferrer'> <Linkedin size={30} color='white' /> </a>
                        </div>
                        
                    </div>
                    
                </div>
            </section>

            <section id="hardskills" className="hardSkills">

                <div class="containerSkills">

                    <h2>Hard Skills</h2>
                    
                    <p>Abaixo estão algumas das tecnologias que utilizo.</p>
                    
                    <div className="icons-grid">
                        {skills.map((skill, index) => (
                        <div className="icon-item" key={index}>
                            <img src={skill.img} alt=""/>
                            <span>{skill.name}</span>
                        </div>
                        ))}
                    </div>
                </div>
                
            </section>

            <section id='projetos'></section>
            
            <section id='contato'></section>

        </main>
    );
}

export default Home;