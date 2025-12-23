import { skills } from "../../data/skills";
import styles from './hardSkills.module.css'

export default function HardSkills() {
    return (
        <section id="hardskills" className={styles.hardSkills}>

            <div class={styles.containerSkills}>

                <h2>Hard Skills</h2>
                
                <p>Abaixo estão algumas das tecnologias que utilizo.</p>
                
                <div className={styles.iconsGrid}>
                    {skills.map((skill, index) => (
                    <div className={styles.iconItem} key={index}>
                        <img src={skill.img} alt=""/>
                        <span>{skill.name}</span>
                    </div>
                    ))}
                </div>
            </div>
                        
        </section>
    );
}