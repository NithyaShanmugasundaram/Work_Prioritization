import { Container, Button, CardBody, CardHeader ,Card,Row,Col} from "react-bootstrap";
import { Suspense } from "react";
import Loading from "./components/Loading";
import styles from "./styles/Common.module.css";


async function getTasks() {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.API_URL}/posts`, {
    next: {
      revalidate: 0, //  if use 0 to opt out of using cache
    },
  });

  return res.json();
}
export async function TaskListComponent() {
  const tasks = await getTasks();

  return (
    <Container fluid>
    <Row className="justify-content-center">
    
    {tasks.map((ticket) => (
      <Col sm={12} md={4} key={ticket.id}>
      
      <Card className="my-2 px-2">
        <CardHeader as="h5">Title:{ticket.title.slice(0, 20)}..</CardHeader>
          <CardBody>
          <Button href={`/${ticket.id}`} variant="success" size="sm">
            User story details
          </Button>
        </CardBody>
      </Card>
      </Col>
    ))}
    </Row>
        
      <Row>
      {tasks.length === 0 && (
        <Container>
          <Card className="text-center">There is no user story available.</Card>
        </Container>
       
      )}
      </Row>
      </Container>  
  );
}

export default function TaskList() {
  return (
    <>
    <h3 className={styles.title}>Backlog Summary</h3>
    <Suspense fallback={<Loading />}>
      <Container fluid>
        <TaskListComponent />
      </Container>
    </Suspense>
    </>
  );
}
