import React from 'react';
import TestRenderer from 'react-test-renderer'
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { GET_VIEWER } from '../../hooks/getViewer';
import App from './App';

test('renders main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Git Stats/i);
  expect(headerElement).toBeInTheDocument();
});

const mocks: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: GET_VIEWER,
    },
    result: {
      data: {
        viewer: {
          __typename: "User",
          login: "jason-warner"
        },
      },
    },
  },
]
it('renders w/o fail', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  const tree: any = component.toJSON();
  console.log(tree.children[1].children[0].children)
  expect(tree.children[1].children[0].children).toContain('null')
})

