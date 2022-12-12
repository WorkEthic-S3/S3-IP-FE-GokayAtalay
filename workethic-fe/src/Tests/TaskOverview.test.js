import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TasksOverview from '../Components/TasksOverview';
import Login from '../Pages/Login';
import App from '../App';

const emptyData = [];

const data = [
  { title: "Task 1",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
  { title: "Task 2",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
  { title: "Task 3",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
  { title: "Task 4",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
  { title: "Task 5",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig"},
];

test('renders login on screen', () => {
  render(<BrowserRouter><Login/></BrowserRouter>);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders items on screen', async () => {
  render(<TasksOverview data={data} />);

  await waitFor(() => {
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 5')).toBeInTheDocument();
  })
});

test('renders nothing on screen', () => {
  render(<TasksOverview data={emptyData} />);
  const Overview = screen.queryByTestId('overview-1');

  expect(Overview).not.toBeInTheDocument();
})

test('app displays login', () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  expect(screen.getByText('Sign in with Google')).toBeInTheDocument();
});