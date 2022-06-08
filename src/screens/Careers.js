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

export default function Careers() {
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

  return (
    <>
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
