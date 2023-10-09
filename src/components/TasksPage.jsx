import { useDispatch, useSelector, } from "react-redux";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Section from "./Section";
import { Context } from "./ContextProvider";
import { useContext } from "react";
import Modal from "./modals/Modal";

const TasksPage = () => {
  const context = useContext(Context);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  const currentProjectId = context.getCurrentProjectId();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const currentTasks = tasks.filter((task) => task.projectId === currentProjectId);
  const queueTasks = currentTasks.filter((task) => task.status === 'queue');
  const developmentTasks = currentTasks.filter((task) => task.status === 'development');
  const doneTasks = currentTasks.filter((task) => task.status === 'done');

  const statusesInfo = [
    { status: 'queue', bg: 'bg-danger', tasks: queueTasks },
    { status: 'development', bg: 'bg-warning', tasks: developmentTasks },
    { status: 'done', bg: 'bg-success', tasks: doneTasks }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === '' || search.trim() === '') return;

    const [taskById] = tasks.filter((task) => task.id === search);
    const [taskByName] = tasks.filter((task) => task.name === search);

    if (!taskByName && !taskById) {
      setError('Oops, no matching task, sorry!');
      return;
    }

    setSearch('');
    if (taskById) {
      dispatch({ type: 'OPEN_MODAL', payload: { type: 'info', taskId: taskById.id } });
      return;
    }

    if (taskByName) {
      dispatch({ type: 'OPEN_MODAL', payload: { type: 'info', taskId: taskByName.id } });
    }
  }

  return (
    <Container className="vh-100">
      <Row>
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center row g-3">
          <div className="col-auto">
            <Form.Control
              className="border border-secondary"
              type="text"
              id="inputValue"
              name="inputValue"
              placeholder="Tasks's name or id"
              onChange={(e) => {
                setError(null);
                setSearch(e.target.value)
              }}
              value={search}
            />
            {error && <p className="text-danger">{error}</p>}
          </div>
          <div className="col-auto">
            <Button type="submit" variant="dark" className="btn btn-primary">Search</Button>
          </div>
        </Form>
      </Row>
      <Row className="pt-3 h-100">
        {statusesInfo.map((statusInfo, index) => <Section key={index} statusInfo={statusInfo} />)}
      </Row>
      <Modal />
    </Container >
  )
};

export default TasksPage;