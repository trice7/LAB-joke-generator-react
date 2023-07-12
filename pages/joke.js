import React, { useState } from 'react';
import getJoke from '../api/jokeData';

const Joke = () => {
  const [text, setText] = useState('Welcome to the joke generator!');
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
      {btn === 'Want Another?' ? (<h5 className="delivery">{deliv}</h5>) : null}
      <button type="button" className="joke-btn" onClick={btn === 'Get Joke' || btn === 'Want Another?' ? newJoke : btnState}>{ btn }</button>
    </>
  );
};

export default Joke;
