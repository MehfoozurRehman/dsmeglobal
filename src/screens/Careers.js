import React, { useEffect, useState } from "react";
import HomeSectionCarouselEntry from "../components/HomeSectionCarouselEntry";
import pricing from "../assets/pricing.mp4";
import ContactSection from "../components/ContactSection";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { getText } from "../utils/functions";
import VacencyCard from "../components/VacencyCard";
import ApplyForJobPopup from "../components/ApplyForJobPopup";

export default function Careers({ setIsDark }) {
  const [careersData, setCareersData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [slidesPerPage, setSlidesPerPage] = useState(3.5);
  const [department, setDeparment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectItem, setSelectedItem] = useState([]);

  useEffect(() => {
    setIsDark(false);
    axios
      .get(`${process.env.REACT_APP_API_URL}api/v1/get_careers`)
      .then((res) => {
        setCareersData(res.data);
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}api/v1/get_category`)
      .then((res) => {
        setCategoryList(res.data);
      });
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
      <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <HomeSectionCarouselEntry
          subHeading={43 + " Jobs"}
          heading={
            <>
              Good things should <br />
              <span>grow</span>, so do we
            </>
          }
          buttonLabel="Lean more"
          videoSrc={pricing}
          toPath="/careers"
          onClick={() => {
            document.getElementById("job__section").scrollIntoView();
          }}
        />
      </div>

      <section id="job__section" className="hot__offers__section">
        <div className="hot__offers__section__header">Hot offer</div>
        <div className="hot__offers__section__content">
          <Swiper slidesPerView={slidesPerPage} spaceBetween={30}>
            {careersData.map((item) => (
              <SwiperSlide>
                <button className="hot__offers__section__content__card">
                  <div className="hot__offers__section__content__card__title">
                    {item.position}
                  </div>
                  <div className="hot__offers__section__content__card__info">
                    <div className="hot__offers__section__content__card__info__heading">
                      Description
                    </div>
                    <div className="hot__offers__section__content__card__info__content">
                      {item.description.substring("", 100)}
                    </div>
                    <div className="hot__offers__section__content__card__info__heading">
                      Requirements
                    </div>
                    <div className="hot__offers__section__content__card__info__content">
                      {getText(item.requirements).substring("", 200)}
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div
        className="hot__offers__section"
        style={{ paddingTop: 0, marginTop: -20 }}
      >
        <div className="hot__offers__section__header">Open Vacancies</div>
        <div className="hot__offers__section__content">
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
              {categoryList.map((category) => (
                <option value={category.name} />
              ))}
            </datalist>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
          {careersData
            .filter((item) =>
              item.position
                .toLowerCase()
                .includes(searchQuery.toLocaleLowerCase())
            )
            .map((item) => (
              <VacencyCard
                item={item}
                department={department}
                onApply={(e) => {
                  setIsApplyOpen(true);
                  setSelectedItem(item);
                }}
              />
            ))}
        </div>
      </div>
      <ContactSection />
      {isApplyOpen ? (
        <ApplyForJobPopup
          selectItem={selectItem}
          setIsApplyOpen={setIsApplyOpen}
        />
      ) : null}
    </>
  );
}
