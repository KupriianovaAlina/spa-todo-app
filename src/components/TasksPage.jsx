import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';
import Section from "./Section";
import { Context } from "./ContextProvider";
import { useContext } from "react";

const TasksPage = () => {
  const context = useContext(Context);

  const currentProjectId = context.getCurrentProjectId();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  const currentTasks = tasks.filter((task) => task.projectId === currentProjectId)
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
      task: '',
    },
    onSubmit: ({ task }, actions) => {
      if (task === '' || task.trim() === '') return;
      dispatch({ type: 'ADD_NEW_TASK', payload: { newTask: { name: task, projectId: currentProjectId, id: uuid(), status: 'queque' } } })
      actions.resetForm();
    },
    validationSchema: yup.object({
      task: yup
        .string()
        .required()
        .max(200)
    }),
  });

  return (
    <Container className="vh-100">
      <Row>
        <Form onSubmit={formik.handleSubmit} className="d-flex justify-content-center row g-3">
          <div className="col-auto">
            <Form.Label className="visually-hidden">New task</Form.Label>
            <Form.Control
              className="border border-secondary"
              type="text"
              id="task"
              name="task"
              placeholder="New task"
              onChange={formik.handleChange}
              value={formik.values.task} />
          </div>
          <div className="col-auto">
            <Button type="submit" variant="dark" className="btn btn-primary" disabled={!(formik.isValid && formik.dirty)}>Add</Button>
          </div>
        </Form>
      </Row>
      <Row className="pt-3 h-100">
        {statusesInfo.map((statusInfo, index) => <Section key={index} statusInfo={statusInfo} />)}
      </Row>
    </Container >
  )
};

export default TasksPage;