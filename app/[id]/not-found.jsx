import Link from "next/link"
import { Container} from "react-bootstrap"

export default function NotFound() {
  return (
    <Container>
    <main className="text-center">  
    <h3>Error handling for not found the task!</h3>
    <p> Not found the <strong>task</strong></p>
    <p>Go back to <Link href="/">home page.</Link></p>  
    </main>
    </Container>
   
  )
}
