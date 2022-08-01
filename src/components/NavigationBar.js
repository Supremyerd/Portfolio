import { useState } from "react"
import "../styles/NavStyles.scss"
import Icon from "@mdi/react"
import { mdiCertificate, mdiFileDocument, mdiGithub, mdiHome} from "@mdi/js"
import { isHome, isCertificates, isGithub, isProjects } from "../scripts/utils"
import Loading from "./Loading"


const Header = () => {
    return <div className="header">
        <Loading/>
        <h1>Portfolio Andrey H.</h1>
    </div>
}

const Footer = () => {
    return <div className="footer">
        <h3>Fullstack</h3>
        <h3>Banco de dados</h3>
    </div>
}

export default function NavBar({page, setPage}) {
    const [isVisible, setVisible] = useState(false);

    const changeVisibility = () => {
        if (isVisible) {
            setVisible(!isVisible)
        } else {
            setTimeout(() => {
                setVisible(!isVisible)
            }, 350)
        }
    }

    function showElements() {



        if(isVisible) {
            return (
                <>
                    <Header></Header>

                    <div className={isHome(page) ? 'item current' : 'item'} onClick={() => {setPage('HOME')}}>
                        <h2>Home</h2>
                        <Icon path={mdiHome} size={3}/>
                    </div>

                    <div className={isCertificates(page) ? 'item current' : 'item'} onClick={() => {setPage('CERTIFICATES')}}>
                        <h2>Certificados</h2>
                        <Icon path={mdiCertificate} size={3}/>
                    </div>

                    <div className={isProjects(page) ? 'item current' : 'item'} onClick={() => {setPage('PROJECTS')}}>
                        <h2>Projetos</h2>
                        <Icon path={mdiFileDocument} size={3}/>
                    </div>

                    <div className={isGithub(page) ? 'item current' : 'item'} onClick={() => {setPage('GITHUB')}}>
                        <h2>Github</h2>
                        <Icon path={mdiGithub} size={3}/>
                    </div>

                    <Footer/>
                </>
            )
        }
    }

    return (
    <div className="navBar" onMouseEnter={changeVisibility} onMouseLeave={changeVisibility}>
        {showElements()}
    </div>
    )
};