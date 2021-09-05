import { useState, useEffect } from "react"
import useFetch from "react=fetch-hook"

const Fetch04 = () => {
  const { isLoading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  )

  if (isLoading) return "Loading..."
  if (error) return "Error!"

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Fetch04
