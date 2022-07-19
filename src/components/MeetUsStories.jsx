import React from "react";

export function MeetUsStories() {
  return (
    <div className="meetus__container__stories">
      <div className="meetus__container__stories__content">
        <div className="meetus__container__stories__heading">
          See our <span>stories</span>
        </div>
        <div className="meetus__container__stories__para">
          Your passion is part of our identity. See how #dsmeglobalpeople rock.
        </div>
        <div className="meetus__container__stories__card__container">
          <div className="meetus__container__stories__card">
            <div className="meetus__container__stories__card__image">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Stories card"
              />
            </div>
            <div className="meetus__container__stories__card__text">
              <div className="meetus__container__stories__card__heading">
                Olivia Piper
              </div>
              <div className="meetus__container__stories__card__para">
                Designer
              </div>
            </div>
          </div>
          <div className="meetus__container__stories__card">
            <div className="meetus__container__stories__card__image">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Stories card"
              />
            </div>
            <div className="meetus__container__stories__card__text">
              <div className="meetus__container__stories__card__heading">
                Liam Benjamin
              </div>
              <div className="meetus__container__stories__card__para">
                Designer
              </div>
            </div>
          </div>
          <div className="meetus__container__stories__card">
            <div className="meetus__container__stories__card__image">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Stories card"
              />
            </div>
            <div className="meetus__container__stories__card__text">
              <div className="meetus__container__stories__card__heading">
                Madison Joe
              </div>
              <div className="meetus__container__stories__card__para">
                Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
