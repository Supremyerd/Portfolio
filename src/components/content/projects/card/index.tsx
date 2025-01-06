import './index.scss';


type cardProps = {
    img :string
    title :string
    text :string
    width ?:string
    height ?:string
    onClick ?:() => void
}

function Card({img, title, text, onClick, width, height} : Readonly<cardProps> ) {
    return (
        <div className="card" onClick={onClick}>
            <img src={img} className="card-img-top" alt="..." style={{width: width ?? '50%', height:  height ??'50%', left: '25%', position: 'relative'}}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default Card;