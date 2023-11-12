import React, {useState} from 'react';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import Subtract from "../../assets/Subtract (5).png"
import  rightArrow from "../../assets/right-arrow-backup-2-svgrepo-com.svg"
import leftArrow from "../../assets/left-chevron-svgrepo-com.svg"


const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}>
        {/* <TiChevronLeftOutline/> */}
        <img className='opacity-50' src={leftArrow} alt="" />
        </button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))
      }
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}>
        
        {/* <TiChevronRightOutline/> */}
        <img className='rotate-180 opacity-50' src={leftArrow} alt="" />
      
      </button>}
    </div>
  );
};

const App = () => (
  <div className='app'>
    <Carousel>
      {/* {[...new Array(CARDS)].map((_, i) => (
        
        <Card title={'Card '} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      
      ))} */}

      <img src={Subtract} alt="" />
      <img src={Subtract} alt="" />
      <img src={Subtract} alt="" />


    </Carousel>
  </div>
);

export default App;