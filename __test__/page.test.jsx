import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
const Page=()=>{
  return(
    <div>
    <h1>Page</h1>
    </div>
  )
}
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});