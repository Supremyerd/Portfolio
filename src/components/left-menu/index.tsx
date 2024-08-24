import './index.scss';
import { GitHub, MenuBook, Handyman, ReceiptLong} from '@mui/icons-material';

function LeftMenu() {
    return <>
    <div className="menu-left">
        <div className="icon">
            
        </div>
        <div className="select">
            <MenuBook className='btn-icon'/>
        </div>
        <div className="btn">
            <Handyman className='btn-icon'/>
        </div>
        <div className="btn">
            <ReceiptLong className='btn-icon'/>
        </div>
        <div className="btn">
            <GitHub className='btn-icon'/>
        </div>
    </div>
    </>
}

export default LeftMenu;