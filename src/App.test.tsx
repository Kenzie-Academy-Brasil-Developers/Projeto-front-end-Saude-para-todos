<<<<<<< HEAD
import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
>>>>>>> 7cc89720b097cd042654173e9a6b506f8e9e465e

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
