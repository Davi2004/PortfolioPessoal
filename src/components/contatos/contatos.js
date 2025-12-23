import { PhoneCall, Mail, Linkedin, Github } from 'lucide-react'
import styles from './contatos.module.css'

export default function Contatos() {
 return (
    <section id='contato' className={styles.contatos}>
    
        <h1> Formas de Contato: </h1>

        <div className={styles.containerContatos}>

            <div className={`${styles.colors} ${styles.right}`}>
                <PhoneCall size={30} color='#08082F'/>
                <p> +55 (77) 99171-8244 </p>
            </div>
            
            <div className={`${styles.colors} ${styles.left}`}>
                <Mail size={30} color='#08082F'/>
                <a href='mailto:davipereirar39@gmail.com'> davipereirar39@gmail.com </a>
            </div>
            
            <div className={`${styles.colors} ${styles.right}`}>
                <Linkedin size={25} color='#08082F'/>
                <a href='https://www.linkedin.com/in/davipereira-dev' target='_blank' rel='noreferrer'> https://www.linkedin.com/in/davipereira-dev </a>
            </div>
            
            <div className={`${styles.colors} ${styles.left}`}>
                <Github size={30} color='#08082F'/>
                <a href='https://github.com/Davi2004' target='_blank' rel='noreferrer'> https://github.com/Davi2004 </a>
            </div>
                                
        </div>
        
    </section>  
 );
} 