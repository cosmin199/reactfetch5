import { useState, useEffect } from "react"

const Fetch01 = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((res) => {
        setData(res)
      })
      .catch((error) => {
        console.error("error fetching data: ", error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return "Loading..."
  if (error) return "Error!"

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Fetch01
