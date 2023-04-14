import { fireEvent, render, screen } from '@testing-library/react'
// import App from './App';
import LoginFeature from './Login'
import AppContextProvider from '../context/AppContext'
import { BrowserRouter } from 'react-router-dom'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


it("Could type username", async () => {
  render(
    <BrowserRouter>
      <AppContextProvider>
        <LoginFeature />
      </AppContextProvider>
    </BrowserRouter>
  )

  const username = screen.getByLabelText("Username:")
  fireEvent.change(username, { target: { value: 'my name' } })

  expect(username.value).toBe("my name")

  const form = screen.getByRole('form', { name: 'Login' })

  fireEvent.submit(form)
})



