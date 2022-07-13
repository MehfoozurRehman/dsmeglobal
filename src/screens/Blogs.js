import React, {useState} from 'react';
import BlogsCard from '../components/BlogCard';
import BlogsFilter from '../components/BlogsFilter';
import {fetcher} from '../utils/functions';
import useSWR from 'swr';

export default function Blogs() {
  const [noOfItems, setNoOfItems] = useState(9);
  const [filter, setFilter] = useState('');

  const {data, error} = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_blog`,
    fetcher,
    {suspense: true},
  );
  return (
    <div className="blog__page">
      <div className="blog__page__heading">Blogs</div>
      <div className="blog__page__filter">
        <BlogsFilter
          title="All"
          defaultChecked={true}
          onChange={() => {
            setFilter('');
          }}
        />
        <BlogsFilter
          title="Web Apps"
          onChange={() => {
            setFilter('Web App Development');
          }}
        />
        <BlogsFilter
          title="Mobile Apps"
          onChange={() => {
            setFilter('Mobile App Development');
          }}
        />
        <BlogsFilter
          title="Ecommerce"
          onChange={() => {
            setFilter('Ecommerce Solutions');
          }}
        />
        <BlogsFilter
          title="UI/UX Design"
          onChange={() => {
            setFilter('UI & UX Services');
          }}
        />
      </div>
      <div className="blog__page__content">
        {error ? (
          <div>failed to load</div>
        ) : (
          data
            .filter((item, i) => (filter === '' ? i < noOfItems : i))
            .map(item => (
              <BlogsCard
                data={item}
                key={JSON.stringify(item)}
                filter={filter}
              />
            ))
        )}
      </div>
      {filter === '' && data.length > 6 ? (
        <div className="blog__page__content__button">
          <button
            className="button"
            onClick={() => {
              setNoOfItems(noOfItems + noOfItems);
            }}>
            Load More
          </button>
        </div>
      ) : null}
      <div className="blog__greenbox__container">
        <div className="blog__greenbox__container__heading">
          Delivering software solutions beyond expectations
        </div>
        <div className="blog__greenbox__container__subheading">
          Have a project in mind?
        </div>
        <button className="blog__greenbox__container__button">
          Free Consultation
        </button>
      </div>
    </div>
  );
}
