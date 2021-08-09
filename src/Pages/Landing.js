import React from 'react';
import './Landing.css';
import Morning from '../Images/Morning.jpg';
import Afternoon from '../Images/Afternoon.jpg';
import Night from '../Images/Night.jpg';

const Landing = () => {
  const time = new Date();
  let hour = time.getHours();
  let ampm = 'am';
  if (hour > 12) {
    hour -= 12;
    ampm = 'pm';
  } else if (hour === 0 || hour === 12) ampm = 'pm';
  let greet;
  const greetColor = {};
  if (hour >= 1 && hour <= 11 && ampm === 'am') {
    greet = 'Good Morning 😄';
    greetColor.color = 'MediumSeaGreen';
  } else if (hour === 12 || (hour >= 1 && hour < 7 && ampm === 'pm')) {
    greet = 'Good Afternoon 😃';
    greetColor.color = 'orange';
  } else if (hour === 0 || (hour >= 7 && hour < 11 && ampm === 'pm')) {
    greet = '';
    greetColor.color = 'black';
  }
  let imgBg;
  if (`${greet}` === 'Good Morning 😄') {
    imgBg = Morning;
  } else if (`${greet}` === 'Good Afternoon 😃') {
    imgBg = Afternoon;
  } else if (`${greet}` === '') {
    imgBg = Night;
  }
  const bgImg = {
    position: 'fixed',
    backgroundImage: `url(${imgBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    width: '100%',
    height: ' 100%',
  };
  return (
    <>
      <div style={bgImg} />
      <div className="box">
        <h1 className="media" style={{ color: 'Tomato' }}>
          Hello,{' '}
          <span className="media" style={greetColor}>
            {greet}
          </span>
        </h1>
        <br />
        <h1 className="media" style={{ color: 'green' }}>
          Welcome{' '}
          <span className="media" style={greetColor}>
            To
          </span>{' '}
          Shoppify
        </h1>
      </div>
    </>
  );
};

export default Landing;
