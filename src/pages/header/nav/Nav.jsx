import './nav.css'
import Circle from '../../presentation/start/circles/Circle';

function Nav(){
    return(
        <div className="navigator-container">
            <nav>
                <ul>
                    <li className='li-nav'>
                        <a href="#" className='nav-a'>Home</a>
                        <Circle></Circle>
                    </li>
                    <li className='li-nav'>
                        <a href="#" className='nav-a'>Streams</a>
                        <Circle></Circle>
                    </li>
                    <li className='li-nav'>
                        <a href="#" className='nav-a'>Party</a>
                        <Circle></Circle>
                    </li>
                    <li className='li-nav'>
                        <a href="#" className='nav-a'>Premium</a>
                        <Circle></Circle>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;