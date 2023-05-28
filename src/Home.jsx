import { Link } from 'react-router-dom';
import './styles/App.scss'
const Home=(props)=> {
 
    return (
      <>
      <main>
        <div className="banner">
        <h1 id="title">TONE-DEPOT</h1>
  
        </div>
        <div className="info-panel">
          <p className="intro-text">
            The one stop shop for all music gear and related products.

          </p>
          <Link to='/shop'>
          <button className='shop-button'>Shop now</button>

          </Link>
        </div>
     
      </main>
      </>
    )
 
}

export default Home;
