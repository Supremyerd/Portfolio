import { useEffect } from 'react';
import './index.scss'
import {Close} from '@mui/icons-material';

type detailsProps = {
    show :boolean
    hiddenModal : () => void
};


function CardDetailsModal({show, hiddenModal} : Readonly<detailsProps>) {

    function closeOnEsc(event :KeyboardEvent) {
        
        if (event.key === 'Escape' && show)
            hiddenModal()
    }

    useEffect(() => {
        window.addEventListener('keydown', closeOnEsc);
        return () => {
            window.removeEventListener('keydown', closeOnEsc);
        }
    })


    if (show)
        return (
            <div className='detail-modal'>
                <h1>title</h1>
                <button className='exit' onClick={hiddenModal}><Close/></button>
                <hr/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id lectus ac tortor venenatis blandit. Nulla facilisi. Maecenas malesuada ipsum felis, eu sagittis sapien lacinia quis. Ut sed felis quam. Nam consequat sollicitudin augue sed fringilla. Integer tincidunt ligula mi, a iaculis lacus pulvinar gravida. Fusce porttitor augue ut lectus posuere sagittis. Mauris convallis sapien pharetra, sagittis nulla sit amet, facilisis est. Pellentesque ut libero convallis, condimentum lectus et, venenatis nibh. Fusce a malesuada enim, vulputate cursus est. Duis et sollicitudin dui. Sed rhoncus orci id urna accumsan cursus. Vestibulum porttitor tempor sem id accumsan. Praesent non consectetur lacus, sit amet viverra enim.

                    Vivamus felis est, placerat non risus in, vulputate ultricies velit. Nullam a felis velit. Etiam aliquet elit ut arcu pharetra, in tempus nisi porttitor. Vestibulum metus neque, placerat ac feugiat ut, faucibus a nisl. Etiam et scelerisque nulla, sed elementum elit. Vivamus aliquet ipsum eu condimentum varius. Phasellus sed tellus velit. Cras luctus metus ut mattis condimentum. Suspendisse lobortis metus id dignissim viverra. Sed imperdiet enim neque, malesuada pretium nibh consequat sit amet. Etiam imperdiet sapien tellus, et consectetur est egestas non. Sed rhoncus mattis lorem, efficitur volutpat nisl consectetur rutrum.

                    Sed vehicula commodo magna rhoncus fermentum. Suspendisse pulvinar, magna quis ullamcorper porta, ipsum turpis mattis justo, quis vestibulum purus est quis lectus. Aenean quis iaculis nisl. Donec eget purus eget odio imperdiet pretium ac sit amet eros. In iaculis nec elit vitae tincidunt. Vestibulum convallis nibh vitae nunc faucibus feugiat. Phasellus turpis quam, fringilla id varius eu, elementum et lectus. Etiam sodales quam eu arcu congue pulvinar a nec nunc. Curabitur tincidunt est nec semper tincidunt. Aliquam sed sollicitudin erat. Sed sit amet leo lacus. Nunc vulputate metus ut venenatis laoreet. Nullam lacus velit, volutpat eu erat at, tincidunt posuere elit. Maecenas auctor eros in lorem aliquet mattis.

                    Aenean est mauris, luctus quis augue ut, porttitor pretium neque. Integer tellus lectus, cursus eget commodo vitae, suscipit nec dolor. Nam sed purus augue. Aliquam nibh est, ultrices quis pharetra vel, tristique et elit. Aenean sem augue, auctor et dolor ut, vehicula tincidunt sapien. Nunc imperdiet nulla lacinia cursus rhoncus. Donec imperdiet faucibus lectus id vestibulum. Aliquam erat volutpat. Mauris a molestie nulla. Nam elementum sem lorem, ut sollicitudin lectus congue accumsan. Praesent venenatis dui non enim mattis finibus. Integer tincidunt ipsum tellus, in dictum lacus pulvinar ut. Curabitur non ante vehicula quam congue rutrum quis at nulla. Etiam ipsum elit, accumsan blandit dolor ut, porttitor dictum nulla.
                        
                    Etiam maximus, dolor quis luctus tempor, elit turpis ullamcorper leo, vitae ornare ipsum felis sed ligula. Vivamus sagittis semper lacus eu mattis. Sed hendrerit vestibulum nisl, ut lobortis felis. Cras aliquet erat eu tellus placerat rhoncus. Aenean finibus luctus arcu. Donec ut finibus leo. Sed nisi ex, aliquam vitae ligula vel, tempor maximus arcu. Nullam et finibus enim. Vivamus sem ligula, scelerisque et sem nec, dignissim sagittis diam. Integer sit amet ullamcorper lectus. Aenean porttitor vitae urna ac porta. Sed in erat lorem. Suspendisse mollis lacus sit amet volutpat lobortis. Nunc accumsan odio et orci ullamcorper, eget vestibulum metus pretium. In interdum fringilla sodales.     
                </p>
            </div>
        );
}

export default CardDetailsModal;