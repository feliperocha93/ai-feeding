export default async function getResponse(prompt) {
  return fetch("http://localhost:3000/support", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "Ricardo_Franco28@gmail.com",
      message: prompt
    })
  })
    .then((r) => r.json())
    .then((o) => o.response);
}
