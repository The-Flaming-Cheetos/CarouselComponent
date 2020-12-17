import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 200 },
    { duration: '1s', target: 500 },
    { duration: '5s', target: 805 },
  ],
};


export default function() {
  let res = http.get('http://localhost:3000/api/trips/CarouselComponent/:id/reviews');
  check(res, {
    "is status 200":(r) => r.status === 200
  });
};
