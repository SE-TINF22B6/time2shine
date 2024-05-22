import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stats from '../app/(stats)/stats/page';


test('renders Stats and checks for title', () => {
    render(<Stats />);
    const titleElement = screen.getByText(/time2shine leaderboards./i);
    expect(titleElement).toBeInTheDocument();
});

test('changes game on button click', async () => {
    render(<Stats />);
    fireEvent.click(screen.getByText(/Röhrig-Clicker/i));
    await waitFor(() => expect(screen.getByText(/Röhrig-Clicker/i)).toBeInTheDocument());
});