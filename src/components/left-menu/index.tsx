import { pages } from '../../types';
import './index.scss';
import { GitHub, MenuBook, Handyman, ReceiptLong} from '@mui/icons-material';

type props = {
    selectButton :pages,
    changePage :(page :pages) => void
}

function LeftMenu({selectButton, changePage} :props) {

    return <>
    <div className="menu-left">
        <div className="icon">
            
        </div>
        <div className={selectButton == 'about_me' ? 'select' : 'btn'} onClick={() => changePage('about_me')}>
            <MenuBook className='btn-icon'/>
        </div>
        <div className={selectButton == 'projects' ? 'select' : 'btn'} onClick={() => changePage('projects')}>
            <Handyman className='btn-icon'/>
        </div>
        <div className={selectButton == 'certificates' ? 'select' : 'btn'} onClick={() => changePage('certificates')}>
            <ReceiptLong className='btn-icon'/>
        </div>
        {/* <a href='https://github.com/Supremyerd'> */}
            <a href='https://github.com/Supremyerd' className={selectButton == 'github' ? 'select' : 'btn'} onClick={() => changePage('github')}>
                <GitHub className='btn-icon'/>
            </a>
        {/* </a> */}
    </div>
    </>
}

export default LeftMenu;