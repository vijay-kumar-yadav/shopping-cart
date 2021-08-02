import React from 'react';

const Landing = () => {
  const time = new Date();
  let hour = time.getHours();
  let ampm = 'am';
  if (hour > 12) {
    hour -= 12;
    ampm = 'pm';
  } else if (hour === 0 || hour === 12) ampm = 'pm';
  const greetColor = {};
  let greet;
  if (hour >= 1 && hour <= 11 && ampm === 'am') {
    greet = 'Good Morning 😄';
    greetColor.color = 'MediumSeaGreen';
  } else if (hour === 12 || (hour >= 1 && hour < 7 && ampm === 'pm')) {
    greet = 'Good Afternoon 😃';
    greetColor.color = 'orange';
  } else if (hour === 0 || (hour >= 7 && hour < 11 && ampm === 'pm')) {
    greet = 'Good Night 😴';
    greetColor.color = 'black';
  }
  let imgBg;
  if (`${greet}` === 'Good Morning 😄') {
    imgBg = 'https://wallpaperaccess.com/full/1319725.jpg';
  } else if (`${greet}` === 'Good Afternoon 😃') {
    imgBg = 'https://wallpaperaccess.com/full/2107737.jpg';
  } else if (`${greet}` === 'Good Night 😴') {
    imgBg = 'https://wallpapercave.com/wp/wp3113563.jpg';
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
      <div
        style={{
          position: 'absolute',
          padding: '15px',
          backgroundColor: '#c4e3ed',
          borderRadius: '10px',
          top: '50%',
          left: '50%',
          margin: '-100px 0 0 -150px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'Tomato' }}>
          Hello, <span style={greetColor}>{greet}</span>
        </h1>
        <br />
        <h1 style={{ color: 'green' }}>
          Welcome <span style={greetColor}>To</span> Shoppify
        </h1>
      </div>
    </>
  );
};

export default Landing;
