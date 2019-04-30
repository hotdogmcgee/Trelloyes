import React from 'react';
import Card from './Card.js';
import './List.css';


function List(props) {
    return (
      <section className="List">
        <header className="List-header">
          <h2>{props.title}</h2>
        </header>
        <div className="List-cards">
          <Card title={props.title} content={props.content} />
        </div>
      </section>
    );
  }

export default List;



