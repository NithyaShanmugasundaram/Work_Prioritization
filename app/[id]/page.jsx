import {
  Container,
  CardBody,
  CardHeader,
  CardText,
  Button,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { notFound } from "next/navigation";
export const dynamicParams = true; // default val = true

export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const tasks = await res.json();
  return tasks.map((task) => ({
    id: task.id.toString()
  }));
}
async function getTask(id) {
  const res = await fetch(`${process.env.API_URL}/posts/${id}`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function TicketDetails({ params }) {
  const task = await getTask(params.id);

  return (
    <Container>
      <Card className="my-5 px-2">
        <CardHeader as="h5">{task.title}</CardHeader>
        <CardBody>
          <CardText>
            {task.body}
            <small>{task.title}</small>
          </CardText>
          <Button href={`/`} variant="success" size="sm">
            Go to backlog
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}
