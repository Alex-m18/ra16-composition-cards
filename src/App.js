import React from 'react';
import './App.css';
import Card from './components/Card/Card'
import CardTitle from './components/CardTitle/CardTitle'
import CardText from './components/CardText/CardText'
import ButtonPrimary from './components/ButtonPrimary/ButtonPrimary'

const cards = [
  {
    img: './logo512.png',
    text: `Some quick example text to build on the card title and make up the bulk of thr card's content`,
  },
  {
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content',
  },
  {
    title: 'Button test card',
    btnhref: 'https://youtu.be/dQw4w9WgXcQ',
    btnText: 'GTA 6 Trailer',
  },
];

function App() {
  return (
    <React.Fragment>
      {cards.map((o, index) => 
        <Card img={o.img} key={index}>
          <CardTitle text={o.title}/>
          <CardText text={o.text}/>
          <ButtonPrimary href={o.btnhref} text={o.btnText}/>
        </Card>
      )}
    </React.Fragment>
  );
}

export default App;
