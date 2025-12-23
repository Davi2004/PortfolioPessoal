import { useState } from 'react'
import { projetos } from '../../data/projetos'
import { iconMap } from '../../data/iconMap'
import styles from './projetos.module.css'
import clsx from 'clsx'

export default function Projetos() {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [fade, setFade] = useState(false)

    return (
        <section id='projetos' className={styles.projetos}>
            <div className={styles.containerProjetos}>
                <h1>Projetos</h1>
                <p>Veja alguns projetos que desenvolvi.</p>

                {/* ✅ NOVO SISTEMA DE TABS */}
                {(() => {
                    return (
                        <div>
                            {/* Abas (botões) */}
                            <div className={styles.tabsProjetos}>
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
                                    className={clsx(
                                        styles.tab,
                                        activeProjectIndex === index && styles.active
                                    )}
                                >
                                    {projeto.titulo}
                                </button>
                                ))}
                            </div>

                            {/* Card ativo */}
                            <div className={clsx(styles.cardWrapper, fade && styles.fade)}>
                                {(() => {
                                    const projeto = projetos[activeProjectIndex];
                                    return (
                                        <div className={styles.cardProjetoHorizontal}>
                                            <div className={styles.imagemContainer}>
                                                <img
                                                    src={projeto.imagem}
                                                    alt={projeto.titulo}
                                                    className={styles.imagemProjetoHorizontal}
                                                />
                                            </div>
                                            <div className={styles.infoProjetoHorizontal}>
                                                <header className={styles.headerProjeto}>
                                                    <h3>{projeto.titulo}</h3>
                                                    <div className={styles.techs}>
                                                        {projeto.tecnologias.map((tech, j) => (
                                                            <img
                                                                key={j}
                                                                src={iconMap[tech.toLowerCase()]}
                                                                alt={tech}
                                                                title={tech}
                                                                className={styles.iconTech}
                                                            />
                                                        ))}
                                                    </div>
                                                </header>
                                                
                                                <p>{projeto.descricao}</p>

                                                <div className={styles.botoesProjeto}>
                                                    <a
                                                        href={projeto.linkProjeto}
                                                        className={styles.btn}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Ver Projeto
                                                    </a>
                                                    <a
                                                        href={projeto.linkRepositorio}
                                                        className={styles.btn}
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
    );
}