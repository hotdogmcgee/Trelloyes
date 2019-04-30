import React from 'react';
import './App.css';
import List from './List.js'
import Card from './Card.js'

function App(props) {
  console.log(props.store.lists)
  const cardsArr = [<Card title="title" content="content" />, 2, 3]
  //create newCards array for each list to make as prop for List component?
  
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List header={props.store.lists[0].header} cards={cardsArr} />
        <List header={props.store.lists[1].header} cards={cardsArr[0]}/>
        <List header={props.store.lists[2].header} cards={cardsArr[0]}/>
        <List header={props.store.lists[3].header} cards={cardsArr[0]}/>
        
      </div>
    </main>
  );
}

export default App;


//Each instance of the List component should be passed 2 props (and a key). The 2 props are header and cards.
// The header prop is a string for the List's header.
// The cards prop will be an array of card objects.
// You'll need to combine the cardIds array for the list with the allCards object.


//Do I need to .map() that?  ^^^

//const newCardArray = STORE.lists['a'].cardIds.map(_, i)