import '../../styles/certificate.scss'

export default function Certificates() {
    const image = require('../../certificates/1 encontro em pesquisa e ciencia da computacao.png')
    const image2 = require('../../certificates/certificado ética.png')
    const image3 = require('../../certificates/certificado modelagem de dados.png')
    return <>
        <h1>
            Certificados
        </h1>
        <div className='content'>
            <div id="carouselCertificates" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image} class="d-block w-50 carousel-img" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={image2} class="d-block w-50 carousel-img" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={image3} class="d-block w-50 carousel-img" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselCertificates" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselCertificates" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
    </>
}