import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import clutch from "../assets/top-clutch.webp";
import topSoftwarePic from "../assets/top-software.webp";
import topMobileAppCompany from "../assets/top-mobile-app-development-company-badge-1.webp";
import subtractPng from "../assets/subtract.webp";
import softwareUsa from "../assets/software-usa.webp";
import itrateco from "../assets/itrateco.webp";
import fastestGrowingApp from "../assets/fastest-growing-app.webp";
import designrush from "../assets/designrush.webp";
import designWorkImageMob from "../assets/design-work-image-mob.webp";
import appfuturaBadge from "../assets/appfutura-badge.webp";
import softwaredev from "../assets/softwaredev.webp";
import sdappfuturaBadge from "../assets/sdappfutura-badge.webp";
import webappusfuturaBadge from "../assets/webappusfutura-badge.webp";
import webappfuturaBadge from "../assets/webappfutura-badge.webp";
import topAppPic from "../assets/topapp.webp";

export function AboutAwardAchievements({
  slidesPerViewLogo,
  Navigation,
  Pagination,
  showNavigation,
}) {
  return (
    <div className="pricing__fitted__team">
      <div className="pricing__fitted__team__header">
        <div className="pricing__fitted__team__header__heading">
          Awards & Achievements
        </div>
        <div className="pricing__fitted__team__header__info">
          We are proud to be recognized as a top service provider by these
          platforms.
        </div>
      </div>
      <div className="pricing__fitted__team__content">
        <Swiper
          slidesPerView={slidesPerViewLogo}
          modules={[Navigation, Pagination]} // loop
          // spaceBetween={30}
          navigation={showNavigation ? true : false}
          pagination={
            !showNavigation
              ? {
                  clickable: true,
                }
              : false
          }
        >
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={clutch} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={designWorkImageMob} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={topSoftwarePic} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={topMobileAppCompany} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={clutch} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={subtractPng} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={fastestGrowingApp} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={designrush} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={softwareUsa} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={itrateco} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={appfuturaBadge} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={softwaredev} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={webappfuturaBadge} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={topAppPic} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={webappusfuturaBadge} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={softwaredev} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={sdappfuturaBadge} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={softwaredev} alt="Brand Logo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="highly__customer__main__container">
        <div className="highly__customer__main__first__container">
          <div className="highly__customer__main__container__heading">
            Highly Customer Centric <span>Development Process</span>
          </div>
          <div className="highly__customer__main__first__container__jira__container">
            <div className="highly__customer__main__first__container__jira__container__heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 88.824 88.824"
              >
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="translate(-608.655 -634.92)"
                >
                  <path
                    id="Path_48"
                    data-name="Path 48"
                    d="M-856.243-2229.105c.287-.017.575-.048.862-.048q20.626,0,41.252-.007a4.274,4.274,0,0,1,3.07.91,4.009,4.009,0,0,1,1.3,3.176q-.014,15.383,0,30.766,0,5.676.02,11.352h-2.082c-1.227-.287-2.477-.5-3.679-.873A19.028,19.028,0,0,1-829-2200.759c-.182-2.677-.092-5.372-.125-8.058,0-.33,0-.66,0-1.037-2.745,0-5.344.01-7.941,0a19.2,19.2,0,0,1-18.146-13.093c-.443-1.325-.693-2.715-1.032-4.074Z"
                    transform="translate(1464.898 2906.701)"
                  />
                  <path
                    id="Path_50"
                    data-name="Path 50"
                    d="M-718.7-2275.006a17.244,17.244,0,0,1-8.428-1.912c-7.094-3.686-10.721-9.57-10.881-17.565-.043-2.138-.007-4.277-.007-6.416v-1c-2.922,0-5.723.022-8.522,0a19.3,19.3,0,0,1-18.279-15.6c-.194-1.161-.291-2.337-.446-3.617.431-.019.735-.044,1.04-.044,13.785,0,27.571.033,41.356-.031a4,4,0,0,1,4.2,4.193c-.059,13.67-.03,27.34-.03,41.01Z"
                    transform="translate(1395.005 2977.406)"
                  />
                  <path
                    id="Path_51"
                    data-name="Path 51"
                    d="M-627.14-2366.881a18.07,18.07,0,0,1-10.179-2.89,18.792,18.792,0,0,1-9.083-16.015c-.069-2.31-.017-4.624-.02-6.936,0-.311,0-.621,0-1.04-.4,0-.713,0-1.021,0-2.543-.009-5.087.027-7.629-.034a19.215,19.215,0,0,1-18.4-17.245c-.058-.627-.107-1.255-.171-2.008h1.007q20.765,0,41.531,0a3.648,3.648,0,0,1,3.963,3.914q0,20.678,0,41.357Z"
                    transform="translate(1324.619 3047.969)"
                  />
                </g>
              </svg>
              Jira Software
            </div>
            <div className="highly__customer__main__first__container__jira__container__content">
              Tasks are maintained on a daily basis. This allows you to get a
              quick overview on where the team stands.
            </div>
          </div>
          <div className="highly__customer__main__first__container__jira__container">
            <div className="highly__customer__main__first__container__jira__container__heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 88.838 88.876"
              >
                <g
                  id="Group_7"
                  data-name="Group 7"
                  transform="translate(-195.328 -633.908)"
                >
                  <path
                    id="Path_53"
                    data-name="Path 53"
                    d="M-2291.221-1973.8a22.163,22.163,0,0,1-2.72-1.013,8.763,8.763,0,0,1-5.055-8.077c-.074-7.63-.048-15.261-.012-22.892a9.159,9.159,0,0,1,8.841-9.028,9.235,9.235,0,0,1,9.493,7.867,7.673,7.673,0,0,1,.059,1.038c0,7.775.067,15.551-.034,23.325a8.976,8.976,0,0,1-7.327,8.6,3.16,3.16,0,0,0-.469.175Z"
                    transform="translate(2518.304 2696.583)"
                  />
                  <path
                    id="Path_54"
                    data-name="Path 54"
                    d="M-2154.854-2010.083c-.152.486-.3.974-.458,1.457a9.183,9.183,0,0,1-8.717,6.337q-11.314.029-22.628,0a9.192,9.192,0,0,1-9.146-8.158,9.2,9.2,0,0,1,7.646-10.148,13.245,13.245,0,0,1,2.247-.118q10.49-.012,20.98,0c5.435,0,8.586,2.447,9.968,7.729.013.049.071.087.108.13Z"
                    transform="translate(2439.019 2701.111)"
                  />
                  <path
                    id="Path_55"
                    data-name="Path 55"
                    d="M-2188.2-1898.868a23.435,23.435,0,0,1-3.99-1.747,8.83,8.83,0,0,1-3.906-7.7c-.015-2.023-.02-4.046,0-6.068a2.618,2.618,0,0,1,2.908-2.893c2.224-.007,4.45-.03,6.673.022a9.2,9.2,0,0,1,8.85,8.476,9.3,9.3,0,0,1-7.281,9.724c-.222.046-.436.125-.654.188Z"
                    transform="translate(2439.227 2621.652)"
                  />
                  <path
                    id="Path_56"
                    data-name="Path 56"
                    d="M-2080.048-2113.213a23.152,23.152,0,0,1-1.693,3.921,8.9,8.9,0,0,1-7.838,3.983c-1.965.011-3.929.016-5.894,0a2.66,2.66,0,0,1-2.98-3c0-2.167-.029-4.335.018-6.5a9.2,9.2,0,0,1,8.477-8.941,9.287,9.287,0,0,1,9.722,7.281c.048.222.125.438.188.657Z"
                    transform="translate(2364.213 2780.293)"
                  />
                  <path
                    id="Path_57"
                    data-name="Path 57"
                    d="M-2381.829-2099.413c-3.93,0-7.862.078-11.789-.022a9,9,0,0,1-8.383-6.84,9.193,9.193,0,0,1,3.9-10.042,9.067,9.067,0,0,1,4.985-1.491c7.543,0,15.086-.016,22.628,0a9.179,9.179,0,0,1,9.131,8.078A9.2,9.2,0,0,1-2369-2099.5a13.026,13.026,0,0,1-2.161.117c-3.555.011-7.109.005-10.664.005Z"
                    transform="translate(2597.632 2775.703)"
                  />
                  <path
                    id="Path_58"
                    data-name="Path 58"
                    d="M-2201.829-2200.712c0-3.96-.083-7.922.022-11.879a9.117,9.117,0,0,1,8.131-8.627,9.255,9.255,0,0,1,9.862,6.621,10.416,10.416,0,0,1,.362,2.645q.042,11.23.011,22.46a9.2,9.2,0,0,1-8.017,9.191,9.2,9.2,0,0,1-10.276-7.584,12.285,12.285,0,0,1-.124-2.159c-.012-3.555-.005-7.111-.005-10.666Z"
                    transform="translate(2443.648 2855.183)"
                  />
                  <path
                    id="Path_59"
                    data-name="Path 59"
                    d="M-2292.729-2202.571a36.546,36.546,0,0,1-5.4-.545,8.982,8.982,0,0,1-6.672-9.7,9.172,9.172,0,0,1,8.738-8.317c4.791-.094,8.9,3.055,9.467,7.642a58.2,58.2,0,0,1,.117,8.484,2.389,2.389,0,0,1-2.507,2.266c-1.242.029-2.486.006-3.729.006Z"
                    transform="translate(2522.772 2855.071)"
                  />
                  <path
                    id="Path_60"
                    data-name="Path 60"
                    d="M-2383.773-2008.682a40.569,40.569,0,0,1-.31,4.831,9.16,9.16,0,0,1-9.073,7.325,9.263,9.263,0,0,1-8.943-7.508c-1.053-5.854,3.129-10.808,9.281-10.954,2.022-.048,4.047-.029,6.07,0a2.626,2.626,0,0,1,2.887,2.921c.008,1.128,0,2.255,0,3.383Z"
                    transform="translate(2597.599 2696.73)"
                  />
                </g>
              </svg>
              Slack
            </div>
            <div className="highly__customer__main__first__container__jira__container__content">
              Each team member posts a daily update on email/slack. This
              includes tasks done today, tasks planned for tomorrow and
              blockers.
            </div>
          </div>
          <div className="highly__customer__main__first__container__jira__container">
            <div className="highly__customer__main__first__container__jira__container__heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 88.872 87.702"
              >
                <g
                  id="Group_6"
                  data-name="Group 6"
                  transform="translate(-367.045 -640.893)"
                >
                  <path
                    id="Path_62"
                    data-name="Path 62"
                    d="M-1809.817-2307c-.78.955-1.529,1.938-2.348,2.858-1.344,1.511-2.733,2.982-4.187,4.561l-3.674-3.354,1.913-2.125h-69.5v-5.179h14.913l-6.153-5.445,3.884-3.293a25.523,25.523,0,0,0,35.639,2.848,25.586,25.586,0,0,0,5.493-32.306,25.313,25.313,0,0,0-30.72-10.923c-12.225,4.689-17.23,16.6-16.3,25.332l2.174-2.242,3.475,3.728c-1.818,1.853-3.781,3.894-5.792,5.886a2.338,2.338,0,0,1-3.113.092c-2.384-1.678-4.729-3.415-7.187-5.2l2.927-4.046,2.393,1.7c0-.406-.017-.668,0-.927.157-2.012.3-4.026.5-6.032a.8.8,0,0,0-.57-.967,20.625,20.625,0,0,1-12.172-15.011,21.115,21.115,0,0,1,12.752-23.858c.394-.156.787-.315,1.329-.531l-2.47-1.76c.486-.7.951-1.383,1.421-2.059.459-.658.923-1.312,1.43-2.031.459.316.861.587,1.257.864,2.012,1.407,4.029,2.808,6.033,4.226a2.536,2.536,0,0,1,.86,3.816c-1.368,2.438-2.754,4.866-4.159,7.346l-4.341-2.461,1.653-2.972c-3.6.527-9.432,5.015-10.83,11.67a15.967,15.967,0,0,0,9.178,18.1c6.569-13.547,17.115-20.772,32.336-18.943,12.823,1.541,21.58,9.147,25.123,21.561,3.935,13.784-.733,25.035-11.938,33.74h20.777l-1.963-2.289,3.8-3.208c1.9,2.228,3.756,4.4,5.6,6.586a7.539,7.539,0,0,1,.552.86Z"
                    transform="translate(2265.734 3028.172)"
                  />
                </g>
              </svg>
              Daily & Weekly Scrum Call
            </div>
            <div className="highly__customer__main__first__container__jira__container__content">
              Depending on how involved the client wants to be, daily or weekly
              scrum calls are setup to stay on top of what's going on within the
              project.
            </div>
          </div>
          <div className="highly__customer__main__first__container__jira__container">
            <div className="highly__customer__main__first__container__jira__container__heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 58.077 59.597"
              >
                <g
                  id="Group_5"
                  data-name="Group 5"
                  transform="translate(-507.366 -645.29)"
                >
                  <path
                    id="Path_64"
                    data-name="Path 64"
                    d="M-1249.166-2298.915a29.133,29.133,0,0,1-6.04-2.336,74.678,74.678,0,0,1-23.521-17.268,71,71,0,0,1-13.774-22.6,10.029,10.029,0,0,1,.579-8.861,11.621,11.621,0,0,1,6.062-4.924,6.164,6.164,0,0,1,4.628-.342,5.955,5.955,0,0,1,1.875,1.116,36.359,36.359,0,0,1,8.331,11.3c1.256,2.632.331,4.894-1.746,6.518-.366.287-.757.541-1.125.826a3.8,3.8,0,0,0-1.447,4.906,21.148,21.148,0,0,0,2.7,4.99,25.634,25.634,0,0,0,10.4,8.342c1.05.485,2.179.9,3.283.273a5.621,5.621,0,0,0,1.534-1.451,9.707,9.707,0,0,1,2.562-2.5,5.6,5.6,0,0,1,5.669-.173,40.081,40.081,0,0,1,4.765,2.985c1.728,1.213,3.407,2.5,5.042,3.841,2.623,2.146,3.192,4.515,1.7,7.537a13.963,13.963,0,0,1-9.31,7.635c-.259.069-.521.125-.782.187Z"
                    transform="translate(1800.628 3003.802)"
                  />
                  <path
                    id="Path_65"
                    data-name="Path 65"
                    d="M-1139.2-2341.994a15.925,15.925,0,0,1-.015,1.974,2.133,2.133,0,0,1-2.229,1.946,2.2,2.2,0,0,1-2.381-1.988c-.19-1.359-.257-2.737-.481-4.09a24.816,24.816,0,0,0-4.448-11.274,18.471,18.471,0,0,0-7.706-5.812,35.2,35.2,0,0,0-9.708-2.414c-1.449-.169-2.168-.953-2.114-2.2a2.33,2.33,0,0,1,2.408-2.444,24.519,24.519,0,0,1,14.143,3.993,27.392,27.392,0,0,1,10.964,13.393A23.01,23.01,0,0,1-1139.2-2341.994Z"
                    transform="translate(1704.615 3013.596)"
                  />
                  <path
                    id="Path_66"
                    data-name="Path 66"
                    d="M-1143.984-2317.8c0,.245.012.691,0,1.137a2.154,2.154,0,0,1-2.17,2.25,2.175,2.175,0,0,1-2.485-2.032c-.331-1.881-.625-3.78-1.137-5.615a10.384,10.384,0,0,0-7.287-7.343c-1.669-.538-3.4-.882-5.108-1.3a2.44,2.44,0,0,1-2.06-1.561,2.445,2.445,0,0,1,2.539-3.292c7.558.682,13.207,4.222,16.446,11.226A14.559,14.559,0,0,1-1143.984-2317.8Z"
                    transform="translate(1701.609 2988.439)"
                  />
                  <path
                    id="Path_67"
                    data-name="Path 67"
                    d="M-1157.469-2301.98a8.9,8.9,0,0,1,5.905,2.868,8.969,8.969,0,0,1,2.991,6.811,2.539,2.539,0,0,1-1.528,2.63,2.392,2.392,0,0,1-3.22-2.059,12.788,12.788,0,0,0-.67-2.565,4.677,4.677,0,0,0-3.562-2.684c-.488-.116-.983-.209-1.464-.349a2.014,2.014,0,0,1-1.6-1.844,2.459,2.459,0,0,1,1.362-2.376A12.21,12.21,0,0,1-1157.469-2301.98Z"
                    transform="translate(1698.73 2962.642)"
                  />
                </g>
              </svg>
              Product Demo Calls
            </div>
            <div className="highly__customer__main__first__container__jira__container__content">
              On every sprint end, we give you a live demo of work, done during
              that week.
            </div>
          </div>
        </div>
        <div className="highly__customer__main__second__container">
          <div className="highly__customer__main__second__container__interior">
            <div className="highly__customer__main__container__heading__content">
              <span>{"//"}</span>
              We build glass wall visibility on all our projects using various
              communication channels and Project Management tools to ensure
              clients stay updated about the progress of their projects at all
              times.
              <span className="one">{"//"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
