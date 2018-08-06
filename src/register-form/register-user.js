export default function registerUser( fullName, email, password ) {
  const url = "https://student-example-api.herokuapp.com/v1/users"
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: {
        full_name: fullName,
        email,
        password,
      }
    })
  })
}