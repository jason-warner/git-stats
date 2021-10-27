
import { gql } from '@apollo/client';
import { client } from '../common/apollo-client';

interface viewerResult {
    __typename?: string,
    login: string
  }

export const getViewer = (): viewerResult[] | undefined => {
    let ans = undefined;
    client
      .query({ query: GET_VIEWER })
      // .then((result) => updateViewer(result.data.viewer.login))
      .then((result) => console.log(result))
      .catch((err) => console.log("Fetch Error: ", err));
    return ans;
  }

export const GET_VIEWER = gql`
    query { 
        viewer { 
        login
        }
    }
`;