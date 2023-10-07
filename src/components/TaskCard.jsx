import { Card } from "react-bootstrap";
import { useDrag } from "react-dnd";

const TaskCard = ({ task }) => {
  const { name, description } = task;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <Card ref={drag} className={`mb-2 ${isDragging ? 'opacity-50' : 'opacity-100'}`} style={{ width: '95%' }}>
      <Card.Body>
        <Card.Title className="fs-6">{name}</Card.Title>
        <Card.Text className="fs-6 mb-1">{description}</Card.Text>
        <Card.Text className="text-muted fs-6">{'30/09/3003'}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;