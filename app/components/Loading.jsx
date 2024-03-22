import Spinner from "react-bootstrap/Spinner";
export default function Loading() {
  return (
    <div className="mt-10 text-center">
      <Spinner animation="border" variant="success" />
      <p>Hopefully not for to long :)</p>
    </div>
  );
}
