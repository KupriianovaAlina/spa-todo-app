import { Card } from "react-bootstrap";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const { name, description, date, id } = task;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <Card ref={drag} className={`mb-2 ${isDragging ? 'opacity-50' : 'opacity-100'}`} style={{ width: '95%' }} onClick={() => dispatch({ type: 'OPEN_MODAL', payload: { type: 'info', taskId: id } })}>
      <Card.Body>
        <Card.Text className="">{`№ ${id}`}</Card.Text>
        <Card.Title className="fs-6">{name}</Card.Title>
        <Card.Text className="mb-1">{description}</Card.Text>
        <Card.Text className="text-muted">{date}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;