
import './styles/App.scss'
import  Nav  from './components/Nav'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Home=(props)=> {
  // const location=useLocation();
  // const propsData=location.state;
  // console.log(propsData);
  // if(location.state!==null){
    return (
      <>
      {/* <Nav/> */}
      <main>
        {/* {console.log(props.cart,'Cart Check')} */}
        <div className="banner">
        <h1 id="title">TONE-DEPOT</h1>
  
        </div>
        <div className="info-panel">
          <p className="intro-text">
            Thousands of local postings.

          </p>
          <Link to='/shop'>
          <button className='shop-button'>Shop now</button>

          </Link>
        </div>
     
      </main>
      </>
    )

  // }
  // else return (
  //   <>
  //   <Nav/>
  //   <main>
  //     {/* {console.log(props.cart,'Cart Check')} */}
  //     <div className="banner">
  //     <h1 id="title">TONE-DEPOT</h1>

  //     </div>
   
  //   </main>
  //   </>
  // )
}

export default Home;
