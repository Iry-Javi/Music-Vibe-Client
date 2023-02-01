const HomePage = props => {
    
    return (

      <div>
      <br/>
        <h1>Welcome to the Music Vibe World</h1>
        <br/>
        <br/>
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/cool.jpg" class="d-block w-75 m-auto" alt="Concert"  />
            <div class="carousel-caption d-none d-md-block">
              <h5>Feel that vibe</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/guitar.jpg" class="d-block w-75 m-auto" alt="Guitar" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Enjoy music</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/musicv.jpg" class="d-block w-75 m-auto" alt="Musicv" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Here is the perfect place</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      
 )
}

export default HomePage;