import React, { useRef, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

const regexNotOnlySpaces = /[^\s*].*[^\s*]/g;

const Rename = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const tasks = useSelector((state) => state.tasks);

  const [currentTask] = tasks.filter((task) => task.id === modal.taskId);
  const { name, description, date, id, status } = currentTask;

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.select();
  }, []);

  const formik = useFormik({
    initialValues: {
      name,
      description,
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required('required field')
        .min(3)
        .max(40)
        .matches(regexNotOnlySpaces, 'not only spaces'),
      description: yup
        .string()
        .required('required field')
        .min(3)
        .matches(regexNotOnlySpaces, 'not only spaces'),
    }),
    onSubmit: () => { }
  });

  return (
    <Modal show>
      <Modal.Header closeButton onHide={() => dispatch({ type: 'CLOSE_MODAL' })}>
        <Modal.Title>Task Info</Modal.Title>
      </Modal.Header>

      <Modal.Body className="pb-0">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={inputRef}
              onChange={formik.handleChange}
              value={formik.values.name}
              id="name"
              name="name"
              type="text"
              isInvalid={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              onChange={formik.handleChange}
              value={formik.values.description}
              id="description"
              name="description"
              isInvalid={formik.touched.description && formik.errors.description}
              onBlur={formik.handleBlur}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.description}</Form.Control.Feedback>
          </Form.Group>
          <div className="mb-3">
            <p>Date: {date}</p>
            <p>Status: {status}</p>
          </div>

          <div className="d-flex flex-row-reverse m-3 me-0 gap-2">
            <Button variant="primary" type="submit">Save</Button>
            <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>Cancel</Button>
          </div>
        </Form>
      </Modal.Body>

    </Modal>
  );
};

export default Rename;
