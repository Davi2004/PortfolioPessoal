import { useState } from 'react';
import '../home/style.css';
import '../home/responsividade.css';
import { Mail, FileUser, Linkedin, Github } from 'lucide-react'
import { PhoneCall, MessageCircle } from 'lucide-react';

const skills = [
    { name: 'HTML', img: 'https://cdn-icons-png.flaticon.com/128/174/174854.png'},
    { name: 'CSS', img: 'https://cdn-icons-png.flaticon.com/128/732/732190.png'},
    { name: 'JavaScript', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png'},
    { name: 'TypeScript', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png'},
    { name: 'React JS', img: 'https://cdn-icons-png.flaticon.com/128/10832/10832132.png'},
    { name: 'Node JS', img: 'https://cdn-icons-png.flaticon.com/128/919/919825.png'},
    { name: 'Git', img: 'https://cdn-icons-png.flaticon.com/128/11518/11518876.png'},
    { name: 'GitHub', img: 'https://cdn-icons-png.flaticon.com/128/733/733609.png'},
    { name: 'Figma', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968705.png'},
    { name: 'SQL Server', img: 'https://cdn-icons-png.flaticon.com/128/5732/5732837.png'},
    { name: 'Vite', img: 'https://img.icons8.com/color/512/vite.png'},
]

const iconMap = {
  html: skills.find(s => s.name.toLowerCase().includes('html'))?.img,
  css: skills.find(s => s.name.toLowerCase().includes('css'))?.img,
  javascript: skills.find(s => s.name.toLowerCase().includes('javascript'))?.img,
  typescript: skills.find(s => s.name.toLowerCase().includes('typescript'))?.img,
  react: skills.find(s => s.name.toLowerCase().includes('react'))?.img,
  node: skills.find(s => s.name.toLowerCase().includes('node'))?.img,
  git: skills.find(s => s.name.toLowerCase().includes('git'))?.img,
  github: skills.find(s => s.name.toLowerCase().includes('github'))?.img,
  figma: skills.find(s => s.name.toLowerCase().includes('figma'))?.img,
  sql: skills.find(s => s.name.toLowerCase().includes('sql'))?.img,
  vite: skills.find(s => s.name.toLowerCase().includes('vite'))?.img,
  tailwindcss: "https://images.seeklogo.com/logo-png/35/2/tailwind-css-logo-png_seeklogo-354675.png"
};

const projetos = [
    {
        titulo: "ToDoList",
        descricao: "O ToDoList é um website criado para ser um aliado perfeito na gestão do tempo e na organização das suas tarefas diárias! Sendo projetado para ajudar você a maximizar sua produtividade e manter-se no controle de sua agenda. Com ele, você pode adicionar, editar e excluir tarefas a qualquer momento. Todas as informações ficam salvas no navegador via LocalStorage, garantindo que nada se perca ao recarregar a página. Com uma interface intuitiva e recursos personalizados, você pode facilmente criar tarefas e monitorar o seu progresso durante o dia.",
        imagem: "./ToDoList.png",
        tecnologias: ["react", "css", "typescript", "vite"],
        linkProjeto: "https://lista-de-tarefas-nu-nine.vercel.app/",
        linkRepositorio: "https://github.com/Davi2004/ToDoList"
    },
    {
        titulo: "PrimeFlix",
        descricao: "O PrimeFlix é um projeto criado com o objetivo de simular um sistema de filmes online com catálogo atualizado por uma API. Neste projeto, foi trabalhado com foco em: Layout 100% responsivo sendo adaptado para diferentes tamanhos de tela. Design moderno e minimalista, utilizando a flexibilidade do CSS. Organização do React, garantindo uma boa estrutura e legibilidade do código. Experiência visual fluida, com transições suaves e elementos bem posicionados.",
        imagem: "./PrimeFlix.png",
        tecnologias: ["react", "css"],
        linkProjeto: "https://prime-flix-mauve-psi.vercel.app",
        linkRepositorio: "https://github.com/Davi2004/PrimeFlix"
    },
]

function Home() {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [fade, setFade] = useState(false)
    
    return (
        <main className='container'>
            
            <section className='hero'>
                

                <div className='conteudo'>
        
                    <h1> Davi Rocha Pereira </h1>
                    <h2> Desenvolvedor Web </h2>

                    <div className='buttons'>
                        <a href="https://github.com/Davi2004" target='_blank' rel='noreferrer' className="btn"> <Github size={20} color='black' /> GitHub </a>
                        
                        <a href="../../../public/Currículo Pessoal.pdf" target='_blank' rel='noreferrer' className='btn'> <FileUser size={20} color='black'/> Download CV </a>

                        <a href="https://wa.me/5577991718244?text=Olá,%20gostaria%20de%20conversar%20sobre%20algumas%20ideias!" target='_blank' rel='noreferrer' className='btn'> <MessageCircle size={20} color='black'/> Entre em contato </a>

                        <a href="https://www.linkedin.com/in/davipereira-dev" target='_blank' rel='noreferrer' className="btn"> <Linkedin size={20} color='black' /> LinkedIn </a>
                    </div>

                    <p>
                        Olá, sou formado em Análise e desenvolvimento de Sistemas na Impacta SP e estou em constante aprendizado. Tenho foco em usabilidade, performance e boas práticas de desenvolvimento, criando soluções que realmente agregam valor ao usuário.
                    </p>

                    <p>
                        Estou iniciando minha carreira em desenvolvimento web e procuro minha primeira oportunidade profissional para colaborar em projetos inovadores, aprender com profissionais experientes e contribuir para resultados concretos. Acredito que tecnologia é ferramenta de transformação e estou pronto para gerar impacto real com meu trabalho.
                    </p>

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

            <section id='projetos' className='projetos'>
                <div className="containerProjetos">
                    <h1>Projetos</h1>
                    <p>Veja alguns projetos que desenvolvi.</p>

                    {/* ✅ NOVO SISTEMA DE TABS */}
                    {(() => {
                        return (
                            <div>
                                {/* Abas (botões) */}
                                <div className="tabsProjetos">
                                    {projetos.map((projeto, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setFade(true);
                                            setTimeout(() => {
                                                setActiveProjectIndex(index);
                                                setFade(false);
                                            }, 400)
                                        }}
                                        className={activeProjectIndex === index ? "tab active" : "tab"}
                                    >
                                        {projeto.titulo}
                                    </button>
                                    ))}
                                </div>

                                {/* Card ativo */}
                                <div className={`cardWrapper ${fade ? "fade" : ""}`}>
                                    {(() => {
                                        const projeto = projetos[activeProjectIndex];
                                        return (
                                        <div className="cardProjetoHorizontal">
                                            <div className="imagemContainer">
                                            <img
                                                src={projeto.imagem}
                                                alt={projeto.titulo}
                                                className="imagemProjetoHorizontal"
                                            />
                                            </div>
                                            <div className="infoProjetoHorizontal">
                                            <div className="headerProjeto">
                                                <h3>{projeto.titulo}</h3>
                                                <div className="techs">
                                                {projeto.tecnologias.map((tech, j) => (
                                                    <img
                                                    key={j}
                                                    src={iconMap[tech.toLowerCase()]}
                                                    alt={tech}
                                                    title={tech}
                                                    className="iconTech"
                                                    />
                                                ))}
                                                </div>
                                            </div>
                                            <p>{projeto.descricao}</p>
                                            <div className="botoesProjeto">
                                                <a
                                                href={projeto.linkProjeto}
                                                className="btn"
                                                target="_blank"
                                                rel="noreferrer"
                                                >
                                                Ver Projeto
                                                </a>
                                                <a
                                                href={projeto.linkRepositorio}
                                                className="btn"
                                                target="_blank"
                                                rel="noreferrer"
                                                >
                                                Repositório
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        );
                                    })()}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            <section id='contato' className='contatos'>
                
                <h1> Formas de Contato: </h1>

                <div className='containerContatos'>

                    <div className='colors right'>
                        <PhoneCall size={30} color='#08082F'/>
                        <p> +55 (77) 99171-8244 </p>
                    </div>
                    
                    <div className='colors left'>
                        <Mail size={30} color='#08082F'/>
                        <a href='mailto:davipereirar39@gmail.com'> davipereirar39@gmail.com </a>
                    </div>
                    
                    <div className='colors right'>
                        <Linkedin size={25} color='#08082F'/>
                        <a href='https://www.linkedin.com/in/davipereira-dev' target='_blank' rel='noreferrer'> https://www.linkedin.com/in/davipereira-dev </a>
                    </div>
                    
                    <div className='colors left'>
                        <Github size={30} color='#08082F'/>
                        <a href='https://github.com/Davi2004' target='_blank' rel='noreferrer'> https://github.com/Davi2004 </a>
                    </div>
                                        
                </div>
                
            </section>   
            
        </main>

    );
}

export default Home;