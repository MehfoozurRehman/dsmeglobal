import React from 'react';
import {Bounce, Zoom} from 'react-reveal';

import {useNavigate} from 'react-router-dom';

export default function ProjectCardContent({image, title, data}) {
  const navigate = useNavigate();

  return (
    <Zoom>
      <button
        className="service__details__projects__entry"
        onClick={() => {
          navigate('/portfolio-detail');
          window.localStorage.setItem('project', JSON.stringify(data));
          window.scrollTo({behavior: 'smooth', top: 0});
        }}>
        <img
          loading="lazy"
          src={
            'https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/' +
            image
          }
          alt="projectImg"
          className="service__details__projects__entry__img"
        />
        <div className="service__details__projects__entry__content">
          <div className="service__details__projects__entry__content__heading">
            {title}
          </div>
          <div className="service__details__projects__entry__content__info">
            {data.description}
          </div>
        </div>
      </button>
    </Zoom>
  );
}
