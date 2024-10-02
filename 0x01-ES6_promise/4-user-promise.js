export default function signUpUser(firstName, lastName) {
  const Name = {
    firstName,
    lastName,
  };
  return Promise.resolve(Name);
}
