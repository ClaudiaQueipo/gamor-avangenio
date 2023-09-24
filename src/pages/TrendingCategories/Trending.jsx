import './trending.css'
import Title from './Title/Title';
import Categories from './Categories/Categories';

function Trending(){
    return(
        <div className="container">
            <section >
                <div className='trending-column'>
                    <Title></Title>
                    <Categories></Categories>
                    
                </div>
                
            </section>
        </div>
    )
}

export default Trending;