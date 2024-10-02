export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error());
    }
  }).then((res) => {
    console.log('Got a response from the API');
    return res;
  }).catch((err) => err);
}
