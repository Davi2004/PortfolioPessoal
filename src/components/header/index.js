import './style.css';

function Header() {

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return(
        <header>
            
            <a href="#/" onClick={scrollTop}> 
                <img src="/LogoPessoal.png" alt='Logo do Projeto'/> 
            </a>

            <nav>

                <ul className='menu'>
                    <li> <a href="#/" onClick={scrollTop}> Início </a> </li>
                    <li> <a href="#sobre"> Sobre </a> </li>
                    <li> <a href="#hardskills"> HardSkills </a> </li>
                    <li> <a href="#projetos"> Projetos </a> </li>
                    <li> <a href="#contato"> Contato </a> </li>
                </ul>
                
            </nav>

        </header>
    );
}

export default Header;