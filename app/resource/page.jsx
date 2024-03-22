import { Suspense } from "react";
import styles from "./../styles/Common.module.css";
import { Container,Table} from "react-bootstrap";
import Loading from "./../components/Loading";
import {fields} from './../../config'


async function getTableData() {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.API_URL}/users`, {
    next: {
      revalidate: 0, //  if use 0 to opt out of using cache
    },
  });

  return res.json();
}
export async function CustomTable ()  {
  const data = await getTableData();
  const selectedFields = data.map((i) => Object.fromEntries(fields.map((f) => [f, i[f]])));
  const column = Object.keys(selectedFields[0]).map((i) => i);
  return (
      <Table striped bordered hover className={styles.resource_table}>
        <thead >
          <tr >
            {column.map((j, i) => (
              <th className="text-uppercase" key={i}>{j}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            return (
              <tr key={i}>
                <td>{row.id}</td>
                <td>{row.email}</td>
                <td>{row.name}</td>
                <td>{row.username}</td>
                <td>{row.phone}</td>
              </tr>
            );
          })}
          {data.length === 0 && (
            <Container>
              <Card className="text-center">There is no resource data available.</Card>
            </Container>
          )}
        </tbody>
      </Table>
  );
};


const ResourceTable = async () => {
  return (
    <main>
      <Container fluid>
      <h3 className={styles.title}>Resource List</h3>
        <Suspense fallback={<Loading />}>
          <CustomTable />
        </Suspense>
        
      </Container>
    </main>
  );
};

export default ResourceTable;
