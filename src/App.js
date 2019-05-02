import React from 'react';
import './App.css';
import List from './List.js'

function App(props) {
  console.log(props.store.lists)
  //create newCards array for each list to make as prop for List component?
  
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        { props.store.lists.map((listItem, index) => {
          return <List key={index} header={listItem.header} cards={listItem.cardIds} allCards={props.store.allCards} />
        }       
          )}
        
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



