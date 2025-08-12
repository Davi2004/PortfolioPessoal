import '../home/style.css'
import '../home/responsividade.css'
import { Mail, FileUser, Linkedin, Github } from 'lucide-react'
import { PhoneCall, House, MessageCircle } from 'lucide-react';

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
        titulo: "DevBurguer",
        descricao: "A DevBurguer é uma landing page, criada com o objetivo de simular um sistema de agendamento online para uma hamburgueria artesanal. Neste projeto, trabalhei com foco em: Layout 100% responsivo, adaptado para diferentes tamanhos de tela. Design moderno e minimalista, utilizando a flexibilidade do Tailwind para estilização rápida e eficiente. Organização semântica do HTML, garantindo uma boa estrutura e legibilidade do código. Experiência visual fluida, com transições suaves e elementos bem posicionados.",
        imagem: "./DevBurguer.png",
        tecnologias: ["html","javascript", "tailwindcss"],
        linkProjeto: "https://projeto-devburgueria.vercel.app",
        linkRepositorio: "https://github.com/Davi2004/Projeto-DevBurgueria"
    },
    {
        titulo: "DevBarber",
        descricao: "O DevBarber é um site institucional moderno e responsivo, desenvolvido com o objetivo de representar uma barbearia fictícia que valoriza o estilo, a tradição e a experiência do cliente. Neste projeto, temos por destaque, o layout responsivo, adaptado para todos os dispositivos, com foco em acessibilidade e boa navegação, design elegante e masculino, com uma paleta de cores sóbria e elementos que remetem ao universo das barbearias clássicas, interatividade como animações, efeitos de rolagem suave e navegação dinâmica e uma estilização modular, permitindo melhor organização e reaproveitamento de estilos.",
        imagem: "./DevBarber.png",
        tecnologias: ["html", "css", "javascript"],
        linkProjeto: "https://projeto-devbarber.vercel.app/",
        linkRepositorio: "https://github.com/Davi2004/Projeto-DevBarber"
    },
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
    return (
        <main>
            
            <section className='hero'>
                <div className='content'>

                    <div className='conteudo'>
            
                        <h1> Davi Rocha Pereira </h1>
                        <h2> Desenvolvedor Web </h2>

                        <div className='buttons'>
                            <a href="https://github.com/Davi2004" target='_blank' rel='noreferrer' className="btn"> <Github size={20} color='black' /> GitHub </a>
                            
                            <a href="/Currículo.pdf" target='_blank' rel='noreferrer' className='btn'> <FileUser size={20} color='black'/> Download CV </a>

                            <a href="https://wa.me/5577991718244?text=Olá,%20gostaria%20de%20conversar%20sobre%20algumas%20ideias!" target='_blank' rel='noreferrer' className='btn'> <Mail size={20} color='black'/> Entre em contato </a>

                            <a href="https://www.linkedin.com/in/davi-rocha-pereira-809548225/" target='_blank' rel='noreferrer' className="btn"> <Linkedin size={20} color='black' /> LinkedIn </a>
                        </div>

                        <p>
                            Olá, sou formado em Análise e desenvolvimento de Sistemas na Impacta SP e estou em constante aprendizado. Tenho foco em usabilidade, performance e boas práticas de desenvolvimento, criando soluções que realmente agregam valor ao usuário.
                        </p>

                        <p>
                            Estou iniciando minha carreira em desenvolvimento web e procuro minha primeira oportunidade profissional para colaborar em projetos inovadores, aprender com profissionais experientes e contribuir para resultados concretos. Acredito que tecnologia é ferramenta de transformação e estou pronto para gerar impacto real com meu trabalho.
                        </p>

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

            <section id='projetos' className='projetos'>

                <div className="containerProjetos">
                    
                    <h1>Projetos</h1>
                    <p>Veja alguns projetos que desenvolvi.</p>

                    <div className="gridProjetos">

                        {projetos.map((projeto, i) => (

                            <div className="cardProjetoHorizontal" key={i}>
                            
                                <div className="imagemContainer">
                                    <img src={projeto.imagem} alt={projeto.titulo} className="imagemProjetoHorizontal" />
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
                                        
                                        <a href={projeto.linkProjeto} className="btn" target="_blank" rel="noreferrer">Ver Projeto</a>
                                        <a href={projeto.linkRepositorio} className="btn" target="_blank" rel="noreferrer">Repositório</a>
                                        
                                    </div>

                                </div>

                            </div>
                            
                        ))}
                    
                    </div>

                </div>

            </section>

            <section id='contato' className='contatos'>
                
                <h1> Formas de Contato: </h1>

                <div className='containerContatos'>


                    <div className='colors one'>
                        <PhoneCall size={50} color='#08082F'/>
                        <p> +55 (77) 99171-8244 </p>
                    </div>

                    <div className='colors two'>
                        <House size={50} color='#08082F'/>
                        <p> Localizado em: <br/><br/> Povoado Malhada Grande 15 Cabrália | Piatã BA </p>
                    </div>
                    
                    <div className='colors three'>
                        <MessageCircle size={50} color='#08082F'/>
                        <a href='mailto:davipereirar39@gmail.com'> davipereirar39@gmail.com </a>
                    </div>
                                        
                </div>
                
            </section>            
            
        </main>

    );
}

export default Home;