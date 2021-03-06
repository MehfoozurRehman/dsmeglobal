import React from 'react';
import { Zoom } from 'react-reveal';

import {useNavigate} from 'react-router-dom';
import {getText} from '../utils/functions';

export default function BlogsCardContent({data}) {
  const navigate = useNavigate();

  return (
    <Zoom InUp>
      <button
        onClick={() => {
          setTimeout(() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
          }, 300);
          navigate('/blog-details');
          window.localStorage.setItem('blogsData', JSON.stringify(data));
        }}
        className="blog__card ">
        <img
          loading="lazy"
          src={
            'https://res.cloudinary.com/mehfoozurrehman/image/upload/' +
            data.image
          }
          alt={data.title}
          className="blog__card__img"
        />

        <div className="blog__card__content">
          <div className="blog__card__content__heading">{data.title}</div>
          <div className="blog__card__content__info">
            {getText(data.content).length < 200
              ? getText(data.content)
              : getText(data.content).substring(0, 200) + '...'}
          </div>
        </div>
      </button>
    </Zoom>
  );
}
