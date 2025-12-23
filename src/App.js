import Header from "./components/header/header";
import Home from "./components/home/home";
import HardSkills from "./components/hardSkills/hardskills";
import Projetos from "./components/projetos/projetos";
import Contatos from "./components/contatos/contatos";
import Experiencia from "./components/experiencia/experiencia"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HardSkills />
      <Experiencia />
      <Projetos />
      <Contatos />
    </div>
  );
}

export default App;