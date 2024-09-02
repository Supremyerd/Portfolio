import { pages } from '../../types';
import { Tooltip } from '../utils/ToolTip';
import './index.scss';
import { GitHub, MenuBook, Handyman, ReceiptLong} from '@mui/icons-material';
import * as bootstrap from 'bootstrap';


type props = {
    selectButton :pages,
    changePage :(page :pages) => void
}

function LeftMenu({selectButton, changePage} :props) {

    return <>
    
    <div className="menu-left">

        <div className="icon">
                
        </div>

        <Tooltip placement='right' text='Sobre'>
          <div className={selectButton == 'about_me' ? 'select' : 'btn'} onClick={() => changePage('about_me')}>
              <MenuBook className='btn-icon'/>
          </div>
        </Tooltip>
        
        <Tooltip placement='right' text='Porojetos'>
          <div data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right" className={selectButton == 'projects' ? 'select' : 'btn'} onClick={() => changePage('projects')}>
              <Handyman className='btn-icon'/>
          </div>
        </Tooltip>

        <Tooltip placement='right' text='Certificados'>
          <div className={selectButton == 'certificates' ? 'select' : 'btn'} onClick={() => changePage('certificates')}>
              <ReceiptLong className='btn-icon'/>
          </div>
        </Tooltip>
        <Tooltip placement='right' text='Github'>
          <a href='https://github.com/Supremyerd' target="_blank" className={selectButton == 'github' ? 'select' : 'btn'} onClick={() => changePage('github')}>
                <GitHub className='btn-icon'/>
          </a>
        </Tooltip>
        
    </div>
    </>
}

export default LeftMenu;