import './App.css'
// components
import SearchForm from './Components/SearchForm'

function App () {
  const apiKey = 'ezyLTqqACoDH1MPNw77L2TNzdh5atbqhowVABtvj'
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

  return (
    <>
      <header className='m-4 text-center'>
        <div className='container-background'>
          <img src='https://c.tenor.com/qtDdKvNo6bAAAAAC/galaxy-space.gif' alt='background' />
          <h1 className='title'>NASA Astronomy Picture of the Day</h1>
        </div>
        <p><strong>Desarrollado por: </strong>Reyna del Carmen</p>
        <p>API: <a href={url} target='blank'>https://api.nasa.gov/planetary/apod</a></p>
      </header>
      <section className='m-4'><SearchForm url={url} /></section>
    </>
  )
}

export default App
