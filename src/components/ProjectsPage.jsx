import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap';
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  const projects = useSelector((state) => state.projects);

  return (
    <Container className='d-grid gap-3 pt-5 pb-5'>
      {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
    </Container>
  )
};

export default ProjectsPage;