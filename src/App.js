import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <>
            <Wrapper>
                <Intro />
                <Skills />
                <Projects />
                <Contact />
            </Wrapper>
        </>
    );
}

export default App;
