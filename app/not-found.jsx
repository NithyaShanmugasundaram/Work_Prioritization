import Link from "next/link"
import { Container } from "react-bootstrap"

export default function NotFound() {
  return (
    
    <Container className="mx-auto">
    <main className="text-center">
   
    <h3>Error handling for not found the Page!</h3>
    <p> Not found the <strong>page</strong></p>
    <p>Go back to all <Link href="/">home</Link>.</p>
   
    </main>
    </Container>
    
  )
}