import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';
import Section from "./Section";
import { Context } from "./ContextProvider";
import { useContext } from "react";
import Modal from "./modals/Modal";

const TasksPage = () => {
  const context = useContext(Context);

  const currentProjectId = context.getCurrentProjectId();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const currentTasks = tasks.filter((task) => task.projectId === currentProjectId);
  const quequeTasks = currentTasks.filter((task) => task.status === 'queque');
  const developmentTasks = currentTasks.filter((task) => task.status === 'development');
  const doneTasks = currentTasks.filter((task) => task.status === 'done');

  const statusesInfo = [
    { status: 'queque', bg: 'bg-danger', tasks: quequeTasks },
    { status: 'development', bg: 'bg-warning', tasks: developmentTasks },
    { status: 'done', bg: 'bg-success', tasks: doneTasks }
  ];

  const formik = useFormik({
    initialValues: {
      inputValue: '',
    },
    onSubmit: ({ inputValue }) => {
      console.log(inputValue);
      if (inputValue === '' || inputValue.trim() === '') return;

      const [taskById] = tasks.filter((task) => task.id === inputValue);
      const [taskByName] = tasks.filter((task) => task.name === inputValue);

      if (!taskByName && !taskById) {
        formik.errors.inputValue = 'Oops, no matching task, sorry!';
        return;
      }

      if (taskById) {
        dispatch({ type: 'OPEN_MODAL', payload: { type: 'info', taskId: taskById.id } });
        return;
      }

      if (taskByName) {
        dispatch({ type: 'OPEN_MODAL', payload: { type: 'info', taskId: taskByName.id } });
        return;
      }
    },
    validationSchema: yup.object({
      inputValue: yup
        .string()
        .required()
    }),
  });

  return (
    <Container className="vh-100">
      <Row>
        <Form onSubmit={formik.handleSubmit} className="d-flex justify-content-center row g-3">
          <div className="col-auto">
            <Form.Control
              className="border border-secondary"
              type="text"
              id="inputValue"
              name="inputValue"
              placeholder="Tasks's name or id"
              onChange={formik.handleChange}
              value={formik.values.inputValue} />
          </div>
          <div className="col-auto">
            <Button type="submit" variant="dark" className="btn btn-primary" disabled={!(formik.isValid && formik.dirty)}>Search</Button>
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