import * as React from 'react';

function Name({ name, onNameChange }) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
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

function Display({ name, animal }) {
  if (animal) {
    return (
      <div>{`Эй ${name}, твое любимое животное: ${animal}!`}</div>
    );
  } else {
    return <div>{`Эй ${name}, ты молодец!`}</div>;
  }
}

function App() {
  const [name, setName] = React.useState('');
  const [animal, setAnimal] = React.useState('');

  const handleAnimalChange = (value) => {
    setAnimal(value);
  };

  return (
    <form>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      <FavoriteAnimal onAnimalChange={handleAnimalChange} />
      <Display name={name} animal={animal} />
    </form>
  );
}

export default App;
