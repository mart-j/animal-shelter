import React from 'react';
import './Button.css';

interface Props {
  buttonClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
  ButtonNames: string[];
}
const Button: React.FC<Props> = ({ ButtonNames, buttonClickHandler }) => {
  return (
    <div>
      {ButtonNames.map((name, i) => {
        return (
          <div
            id={name}
            onClick={buttonClickHandler}
            className="button "
            key={name + i}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Button;
