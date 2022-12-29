import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '1s',
};

export default function () {
  const response = http.get('http://test.k6.io');
  console.log(response)
  sleep(1);
}
