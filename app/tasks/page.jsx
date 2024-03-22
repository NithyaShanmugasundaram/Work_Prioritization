"use client"
import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Stack,
  ListGroupItem,
  ListGroup,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import styles from "./../styles/Common.module.css";
import {Mixpanel} from '../mixpanel';


export default function Home() {
  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState(["Daily Standup","Must do user stories","Should do user stories", "Team Discussion", "Status updates"]);
  

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask('');
    }
    Mixpanel.track("Add button has been clicked!!")
  };

  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <Container>
     <Row className={styles.row}>
      <Col>
     <Stack className="col-sm-12 mx-auto">
        <form onSubmit={handleSubmit}>
          <input type="text" autoFocus value={task} className={styles.task_input}   onChange={inputChange} placeholder="Enter task name" />
          <Button variant="success" type="submit" >Add task</Button>
        </form>
      <ListGroup numbered>
        {tasksArray.length>0&&tasksArray.map((task, index) => (
          <ListGroupItem key={index}>
            {task}
            <Button className={`btn btn-primary mx-2 ${styles.delete_btn}`} onClick={() => handleDelete(index)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
 </Stack>
 </Col>
 </Row>
 </Container>
  );
}

