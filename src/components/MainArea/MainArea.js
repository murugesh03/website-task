import React from "react";
import "./MainArea.css";
const MainArea = () => {
  return (
    <main>
      <section>
        <div className="main-area">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <div className="column ">
                <p className="hero-area-text">
                  Let us find you perfect{" "}
                  <span className="hero-area-text-two">fitness</span> classes !
                </p>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter your location"
                    />
                  </p>
                  <p className="control">
                    <button className="button button-color ">Search</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainArea;
