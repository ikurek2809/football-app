import axios from 'axios';

export default axios.create({
  headers: {"X-Auth-Token": "883d504d34a944dd850f6262389b0f12"},
  baseURL: 'https://api.football-data.org/v2',
});
