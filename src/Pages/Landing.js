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
    imgBg = 'https://wallpaperaccess.com/full/2979509.jpg';
  } else if (`${greet}` === 'Good Afternoon 😃') {
    imgBg =
      'https://wallpaperbat.com/img/9765-animated-landscape-weather-live-wallpaper-free-for-android-apk.jpg';
  } else if (`${greet}` === 'Good Night 😴') {
    imgBg =
      'https://i.pinimg.com/originals/e3/13/a0/e313a08e5b0455b1d2b5f345b2cdb97f.jpg';
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
          backgroundColor: 'rgba(196, 227, 237, 0.79)',
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
