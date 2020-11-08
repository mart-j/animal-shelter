import React from 'react';
import './Button.css';

interface Props {
  buttonClick: (e: React.MouseEvent<HTMLElement>) => void;
  ButtonNames: string[];
}
const Button: React.FC<Props> = ({ ButtonNames, buttonClick }) => {
  return (
    <div>
      {ButtonNames.map((name, i) => {
        return (
          <div
            id={name}
            onClick={buttonClick}
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
