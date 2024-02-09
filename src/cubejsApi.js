import cubejs from '@cubejs-client/core';

const CUBEJS_API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDY3OTM1ODN9.Hv8QHJ9MnZDYpYHb050JSKRYL-0TVgpYxsKGycEYbVM";
const API_URL = "https://severe-albatross.gcp-europe-west3-a.cubecloudapp.dev/cubejs-api/v1";


const cubejsApi = cubejs(CUBEJS_API_TOKEN, {
  apiUrl: API_URL
});

export default cubejsApi;
