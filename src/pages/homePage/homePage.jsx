import React from 'react'
import "./homePage.css"
import Row from '../../Componentes/Row/Row'
import requests from '../../Componentes/Request/Request'

function HomePage() {

  return (
    <div>
      <div className='banner'>
        <div className='banner_info'>
          <h1 className='banner_title'>BANNER</h1>

        </div>
      </div>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="UPCOMING" fetchUrl={requests.fetchUpcoming}/>
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies}/>
    </div>
  )
}

export default HomePage
