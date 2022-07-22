import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BlogsCard from '../components/BlogCard';
import BlogsFilter from '../components/BlogsFilter';
import {fetcher} from '../utils/functions';
import blog from '../assets/blog.svg';
import useSWR from 'swr';
import {HomeJumbotron} from '../components/HomeJumbotron';
import {Bounce} from 'react-reveal';

export default function Blogs() {
  const navigate = useNavigate();
  const [noOfItems, setNoOfItems] = useState(9);
  const [filter, setFilter] = useState('');

  const {data, error} = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_blog`,
    fetcher,
    {suspense: true},
  );
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Blogs"
          info={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque
              minima eveniet vero porro expedita pariatur error reiciendis ut ab
              architecto quaerat similique, ipsum suscipit placeat quo rem cum!
              Rem id magni cum, voluptatibus harum possimus fugit praesentium
              nostrum illum.
            </>
          }
          img={blog}
        />
      </div>
      <div className="blog__page" style={{marginTop: '-8em'}}>
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
          <Bounce up>
            <div className="blog__greenbox__container__heading">
              Delivering software solutions beyond expectations
            </div>
            <div className="blog__greenbox__container__subheading">
              Have a project in mind?
            </div>
            <button
              className="blog__greenbox__container__button"
              onClick={() => {
                navigate('/contact');
              }}>
              Free Consultation
            </button>
          </Bounce>
        </div>
      </div>
    </>
  );
}
