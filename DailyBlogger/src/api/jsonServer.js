import axios from 'axios';

//npm run tunnel .....typically last 8h but mine is bout 2
//update URL as ya go BABI

export default axios.create({
  baseURL: 'http://9096808f6601.ngrok.io'
});
