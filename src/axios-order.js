import axios from 'axios';

export default axios.create({
  baseURL: 'https://burger-builder-aa7fb.firebaseio.com/'
});
