import { ProjectsSection } from "../components-styled/ProjectsStyles";

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2 className="underline">Kodehode projects</h2>
      <ul className="project-list">
        <li>
          <a href="https://knutcode.github.io/kodehode/todo-assignment/" target="_blank" rel="noreferrer">
            To-do list, @Kodehode
          </a>
        </li>
        <li>
          <a href="https://knutcode.github.io/kodehode/pokemon-api/" target="_blank" rel="noreferrer">
            Pokemon generator, @Kodehode
          </a>
        </li>
        <li>
          <a href="https://knutcode.github.io/kodehode/collatz-conjencture/" target="_blank" rel="noreferrer">
            Collatz calculator, @Kodehode
          </a>
        </li>
        <li>
          <a href="https://knutcode.github.io/kodehode/drumkit-assignment/" target="_blank" rel="noreferrer">
            Drumkit, @Kodehode
          </a>
        </li>
      </ul>

      <h2 className="underline">Scrimba projects</h2>
      <ul className="project-list">
        <li>
          <a href="https://knutcode.github.io/scrimba/invoice-creator/" target="_blank" rel="noreferrer">
            Invoice app, @Scrimba
          </a>
        </li>
        <li>
          <a href="https://knutcode.github.io/scrimba/password-generator/" target="_blank" rel="noreferrer">
            Password generator, @Scrimba
          </a>
        </li>
        <li>
          <a href="https://knutcode.github.io/scrimba/unit-converter/" target="_blank" rel="noreferrer">
            Unit converter, @Scrimba
          </a>
        </li>
        <li>
          <a href="https://knutcode.github.io/scrimba/bbq-splash-page/" target="_blank" rel="noreferrer">
            BBQ splash page, @Scrimba
          </a>
        </li>
      </ul>
      <h2 className="underline">Personal projects</h2>
      <ul className="project-list">
        <li>
          <a href="https://knutcode.github.io/is-it-friday/" target="_blank" rel="noreferrer">
            Is it friday?
          </a>
        </li>
      </ul>
    </ProjectsSection>
  );
};

export default Projects;
