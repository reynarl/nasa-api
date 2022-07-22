import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
// css
import '../Styles/SearchForm.css'
// components
import PicturesApi from './PicturesApi'
import Spinner from './Spinner'

const SearchForm = ({ url }) => {
  const searchDate = useRef(null)
  const [pictures, setPictures] = useState([])
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${url}&date=${date}`)
        setPictures(data)
      } catch (error) {
        setPictures([])
      }
      setLoading(false)
    }
    getData()
  }, [date])

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputDateValue = searchDate.current.value
    setDate(inputDateValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='search-container'>
          <h5>Busca una fecha :</h5>
          <input ref={searchDate} type='date' />
          <button className='btn btn-outline-light'>Buscar</button>
        </div>
      </form>
      {
        loading
          ? <Spinner />
          : <section><PicturesApi pictures={pictures} /></section>
      }
    </>
  )
}

export default SearchForm
