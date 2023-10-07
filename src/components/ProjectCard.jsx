import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import navigationRoutes from '../routs';
import { useDispatch } from 'react-redux';
import { Context } from "./ContextProvider";
import { useContext } from "react";


const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const context = useContext(Context);

  const handleClick = (projectId) => () => {
    dispatch({ type: 'SET_CURRENT_PROJECT_ID', payload: { projectId } });
    context.setCurrentProjectId(projectId);
    navigate(navigationRoutes.tasks());
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Button variant="dark" onClick={handleClick(project.id)}>
          {'Learn more '}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </Button>
      </Card.Body>
    </Card >
  );
};

export default ProjectCard;