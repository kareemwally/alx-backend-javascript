export default function getFullResponseFromAPI(success) {
  const test = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  return test.then((res) => res).catch((err) => err);
}
