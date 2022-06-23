import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VacencyCard from "../components/VacencyCard";
import ApplyForJobPopup from "../components/ApplyForJobPopup";
import HotOfferJobCard from "../components/HotOfferJobCard";
import noData from "../assets/noData.png";
import { fetcher } from "../utils/functions";
import useSWR from "swr";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import { Link } from "react-router-dom";

export default function Careers({ setLightHeader }) {
  const [slidesPerPage, setSlidesPerPage] = useState(3.5);
  const [department, setDeparment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectItem, setSelectedItem] = useState([]);
  const [careerDataFiltered, setCareerDataFiltered] = useState([]);

  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_careers`,
    fetcher,
    { suspense: true }
  );

  useEffect(() => {
    setCareerDataFiltered(
      data.filter((item) =>
        item.position
          .toLowerCase()
          .replace(" ", "")
          .includes(searchQuery.toLocaleLowerCase().replace(" ", ""))
      )
    );
  }, [searchQuery, data]);
  useEffect(() => {
    setLightHeader(true);

    return () => {
      setLightHeader(false);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setSlidesPerPage(1);
    } else if (window.innerWidth <= 650) {
      setSlidesPerPage(1);
    } else if (window.innerWidth <= 900) {
      setSlidesPerPage(2);
    } else if (window.innerWidth <= 1150) {
      setSlidesPerPage(3);
    } else {
      setSlidesPerPage(3.5);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 650) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 900) {
        setSlidesPerPage(2);
      } else if (window.innerWidth <= 1150) {
        setSlidesPerPage(3);
      } else {
        setSlidesPerPage(3.5);
      }
    });
  }, []);
  const [careerBanner, setCareerBanner] = useState(true);

  return (
    <>
      {careerBanner ? (
        <div className="careers__wrapper">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="careers__wrapper__img"
          />
          <div className="careers__wrapper__overlay">
            <Link to="/meet-us" className="careers__wrapper__overlay__left">
              meet <span> us</span>
            </Link>
            <button
              onClick={() => {
                setCareerBanner(false);
                setLightHeader(false);
              }}
              className="careers__wrapper__overlay__right"
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="careers__wrapper__overlay__right__svgtop"
              >
                <path
                  fill="#242424"
                  d="M48.8,-68.1C59.3,-59.5,61.1,-40,62,-23.4C62.9,-6.9,62.8,6.7,60.5,21.4C58.2,36.1,53.7,51.9,43.2,59.1C32.8,66.3,16.4,64.9,2.8,61C-10.7,57.1,-21.5,50.7,-32.8,43.8C-44.1,36.9,-55.9,29.5,-65.8,17.1C-75.8,4.7,-83.9,-12.6,-77.9,-23.6C-71.9,-34.6,-51.9,-39.2,-36.6,-46.2C-21.3,-53.2,-10.6,-62.4,4.3,-68.3C19.1,-74.2,38.3,-76.6,48.8,-68.1Z"
                  transform="translate(100 100)"
                />
              </svg>
              search <span> jobs</span>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="careers__wrapper__overlay__right__svgbottom"
              >
                <path
                  fill="#189366"
                  d="M49.1,-67.9C64.3,-56.5,77.9,-43.1,80.3,-27.9C82.8,-12.7,74.2,4.3,64.5,16.8C54.7,29.3,43.8,37.3,32.9,48.1C22,58.8,11,72.3,-2.3,75.5C-15.7,78.8,-31.4,71.8,-42.4,61C-53.4,50.3,-59.8,35.9,-61.1,22.2C-62.4,8.4,-58.7,-4.7,-56.2,-20.1C-53.8,-35.5,-52.6,-53.2,-43.5,-66.5C-34.3,-79.8,-17.2,-88.8,-0.1,-88.6C16.9,-88.5,33.9,-79.2,49.1,-67.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </button>
          </div>
          {/* your true story starts <span>here</span> */}
        </div>
      ) : null}
      <div className="container">
        <HomeJumbotron
          taglinesLine="Best"
          taglines={["Jobs", "Oppertunities"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
          img={bannerImage1}
        />
      </div>
      <div className="hot__offers__section__wrapper">
        <section id="job__section" className="hot__offers__section">
          <div className="hot__offers__section__header">Hot offer</div>
          <div className="hot__offers__section__content">
            {error ? (
              <div>failed to load</div>
            ) : (
              <Swiper slidesPerView={slidesPerPage} spaceBetween={30}>
                {data.map((item) => (
                  <SwiperSlide key={JSON.stringify(item)}>
                    <HotOfferJobCard
                      item={item}
                      onApply={(e) => {
                        setIsApplyOpen(true);
                        setSelectedItem(item);
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </section>
      </div>
      <div className="hot__offers__section">
        <div className="hot__offers__section__header">Open Vacancies</div>
        <div className="hot__offers__section__content">
          <CareersFilters
            setDeparment={setDeparment}
            setSearchQuery={setSearchQuery}
          />
          {careerDataFiltered.length === 0 ? (
            <div
              style={{
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={noData} alt="nodata" style={{ width: 400 }} />
            </div>
          ) : (
            careerDataFiltered.map((item, i) => (
              <VacencyCard
                item={item}
                key={JSON.stringify(item)}
                noOfItems={i}
                department={department}
                onApply={(e) => {
                  setIsApplyOpen(true);
                  setSelectedItem(item);
                }}
              />
            ))
          )}
        </div>
      </div>

      {isApplyOpen ? (
        <ApplyForJobPopup
          selectItem={selectItem}
          setIsApplyOpen={setIsApplyOpen}
        />
      ) : null}
    </>
  );
}

function CareersFilters({ setDeparment, setSearchQuery }) {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_category`,
    fetcher,
    { suspense: true }
  );
  return (
    <div className="hot__offers__section__content__filters">
      <input
        list="departments"
        name="department"
        id="department"
        placeholder="Department"
        onChange={(e) => {
          setDeparment(e.target.value);
        }}
      />
      <datalist id="departments">
        {error ? (
          <option>failed to load</option>
        ) : (
          data.map((category) => (
            <option key={JSON.stringify(category)} value={category.name} />
          ))
        )}
      </datalist>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
}
