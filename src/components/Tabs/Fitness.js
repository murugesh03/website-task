import React from "react";
import { fitness } from "../../Data";
const Fitness = () => {
  return (
    <div className="container is-fluid">
      <div className="columns columns-gap">
        {fitness.map((f) => (
          <div className="column" key={f.id}>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image image-width">
                      <img src={f.imageUrl} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{f.exerciseName}</p>
                    <p className="subtitle is-6">by {f.trainerName}</p>
                    <p className="subtitle is-6">{f.cardContent}</p>
                  </div>
                </div>
              </div>
              <div className="card-rating">
                <div className="card-rating-content">
                  <p>
                    <span className="card-rating-text">Club :</span>
                    <span>Health Forge</span>
                  </p>
                  <p>
                    <span className="card-rating-text">Partners :</span>
                    <span>Health Forge</span>
                  </p>
                  <p>
                    <span className="card-rating-text">Members :</span>
                    <span>15000</span>
                  </p>
                </div>
                <div class="buttons">
                  <button class="button  button-color">Scheducle</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fitness;
