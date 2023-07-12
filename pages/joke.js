import React, { useState } from 'react';
import getJoke from '../api/jokeData';

// let theJoke = {};
// const newJoke = async () => {
//   theJoke = await getJoke;
// };

const Joke = () => {
  // const theJoke = await getJoke;
  // const newJoke = () => {
  //   getJoke().then((item) => {
  //     theJoke = item;
  //   });
  // };
  const [text, setText] = useState('Welcome to the joke generator! Click the button below to get a joke.');
  const [btn, setBtn] = useState('Get Joke');
  const [deliv, setDeliv] = useState('');
  let theJoke = {};
  const newJoke = () => {
    getJoke().then(({ setup, delivery }) => {
      const theSetup = setup;
      const theDelivery = delivery;
      theJoke = { theSetup, theDelivery };
      console.warn(theJoke);
      setText(() => theSetup);
      setDeliv(() => theDelivery);
      setBtn(() => '???');
    });
  };

  const btnState = () => {
    setBtn(() => 'Want Another?');
  };

  // console.warn(theJoke);

  return (
    <>
      <h2 className="setup">{ text }</h2>
      {btn === 'Want Another?' ? (<h2 className="delivery">{deliv}</h2>) : null}
      <button type="button" className="joke-btn" onClick={btn === 'Get Joke' || btn === 'Want Another?' ? newJoke : btnState}>{ btn }</button>
    </>
  );
};

export default Joke;
