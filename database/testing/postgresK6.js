import http from 'k6/http';
import { check } from 'k6';

// export let options = {
//   stages: [
//     { duration: '10s', target: 10 },
//     { duration: '10s', target: 10 },
//     { duration: '10s', target: 35 },
//     { duration: '10s', target: 0 },
//   ],
// };

export let options = {
  // vus: 1000,
  // duration: '30s',
  // // iterations: 100
  stages: [
    { duration: "10s", target: 200 },
    { duration: "1s", target: 200 },
    { duration: "5s", target: 50 },
  ],
}

export default function() {
  let res = http.get('http://localhost:3000/api/trips/CarouselComponent/:id/reviews');
  check(res, {
    "is status 200":(r) => r.status === 200
  });
};