import React from 'react'

const title = 'Hello React'

// fake a data fetch from an API:
function getUser() {
  return Promise.resolve({ id: '007', name: 'James Bond' })
}

function getUsers() {
  return Promise.resolve([{ id: '007', name: 'James Bond' }, { id: '0x0', name: 'Jason Bourne' }, ])
}

function App() {

  const [search, setSearch] = React.useState('')
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser()
      setUser(user)
    }
    loadUser()
  }, [])

  function handleChange(event) {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>Search:</p>
      <input
        type="text"
        value="user"
        onChange={() => handleChange}
      />

      {user ? <p>Signed in as {user.name}</p> : null}
      <p>Hello</p>
    </div>
  )
}

export default App