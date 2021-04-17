import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardView from './pages/CardView';
import CardForm from './pages/CardForm';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
      title: 'Title 1',
      subtitle: 'metus magna maximus nibh, in molestie',
      text:
        'Cras at enim tristique, pretium dolor quis, interdum risus. Aenean dictum quam quis maximus auctor. Proin dapibus, quam sed luctus aliquam, ligula dolor tincidunt purus, et porttitor felis purus id justo',
    },
    {
      title: 'Title 1',
      subtitle: 'metus magna maximus nibh, in molestie',
      text:
        'Cras at enim tristique, pretium dolor quis, interdum risus. Aenean dictum quam quis maximus auctor. Proin dapibus, quam sed luctus aliquam, ligula dolor tincidunt purus, et porttitor felis purus id justo',
    },
    {
      title: 'Title 1',
      subtitle: 'metus magna maximus nibh, in molestie',
      text:
        'Cras at enim tristique, pretium dolor quis, interdum risus. Aenean dictum quam quis maximus auctor. Proin dapibus, quam sed luctus aliquam, ligula dolor tincidunt purus, et porttitor felis purus id justo',
    },
    {
      title: 'Title 1',
      subtitle: 'metus magna maximus nibh, in molestie',
      text:
        'Cras at enim tristique, pretium dolor quis, interdum risus. Aenean dictum quam quis maximus auctor. Proin dapibus, quam sed luctus aliquam, ligula dolor tincidunt purus, et porttitor felis purus id justo',
    },
  ]);

  const addCard = (newCard) => {
    const newListOfCards = cards.concat([newCard]);

    setCards(newListOfCards);
  };

  return (
    <div className="App">
      <Container className="mt-4">
        <Row>
          <Col xs="3">
            <CardForm addCard={addCard} />
          </Col>
          <Col xs="9">
            <CardView cards={cards} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
