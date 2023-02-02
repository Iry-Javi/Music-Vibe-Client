const HomePage = props => {
    
    return (

      <div>
      <br/>
        <h1>Welcome to the Music Vibe World</h1>
        <br/>
        <br/>
        <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/cool.jpg" className="d-block w-75 m-auto" alt="Concert"  />
            <div className="carousel-caption d-none d-md-block">
              <h5>Feel that vibe</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/guitar.jpg" className="d-block w-75 m-auto" alt="Guitar" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Enjoy music</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/musicv.jpg" className="d-block w-75 m-auto" alt="Musicv" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Here is the perfect place</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
 )
}

export default HomePage;