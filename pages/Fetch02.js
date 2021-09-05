import { useState, useEffect } from "react"
import axios from "axios"

const Fetch02 = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        setData(res.data)
        setLoading(false)
      },
      (erorr) => {
        console.error("error fetching data: ", error)
        setError(erorr)
      }
    )
  }, [])

  if (loading) return "Loading..."
  if (error) return "Error!"

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Fetch02
