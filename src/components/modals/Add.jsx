import { Modal, Button, Form } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from "../ContextProvider";
import { useContext } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';

const regexNotOnlySpaces = /[^\s*].*[^\s*]/g;

const Add = () => {
  const dispatch = useDispatch();
  const context = useContext(Context);
  const currentProjectId = context.getCurrentProjectId();

  const status = useSelector((state) => state.modal.status)

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required('required field')
        .min(3)
        .matches(regexNotOnlySpaces, 'not only spaces'),
      description: yup
        .string()
        .required('required field')
        .min(3)
        .matches(regexNotOnlySpaces, 'not only spaces'),
    }),
    onSubmit: ({ name, description }) => {
      dispatch({ type: 'ADD_NEW_TASK', payload: { newTask: { name, description, projectId: currentProjectId, id: uuid(), status, date: new Date().toLocaleDateString() } } })
      dispatch({ type: 'CLOSE_MODAL' });
    }
  });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.select();
  }, []);

  return (
    <Modal show>
      <Modal.Header closeButton onHide={() => dispatch({ type: 'CLOSE_MODAL' })}>
        <Modal.Title>New task</Modal.Title>
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
          <Form.Group>
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

          <div className="d-flex flex-row-reverse m-3 me-0 gap-2">
            <Button variant="primary" type="submit">Add</Button>
            <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>Cancel</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


// const regexNotOnlySpaces = /[^\s*].*[^\s*]/g;

// const Add = () => {
//   const channels = useSelector(channelSelector.selectAll);
//   const modal = useSelector((state) => state.modal);
//   const dispatch = useDispatch();
//   const { t } = useTranslation();
//   const inputRef = useRef();

//   const formik = useFormik({
//     initialValues: { name: '' },
//     validationSchema: yup.object({
//       name: yup
//         .string()
//         .required(t('validationErrors.required'))
//         .min(3, t('validationErrors.userLength'))
//         .max(20, t('validationErrors.userLength'))
//         .matches(regexNotOnlySpaces, t('modal.errorNotOnlySpaces'))
//         .notOneOf(channels.map((channel) => channel.name), t('modal.errorUnique')),
//     }),
//     onSubmit: ({ name }) => {
//       socket.emit('newChannel', { name: name.trim() }, (response) => {
//         if (response.status !== 'ok') {
//           toast.error(t('toasts.error.network'));
//           return;
//         }
//         toast.success(t('toasts.success.newChanneladded'));
//         dispatch(setCurrentChannel(response.data));
//         dispatch(closeModal(modal));
//       });
//     },
//   });

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <Modal show>
//       <Modal.Header closeButton onHide={() => { dispatch(closeModal(modal)); }}>
//         <Modal.Title>{t('modal.header.adding')}</Modal.Title>
//       </Modal.Header>

//       <Modal.Body className="pb-0">
//         <Form onSubmit={formik.handleSubmit}>
//           <Form.Group>
//             <Form.Control
//               ref={inputRef}
//               onChange={formik.handleChange}
//               value={formik.values.name}
//               id="name"
//               name="name"
//               type="text"
//               isInvalid={formik.touched.name && formik.errors.name}
//               onBlur={formik.handleBlur}
//             />
//             <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
//           </Form.Group>

//           <div className="d-flex flex-row-reverse m-3 me-0 gap-2">
//             <Button variant="primary" type="submit">
//               {t('modal.button.save')}
//               <span className="visually-hidden">{t('modal.channelName')}</span>
//             </Button>
//             <Button variant="secondary" onClick={() => { dispatch(closeModal(modal)); }}>{t('modal.button.cancel')}</Button>
//           </div>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

export default Add;
