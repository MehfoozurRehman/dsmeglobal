import React, { useEffect, useState } from "react";
import HomeSectionCarouselEntry from "../components/HomeSectionCarouselEntry";
import pricing from "../assets/pricing.mp4";
import ContactSection from "../components/ContactSection";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import VacencyCard from "../components/VacencyCard";
import ApplyForJobPopup from "../components/ApplyForJobPopup";
import HotOfferJobCard from "../components/HotOfferJobCard";
import Loader from "../components/Loader";
import noData from "../assets/noData.png";

export default function Careers({ setIsDark }) {
  const [careersData, setCareersData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [slidesPerPage, setSlidesPerPage] = useState(3.5);
  const [department, setDeparment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectItem, setSelectedItem] = useState([]);
  const [careerDataFiltered, setCareerDataFiltered] = useState([]);
  useEffect(() => {
    setCareerDataFiltered(
      careersData.filter((item) =>
        item.position
          .toLowerCase()
          .replace(" ", "")
          .includes(searchQuery.toLocaleLowerCase().replace(" ", ""))
      )
    );
  }, [searchQuery, careersData]);

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
            {careersData.length === 0 ? (
              <Loader />
            ) : (
              careersData.map((item) => (
                <SwiperSlide key={JSON.stringify(item)}>
                  <HotOfferJobCard
                    item={item}
                    onApply={(e) => {
                      setIsApplyOpen(true);
                      setSelectedItem(item);
                    }}
                  />
                </SwiperSlide>
              ))
            )}
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
                <option key={JSON.stringify(category)} value={category.name} />
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
          {careersData.length === 0 ? (
            <Loader />
          ) : careerDataFiltered.length === 0 ? (
            <div
              style={{
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={noData} alt="nodata image" style={{ width: 400 }} />
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
