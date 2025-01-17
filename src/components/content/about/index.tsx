import './index.scss';


function AboutMe() {
    return <>
      <div className="title">
          Andrey Henrique Lopes Zeferino
      </div>

      <div className='content middle'>
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis eu eros ac commodo. In euismod tristique dolor sed sollicitudin. Maecenas consectetur cursus efficitur. Nam porttitor risus nibh. Cras ac sagittis ante. Suspendisse quis pharetra velit. Fusce sed lorem sit amet lacus vehicula feugiat eget vitae odio. Duis at ex dictum, porttitor libero sed, mollis mi. Praesent venenatis ante vitae justo semper semper.
        </p>
    <p>
      Nulla aliquam, risus nec condimentum rhoncus, diam magna feugiat lectus, euismod hendrerit tortor lorem id nisl. Nunc vel diam bibendum, viverra nunc egestas, eleifend tellus. Nulla eget ante pellentesque, aliquam nisi ut, consequat neque. Mauris tincidunt eleifend lacus, varius pulvinar eros rhoncus et. Aliquam pretium ipsum ut justo mollis accumsan. Proin vehicula tincidunt consectetur. Phasellus eleifend vulputate nisi, sed bibendum urna iaculis non. In hac habitasse platea dictumst. Phasellus rutrum laoreet tellus consequat aliquet.
      </p>
      <p>
      Etiam a volutpat metus. Proin feugiat at ante non aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc commodo hendrerit tortor a tincidunt. Fusce vitae neque ex. Donec lobortis erat eu sem mollis, id feugiat tellus venenatis. Maecenas nulla elit, rhoncus sed nisl sed, pretium sodales lacus. Maecenas id ex commodo, maximus augue non, convallis mauris. Nunc consectetur odio mollis posuere posuere.
      </p>
      <p>
      Mauris dictum, lorem a tempus condimentum, ipsum turpis tempus est, vitae posuere nulla eros ac lectus. Donec arcu arcu, viverra aliquet mauris quis, sagittis lacinia ipsum. Vivamus vel elementum urna, vel efficitur sapien. In nec arcu commodo, elementum diam in, bibendum ante. Integer a maximus nisl, non malesuada nisi. Maecenas aliquam magna malesuada augue rhoncus rhoncus eu id erat. Nulla facilisi.
      </p>
      <p>
      Donec tempor ligula neque, auctor cursus purus pulvinar in. Mauris a ornare risus, et elementum nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eget augue suscipit, tincidunt ipsum sit amet, tincidunt nibh. Proin venenatis eros lorem, ut iaculis enim lacinia quis. Phasellus fermentum eu sapien id porta. Quisque in hendrerit ligula, vel lacinia lorem. Etiam mattis dolor eu convallis mollis. Nullam at mauris eros. Sed id ante id tortor vestibulum aliquam. Donec quis nibh fermentum, posuere mauris sit amet, egestas diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur faucibus ullamcorper purus, vel venenatis velit finibus id.
      </p>
      </div>

      <div className='content bottom carrousel'>
        {/*UncontrolledExample()*/}
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="public/3.png" className="d-block w-100" alt="..."/>
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div> */}
            </div>
            <div className="carousel-item">
              <img src="public/2.png" className="d-block w-100" alt="..."/>
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div> */}
            </div>
            <div className="carousel-item">
              <img src="public/1.png" className="d-block w-100" alt="..."/>
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div> */}
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
        {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="public/teste_002.jpg" className="d-block" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>

            </div>
            <div className="carousel-item">
              <img src="public/teste_001.jpg" className="d-block" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="public/teste.jpg" className="d-block" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>
    </>

}

export default AboutMe;