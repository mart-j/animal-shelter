import React, { useState } from 'react';
import './App.css';
import Button from '../components/buttons/Button';
import Card from '../components/card/Card';
import { Animals } from '../Animals';
import { ButtonNames } from '../ButtonNames';

const App = () => {
  const [buttonNames, setButtonNames] = useState<string[]>(ButtonNames);
  const [activeDescription, setActiveDescription] = useState(Animals);

  const clickOnCard = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;

    if (target.classList.contains('card__image-trigger')) {
      const animals = [...activeDescription];
      const animal = { ...animals[Number(target.id)] };
      const targetIndex = Number(target.nextElementSibling?.id);

      animal.active = false;

      animals[targetIndex].active = !animals[targetIndex].active;
      setActiveDescription(animals);
    }
  };

  const mouseLeaveCard = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;
    const animals = [...activeDescription];
    const animal = { ...animals[Number(target.id)] };
    const targetIndex = Number(target.nextElementSibling?.id);

    animal.active = false;
    animals[targetIndex].active = true;
    setActiveDescription(animals);
  };

  const buttonClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;
    let newArray = [...buttonNames, target.id];
    if (buttonNames.includes(target.id)) {
      newArray = newArray.filter((name) => name !== target.id);
    }
    setButtonNames(newArray);
    target.classList.toggle('button--false');
  };

  const filteredAnimals = Animals.filter((animal) => {
    return buttonNames.includes(animal.type);
  });

  return (
    <div className="App">
      <h1 className="main-heading">Dzīvnieki</h1>
      <Button
        buttonClickHandler={buttonClickHandler}
        ButtonNames={ButtonNames}
      />
      <Card
        mouseLeaveCard={mouseLeaveCard}
        clickOnCard={clickOnCard}
        filteredAnimals={filteredAnimals}
        Animals={filteredAnimals}
      />
    </div>
  );
};

export default App;
