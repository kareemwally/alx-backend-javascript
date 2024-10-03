import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'
export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const promises = [user, photo];
  const res = [];
  return Promise.allSettled(promises).then((promises) => {
    for (let promise in promises) {
	    res.push({
              status: promise.status,
              value: promise.status === 'fulfilled' ? res.value : res.reason,
	    })
    }
  });
}
