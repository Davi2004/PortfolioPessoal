import styles from "./experiencia.module.css";
import { experiencia } from "../../data/experiencia";
import { iconMap } from "../../data/iconMap";

export default function Experiencia() {
  return (
    <section className={styles.container} id="experiencia">


        {experiencia.map(exp => (
            <div key={exp.titulo} className={styles.card}>
                <h1 className={styles.title}>Experiência</h1>

                <div className={styles.content}>

                    <div className={styles.contentImage}>
                    <   img src={exp.imagem} alt={exp.titulo} className={styles.image}/>
                    </div>

                    <div className={styles.conteudo}>
                        
                        <header className={styles.header}>
                            <h3>{exp.titulo}</h3>
                            <div className={styles.techs}>
                            {exp.tecnologias.map(tech => (
                                <img
                                    key={tech}
                                    src={iconMap[tech]}
                                    alt={tech}
                                    title={tech}
                                    className={styles.iconTech}
                                />
                            ))}
                            </div>
                        </header>

                        <span className={styles.subtitle}>
                            Projeto acadêmico • TCC
                        </span>
                        
                        <p>{exp.descricao}</p>
                        
                        <div className={styles.actions}>
                    
                            <a
                                href={exp.linkProjeto}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.btn}
                            >
                                Ver Projeto
                            </a>
                            <a
                                href={exp.linkRepositorio}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.btn}
                            >
                                Repositório
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </section>
  );
}