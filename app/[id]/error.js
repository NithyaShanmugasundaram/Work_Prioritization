'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { Container,Button } from 'react-bootstrap'
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Container>
    <main className="text-center mt-10">
   
    <h3>Error handling for unhandled run time errors!</h3>
        
    <Button variant="success" size="sm"
      onClick={
        // Attempt to recover by trying to re-render the segment
        () => reset()
      }
    >
      Try again
    </Button>
   
    </main>
    </Container>
  )
}