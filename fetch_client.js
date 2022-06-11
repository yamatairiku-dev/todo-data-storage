// node --experimental-repl-await

require('isomorphic-fetch')
const baseUrl = 'http://localhost:3000/api/todos'
await fetch(baseUrl)
console.log(_.status, await _.json())

// .editor
for (const title of ['鉛筆', '消しゴム']) {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
  console.log(res.status, await res.json())
}

// .editor
(await fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: '{}'
})).status

await fetch(baseUrl).then(res => res.json())
await fetch(`${baseUrl}/${_[0].id}/completed`, { method: 'PUT' })
await fetch(`${baseUrl}?completed=true`).then(res => res.json())
await fetch(`${baseUrl}?completed=false`).then(res => res.json())
(await fetch(`${baseUrl}/foo/completed`, { method: 'PUT' })).status
await fetch(baseUrl).then(res => res.json())
await fetch(`${baseUrl}/${_[0].id}/completed`, { method: 'DELETE' })
(await fetch(`${baseUrl}/bar/completed`, { method: 'DELETE' })).status
(await fetch(`${baseUrl}/${_[0].id}`, { method: 'DELETE' })).status
(await fetch(`${baseUrl}/foo}`, { method: 'DELETE' })).status
