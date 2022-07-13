import React, { useEffect, useLayoutEffect, useState } from "react";
import ApplyForJobPopup from "../components/ApplyForJobPopup";
import { CareersFilters } from "../components/CareersFilters";
import HotOfferJobCard from "../components/HotOfferJobCard";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { CareerBanner } from "../components/CareerBanner";
import VacencyCard from "../components/VacencyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher } from "../utils/functions";
import noData from "../assets/noData.png";
import career from "../assets/career.svg";
import useSWR from "swr";
import { ExperitseCard } from "../components/ExperitseCard";

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

  useLayoutEffect(() => {
    setCareerBanner(true);
    return () => {
      setCareerBanner(true);
    };
  }, []);

  return (
    <>
      {careerBanner ? (
        <CareerBanner
          setLightHeader={setLightHeader}
          setCareerBanner={setCareerBanner}
        />
      ) : null}
      <div className="container">
        <HomeJumbotron
          taglinesLine="Good things should grow, and so do we"
          info="There are jobs and then there are careers. We welcome you to find your best fit at DSME Global Links and become part of the fastest-growing technology leaders in the region. Join us to be surrounded by smart, ambitious, and motivated people at DSME Global Links."
          img={career}
        />
      </div>
      <div
        className="container__web__dev__experties services__startup__second__expertise"
        style={{ marginBottom: "4em", marginTop: "4em" }}
      >
        <div className="container__web__dev__experties__header services__startup__third__header">
          <div className="container__web__dev__experties__header__heading">
            We’re not just colleagues. We’re family
          </div>
          <div className="container__web__dev__experties__header__info">
            DSME Global Links is not just a workplace – it’s a lifestyle, and we
            want each of our team members to get the most out of it
          </div>
        </div>
        <div className="container__web__dev__experties__content">
          <ExperitseCard
            label="Work-life balance"
            info="Our main motto is “work hard – play hard” and we live by that principle every day! You won’t see coding monkeys glued to their screens 24/7 in here. Instead, you’ll find driven individuals passionate about what they’re doing."
          />
          <ExperitseCard
            label="Personal growth"
            info="Through conferences, training, and 1-on-1 mentoring, we strongly encourage the personal and professional growth of every member of our DSME Global Links family."
          />
          <ExperitseCard
            label="Feedback & communication"
            info="This works for our own team members, as well as for our clients – feedback is everything! We want to be on the same page and we’d like to address any worries as soon as they arise."
          />
          <ExperitseCard
            label="Career change done simple"
            info="At DSME Global Links, our talents aren’t stuck in one direction. We have developers turned PMs, designers turned sales superstars, and testers turned engineers – the sky really is the limit!"
          />
          <ExperitseCard
            label="Agility & autonomy"
            info="With a flat hierarchy, a careful evaluation of inter-team values during the recruitment process, flexible working hours, and more – DSME Global Links is a place where individuality meets teamwork."
          />
        </div>
      </div>
      <div className="hot__offers__section__wrapper">
        <section id="job__section" className="hot__offers__section">
          <div className="hot__offers__section__header">View Openings</div>
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
        <div className="hot__offers__section__header">
          Open Vacancies - Join us
          <span>
            We give you opportunities to excel and achieve the global
            recognition that you deserve!
          </span>
        </div>
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
