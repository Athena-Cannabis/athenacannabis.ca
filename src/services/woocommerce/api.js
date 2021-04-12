import axios from 'axios';
import { API_BASE_URL,
          API_CONSUMER_KEY,
          API_CONSUMER_SECRET,
          API_VERSION }
  from '../../config/woocommerce';

// Default config options
const baseDomain = API_BASE_URL;
const apiVersion = API_VERSION;
const apiConsumerKey = API_CONSUMER_KEY;
const apiConsumerSecret = API_CONSUMER_SECRET;
const apiEndpoint = `${baseDomain}/wp-json/${apiVersion}`;

/**
 * Create an Axios Client with defaults
 */
 const client = axios.create({
  baseURL: apiEndpoint,
  auth: {
    username: apiConsumerKey,
    password: apiConsumerSecret,
  },
});

/**
 * Source: https://gist.github.com/sheharyarn/7f43ef98c5363a34652e60259370d2cb
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
  const onSuccess = function(response) {
    console.debug('Request Successful!', response);
    return response.data;
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
          .then(onSuccess)
          .catch(onError);
}

export default request;
