import { Col, Container } from "react-bootstrap";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import TaskCard from "./TaskCard";

const Section = ({ statusInfo }) => {
  const { status, bg, tasks } = statusInfo;
  const dispatch = useDispatch();

  const addItemToSection = (id) => {
    console.log('я работаю')
    dispatch({ type: 'CHANGE_TASK_STATUS', payload: { id, newStatus: status } })

  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));


  return (
    <Col ref={drop} className={`p-0 pt-4 rounded ${isOver ? 'bg-secondary bg-opacity-25' : ``}`} >
      <div className={`rounded pb-2 pt-2 ps-4 ms-3 me-3 ${bg} text-light d-flex fs-4 align-items-center font-weight-bold`}>
        {status.toUpperCase()}{" "}
        <div className="bg-light ms-2 w-5 text-black rounded-circle d-flex justify-content-center fs-6 font-weight-normal" style={{ width: "24px", height: "24px" }}>
          {tasks.length}
        </div>
      </div>
      <Container className={`d-flex align-items-center flex-column mb-2 mt-2`}>
        {tasks.map((task) => <TaskCard task={task} key={task.id}></TaskCard>)}
      </Container>
    </Col >
  )
};

export default Section;