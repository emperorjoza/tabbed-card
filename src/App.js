import React from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const App = () => (
  <div style={{ padding: '2rem' }}>
    <Card title="Card Title">
      <p>This is a card with content inside.</p>
      <Button primary onClick={() => alert('Primary Button Clicked')}>
        Primary Button
      </Button>
      <Button onClick={() => alert('Secondary Button Clicked')}>
        Secondary Button
      </Button>
    </Card>
  </div>
);

export default App;
