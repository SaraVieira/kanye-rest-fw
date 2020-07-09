import React, { useState, useEffect } from 'react'
import './styles.css'

const getData = async () => {
  const data = await fetch('https://api.kanye.rest/').then(a => a.json())
  return data.quote
}

const App = () => {
  const [quote, setQuote] = useState()
  const getMore = () => {
    getData().then(setQuote)
  }

  useEffect(() => {
    getData().then(setQuote)
  }, [])

  return (
    <main>
      {quote ? (
        <>
          <h1>{quote}</h1>
          <button onClick={getMore}>Get Another Quote</button>
        </>
      ) : (
        <h1>wait a tad fam</h1>
      )}
    </main>
  )
}

export default App
