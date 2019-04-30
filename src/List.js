import React from 'react';
import Card from './Card.js';
import './List.css';


function List(props) {
    return (
      <section className="List">
        <header className="List-header">
          <h2>hi</h2>
        </header>
        <div className="List-cards">
          <Card title="cardtitle" content="cardcontent" />
        </div>
      </section>
    );
  }

export default List;

// {props.lists[0].header}



