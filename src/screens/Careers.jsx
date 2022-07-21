import React, { useEffect, useLayoutEffect, useState } from "react";
import ApplyForJobPopup from "../components/ApplyForJobPopup";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { CareerBanner } from "../components/CareerBanner";
import { CareeersFeature } from "../components/CareeersFeature";
import { CareersVacencies } from "../components/CareersVacencies";
import { CareersViewOpenings } from "../components/CareersViewOpenings";
import { fetcher } from "../utils/functions";
import noData from "../assets/noData.webp";
import career from "../assets/career.svg";
import useSWR from "swr";

export default function Careers({ setLightHeader }) {
  const [slidesPerPage, setSlidesPerPage] = useState(3.5);
  const [department, setDeparment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectItem, setSelectedItem] = useState([]);
  const [careerDataFiltered, setCareerDataFiltered] = useState([]);

  const { data, error } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_careers`,
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

  useLayoutEffect(() => {
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
      <CareeersFeature />
      <CareersViewOpenings
        error={error}
        slidesPerPage={slidesPerPage}
        setIsApplyOpen={setIsApplyOpen}
        data={data}
        setSelectedItem={setSelectedItem}
      />
      <CareersVacencies
        setDeparment={setDeparment}
        setSearchQuery={setSearchQuery}
        noData={noData}
        data={data}
        department={department}
        setIsApplyOpen={setIsApplyOpen}
        careerDataFiltered={careerDataFiltered}
        setSelectedItem={setSelectedItem}
      />
      {isApplyOpen ? (
        <ApplyForJobPopup
          selectItem={selectItem}
          setIsApplyOpen={setIsApplyOpen}
        />
      ) : null}
    </>
  );
}
