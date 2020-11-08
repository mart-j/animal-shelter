import React from 'react';
import './Card.css';

interface Props {
  filteredAnimals: {
    active: boolean;
    id: number;
    name: string;
    type: string;
    description: string;
    image: string;
  }[];
  mouseLeaveCard: (e: React.MouseEvent<HTMLElement>) => void;
  clickOnCard: (e: React.MouseEvent<HTMLElement>) => void;

  Animals: {
    active: boolean;
    id: number;
    name: string;
    type: string;
    description: string;
    image: string;
  }[];
}

const Card: React.FC<Props> = ({ mouseLeaveCard, clickOnCard, Animals }) => (
  <div className="container">
    {Animals.map(({ image, description, id, active, name }, index) => {
      return (
        <div key={id} className="card-wrapper">
          <div className="card">
            <div className="card__image-wrapper">
              <div
                onMouseLeave={mouseLeaveCard}
                onClick={clickOnCard}
                className="card__image-trigger"
              ></div>

              <img
                id={`${id}`}
                className={`card__image ${!active && 'grey'}`}
                src={image}
                alt="random"
              />
              <div className="card__description-wrapper">
                {!active && (
                  <div className="card__description">
                    <h3>{name}</h3>
                    <div className="card_description-text">{description}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default Card;
