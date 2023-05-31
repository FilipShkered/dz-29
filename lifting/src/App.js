import * as React from 'react';

function Name({ onNameChange }) {
  const [name, setName] = React.useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onNameChange(newName);
  };

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={handleNameChange} />
    </div>
  );
}

function FavoriteAnimal({ onAnimalChange }) {
  const [animal, setAnimal] = React.useState('');

  const handleAnimalChange = (event) => {
    const newAnimal = event.target.value;
    setAnimal(newAnimal);
    onAnimalChange(newAnimal);
  };

  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={handleAnimalChange} />
    </div>
  );
}

function Display({ animal }) {
  return <div>{`Ваше любимое животное: ${animal}!`}</div>;
}

function App() {
  const [animal, setAnimal] = React.useState('');

  return (
    <form>
      <Name onNameChange={() => {}} />
      <FavoriteAnimal onAnimalChange={setAnimal} />
      <Display animal={animal} />
    </form>
  );
}

export default App;
