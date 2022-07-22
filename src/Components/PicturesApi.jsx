import '../Styles/PicturesApi.css'

const PicturesApi = ({ pictures }) => {
  return (
    <>
      <div className='card-group card mb-3 text-center'>
        {
          pictures.length === 0
            ? <p className='errorMsg'>No existen resultados para esa fecha</p>
            : (
              <div className='card-pictures card-body'>
                <h3 className='card-title'>{pictures.title}</h3>
                <img src={pictures.url} className='card-img-top' alt={pictures.title} />
                <p className='card-text text-date'>{pictures.date}</p>
                <p className='card-text text-explanation'>{pictures.explanation}</p>
              </div>
              )
        }
      </div>
    </>
  )
}

export default PicturesApi
