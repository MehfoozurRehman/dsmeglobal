import React from "react";
import missionSvg from "../assets/missionSvg.svg";
import visionSvg from "../assets/visionSvg.svg";
import { Fade } from "react-reveal";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage from "../assets/bannerImage2.png";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Lets Get to"
          taglines={["Know Us", "Know Our Story"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
          img={bannerImage}
        />
      </div>
      <div
        className="our__mission__section__about__us"
        style={{ overflow: "hidden" }}
      >
        <div className="our__mission__section__about__us__content">
          <div className="our__mission__section__about__us__content__left">
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              <Fade>Our Mission</Fade>
            </div>
            <div className="our__mission__section__about__us__content__left__para">
              <Fade>
                DSME’s mission is to solve challenging technical problems in
                partnership with our clients. D.S.M.E Global Links cohorts with
                its customers to disentangle complex technology problems and
                help them acclimatize to a constantly evolving economic and
                technological backdrop. Specializing in mobile, web and other
                smart technologies.
              </Fade>
            </div>
          </div>
          <div className="our__mission__section__about__us__content__right">
            <Fade>
              <img
                src={missionSvg}
                alt="missionSvg"
                className="our__mission__section__about__us__content__right__img"
              />
            </Fade>
          </div>
        </div>
      </div>
      <div
        className="our__vision__section__about__us"
        style={{ overflow: "hidden" }}
      >
        <div className="our__vision__section__about__us__content">
          <div className="our__vision__section__about__us__content__right">
            <Fade>
              <img
                src={visionSvg}
                alt="visionSvg"
                className="our__vision__section__about__us__content__right__img"
              />
            </Fade>
          </div>
          <div className="our__vision__section__about__us__content__left">
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              <Fade>Our Vision</Fade>
            </div>
            <div className="our__vision__section__about__us__content__left__para">
              <Fade>
                Our vision is to help businesses and people create a better
                community and social living using technology-enabled solutions.
                We spend our efforts in making the finest educational,
                commercial business software, mobile applications, and next-gen
                tech-enabled solutions to help and improve businesses and
                lifestyles of the community.
              </Fade>
            </div>
          </div>
        </div>
        <div className="customer__center__development__section">
          <div className="customer__center__development__section__container">
            <div className="customer__center__development__section__container__left">
              <div className="customer__center__development__section__container__left__heading">
                Highly Customer Centric Development Process
              </div>
              <div className="customer__center__development__section__container__left__content">
                <div className="customer__center__development__section__container__left__content__heading">
                  <svg viewBox="2.59 0 214.09101008 224" width="25" height="25">
                    <linearGradient
                      id="a"
                      gradientTransform="matrix(1 0 0 -1 0 264)"
                      gradientUnits="userSpaceOnUse"
                      x1="102.4"
                      x2="56.15"
                      y1="218.63"
                      y2="172.39"
                    >
                      <stop offset=".18" stop-color="#0052cc" />
                      <stop offset="1" stop-color="#2684ff" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="114.65"
                      x2="160.81"
                      y1="85.77"
                      y2="131.92"
                    />
                    <path
                      d="m214.06 105.73-96.39-96.39-9.34-9.34-72.56 72.56-33.18 33.17a8.89 8.89 0 0 0 0 12.54l66.29 66.29 39.45 39.44 72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39-33.12-33.12 33.12-33.12 33.11 33.12z"
                      fill="#2684ff"
                    />
                    <path
                      d="m108.33 78.88a55.75 55.75 0 0 1 -.24-78.61l-72.47 72.44 39.44 39.44z"
                      fill="url(#a)"
                    />
                    <path
                      d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86l72.67-72.63z"
                      fill="url(#b)"
                    />
                  </svg>
                  <div className="customer__center__development__section__container__left__heading__text">
                    Jira Software
                  </div>
                </div>
                <div className="customer__center__development__section__container__left__content__heading__text">
                  Tasks are maintained on a daily basis. This allows you to get
                  a quick overview on where the team stands.
                </div>
              </div>
              <div className="customer__center__development__section__container__left__content">
                <div className="customer__center__development__section__container__left__content__heading">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="-2.45 0 2452.5 2452.5"
                    enable-background="new 0 0 2447.6 2452.5"
                  >
                    <g clip-rule="evenodd" fill-rule="evenodd">
                      <path
                        d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                        fill="#36c5f0"
                      />
                      <path
                        d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                        fill="#2eb67d"
                      />
                      <path
                        d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                        fill="#ecb22e"
                      />
                      <path
                        d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                        fill="#e01e5a"
                      />
                    </g>
                  </svg>
                  <div className="customer__center__development__section__container__left__heading__text">
                    Slack
                  </div>
                </div>
                <div className="customer__center__development__section__container__left__content__heading__text">
                  Each team member posts a daily update on email/slack. This
                  includes tasks done today, tasks planned for tomorrow and
                  blockers.
                </div>
              </div>
              <div className="customer__center__development__section__container__left__content">
                <div className="customer__center__development__section__container__left__content__heading">
                  <svg
                    version="1.1"
                    viewBox="0 0 297 297"
                    enable-background="new 0 0 297 297"
                    width="25"
                    height="25"
                    fill="#EA6B94"
                  >
                    <g>
                      <path d="M148.5,116.187c32.029,0,58.086-26.057,58.086-58.086S180.529,0.014,148.5,0.014S90.414,26.072,90.414,58.101   S116.471,116.187,148.5,116.187z M120.402,51.894c3.429-3.427,8.985-3.427,12.414,0l8.387,8.388L164.184,37.3   c3.429-3.427,8.985-3.427,12.414,0c3.428,3.428,3.428,8.986,0,12.414L147.41,78.902c-1.714,1.713-3.96,2.571-6.207,2.571   c-2.247,0-4.493-0.857-6.207-2.571l-14.594-14.594C116.974,60.88,116.974,55.321,120.402,51.894z" />
                      <path d="M34.165,84.869c18.839,0,34.166-15.327,34.166-34.166S53.004,16.537,34.165,16.537S0,31.864,0,50.703   S15.326,84.869,34.165,84.869z" />
                      <path d="m3.367,133.777v70.955c0,16.297 13.211,29.508 29.508,29.508h38.457v52.407c0,3.992 3.236,7.229 7.229,7.229h34.077c3.992,0 7.229-3.236 7.229-7.229v-75.595c0-13.757-11.152-24.908-24.908-24.908h-29.995v-52.367c0-17.009-13.789-30.798-30.798-30.798-17.01-0.001-30.799,13.788-30.799,30.798z" />
                      <path d="m262.835,84.869c18.839,0 34.165-15.327 34.165-34.166s-15.326-34.166-34.165-34.166-34.166,15.327-34.166,34.166 15.327,34.166 34.166,34.166z" />
                      <path d="m232.036,133.777v52.367h-29.994c-13.757,0-24.909,11.152-24.909,24.908v75.595c0,3.992 3.236,7.229 7.229,7.229h34.077c3.992,0 7.229-3.236 7.229-7.229v-52.407h38.457c16.297,0 29.508-13.211 29.508-29.508v-70.955c0-17.009-13.789-30.798-30.798-30.798-17.01-0.001-30.799,13.788-30.799,30.798z" />
                      <path d="m199.616,151.813c4.848,0 8.777-3.93 8.777-8.777 0-4.848-3.93-8.777-8.777-8.777h-102.232c-4.848,0-8.777,3.93-8.777,8.777 0,4.848 3.93,8.777 8.777,8.777h42.338v136.395c0,4.848 3.93,8.777 8.777,8.777s8.777-3.93 8.777-8.777v-136.395h42.34z" />
                    </g>
                  </svg>
                  <div className="customer__center__development__section__container__left__heading__text">
                    Daily and Weekly Scrum Call
                  </div>
                </div>
                <div className="customer__center__development__section__container__left__content__heading__text">
                  Depending on how involved the client wants to be, daily or
                  weekly scrum calls are setup to stay on top of what's going on
                  within the project.
                </div>
              </div>
              <div className="customer__center__development__section__container__left__content">
                <div className="customer__center__development__section__container__left__content__heading">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                    width="25"
                    height="25"
                    fill="#f78133"
                  >
                    <path
                      id="Support-headset"
                      d="M54.760498,24.5671501C54.874897,21.6040497,54.6776962,12.86975,49.0356979,6.60605
	C45.105999,2.2434499,39.3744965,0.03185,31.9995003,0.03185S18.8925991,2.2439499,14.9633999,6.60605
	C9.3218002,12.86975,9.125,21.6040497,9.2395,24.5671501C6.2749,25.0434494,4,27.6182499,4,30.7228508v8.7315979
	c0,3.441803,2.7930002,6.2418022,6.2256002,6.2418022c3.4330997,0,6.2261-2.7999992,6.2261-6.2418022v-8.7315979
	c0-3.0923004-2.2568998-5.6594009-5.2046003-6.1504002c-0.0935001-2.6002998,0.0531998-10.9173002,5.2099009-16.6329002
	c3.533699-3.9166999,8.7631989-5.9025998,15.5424995-5.9025998S44.0077972,4.02285,47.5419998,7.9395499
	c5.1570015,5.7156005,5.3041954,14.0320988,5.2108955,16.6329002c-2.9476967,0.4909992-5.2045975,3.0580997-5.2045975,6.1504002
	v8.7315979c0,3.1777,2.3825989,5.8030014,5.4497986,6.1879997c0.0191002,1.5082016-0.2238998,5.5086021-3.0556984,8.6611023
	c-2.4518013,2.7298012-6.2821999,4.1781006-11.3610992,4.3449974c-0.1156998-2.7124977-2.3362007-4.8878975-5.0695992-4.8878975
	c-2.8071003,0-5.0907993,2.2895012-5.0907993,5.1037979c0,2.8142014,2.283699,5.1037025,5.0907993,5.1037025
	c2.1734009,0,4.0190964-1.3787003,4.7480965-3.3045006c5.8358994-0.1197014,10.2741013-1.7952995,13.1688995-5.0182991
	c3.3233032-3.6998024,3.601902-8.285202,3.5704994-10.071701C57.8471985,45.0014496,60,42.47575,60,39.4544487v-8.7315979
	C60,27.6182499,57.7250977,25.0434494,54.760498,24.5671501z M14.4517002,30.7228508v8.7315979
	c0,2.3360023-1.8959999,4.2368011-4.2261,4.2368011S6,41.790451,6,39.4544487v-8.7315979
	c0-2.3360004,1.8955002-4.2368011,4.2256002-4.2368011S14.4517002,28.3868504,14.4517002,30.7228508z M33.5116997,61.9630508
	c-1.7040997,0-3.0907993-1.3902016-3.0907993-3.0986023c0-1.7084999,1.3866997-3.0986977,3.0907993-3.0986977
	c1.7046013,0,3.091301,1.3901978,3.091301,3.0986977C36.6030006,60.5728493,35.216301,61.9630508,33.5116997,61.9630508z
	 M58,39.4544487c0,2.3360023-1.895504,4.2368011-4.2256012,4.2368011c-2.330101,0-4.2261009-1.9007988-4.2261009-4.2368011
	v-8.7315979c0-2.3360004,1.8959999-4.2368011,4.2261009-4.2368011C56.104496,26.4860497,58,28.3868504,58,30.7228508V39.4544487z"
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  <div className="customer__center__development__section__container__left__heading__text">
                    Product Demo Calls
                  </div>
                </div>
                <div className="customer__center__development__section__container__left__content__heading__text">
                  On every sprint end, we give you a live demo of work, done
                  during that week.
                </div>
              </div>
            </div>
            <div className="customer__center__development__section__container__right">
              <div className="customer__center__development__section__container__right__wrapper">
                <div className="customer__center__development__section__container__right__qoute__left">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 123.961 123.961"
                  >
                    <g>
                      <path
                        d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
		C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
		H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
                      />
                      <path
                        d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
		c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
		c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
                      />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="customer__center__development__section__container__right__text">
                  We build glass wall visibility on all our projects using
                  various communication channels and Project Management tools to
                  ensure clients stay updated about the progress of their
                  projects at all times.
                </div>
                <div className="customer__center__development__section__container__right__qoute__right">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="796 698 200 200"
                    enable-background="new 796 698 200 200"
                  >
                    <g>
                      <path
                        d="M906.791,846.26v40.949C955.98,887.209,996,847.189,996,798v-89.208h-89.209V798h48.261
		C955.052,824.609,933.402,846.26,906.791,846.26z"
                      />
                      <path
                        d="M796,846.26v40.949c49.189,0,89.208-40.02,89.208-89.209v-89.208H796V798h48.26C844.26,824.609,822.612,846.26,796,846.26z
		"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__key__different__sec">
          <div className="about__key__different__sec__contanier__heading">
            <div>Key Differentiators</div>
          </div>
          <div className="about__key__different__sec__contanier">
            <div className="about__key__different__sec__contanier__left">
              <div>
                Clear and transparent process that led by a dedicated project
                manager, who also ensures your satisfaction at all times.
              </div>
              <div>
                We compose teams based on specific product requirements to
                ensure best fit experts are working on your project. Domain
                Expertise Solid business domain experience, technical expertise
                and knowledge of latest industry trends helps us deliver
                exceptional results
              </div>
            </div>
            <div className="about__key__different__sec__contanier__right">
              <div className="about__key__different__sec__contanier__right__col1">
                <div className="about__key__different__sec__contanier__right__col1__entry">
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading">
                    Specialized Experts
                  </div>
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading__text">
                    We compose teams based on specific product requirements to
                    ensure best fit experts are working on your project.
                  </div>
                </div>
                <div className="about__key__different__sec__contanier__right__col1__entry">
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading">
                    Strong IP Protection
                  </div>
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading__text">
                    All work is done under standard "Work for Hire" & NDAs. We
                    employ internal safeguards to always ensure confidentiality.
                  </div>
                </div>
                <div className="about__key__different__sec__contanier__right__col1__entry">
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading">
                    Immediate Starts
                  </div>
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading__text">
                    No need for a costly and timeconsuming recruitment process -
                    we can get into action as soon as you get ready to start.
                  </div>
                </div>
              </div>
              <div className="about__key__different__sec__contanier__right__col1">
                <div className="about__key__different__sec__contanier__right__col2__entry">
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading">
                    Domain Expertise
                  </div>
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading__text">
                    Solid business domain experience, technical expertise and
                    knowledge of latest industry trends helps us deliver
                    exceptional results
                  </div>
                </div>
                <div className="about__key__different__sec__contanier__right__col1__entry">
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading">
                    Quality Guaranteed
                  </div>
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading__text">
                    Our internal QA teams go through what was implemented and
                    compares it to the requirements and ensures everything is
                    spot on.
                  </div>
                </div>
                <div className="about__key__different__sec__contanier__right__col1__entry">
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading">
                    Worry-free Development
                  </div>
                  <div className="about__key__different__sec__contanier__right__col1__entry__heading__text">
                    We have standardized development process derived from
                    industry best practices and our learning across projects.
                  </div>
                </div>
              </div>
              <div className="about__key__different__sec__contanier__right__col3">
                <div className="about__key__different__sec__contanier__right__col3__svg__sec">
                  <div>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      width="30"
                      height="30"
                      fill="#189366"
                    >
                      <g>
                        <g>
                          <path
                            d="M483.556,246.518c0-60.269-40.387-111.25-95.509-127.389C381.211,52.306,324.599,0,256,0
			c-68.6,0-125.208,52.306-132.046,119.13c-55.122,16.139-95.509,67.12-95.509,127.389c0,60.067,40.116,110.914,94.954,127.232
			c-0.074,1.829-0.139,3.662-0.139,5.509C123.259,452.454,182.806,512,256,512s132.741-59.546,132.741-132.741
			c0-1.847-0.065-3.68-0.139-5.509C443.44,357.433,483.556,306.586,483.556,246.518z M238.877,266.771
			c5.588-0.847,11.303-1.289,17.123-1.289c5.82,0,11.537,0.442,17.123,1.289c-2.796,15.493-8.72,29.905-17.123,42.549
			C247.597,296.676,241.676,282.264,238.877,266.771z M243.676,324.759c-20.745,21.864-50.042,35.537-82.491,35.537
			c-5.82,0-11.535-0.444-17.123-1.289c7.452-41.285,37.227-74.877,76.35-87.796C224.141,290.942,232.238,309.141,243.676,324.759z
			 M237.079,244.917c0.315-22.59,7.229-43.606,18.921-61.199c11.692,17.593,18.609,38.609,18.924,61.199
			c-6.16,1.035-12.474,1.602-18.924,1.602C249.551,246.518,243.236,245.952,237.079,244.917z M291.588,271.211
			c39.123,12.919,68.898,46.512,76.35,87.796c-5.586,0.845-11.303,1.289-17.123,1.289c-32.449,0-61.743-13.674-82.491-35.537
			C279.762,309.141,287.859,290.942,291.588,271.211z M268.324,168.278c20.748-21.863,50.042-35.537,82.491-35.537
			c6.449,0,12.764,0.567,18.924,1.602c-0.68,48.81-32.227,90.268-75.977,105.708C292.472,213.294,283.211,188.607,268.324,168.278z
			 M256,18.963c56.699,0,103.829,41.683,112.382,96.014c-5.752-0.766-11.609-1.199-17.567-1.199
			c-37.116,0-70.702,15.329-94.815,39.968c-24.111-24.639-57.699-39.968-94.815-39.968c-5.958,0-11.815,0.433-17.567,1.199
			C152.174,60.646,199.303,18.963,256,18.963z M161.185,132.741c32.449,0,61.745,13.674,82.491,35.537
			c-14.887,20.329-24.148,45.016-25.438,71.773c-43.748-15.44-75.294-56.898-75.974-105.708
			C148.421,133.308,154.736,132.741,161.185,132.741z M47.407,246.518c0-49.507,31.787-91.701,76.016-107.31
			c2.558,53.033,36.391,97.968,83.403,116.792c-41.516,16.623-72.734,53.614-81.229,98.567
			C80.241,339.59,47.407,296.831,47.407,246.518z M256,493.037c-62.741,0-113.778-51.037-113.778-113.778
			c0-0.461,0.03-0.912,0.035-1.373c6.188,0.889,12.5,1.373,18.928,1.373c37.116,0,70.704-15.329,94.815-39.968
			c24.113,24.639,57.699,39.968,94.815,39.968c6.428,0,12.743-0.484,18.928-1.373c0.007,0.461,0.035,0.912,0.035,1.373
			C369.778,442,318.741,493.037,256,493.037z M386.403,354.567c-8.495-44.954-39.711-81.944-81.229-98.567
			c47.012-18.824,80.845-63.759,83.403-116.792c44.229,15.609,76.016,57.803,76.016,107.31
			C464.593,296.831,431.759,339.59,386.403,354.567z"
                          />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </div>
                  <div className="about__key__different__sec__contanier__right__col3__svg__heading">
                    Customer Centric (Full Transparency)
                  </div>
                </div>
                <div className="about__key__different__sec__contanier__right__col3__svg__sec">
                  <div>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      width="30"
                      height="30"
                      fill="#189366"
                    >
                      <g>
                        <g>
                          <path
                            d="M483.556,246.518c0-60.269-40.387-111.25-95.509-127.389C381.211,52.306,324.599,0,256,0
			c-68.6,0-125.208,52.306-132.046,119.13c-55.122,16.139-95.509,67.12-95.509,127.389c0,60.067,40.116,110.914,94.954,127.232
			c-0.074,1.829-0.139,3.662-0.139,5.509C123.259,452.454,182.806,512,256,512s132.741-59.546,132.741-132.741
			c0-1.847-0.065-3.68-0.139-5.509C443.44,357.433,483.556,306.586,483.556,246.518z M238.877,266.771
			c5.588-0.847,11.303-1.289,17.123-1.289c5.82,0,11.537,0.442,17.123,1.289c-2.796,15.493-8.72,29.905-17.123,42.549
			C247.597,296.676,241.676,282.264,238.877,266.771z M243.676,324.759c-20.745,21.864-50.042,35.537-82.491,35.537
			c-5.82,0-11.535-0.444-17.123-1.289c7.452-41.285,37.227-74.877,76.35-87.796C224.141,290.942,232.238,309.141,243.676,324.759z
			 M237.079,244.917c0.315-22.59,7.229-43.606,18.921-61.199c11.692,17.593,18.609,38.609,18.924,61.199
			c-6.16,1.035-12.474,1.602-18.924,1.602C249.551,246.518,243.236,245.952,237.079,244.917z M291.588,271.211
			c39.123,12.919,68.898,46.512,76.35,87.796c-5.586,0.845-11.303,1.289-17.123,1.289c-32.449,0-61.743-13.674-82.491-35.537
			C279.762,309.141,287.859,290.942,291.588,271.211z M268.324,168.278c20.748-21.863,50.042-35.537,82.491-35.537
			c6.449,0,12.764,0.567,18.924,1.602c-0.68,48.81-32.227,90.268-75.977,105.708C292.472,213.294,283.211,188.607,268.324,168.278z
			 M256,18.963c56.699,0,103.829,41.683,112.382,96.014c-5.752-0.766-11.609-1.199-17.567-1.199
			c-37.116,0-70.702,15.329-94.815,39.968c-24.111-24.639-57.699-39.968-94.815-39.968c-5.958,0-11.815,0.433-17.567,1.199
			C152.174,60.646,199.303,18.963,256,18.963z M161.185,132.741c32.449,0,61.745,13.674,82.491,35.537
			c-14.887,20.329-24.148,45.016-25.438,71.773c-43.748-15.44-75.294-56.898-75.974-105.708
			C148.421,133.308,154.736,132.741,161.185,132.741z M47.407,246.518c0-49.507,31.787-91.701,76.016-107.31
			c2.558,53.033,36.391,97.968,83.403,116.792c-41.516,16.623-72.734,53.614-81.229,98.567
			C80.241,339.59,47.407,296.831,47.407,246.518z M256,493.037c-62.741,0-113.778-51.037-113.778-113.778
			c0-0.461,0.03-0.912,0.035-1.373c6.188,0.889,12.5,1.373,18.928,1.373c37.116,0,70.704-15.329,94.815-39.968
			c24.113,24.639,57.699,39.968,94.815,39.968c6.428,0,12.743-0.484,18.928-1.373c0.007,0.461,0.035,0.912,0.035,1.373
			C369.778,442,318.741,493.037,256,493.037z M386.403,354.567c-8.495-44.954-39.711-81.944-81.229-98.567
			c47.012-18.824,80.845-63.759,83.403-116.792c44.229,15.609,76.016,57.803,76.016,107.31
			C464.593,296.831,431.759,339.59,386.403,354.567z"
                          />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </div>
                  <div className="about__key__different__sec__contanier__right__col3__svg__heading">
                    Customer Centric (Full Transparency)
                  </div>
                </div>
                <div className="about__key__different__sec__contanier__right__col3__svg__sec">
                  <div>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      width="30"
                      height="30"
                      fill="#189366"
                    >
                      <g>
                        <g>
                          <path
                            d="M483.556,246.518c0-60.269-40.387-111.25-95.509-127.389C381.211,52.306,324.599,0,256,0
			c-68.6,0-125.208,52.306-132.046,119.13c-55.122,16.139-95.509,67.12-95.509,127.389c0,60.067,40.116,110.914,94.954,127.232
			c-0.074,1.829-0.139,3.662-0.139,5.509C123.259,452.454,182.806,512,256,512s132.741-59.546,132.741-132.741
			c0-1.847-0.065-3.68-0.139-5.509C443.44,357.433,483.556,306.586,483.556,246.518z M238.877,266.771
			c5.588-0.847,11.303-1.289,17.123-1.289c5.82,0,11.537,0.442,17.123,1.289c-2.796,15.493-8.72,29.905-17.123,42.549
			C247.597,296.676,241.676,282.264,238.877,266.771z M243.676,324.759c-20.745,21.864-50.042,35.537-82.491,35.537
			c-5.82,0-11.535-0.444-17.123-1.289c7.452-41.285,37.227-74.877,76.35-87.796C224.141,290.942,232.238,309.141,243.676,324.759z
			 M237.079,244.917c0.315-22.59,7.229-43.606,18.921-61.199c11.692,17.593,18.609,38.609,18.924,61.199
			c-6.16,1.035-12.474,1.602-18.924,1.602C249.551,246.518,243.236,245.952,237.079,244.917z M291.588,271.211
			c39.123,12.919,68.898,46.512,76.35,87.796c-5.586,0.845-11.303,1.289-17.123,1.289c-32.449,0-61.743-13.674-82.491-35.537
			C279.762,309.141,287.859,290.942,291.588,271.211z M268.324,168.278c20.748-21.863,50.042-35.537,82.491-35.537
			c6.449,0,12.764,0.567,18.924,1.602c-0.68,48.81-32.227,90.268-75.977,105.708C292.472,213.294,283.211,188.607,268.324,168.278z
			 M256,18.963c56.699,0,103.829,41.683,112.382,96.014c-5.752-0.766-11.609-1.199-17.567-1.199
			c-37.116,0-70.702,15.329-94.815,39.968c-24.111-24.639-57.699-39.968-94.815-39.968c-5.958,0-11.815,0.433-17.567,1.199
			C152.174,60.646,199.303,18.963,256,18.963z M161.185,132.741c32.449,0,61.745,13.674,82.491,35.537
			c-14.887,20.329-24.148,45.016-25.438,71.773c-43.748-15.44-75.294-56.898-75.974-105.708
			C148.421,133.308,154.736,132.741,161.185,132.741z M47.407,246.518c0-49.507,31.787-91.701,76.016-107.31
			c2.558,53.033,36.391,97.968,83.403,116.792c-41.516,16.623-72.734,53.614-81.229,98.567
			C80.241,339.59,47.407,296.831,47.407,246.518z M256,493.037c-62.741,0-113.778-51.037-113.778-113.778
			c0-0.461,0.03-0.912,0.035-1.373c6.188,0.889,12.5,1.373,18.928,1.373c37.116,0,70.704-15.329,94.815-39.968
			c24.113,24.639,57.699,39.968,94.815,39.968c6.428,0,12.743-0.484,18.928-1.373c0.007,0.461,0.035,0.912,0.035,1.373
			C369.778,442,318.741,493.037,256,493.037z M386.403,354.567c-8.495-44.954-39.711-81.944-81.229-98.567
			c47.012-18.824,80.845-63.759,83.403-116.792c44.229,15.609,76.016,57.803,76.016,107.31
			C464.593,296.831,431.759,339.59,386.403,354.567z"
                          />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </div>
                  <div className="about__key__different__sec__contanier__right__col3__svg__heading">
                    Customer Centric (Full Transparency)
                  </div>
                </div>
                <div className="about__key__different__sec__contanier__right__col3__svg__sec">
                  <div>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      width="30"
                      height="30"
                      fill="#189366"
                    >
                      <g>
                        <g>
                          <path
                            d="M483.556,246.518c0-60.269-40.387-111.25-95.509-127.389C381.211,52.306,324.599,0,256,0
			c-68.6,0-125.208,52.306-132.046,119.13c-55.122,16.139-95.509,67.12-95.509,127.389c0,60.067,40.116,110.914,94.954,127.232
			c-0.074,1.829-0.139,3.662-0.139,5.509C123.259,452.454,182.806,512,256,512s132.741-59.546,132.741-132.741
			c0-1.847-0.065-3.68-0.139-5.509C443.44,357.433,483.556,306.586,483.556,246.518z M238.877,266.771
			c5.588-0.847,11.303-1.289,17.123-1.289c5.82,0,11.537,0.442,17.123,1.289c-2.796,15.493-8.72,29.905-17.123,42.549
			C247.597,296.676,241.676,282.264,238.877,266.771z M243.676,324.759c-20.745,21.864-50.042,35.537-82.491,35.537
			c-5.82,0-11.535-0.444-17.123-1.289c7.452-41.285,37.227-74.877,76.35-87.796C224.141,290.942,232.238,309.141,243.676,324.759z
			 M237.079,244.917c0.315-22.59,7.229-43.606,18.921-61.199c11.692,17.593,18.609,38.609,18.924,61.199
			c-6.16,1.035-12.474,1.602-18.924,1.602C249.551,246.518,243.236,245.952,237.079,244.917z M291.588,271.211
			c39.123,12.919,68.898,46.512,76.35,87.796c-5.586,0.845-11.303,1.289-17.123,1.289c-32.449,0-61.743-13.674-82.491-35.537
			C279.762,309.141,287.859,290.942,291.588,271.211z M268.324,168.278c20.748-21.863,50.042-35.537,82.491-35.537
			c6.449,0,12.764,0.567,18.924,1.602c-0.68,48.81-32.227,90.268-75.977,105.708C292.472,213.294,283.211,188.607,268.324,168.278z
			 M256,18.963c56.699,0,103.829,41.683,112.382,96.014c-5.752-0.766-11.609-1.199-17.567-1.199
			c-37.116,0-70.702,15.329-94.815,39.968c-24.111-24.639-57.699-39.968-94.815-39.968c-5.958,0-11.815,0.433-17.567,1.199
			C152.174,60.646,199.303,18.963,256,18.963z M161.185,132.741c32.449,0,61.745,13.674,82.491,35.537
			c-14.887,20.329-24.148,45.016-25.438,71.773c-43.748-15.44-75.294-56.898-75.974-105.708
			C148.421,133.308,154.736,132.741,161.185,132.741z M47.407,246.518c0-49.507,31.787-91.701,76.016-107.31
			c2.558,53.033,36.391,97.968,83.403,116.792c-41.516,16.623-72.734,53.614-81.229,98.567
			C80.241,339.59,47.407,296.831,47.407,246.518z M256,493.037c-62.741,0-113.778-51.037-113.778-113.778
			c0-0.461,0.03-0.912,0.035-1.373c6.188,0.889,12.5,1.373,18.928,1.373c37.116,0,70.704-15.329,94.815-39.968
			c24.113,24.639,57.699,39.968,94.815,39.968c6.428,0,12.743-0.484,18.928-1.373c0.007,0.461,0.035,0.912,0.035,1.373
			C369.778,442,318.741,493.037,256,493.037z M386.403,354.567c-8.495-44.954-39.711-81.944-81.229-98.567
			c47.012-18.824,80.845-63.759,83.403-116.792c44.229,15.609,76.016,57.803,76.016,107.31
			C464.593,296.831,431.759,339.59,386.403,354.567z"
                          />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </div>
                  <div className="about__key__different__sec__contanier__right__col3__svg__heading">
                    Customer Centric (Full Transparency)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
