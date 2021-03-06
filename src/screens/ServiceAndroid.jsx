import React, { useState } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import android from "../assets/android.svg";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/iosandroid.jpg";
import img8 from "../assets/iosswift.jpg";
import img9 from "../assets/iosapplication.png";
import img10 from "../assets/ioscross.png";
import { WebdevArrEntry } from "../components/WebdevArrEntry";
import { User } from "react-feather";

export default function ServicesAndroid() {
  const [selected, setSelected] = useState("AR VR");
  const array = [
    {
      label: "AR VR",
      svg: <User size={40} color="currentColor" />,
      info: "We study changes in consumer perspective to build a cost-effective, robust and game-changing AR/VR solutions for a variety of products and services.",
    },
    {
      label: "Blockchain",
      svg: <User size={40} color="currentColor" />,
      info: "We provide blockchain consulting services and customized solutions for businesses, startups and enterprises to transform the way they operate.",
    },
    {
      label: "Internet of things",
      svg: <User size={40} color="currentColor" />,
      info: "Our team of engineers can help you build fully customized products/apps with interconnectivity between all known tech and non-tech devices.      ",
    },
    {
      label: "Artificial intelligence",
      svg: <User size={40} color="currentColor" />,
      info: "Owing to the growing demand for intelligent applications, systems and products our engineers are experienced enough to construct robust artificial intelligent solutions.      ",
    },
    {
      label: "Machine learning",
      svg: <User size={40} color="currentColor" />,
      info: "Incorporate machine learning into your current or planned product development initiatives for better user experience, decision making and consumer retention and loyalty.      ",
    },
    {
      label: "Big data",
      svg: <User size={40} color="currentColor" />,
      info: "Make better and faster data driven decisions to help support your businesses with our capability of building products/applications that rely on big data analytics.      ",
    },
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Full-service Android application development company"
          info="Choose an experienced partner to transform your business idea into a top-performing custom Android app"
          img={android}
          talk={true}
        />
      </div>
      <div className="ios__mobile__page__section">
        <div className="ios__mobile__page__container">
          <div className="ios__mobile__share__your__idea__section">
            <div className="ios__mobile__share__your__idea__section__left">
              <div className="ios__mobile__share__your__idea__section__left__heading">
                You share your idea, <span> we get it done</span>
              </div>
            </div>
            <div className="ios__mobile__share__your__idea__section__right">
              <div className="ios__mobile__share__your__idea__section__right__text">
                It takes lots of effort, planning and research to create an app
                that succeeds. We want to take the work off your shoulders. Our
                Android team rated number one on Clutch combines in-depth
                research, outstanding design and impeccable development to
                create applications that astound users and bring measurable
                business results. Focus on what???s important to your business,
                and let us do the rest.
              </div>
            </div>
          </div>
          <div className="ios__mobile__share__your__idea__section__buttons__section">
            <div className="ios__mobile__share__your__idea__section__buttons__section__awards">
              <img loading="lazy" src={img1} alt="imgmunber" />
              <img loading="lazy" src={img2} alt="imgmunber" />
              <img loading="lazy" src={img3} alt="imgmunber" />
              <img loading="lazy" src={img4} alt="imgmunber" />
              <img loading="lazy" src={img5} alt="imgmunber" />
              <img loading="lazy" src={img6} alt="imgmunber" />
            </div>
          </div>

          <div className="Android__and__ios__boxes__all">
            <div className="Android__and__ios__boxes">
              <div className="ios__mobile__page__container__ios__company__heading">
                What makes DSME Global Links a top{" "}
                <span>Android development company?</span>
              </div>
              <div className="Android__and__ios__box__one__and__two">
                <div className="Android__and__ios__box__one">
                  <div className="svg__Android__and__ios__box__two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44.385"
                      height="44.758"
                      viewBox="0 0 18.385 22.758"
                    >
                      <g
                        id="Group_12"
                        data-name="Group 12"
                        transform="translate(-1868.616 -420.042)"
                      >
                        <path
                          id="Path_100"
                          data-name="Path 100"
                          d="M588.765,291.129a4.127,4.127,0,0,1-.674-.319,1.544,1.544,0,0,1-.656-1.319c0-.7,0-1.392,0-2.089v-.268c-.174,0-.328.006-.481,0a1.92,1.92,0,0,1-1.913-1.957c-.012-2.644-.005-5.289,0-7.933a.434.434,0,0,1,.472-.491c.037,0,.074,0,.112,0q5.411,0,10.822,0c.454,0,.583.13.584.58v.023q0,3.844,0,7.689a1.952,1.952,0,0,1-2.094,2.094h-.291c-.005.088-.012.165-.012.243,0,.659-.018,1.319,0,1.978a1.647,1.647,0,0,1-1.279,1.738.217.217,0,0,0-.056.033h-.534a.568.568,0,0,0-.079-.037,1.592,1.592,0,0,1-1.254-1.679q0-.943,0-1.886v-.372h-.8c0,.794,0,1.57,0,2.346a1.522,1.522,0,0,1-.657,1.312,4,4,0,0,1-.675.316Zm-2.923-13.556V282.5c0,.859,0,1.718,0,2.578a1.146,1.146,0,0,0,1.255,1.254c.193,0,.386,0,.578,0,.432,0,.56.126.56.552,0,.852,0,1.7,0,2.555a.825.825,0,0,0,.533.84.8.8,0,0,0,1.061-.786c.007-.882,0-1.763,0-2.645,0-.368.143-.514.507-.516.445,0,.889,0,1.334,0,.427,0,.555.129.556.557,0,.867-.005,1.734,0,2.6a.794.794,0,0,0,1.056.791.83.83,0,0,0,.538-.859c0-.874,0-1.748,0-2.622a.414.414,0,0,1,.465-.466c.207-.005.415,0,.622,0a1.156,1.156,0,0,0,1.3-1.3q0-3.61,0-7.222v-.243Z"
                          transform="translate(1286.776 151.671)"
                        />
                        <path
                          id="Path_102"
                          data-name="Path 102"
                          d="M593.777,270.64a6.012,6.012,0,0,1,1.754,1.375,5.945,5.945,0,0,1,1.493,3.825c.012.355-.15.526-.5.526q-5.488,0-10.975,0c-.356,0-.522-.169-.506-.522a5.951,5.951,0,0,1,2.992-5.063c.075-.046.153-.086.253-.141-.205-.345-.4-.678-.6-1.011-.113-.191-.229-.38-.341-.572-.152-.262-.116-.5.091-.624s.435-.055.593.2c.3.5.608,1,.9,1.5.076.131.14.169.294.119a5.779,5.779,0,0,1,3.619,0,.208.208,0,0,0,.3-.115q.432-.75.892-1.483c.067-.107.176-.239.282-.255a.583.583,0,0,1,.412.121.354.354,0,0,1,.036.47c-.207.359-.424.712-.637,1.067Zm-7.89,4.9h10.29a5.16,5.16,0,0,0-10.29,0Z"
                          transform="translate(1286.776 151.671)"
                        />
                        <path
                          id="Path_103"
                          data-name="Path 103"
                          d="M584.631,280.974c0,.969.018,1.939-.006,2.908a1.347,1.347,0,0,1-1.319,1.251,1.377,1.377,0,0,1-1.431-1.157,3.425,3.425,0,0,1-.033-.464q0-2.62,0-5.241a1.417,1.417,0,0,1,1.053-1.465,1.37,1.37,0,0,1,1.73,1.215C584.654,279,584.631,279.989,584.631,280.974Zm-.793-.016q0-1.344,0-2.687a1.109,1.109,0,0,0-.018-.265.583.583,0,0,0-.635-.437.543.543,0,0,0-.514.52q-.013,2.863,0,5.727a.581.581,0,0,0,.759.49.574.574,0,0,0,.406-.573C583.839,282.808,583.837,281.883,583.838,280.958Z"
                          transform="translate(1286.776 151.671)"
                        />
                        <path
                          id="Path_104"
                          data-name="Path 104"
                          d="M597.432,280.952c0-.977-.017-1.955.006-2.931a1.361,1.361,0,0,1,1.36-1.262,1.388,1.388,0,0,1,1.389,1.159,3.6,3.6,0,0,1,.035.486q0,2.6,0,5.2a1.43,1.43,0,0,1-.8,1.4,1.39,1.39,0,0,1-1.992-1.139c0-.059-.012-.118-.012-.177q0-1.365,0-2.731Zm1.977,0c0-.88,0-1.761,0-2.642a1.135,1.135,0,0,0-.063-.411.573.573,0,0,0-.662-.323.587.587,0,0,0-.453.584c0,.844,0,1.687,0,2.531q0,1.51,0,3.02a.583.583,0,0,0,.646.621.6.6,0,0,0,.534-.671C599.412,282.758,599.409,281.855,599.409,280.952Z"
                          transform="translate(1286.776 151.671)"
                        />
                        <path
                          id="Path_109"
                          data-name="Path 109"
                          d="M589.034,273.451c0,.074,0,.148,0,.222a.28.28,0,0,1-.033.148c-.22.268-.523.136-.788.132-.2,0-.236-.188-.239-.365-.012-.666,0-.681.646-.68C589,272.909,589.035,272.952,589.034,273.451Z"
                          transform="translate(1286.776 151.671)"
                        />
                        <path
                          id="Path_110"
                          data-name="Path 110"
                          d="M593.56,272.908c.074,0,.148,0,.222,0a.276.276,0,0,1,.3.284c.013.161,0,.325,0,.488l0,.022c-.043.246-.2.3-.747.267-.216-.014-.3-.1-.309-.321,0-.119,0-.237,0-.356,0-.308.074-.382.375-.384Z"
                          transform="translate(1286.776 151.671)"
                        />
                      </g>
                    </svg>

                    <div className="Android__and__ios__box__one__heading">
                      One-stop Android development agency
                    </div>
                  </div>
                  <div className="Android__and__ios__box__one__content">
                    A great idea is important, but it takes more to build an
                    excellent mobile app. Choose our all-in-one Android
                    development services and hire a team that takes care of
                    everything that your app needs to succeed. Strategy and
                    market research to sharpen your vision, and outstanding
                    product designs to delight your users. Foolproof app
                    development and maintenance for excellent stability and
                    performance. All in one place.
                  </div>
                </div>
                <div className="Android__and__ios__box__two">
                  <div className="svg__Android__and__ios__box__two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44.629"
                      height="44.601"
                      viewBox="0 0 21.629 21.601"
                    >
                      <g
                        id="Group_13"
                        data-name="Group 13"
                        transform="translate(-1866.961 -447.378)"
                      >
                        <path
                          id="Path_112"
                          data-name="Path 112"
                          d="M511.176,235.828c0-1.285-.072-2.543.02-3.79a3.728,3.728,0,0,1,1.856-2.895.32.32,0,0,0,.179-.327c-.014-.231.067-.5-.026-.686-.085-.168-.351-.242-.531-.365a3.327,3.327,0,0,1-1.534-2.82c-.011-.587,0-1.175,0-1.763a2.483,2.483,0,0,1,.781-2.039c-1.614-1.553-2.023-3.31-.782-5.258a3.738,3.738,0,0,1,4.045-1.546,3.883,3.883,0,0,1,2.938,3.716h4.859c.04-.192.071-.391.122-.584a3.832,3.832,0,0,1,7.487.27,1.409,1.409,0,0,1,.022.194c.006.115.059.168.174.205a1.718,1.718,0,0,1,1.253,1.731v8.922a1.731,1.731,0,0,1-1.8,1.811h-1.678a3.529,3.529,0,0,0,0,.372c.024.212.17.324.415.325.668,0,1.336,0,2,0a1.043,1.043,0,0,1,.253,2.06,1.392,1.392,0,0,1-.323.026q-2.493,0-4.985,0a.289.289,0,0,0-.3.171.978.978,0,0,1-.91.528c-.421,0-.842-.005-1.262,0a.73.73,0,0,0-.278.086c-.282.13-.559.272-.841.4-.7.323-1.41.641-2.114.964a3.143,3.143,0,0,1-1.327.286q-3.732,0-7.466,0Zm19.45-16.97a3.909,3.909,0,0,1-.628,1.688,3.8,3.8,0,0,1-1.334,1.224,3.826,3.826,0,0,1-4.016-.194,3.84,3.84,0,0,1-1.661-2.8h-4.951a3.842,3.842,0,0,1-1.618,2.464l.287.656c.229,0,.468,0,.707,0a1.044,1.044,0,0,1,0,2.087c-.216,0-.432,0-.646,0,.049,1.057.271,2.077.232,3.12h14.347v-5.391c0-.624,0-1.248,0-1.872A.984.984,0,0,0,530.626,218.858Zm-18.755,16.257h5.182c-.948-.808-.989-1.978-1.387-3.015l.677-.2c.025.074.046.127.062.181.16.526.306,1.056.481,1.577a2.168,2.168,0,0,0,2.222,1.468,7.976,7.976,0,0,0,1.957-.735l-.409-.915-2.061.934-.289-.637a2.476,2.476,0,0,0,.337-.163.232.232,0,0,0,.1-.174c-.068-.517-.121-1.038-.234-1.545a3.374,3.374,0,0,0-3.831-2.633,3.32,3.32,0,0,0-2.8,2.893C511.815,233.129,511.871,234.118,511.871,235.115Zm4.147-6.523a4.045,4.045,0,0,1,2.109,1.162.468.468,0,0,0,.377.158q5.821-.006,11.642,0c.058,0,.116,0,.174,0a1,1,0,0,0,.967-.764,12.467,12.467,0,0,0,.074-1.325h-.329c-4.671,0-9.342.005-14.014-.009a1.619,1.619,0,0,0-1,.307Zm10.8-13.311a3.135,3.135,0,1,0,3.134,3.131A3.152,3.152,0,0,0,526.814,215.281Zm-12.538-.368a6.777,6.777,0,0,0-.685.105,3.127,3.127,0,0,0-1.144,5.586.324.324,0,0,0,.319.045,4.115,4.115,0,0,1,.807-.137,13.757,13.757,0,0,1,1.392,0,2.569,2.569,0,0,1,.733.163.333.333,0,0,0,.352-.039,3.124,3.124,0,0,0,1.217-3.49A3.2,3.2,0,0,0,514.276,214.913Zm.351,12.558c.316,0,.613.006.909,0a.771.771,0,0,0,.768-.9c-.046-.381-.076-.764-.115-1.146-.048-.473-.1-.946-.149-1.436h-2.252a.137.137,0,0,0-.08.023c-.505.4-.7,1-.216,1.458a1.239,1.239,0,0,1,.432,1.161,1.112,1.112,0,0,0,0,.153v1.9l1.38-.207v-.319h-.676Zm13.212,3.148H525.07c0,.326,0,.636,0,.947a.191.191,0,0,0,.056.13,1.856,1.856,0,0,1,.611.992c.046,0,.074.007.1.007q2.533,0,5.067,0c.07,0,.166,0,.207-.039.089-.091.2-.208.206-.318s-.112-.219-.2-.3a.425.425,0,0,0-.25-.041c-.659,0-1.319,0-1.979,0a1,1,0,0,1-.989-.761A4.1,4.1,0,0,1,527.839,230.619Zm-11.9-8.72a1.025,1.025,0,0,0-.989-.7c-.45,0-.9-.007-1.349,0a1.767,1.767,0,0,0-1.738,2.09c.7,0,1.4,0,2.1-.005.052,0,.121-.067.15-.12.125-.229.232-.467.356-.7a1.015,1.015,0,0,1,.952-.572Zm3.505,11.352c.478-.216.919-.414,1.358-.618a.176.176,0,0,0,.09-.123c.006-.628,0-1.257,0-1.895h-2.047c.131.425.286.844.384,1.276S519.367,232.771,519.439,233.251Zm-7.589-9.258c-.162,1.544.438,2.957,1.378,3.243,0-.227-.017-.453,0-.674a.648.648,0,0,0-.228-.567,1.582,1.582,0,0,1-.312-1.842c.022-.048.038-.1.062-.16Zm9.744,8.162a2.935,2.935,0,0,1,2.769-.832v-.705h-2.769Zm2.076,1.234c.371,0,.717.01,1.062,0a.345.345,0,0,0,.335-.4.981.981,0,0,0-.648-.9,2.639,2.639,0,0,0-1.411-.025c-.006,0-.007.025-.012.046A1.229,1.229,0,0,1,523.67,233.389Zm-8.831-10.1c.873,0,1.7,0,2.523,0a.35.35,0,1,0-.005-.694c-.638,0-1.275-.01-1.912.006a.483.483,0,0,0-.328.163A3.214,3.214,0,0,0,514.839,223.292Zm6.866,10.8c.353-.163.691-.307,1.018-.473a.461.461,0,0,0,.225-.574.454.454,0,0,0-.514-.338c-.385.128-.754.3-1.139.463Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_127"
                          data-name="Path 127"
                          d="M522.621,223.655v2.759h-3.454v-2.759Zm-2.764.69v1.371h2.064v-1.371Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_128"
                          data-name="Path 128"
                          d="M530.634,224.352v.668h-7.293v-.668Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_129"
                          data-name="Path 129"
                          d="M530.633,222.959v.669H523.34v-.669Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_130"
                          data-name="Path 130"
                          d="M530.638,225.744v.663h-5.9v-.663Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_131"
                          data-name="Path 131"
                          d="M522.621,219.476v.669h-3.454v-.669Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_132"
                          data-name="Path 132"
                          d="M519.161,221.535v-.67h3.453v.67Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_133"
                          data-name="Path 133"
                          d="M519.161,222.928v-.67h3.453v.67Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_134"
                          data-name="Path 134"
                          d="M523.343,225.734h.665v.676h-.665Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_135"
                          data-name="Path 135"
                          d="M527.174,228.527h.667v.67h-.667Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_136"
                          data-name="Path 136"
                          d="M528.563,229.194v-.664h.676v.664Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_137"
                          data-name="Path 137"
                          d="M529.953,229.193v-.66h.676v.66Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_138"
                          data-name="Path 138"
                          d="M526.128,216.684h2.758v.673h-2.758Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_139"
                          data-name="Path 139"
                          d="M526.127,218.076h2.761v.676h-2.761Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_140"
                          data-name="Path 140"
                          d="M528.884,220.152h-2.75v-.676h2.75Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_141"
                          data-name="Path 141"
                          d="M525.4,217.362h-.666v-.676h.666Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_142"
                          data-name="Path 142"
                          d="M525.4,218.755h-.666v-.676h.666Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_143"
                          data-name="Path 143"
                          d="M525.408,220.148h-.671v-.674h.671Z"
                          transform="translate(1356.55 233.15)"
                        />
                        <path
                          id="Path_144"
                          data-name="Path 144"
                          d="M511.844,218.415v-.694c.4,0,.787,0,1.176.006.05,0,.114.075.144.13.114.209.217.423.346.681l1.1-3.3c.044.113.071.175.093.239.271.809.545,1.617.809,2.429a.2.2,0,0,0,.228.166c.311-.01.623,0,.95,0v.683H515.06l-.414-1.229-.047-.01-.957,2.857c-.1-.192-.176-.344-.253-.5-.212-.42-.429-.838-.63-1.263a.277.277,0,0,0-.308-.2C512.257,218.427,512.061,218.415,511.844,218.415Z"
                          transform="translate(1356.55 233.15)"
                        />
                      </g>
                    </svg>

                    <div className="Android__and__ios__box__two__heading">
                      Experts in Java and Kotlin development
                    </div>
                  </div>
                  <div className="Android__and__ios__box__two__content">
                    When it comes to native Android development, there are two
                    technologies that matter: Java and Kotlin. Older
                    applications are usually written in Java, but most of the
                    new ones are created with Kotlin. Our developers are fluent
                    in both, and with each case, they choose the stack carefully
                    to deliver top-notch applications, made to fit specific
                    business needs. Whether you wish to write a brand new app or
                    spruce up the one you already have, we help you choose the
                    right tech solution.
                  </div>
                </div>
              </div>
              <div className="Android__and__ios__box__one__and__two">
                <div className="Android__and__ios__box__one">
                  <div className="svg__Android__and__ios__box__two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44.141"
                      height="44.14"
                      viewBox="0 0 22.141 22.14"
                    >
                      <g
                        id="Group_15"
                        data-name="Group 15"
                        transform="translate(-1871.901 -479)"
                      >
                        <path
                          id="Path_146"
                          data-name="Path 146"
                          d="M573.939,386.083a.528.528,0,0,1,.506-.257c1.5.007,3,0,4.5,0h.29a1.556,1.556,0,0,1-.044-1.147,1.1,1.1,0,0,1,.813-.722c-.083-.411-.19-.807-.24-1.21a3.728,3.728,0,0,1,1.11-3.485,4.3,4.3,0,0,1,2.065-.972,9.643,9.643,0,0,1,4.491.1,3.769,3.769,0,0,1,2.231,1.492,3.68,3.68,0,0,1,.6,2.467c-.048.534-.164,1.062-.251,1.6.841.34,1.042.789.8,1.881h.253q2.259,0,4.518,0a.784.784,0,0,1,.274.038.363.363,0,0,1-.047.691,1.355,1.355,0,0,1-.278.022c-1.614,0-3.228.007-4.842-.006-.227,0-.289.1-.307.28-.007.064-.009.129-.012.194a1.115,1.115,0,0,1-.891,1.2,10.582,10.582,0,0,1-.327,1.262,5.444,5.444,0,0,1-.521.83.513.513,0,0,0-.1.278c.028.351.086.7.123,1.05.013.132.087.177.2.211q1.618.494,3.233.994a1.837,1.837,0,0,1,1.421,1.917c0,.324.005.649,0,.973a.735.735,0,0,1-.789.779q-7.7,0-15.389,0a.734.734,0,0,1-.792-.776c-.007-.375-.01-.75,0-1.124a1.8,1.8,0,0,1,1.312-1.733q1.655-.52,3.315-1.021a.265.265,0,0,0,.227-.26c.031-.322.076-.643.119-.963a.338.338,0,0,0-.109-.343,2.72,2.72,0,0,1-.743-1.659c-.024-.127-.033-.257-.051-.4l-.091-.031a1.1,1.1,0,0,1-.838-1.077c-.038-.573-.038-.573-.609-.573-1.535,0-3.069,0-4.6,0a.546.546,0,0,1-.514-.243Zm3.33,9.7h15.482c0-.376,0-.736,0-1.1a1.086,1.086,0,0,0-.766-1.06c-.231-.079-.466-.146-.7-.217l-2.726-.839a2.872,2.872,0,0,1-1.822,1.5,7.244,7.244,0,0,1-1.375.246,5.111,5.111,0,0,1-2.148-.261,2.971,2.971,0,0,1-1.76-1.481c-1.17.362-2.331.71-3.485,1.083a.977.977,0,0,0-.692.885C577.241,394.946,577.269,395.358,577.269,395.782Zm3.109-9.188.042.584c0,.014,0,.032.005.042.06.084.106.194.189.24a1.014,1.014,0,0,0,.352.082.37.37,0,0,1,.365.376c.013.179.024.359.044.538a2.107,2.107,0,0,0,1.016,1.73,7.187,7.187,0,0,1,1.514,1.091,1.463,1.463,0,0,0,1.411.408,2.185,2.185,0,0,0,1.077-.643,3.886,3.886,0,0,1,.568-.452c.325-.225.666-.426.989-.655a1.226,1.226,0,0,0,.527-.764c.077-.394.156-.788.2-1.186.034-.295.121-.413.413-.446a.726.726,0,0,0,.289-.069.427.427,0,0,0,.2-.228,5.344,5.344,0,0,0,.055-.648Zm1.847-5.223a6.651,6.651,0,0,0-.535.7,6.181,6.181,0,0,0-.707,2.225c-.063.426-.219.538-.62.42a.36.36,0,0,0-.5.359,2.2,2.2,0,0,0,.09.5c.046.192.161.258.373.257q4.623-.012,9.248-.005c.424,0,.424,0,.545-.406.01-.035.023-.069.03-.1.094-.486-.136-.7-.61-.565a.376.376,0,0,1-.509-.335,5.677,5.677,0,0,0-.733-2.389,5.862,5.862,0,0,0-.51-.646C586.7,382.9,583.325,382.884,582.225,381.371Zm7.253,1.4c.018-.169.035-.289.041-.409a2.826,2.826,0,0,0-2-3.152,8.238,8.238,0,0,0-4.912-.054,2.949,2.949,0,0,0-2.071,3.7c.067-.178.123-.339.188-.5a3.238,3.238,0,0,1,1.068-1.513.729.729,0,0,1,1.07.137,2.007,2.007,0,0,0,.9.611,4,4,0,0,0,1.729.162,2.328,2.328,0,0,0,1.715-.835.705.705,0,0,1,.941-.125,2.375,2.375,0,0,1,.83.921C589.152,382.039,589.3,382.384,589.478,382.77Zm-7.217,8.166-.057.058c-.038.307-.084.613-.11.921a.712.712,0,0,0,.051.349,1.854,1.854,0,0,0,1,.945,4.664,4.664,0,0,0,3.751-.009,1.886,1.886,0,0,0,.98-.935.5.5,0,0,0,.068-.243c-.036-.347-.088-.692-.145-1.115a10.865,10.865,0,0,0-.913.7,2.671,2.671,0,0,1-1.918.858,2.706,2.706,0,0,1-1.833-.858A9.768,9.768,0,0,0,582.261,390.936Z"
                          transform="translate(1297.962 102.386)"
                        />
                        <path
                          id="Path_147"
                          data-name="Path 147"
                          d="M594.866,376.614a3.76,3.76,0,0,1,.491.211,1.4,1.4,0,0,1,.717,1.249c.006,1.21,0,2.421,0,3.631,0,.279-.131.437-.36.442s-.375-.155-.375-.448q0-1.707,0-3.414c0-.675-.262-.934-.945-.934-1.11,0-2.219,0-3.328,0-.211,0-.411-.006-.5-.24s.051-.362.194-.5Z"
                          transform="translate(1297.962 102.386)"
                        />
                        <path
                          id="Path_148"
                          data-name="Path 148"
                          d="M573.939,393.433c.029-.029.059-.057.087-.087a.354.354,0,0,1,.411-.105.345.345,0,0,1,.238.35c0,.23,0,.46,0,.691v2.809c0,.658.268.924.934.924q1.707,0,3.414,0a.412.412,0,0,1,.393.172.362.362,0,0,1-.3.562c-1.282.006-2.565.014-3.846,0a1.445,1.445,0,0,1-1.281-1.063c-.014-.047-.034-.093-.051-.139Z"
                          transform="translate(1297.962 102.386)"
                        />
                        <path
                          id="Path_149"
                          data-name="Path 149"
                          d="M579.257,376.614a1.124,1.124,0,0,1,.2.266c.089.246-.1.469-.4.47q-1.38,0-2.762,0c-.266,0-.533,0-.8,0a.755.755,0,0,0-.819.82c0,1.18,0,2.36,0,3.54,0,.269-.128.451-.342.425a1.279,1.279,0,0,1-.394-.2v-4.107a4.953,4.953,0,0,1,.282-.6,1.564,1.564,0,0,1,.929-.613Z"
                          transform="translate(1297.962 102.386)"
                        />
                        <path
                          id="Path_150"
                          data-name="Path 150"
                          d="M575.15,376.614a1.564,1.564,0,0,0-.929.613,4.953,4.953,0,0,0-.282.6v-1.211Z"
                          transform="translate(1297.962 102.386)"
                          fill="#fff"
                        />
                        <path
                          id="Path_151"
                          data-name="Path 151"
                          d="M592.83,398.751h-1.707c-.42,0-.583-.105-.579-.374s.162-.362.59-.362h3.327a.773.773,0,0,0,.879-.871q0-1.686,0-3.37c0-.065,0-.13,0-.195a.356.356,0,0,1,.374-.36.349.349,0,0,1,.357.355c0,1.281.017,2.563-.006,3.845a1.446,1.446,0,0,1-1.4,1.331H592.83Z"
                          transform="translate(1297.962 102.386)"
                        />
                      </g>
                    </svg>

                    <div className="Android__and__ios__box__one__heading">
                      Android applications recognized worldwide
                    </div>
                  </div>
                  <div className="Android__and__ios__box__one__content">
                    You don???t want to put your project in inexperienced hands.
                    Our Android team is top-rated on Clutch, and with over 10
                    years of practice in Android application development, we
                    have gained the trust of world-renowned brands such as
                    Marhaba Mahal, AIDAPro, Friendly Face, or Gentleman & Co. We
                    create beautiful, top-performing Android apps for industries
                    like e-commerce, banking, music, and travel.
                  </div>
                </div>
                <div className="Android__and__ios__box__two">
                  <div className="svg__Android__and__ios__box__two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44.958"
                      height="44.947"
                      viewBox="0 0 21.958 21.947"

                    >
                      <g
                        id="Group_14"
                        data-name="Group 14"
                        transform="translate(-1874.697 -513.4)"
                      >
                        <path
                          id="Path_158"
                          data-name="Path 158"
                          d="M554.307,379.014a1.883,1.883,0,0,1,1,.619,1.578,1.578,0,0,1-.628,2.417.275.275,0,0,0-.2.312c.008.7.005,1.4,0,2.1a.429.429,0,1,1-.853,0q-.006-1.082,0-2.163a.2.2,0,0,0-.143-.22,1.561,1.561,0,0,1-1.014-1.576,1.6,1.6,0,0,1,1.165-1.43c.054-.016.107-.036.16-.055Zm.469,1.589a.727.727,0,1,0-.725.724A.745.745,0,0,0,554.776,380.6Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_159"
                          data-name="Path 159"
                          d="M565.024,390.244a1.885,1.885,0,0,1-.619,1,1.579,1.579,0,0,1-2.418-.629.276.276,0,0,0-.311-.2c-.685.009-1.37.005-2.056,0-.331,0-.518-.163-.513-.439s.191-.415.514-.416c.707,0,1.413,0,2.12,0a.2.2,0,0,0,.221-.142,1.562,1.562,0,0,1,1.577-1.014,1.591,1.591,0,0,1,1.429,1.164c.017.054.037.107.056.16Zm-1.589-.985a.727.727,0,1,0,.73.719A.744.744,0,0,0,563.435,389.259Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_160"
                          data-name="Path 160"
                          d="M552.761,396.922v-.228q0-2.5,0-4.994a1.288,1.288,0,0,1,2.568-.2c.024.627.01,1.257.013,1.885v.256a1.377,1.377,0,0,1,1.293.261,1.338,1.338,0,0,1,1.148-.288,1.254,1.254,0,0,1,.837.615c.059.1.1.139.228.1a1.278,1.278,0,0,1,1.669,1.232c.009,1.629,0,3.258,0,4.886,0,.312-.171.506-.433.5s-.423-.193-.424-.51q0-2.346,0-4.693a1.3,1.3,0,0,0-.013-.234.437.437,0,0,0-.442-.384.432.432,0,0,0-.4.446c-.007.393,0,.786,0,1.179,0,.057,0,.114,0,.171a.455.455,0,0,1-.436.466.434.434,0,0,1-.427-.467c-.009-.622,0-1.243,0-1.865,0-.407-.149-.619-.431-.62s-.425.209-.426.621v1.65c0,.042,0,.085,0,.128-.007.347-.168.552-.436.553s-.437-.209-.438-.551c0-.657,0-1.315-.006-1.972a.42.42,0,0,0-.4-.426.426.426,0,0,0-.433.362,1.354,1.354,0,0,0-.022.255c0,.578,0,1.157,0,1.736,0,.391-.148.6-.428.6s-.434-.211-.434-.593q0-2.518,0-5.036a.95.95,0,0,0-.044-.315.414.414,0,0,0-.774.019,1.073,1.073,0,0,0-.04.315q0,3.279,0,6.558c0,.071,0,.143,0,.214a.418.418,0,0,1-.309.394.4.4,0,0,1-.456-.15,2.322,2.322,0,0,1-.164-.249c-.287-.469-.572-.938-.859-1.407a.521.521,0,0,0-.433-.3.471.471,0,0,0-.428.708c.179.4.375.785.564,1.177.241.5.484,1,.724,1.5a.919.919,0,0,1,.079.22.422.422,0,0,1-.756.332.75.75,0,0,1-.075-.129c-.44-.911-.89-1.818-1.317-2.736a1.321,1.321,0,0,1,.882-1.9,1.257,1.257,0,0,1,1.339.458c.116.142.209.3.313.457Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_161"
                          data-name="Path 161"
                          d="M553.954,387.308a4.337,4.337,0,0,1,4.013,2.556.437.437,0,0,1-.165.643.431.431,0,0,1-.609-.263,3.512,3.512,0,0,0-1.473-1.615,3.424,3.424,0,0,0-5.018,2.282,5.225,5.225,0,0,0-.08.636c-.024.323-.174.5-.44.5s-.42-.193-.418-.511a4.285,4.285,0,0,1,3.206-4.062C553.32,387.382,553.684,387.351,553.954,387.308Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_162"
                          data-name="Path 162"
                          d="M560.672,384.963a4.539,4.539,0,0,1-.593-.156.24.24,0,0,0-.31.069c-.763.771-1.533,1.537-2.3,2.3-.03.03-.06.061-.091.091-.236.226-.494.245-.678.051a.445.445,0,0,1,.065-.662q1.187-1.191,2.38-2.376a.261.261,0,0,0,.076-.344,1.584,1.584,0,1,1,1.738.975c-.091.015-.185.012-.277.018Zm.741-1.618a.725.725,0,0,0-1.449,0,.725.725,0,1,0,1.449,0Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_163"
                          data-name="Path 163"
                          d="M549.026,383.374a4.923,4.923,0,0,1-.161.592.226.226,0,0,0,.065.292c.675.668,1.344,1.34,2.015,2.012a1.435,1.435,0,0,1,.156.175.422.422,0,0,1-.6.593,1.443,1.443,0,0,1-.175-.157c-.671-.67-1.344-1.34-2.011-2.015a.224.224,0,0,0-.293-.06,1.584,1.584,0,1,1,.492-2.594A1.783,1.783,0,0,1,549.026,383.374Zm-.891-.023a.725.725,0,1,0-.719.722A.731.731,0,0,0,548.135,383.351Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_164"
                          data-name="Path 164"
                          d="M547.445,390.414c-.364,0-.728.005-1.092,0a.2.2,0,0,0-.218.148,1.512,1.512,0,0,1-1.409,1.006,1.5,1.5,0,0,1-1.505-.928,1.513,1.513,0,0,1,.266-1.713,1.577,1.577,0,0,1,2.63.451.249.249,0,0,0,.279.187c.692-.008,1.384,0,2.076,0,.319,0,.51.157.517.417s-.192.436-.517.438C548.13,390.415,547.787,390.414,547.445,390.414Zm-2.057-.421a.727.727,0,1,0-.728.72A.746.746,0,0,0,545.388,389.993Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_165"
                          data-name="Path 165"
                          d="M556.795,391.49c0,.321-.106.5-.334.546a.435.435,0,0,1-.523-.448,1.909,1.909,0,0,0-.506-1.24,1.876,1.876,0,0,0-3.234,1c-.016.092-.025.184-.037.276a.428.428,0,1,1-.855-.038,2.749,2.749,0,0,1,5.477-.307C556.792,391.347,556.791,391.419,556.795,391.49Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_166"
                          data-name="Path 166"
                          d="M558.337,391.61a.418.418,0,0,1-.427.433.433.433,0,0,1-.427-.44.428.428,0,0,1,.422-.421A.415.415,0,0,1,558.337,391.61Z"
                          transform="translate(1331.631 134.386)"
                        />
                        <path
                          id="Path_167"
                          data-name="Path 167"
                          d="M554.042,385.445a.427.427,0,1,1-.419.422A.43.43,0,0,1,554.042,385.445Z"
                          transform="translate(1331.631 134.386)"
                        />
                      </g>
                    </svg>

                    <div className="Android__and__ios__box__two__heading">
                      Cross-platform options
                    </div>
                  </div>
                  <div className="Android__and__ios__box__two__content">
                    If you???re thinking about building an app for both Android
                    and iOS, you will face a crucial decision. Should you
                    develop two native apps, or just one that will work on both
                    platforms? We???re here to make sure you choose the right
                    approach! If you pick cross-platform over native Android
                    application development, we can take care of that, too. Our
                    team excels in building apps with the two most popular
                    cross-platform frameworks: Flutter and React Native.Flutter
                    and react Native
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ios__development__tangible">
          <div className="ios__development__tangible__col__one__heading">
            Tangible results, <span>right on schedule</span>
          </div>
          <div className="ios__development__tangible__col__two">
            <button className="ios__development__tangible__col__two__header__middle__button">
              Get a quote
            </button>
          </div>
        </div>
        <div className="ios__development__native__ios">
          <div className="ios__development__native__ios__container">
            <div className="ios__development__native__ios__container__left">
              <div className="ios__development__native__ios__container__heading">
                Why choose native <span>Android app development?</span>
              </div>

              <div className="ios__development__native__container__text">
                Why is it worth building a native application for Android? See
                our reasons to make a well-informed choice.
              </div>

              <div className="ios__development__native__impressive__performance">
                <div className="ios__development__native__impressive__performance__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28.291"
                    height="38.847"
                    viewBox="0 0 28.291 38.847"
                    stroke="currentColor"
                  >
                    <g
                      id="Group_7"
                      data-name="Group 7"
                      transform="translate(-1250.379 -196.473)"
                    >
                      <g id="Group_6" data-name="Group 6">
                        <path
                          id="Path_2"
                          data-name="Path 2"
                          d="M234.408,44.75c-.242-.06-.486-.115-.728-.18a5.48,5.48,0,0,1,.908-10.751.175.175,0,0,0,.048-.014,18.078,18.078,0,0,1,.478-1.907,6.552,6.552,0,0,1,3.472-3.777.786.786,0,0,0,.309-.369c.257-.542.493-1.094.745-1.661a6.424,6.424,0,0,1-2.438-4.917,9.741,9.741,0,0,1-1.038-.1,1.89,1.89,0,0,1-1.524-1.37,1.866,1.866,0,0,1,.481-1.99.415.415,0,0,0,.083-.579,13.888,13.888,0,0,1-1.083-3.73c-.073-.454.109-.755.472-.813.331-.053.551.179.666.615.29,1.094.571,2.193.918,3.269.213.661.278.651.989.552.069-.5.1-1.006.214-1.492a4.6,4.6,0,0,1,1.554-2.5,1.5,1.5,0,0,1,1.827-.188,5.883,5.883,0,0,0,5.995,0,1.49,1.49,0,0,1,1.854.208,4.693,4.693,0,0,1,1.668,3.328c.014.212.026.424.041.669h1.015a10.569,10.569,0,0,0,1.06-3.119,4.921,4.921,0,0,0,.026-1.428,1.421,1.421,0,0,0-1.44-1.3.763.763,0,0,1-.686-.452,6.072,6.072,0,0,0-7.829-3.179,8.354,8.354,0,0,1-7.091-.455.527.527,0,0,0-.13-.016c-.052.481-.127.961-.15,1.443-.035.745-.032,1.491-.052,2.237,0,.136,0,.329-.075.394a1.073,1.073,0,0,1-.6.291.5.5,0,0,1-.473-.548c.064-1.374.1-2.753.251-4.118a1.1,1.1,0,0,1,1.677-.748,7.785,7.785,0,0,0,2.784.922,6.715,6.715,0,0,0,3.055-.372,8.37,8.37,0,0,1,4.84-.375,6.9,6.9,0,0,1,4.571,3.523.722.722,0,0,0,.5.4,2.606,2.606,0,0,1,2.036,2.512,9.731,9.731,0,0,1-1.1,4.59.547.547,0,0,0,.066.665,1.856,1.856,0,0,1,.193,2.068,1.993,1.993,0,0,1-1.79,1.144c-.212.013-.426,0-.673,0a6.3,6.3,0,0,1-2.416,4.929c.266.637.513,1.248.78,1.851.038.087.162.139.253.2.557.366,1.13.711,1.67,1.1a.588.588,0,0,1,.158.888c-.238.277-.554.265-.9-.013-.333-.266-.679-.517-1.087-.825-.043.236-.067.39-.1.541a4.984,4.984,0,0,1-2.618,3.485c-.7.368-1.224.023-1.323-.765a2.9,2.9,0,0,0-.435-1.177.636.636,0,0,0-1.067-.008,2.082,2.082,0,0,0-.452,1.261.8.8,0,0,1-1.259.7,4.956,4.956,0,0,1-2.723-3.944,5.265,5.265,0,0,0-2.893,4.389h15.747a5.967,5.967,0,0,0-.46-1.894.863.863,0,0,1,.072-.658.583.583,0,0,1,.525-.166.722.722,0,0,1,.441.4c.217.668.38,1.353.56,2.032.025.1.033.2.052.315.265.043.526.075.781.13A5.485,5.485,0,0,1,253.4,44.67a1.816,1.816,0,0,0-.243.08Zm9.386-18.509a5.075,5.075,0,0,0,5.131-3.686,9.054,9.054,0,0,0,.21-1.832c.036-.528.207-.729.738-.74.316-.007.633.008.948-.007a1.513,1.513,0,0,0,.515-.1.818.818,0,0,0,.472-.9.81.81,0,0,0-.721-.717c-.427-.04-.858-.022-1.287-.039a.6.6,0,0,1-.657-.66c-.008-.291,0-.581,0-.872a3.587,3.587,0,0,0-1.092-2.581c-.4-.4-.444-.4-.944-.135a6.917,6.917,0,0,1-3.98.817,6.771,6.771,0,0,1-2.793-.872c-.286-.165-.53-.183-.736.081a9.493,9.493,0,0,0-.862,1.185,4.538,4.538,0,0,0-.369,2.328c0,.519-.186.7-.709.71-.354.008-.709-.009-1.062.015a.87.87,0,1,0,.02,1.739c.34.016.682,0,1.024.007.547.01.7.188.735.731a10.42,10.42,0,0,0,.19,1.724A5.081,5.081,0,0,0,243.794,26.241Zm-.052,8.71h-8.649c-.051,0-.1,0-.152,0a4.331,4.331,0,0,0,.246,8.658q8.423.006,16.844,0a8.473,8.473,0,0,0,1.056-.069,4.321,4.321,0,0,0-.772-8.589Q248.029,34.944,243.742,34.951Zm-2.755-8.063a2.708,2.708,0,0,0,1.392,2.382,2.635,2.635,0,0,0,2.962-.122,2.673,2.673,0,0,0,1.194-2.262A7.606,7.606,0,0,1,240.987,26.888Zm4.25,3.631.684,1.491a3.7,3.7,0,0,0,1.573-3.864A4.067,4.067,0,0,1,245.237,30.519Zm-5.214-2.273A3.6,3.6,0,0,0,241.611,32l.665-1.461C241.181,29.891,241.181,29.891,240.023,28.246Z"
                          transform="translate(1020.76 190.57)"
                        />
                        <path
                          id="Path_8"
                          data-name="Path 8"
                          d="M243.794,22.984a3.107,3.107,0,0,1-2.752-1.629c-.22-.382-.16-.724.131-.9.313-.189.635-.069.87.327a1.932,1.932,0,0,0,3.446-.015c.222-.373.541-.5.843-.321s.373.5.155.888A3.072,3.072,0,0,1,243.794,22.984Z"
                          transform="translate(1020.76 190.57)"
                        />
                        <path
                          id="Path_9"
                          data-name="Path 9"
                          d="M246.625,17.377c-.138.153-.232.269-.338.373a.538.538,0,0,1-.779.05.531.531,0,0,1-.114-.744,1.36,1.36,0,0,1,2.485.013.567.567,0,0,1-.883.7C246.877,17.658,246.773,17.533,246.625,17.377Z"
                          transform="translate(1020.76 190.57)"
                        />
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M240.888,17.377c-.12.132-.209.233-.3.331a.563.563,0,0,1-.806.109.59.59,0,0,1-.1-.811,1.362,1.362,0,0,1,2.433.012.576.576,0,0,1-.088.783.564.564,0,0,1-.81-.072C241.11,17.624,241.013,17.514,240.888,17.377Z"
                          transform="translate(1020.76 190.57)"
                        />
                        <path
                          id="Path_11"
                          data-name="Path 11"
                          d="M241.088,41.609c.055-.238.122-.611.23-.971a.459.459,0,0,0-.2-.572c-.224-.164-.427-.356-.634-.542a1.059,1.059,0,0,1-.331-1.2,1.046,1.046,0,0,1,.981-.708,2.89,2.89,0,0,1,.527-.05c.531.069.772-.206.9-.674a2.974,2.974,0,0,1,.238-.555,1.025,1.025,0,0,1,.969-.611,1.012,1.012,0,0,1,.964.617q.213.442.385.9a.4.4,0,0,0,.417.3,9.355,9.355,0,0,1,.944.076,1.028,1.028,0,0,1,.9.707.992.992,0,0,1-.259,1.112,8.955,8.955,0,0,1-.738.652.42.42,0,0,0-.173.519c.1.3.144.613.21.921a1.068,1.068,0,0,1-1.544,1.159,4.094,4.094,0,0,1-.68-.41.612.612,0,0,0-.87.008,3.679,3.679,0,0,1-.717.422A1.078,1.078,0,0,1,241.088,41.609Zm1.163-.1a4.755,4.755,0,0,1,1.5-.583,4.05,4.05,0,0,1,1.391.514,3.994,3.994,0,0,1-.068-1.474c.154-.456.632-.8,1.017-1.254a1.841,1.841,0,0,1-2.3-1.671,4.649,4.649,0,0,0-.368.758,1.23,1.23,0,0,1-1.263.886,6.581,6.581,0,0,0-.725.078l-.085.075A1.791,1.791,0,0,1,242.251,41.505Z"
                          transform="translate(1020.76 190.57)"
                        />
                        <path
                          id="Path_12"
                          data-name="Path 12"
                          d="M251.529,35.724a1.007,1.007,0,0,1,.866.61c.147.307.249.637.414.933a.631.631,0,0,0,.385.265c.308.06.628.056.942.091a1.033,1.033,0,0,1,.907.7.987.987,0,0,1-.249,1.114c-.25.25-.543.457-.785.713a.57.57,0,0,0-.128.414c.041.324.135.641.206.961a1,1,0,0,1-.4,1.072.989.989,0,0,1-1.138.1c-.3-.16-.592-.339-.876-.526a.378.378,0,0,0-.479,0c-.271.184-.555.352-.842.51a1.024,1.024,0,0,1-1.176-.075,1.043,1.043,0,0,1-.4-1.11c.076-.4.322-.835.215-1.165s-.56-.55-.857-.822a1.074,1.074,0,0,1,.656-1.889,1.964,1.964,0,0,1,.414-.038c.672.1.9-.3,1.1-.848C250.574,35.974,250.9,35.728,251.529,35.724ZM251.494,37l-.084.069c-.125.287-.256.571-.373.861a1.141,1.141,0,0,1-1.085.743c-.279.018-.558.052-.813.076.357.42.845.77.989,1.228a4.622,4.622,0,0,1-.112,1.618,1.8,1.8,0,0,1,2.827-.011,4.527,4.527,0,0,1-.1-1.6c.15-.466.637-.823,1.026-1.287A1.8,1.8,0,0,1,251.494,37Z"
                          transform="translate(1020.76 190.57)"
                        />
                        <path
                          id="Path_13"
                          data-name="Path 13"
                          d="M233.418,41.607c.058-.255.136-.638.235-1.014a.4.4,0,0,0-.16-.485c-.243-.18-.466-.388-.691-.591a1.065,1.065,0,0,1-.32-1.2,1.048,1.048,0,0,1,.988-.7,2.428,2.428,0,0,1,.451-.045c.6.088.863-.236,1-.755a2.333,2.333,0,0,1,.206-.487,1.035,1.035,0,0,1,.936-.6,1.015,1.015,0,0,1,.981.59c.161.314.262.658.428.968a.566.566,0,0,0,.357.247c.322.058.654.056.98.093a1.02,1.02,0,0,1,.884.677.993.993,0,0,1-.226,1.12c-.248.251-.543.456-.783.714a.627.627,0,0,0-.145.448c.039.336.148.663.209,1a1.062,1.062,0,0,1-1.52,1.125c-.312-.164-.6-.375-.918-.528a.567.567,0,0,0-.432,0c-.317.152-.6.369-.919.525A1.074,1.074,0,0,1,233.418,41.607Zm2.747-4.584-.113.078c-.115.264-.24.524-.343.792a1.161,1.161,0,0,1-1.137.784c-.268.012-.534.05-.772.074.353.419.837.77.983,1.229a3.944,3.944,0,0,1-.1,1.472,4.238,4.238,0,0,1,1.417-.53,3.979,3.979,0,0,1,1.371.524,4.148,4.148,0,0,1-.064-1.5c.15-.451.637-.79,1.044-1.257A1.771,1.771,0,0,1,236.165,37.023Z"
                          transform="translate(1020.76 190.57)"
                        />
                      </g>
                    </g>
                  </svg>

                  <div className="ios__development__native__impressive__performance__heading">
                    Unique user experience
                  </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  If one of your top goals is to create an Android application
                  that delivers excellent, platform-specific{" "}
                  <span style={{ color: "#189366" }}>user experience</span>,
                  it???s best to pick native development. When it comes to Android
                  native development, it???s easier and faster to develop certain
                  platform-specific features that may affect the UX. Also, keep
                  in mind that the smooth and fast performance of a native
                  application makes the user experience more satisfying.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
                <div className="ios__development__native__impressive__performance__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36.769"
                    height="45.516"
                    viewBox="0 0 36.769 45.516"
                    stroke="currentColor"
                  >
                    <g
                      id="Group_8"
                      data-name="Group 8"
                      transform="translate(-1323.459 -193.181)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M304.111,329.6a8.109,8.109,0,0,1-1.349-.639,3.088,3.088,0,0,1-1.311-2.636c-.007-1.393,0-2.786,0-4.178v-.538c-.348,0-.656.012-.962,0a3.837,3.837,0,0,1-3.826-3.912c-.025-5.289-.01-10.578-.006-15.867a.867.867,0,0,1,.944-.983c.074,0,.148,0,.222,0h21.645c.909,0,1.167.262,1.169,1.162v.044q0,7.689,0,15.378a3.9,3.9,0,0,1-4.187,4.189h-.583c-.009.176-.023.331-.023.486,0,1.318-.036,2.638.007,3.955a3.294,3.294,0,0,1-2.557,3.477.422.422,0,0,0-.113.066h-1.067a1.211,1.211,0,0,0-.159-.075,3.185,3.185,0,0,1-2.508-3.358q0-1.885,0-3.772v-.744h-1.6c0,1.588,0,3.14,0,4.693a3.046,3.046,0,0,1-1.314,2.625,8.133,8.133,0,0,1-1.351.631Zm-5.847-27.112v9.855c0,1.719-.006,3.437,0,5.156a2.293,2.293,0,0,0,2.512,2.508h1.156c.863,0,1.119.251,1.12,1.1,0,1.7,0,3.408,0,5.111a1.646,1.646,0,0,0,1.066,1.679,1.59,1.59,0,0,0,2.122-1.571c.014-1.763,0-3.526,0-5.289,0-.737.287-1.028,1.015-1.032.889-.005,1.778,0,2.667,0,.854,0,1.111.259,1.112,1.114,0,1.734-.01,3.467,0,5.2a1.59,1.59,0,0,0,2.114,1.581,1.657,1.657,0,0,0,1.075-1.717c.005-1.748,0-3.5.005-5.244a.827.827,0,0,1,.93-.933c.414-.008.829,0,1.244,0a2.309,2.309,0,0,0,2.607-2.588q0-7.223,0-14.445v-.486Z"
                        transform="translate(1033.2 -90.904)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M305.178,329.6a8.133,8.133,0,0,0,1.351-.631,3.046,3.046,0,0,0,1.314-2.625c0-1.553,0-3.1,0-4.693h1.6v.744q0,1.887,0,3.772a3.185,3.185,0,0,0,2.508,3.358,1.211,1.211,0,0,1,.159.075Z"
                        transform="translate(1033.2 -90.904)"
                        fill="#fff"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M314.134,288.621a12.058,12.058,0,0,1,3.508,2.75,11.9,11.9,0,0,1,2.987,7.65c.023.712-.3,1.052-1.005,1.052q-10.975.006-21.95,0c-.711,0-1.044-.338-1.012-1.045a11.9,11.9,0,0,1,5.984-10.125c.15-.092.307-.172.506-.283l-1.205-2.022c-.227-.381-.459-.759-.682-1.143-.3-.524-.233-1,.181-1.248s.871-.11,1.187.408c.608,1,1.216,2,1.8,3.007.152.263.279.338.588.239a11.547,11.547,0,0,1,7.237,0,.416.416,0,0,0,.592-.231q.865-1.5,1.784-2.965c.134-.213.353-.479.564-.51a1.168,1.168,0,0,1,.825.242.709.709,0,0,1,.071.94c-.414.717-.848,1.423-1.274,2.134C314.6,287.837,314.383,288.2,314.134,288.621Zm-15.779,9.8h20.58a10.321,10.321,0,0,0-20.58,0Z"
                        transform="translate(1033.2 -90.904)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M295.843,309.289c0,1.939.035,3.879-.013,5.817a2.694,2.694,0,0,1-2.638,2.5,2.754,2.754,0,0,1-2.861-2.314,6.874,6.874,0,0,1-.067-.928q-.008-5.241,0-10.483a2.833,2.833,0,0,1,2.105-2.929,2.741,2.741,0,0,1,3.461,2.429C295.889,305.35,295.843,307.32,295.843,309.289Zm-1.588-.032q0-2.686,0-5.374a2.221,2.221,0,0,0-.036-.529,1.165,1.165,0,0,0-1.27-.874,1.087,1.087,0,0,0-1.028,1.039q-.025,5.727,0,11.456a1.114,1.114,0,0,0,.246.6,1.126,1.126,0,0,0,1.272.381,1.15,1.15,0,0,0,.811-1.146C294.258,312.958,294.254,311.107,294.255,309.257Z"
                        transform="translate(1033.2 -90.904)"
                      />
                      <path
                        id="Path_50"
                        data-name="Path 50"
                        d="M321.445,309.245c0-1.954-.035-3.909.012-5.862a2.722,2.722,0,0,1,2.719-2.524,2.778,2.778,0,0,1,2.779,2.319,7.34,7.34,0,0,1,.07.972q.008,5.2,0,10.393a2.861,2.861,0,0,1-1.6,2.8,2.777,2.777,0,0,1-3.983-2.276c-.008-.119-.025-.237-.025-.355q0-2.732,0-5.463Zm3.954,0c0-1.762.005-3.524-.006-5.285a2.257,2.257,0,0,0-.127-.821,1.146,1.146,0,0,0-1.324-.647,1.171,1.171,0,0,0-.9,1.167c-.007,1.688,0,3.376,0,5.063,0,2.013-.005,4.027,0,6.04a1.166,1.166,0,0,0,1.292,1.242,1.2,1.2,0,0,0,1.068-1.341C325.4,312.859,325.4,311.053,325.4,309.247Z"
                        transform="translate(1033.2 -90.904)"
                      />
                      <path
                        id="Path_55"
                        data-name="Path 55"
                        d="M304.649,294.244c0,.148.007.3,0,.444a.549.549,0,0,1-.065.3c-.442.537-1.046.271-1.577.264-.395-.006-.472-.375-.478-.73-.023-1.331,0-1.363,1.291-1.36C304.584,293.16,304.65,293.246,304.649,294.244Z"
                        transform="translate(1033.2 -90.904)"
                      />
                      <path
                        id="Path_56"
                        data-name="Path 56"
                        d="M313.7,293.158c.148,0,.3,0,.444,0a.551.551,0,0,1,.607.567c.026.324.006.651.005.977a.346.346,0,0,1,0,.044c-.086.492-.4.6-1.494.533-.432-.027-.6-.2-.617-.642-.008-.237,0-.474,0-.711,0-.617.148-.763.75-.768Z"
                        transform="translate(1033.2 -90.904)"
                      />
                    </g>
                  </svg>

                  <div className="ios__development__native__impressive__performance__heading">
                    Native Android features
                  </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  Planning to equip your app with functions like biometrics,
                  geolocation, or features based on Bluetooth connection? The
                  more native features your Android app needs, the better to go
                  for the native product. Even seemingly simple functionalities
                  such as push notifications tend to perform better within
                  native applications.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
                <div className="ios__development__native__impressive__performance__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30.187"
                    height="30.345"
                    viewBox="0 0 30.187 30.345"
                    stroke="currentColor"
                  >
                    <g
                      id="Group_1"
                      data-name="Group 1"
                      transform="translate(-1568.288 -200.651)"
                    >
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        d="M556.631,39.281c0,.194,0,.39,0,.586a.493.493,0,0,1-.539.555q-1.992.007-3.983,0a.486.486,0,0,1-.532-.529c-.005-.146,0-.292,0-.48h-.354q-1.533,0-3.066,0c-.46,0-.626-.167-.627-.626q0-3.412,0-6.826c0-.477.163-.635.649-.636h3.4c0-.166,0-.318,0-.471a.486.486,0,0,1,.523-.538q2.007-.008,4.014,0a.478.478,0,0,1,.516.512c.009.272,0,.544,0,.85.676-.166,1.327-.29,1.955-.488a5.267,5.267,0,0,1,3.129,0c2.232.637,4.48,1.215,6.724,1.809a2.238,2.238,0,0,1,1.314.867c.285-.161.565-.318.843-.478,1.349-.778,2.693-1.564,4.047-2.333a2.008,2.008,0,0,1,3.065,1.609,1.969,1.969,0,0,1-1.106,1.942q-2.626,1.512-5.248,3.029c-1.011.584-2.024,1.164-3.033,1.752a3.818,3.818,0,0,1-1.983.534c-2.382-.011-4.763-.018-7.144,0a4.389,4.389,0,0,1-2.212-.522c-.083-.046-.17-.084-.256-.122C556.709,39.274,556.685,39.281,556.631,39.281Zm0-6.545c0,1.751,0,3.477,0,5.2a.233.233,0,0,0,.085.181,5.14,5.14,0,0,0,2.3.8c2.423-.019,4.846-.009,7.269-.005a2.961,2.961,0,0,0,1.533-.409c.889-.521,1.784-1.033,2.677-1.548q2.787-1.609,5.575-3.217a1.071,1.071,0,0,0,.608-.793.93.93,0,0,0-.406-.962,1.009,1.009,0,0,0-1.132-.03c-1.468.844-2.932,1.695-4.4,2.534-.365.209-.774.366-.659.913,0,.018-.011.04-.016.06a2.014,2.014,0,0,1-2.488,1.51c-1.109-.284-2.213-.587-3.319-.883-.893-.238-1.785-.481-2.678-.717-.256-.067-.443-.236-.415-.481a.8.8,0,0,1,.321-.486c.1-.071.305-.028.451.01q2.908.768,5.815,1.548a1,1,0,1,0,.522-1.932c-.05-.015-.1-.034-.15-.047q-3.271-.879-6.542-1.756a3.939,3.939,0,0,0-2.074-.211C558.561,32.264,557.611,32.491,556.632,32.736Zm-4.025-1.4v8.053h3V31.336Zm-4.057,7.042h3.008V32.353H548.55Z"
                        transform="translate(1020.76 190.57)"
                      />
                      <path
                        id="Path_32"
                        data-name="Path 32"
                        d="M573.323,26.75c0,.512,0,.963,0,1.415A1.513,1.513,0,0,1,571.7,29.8c-1.085,0-2.17,0-3.256,0a.35.35,0,0,0-.366.212,1.445,1.445,0,0,1-1.335.8c-.347,0-.7,0-1.043,0a1.515,1.515,0,0,1,0-3.03c.337,0,.675,0,1.012,0a1.453,1.453,0,0,1,1.364.806.349.349,0,0,0,.368.209c1.075-.007,2.15,0,3.225,0,.448,0,.639-.189.643-.63s0-.9,0-1.4c-.184,0-.349.007-.513,0a.476.476,0,0,1-.5-.5q-.008-2.529,0-5.057a.48.48,0,0,1,.523-.506c.147,0,.293,0,.49,0a9.334,9.334,0,0,0-3.911-7.7,9.155,9.155,0,0,0-10.289-.708,9.393,9.393,0,0,0-5.046,8.411c.193,0,.347,0,.5,0a.481.481,0,0,1,.526.5q.009,2.527,0,5.056a.44.44,0,0,1-.431.494,23.784,23.784,0,0,1-3.184-.068,2.953,2.953,0,0,1-2.444-3.254,3.045,3.045,0,0,1,2.976-2.731c.345,0,.69,0,1.045,0a10.534,10.534,0,0,1,3.811-8.131,10.3,10.3,0,0,1,7.358-2.481A10.637,10.637,0,0,1,573.342,20.7h.935a3.032,3.032,0,0,1,.475,6.035A9.961,9.961,0,0,1,573.323,26.75Zm1.03-5.022v4.018a2.009,2.009,0,0,0,0-4.018Zm-23.3.01a2,2,0,1,0,0,3.991Zm2.016,4.009V21.739H552.1v4.008Zm20.255-4.009h-1.014v4h1.014v-4ZM566.253,29.8h0c.167,0,.336.012.5,0a.519.519,0,0,0,.5-.511.508.508,0,0,0-.484-.489,10.25,10.25,0,0,0-1.037,0,.508.508,0,0,0-.495.51.517.517,0,0,0,.484.49C565.9,29.816,566.075,29.8,566.253,29.8Z"
                        transform="translate(1020.76 190.57)"
                      />
                      <path
                        id="Path_33"
                        data-name="Path 33"
                        d="M570.288,19.715c0,.474,0,.948,0,1.422,0,.4-.182.573-.582.576-.526,0-1.053,0-1.58.005a.925.925,0,0,0-.271.092.911.911,0,0,0,.125.283c.342.357.7.7,1.048,1.052s.357.6.016.943q-.968.977-1.944,1.944a.555.555,0,0,1-.924,0c-.366-.363-.727-.733-1.1-1.092-.058-.057-.19-.123-.224-.1a.35.35,0,0,0-.124.245c-.011.537,0,1.074-.007,1.611,0,.4-.182.575-.581.576q-1.439,0-2.876,0c-.412,0-.583-.18-.585-.6,0-.516,0-1.032-.006-1.548a.932.932,0,0,0-.111-.291.917.917,0,0,0-.256.128c-.371.359-.73.73-1.1,1.092a.537.537,0,0,1-.876.008q-1-.989-1.99-1.988a.543.543,0,0,1,0-.9c.371-.375.749-.742,1.115-1.12a.278.278,0,0,0,.079-.231.286.286,0,0,0-.223-.1c-.537-.009-1.074,0-1.612-.005-.416,0-.59-.178-.591-.6q0-1.422,0-2.844c0-.423.173-.6.589-.6.526,0,1.053,0,1.58,0a.909.909,0,0,0,.268-.1.81.81,0,0,0-.11-.259c-.358-.372-.729-.731-1.093-1.1a.541.541,0,0,1-.009-.9q.99-1,1.989-1.988a.534.534,0,0,1,.874,0c.376.369.742.748,1.121,1.114a.347.347,0,0,0,.258.088c.043-.006.091-.147.092-.228.008-.537,0-1.075.005-1.612,0-.4.178-.578.577-.579q1.453,0,2.908,0a.5.5,0,0,1,.557.567c.005.517-.005,1.033.007,1.549a1.122,1.122,0,0,0,.108.322,1.285,1.285,0,0,0,.3-.166c.35-.335.687-.684,1.031-1.025s.585-.346.919-.015q.988.978,1.967,1.967c.329.332.322.578-.017.919-.357.359-.72.711-1.071,1.074a.877.877,0,0,0-.121.258.817.817,0,0,0,.262.106c.526.01,1.053,0,1.58.006.421,0,.6.175.6.59C570.291,18.746,570.288,19.23,570.288,19.715Zm-12.913-3.921c.314.311.642.635.969.961.469.466.473.5.2,1.09-.052.115-.1.232-.141.351-.151.414-.248.483-.7.483H556.15V20.7c.562,0,1.1.01,1.635,0a.569.569,0,0,1,.611.435,5.281,5.281,0,0,0,.213.525c.185.4.166.535-.139.841-.37.371-.743.739-1.088,1.082l1.42,1.433c.313-.314.638-.642.964-.968.467-.469.5-.474,1.09-.2.115.053.232.1.351.142.414.152.482.247.482.7,0,.522,0,1.045,0,1.56h2.025c0-.561.01-1.1,0-1.634a.568.568,0,0,1,.435-.611,5.2,5.2,0,0,0,.525-.213c.4-.185.535-.166.841.138.372.37.742.741,1.087,1.087l1.43-1.431c-.317-.311-.655-.64-.99-.972-.444-.441-.449-.484-.183-1.068.052-.114.1-.232.142-.35.151-.415.246-.483.7-.484h1.562V18.7a.645.645,0,0,0-.086-.015c-.516,0-1.032-.012-1.548,0a.569.569,0,0,1-.612-.434,5.2,5.2,0,0,0-.213-.525c-.185-.4-.167-.535.138-.84.37-.371.743-.739,1.092-1.087l-1.435-1.431c-.312.317-.641.655-.973.99-.439.442-.486.449-1.068.183-.115-.052-.232-.1-.351-.141-.415-.152-.483-.248-.484-.695V13.141h-2.026c0,.56-.009,1.1,0,1.633a.57.57,0,0,1-.435.612,5.3,5.3,0,0,0-.525.213c-.4.185-.534.167-.841-.138-.371-.369-.742-.74-1.092-1.09Z"
                        transform="translate(1020.76 190.57)"
                      />
                      <path
                        id="Path_43"
                        data-name="Path 43"
                        d="M553.6,38.141v-.126c0-.406.178-.622.5-.622s.5.217.5.622c0,.116,0,.232,0,.348a.505.505,0,1,1-1.008,0C553.6,38.289,553.6,38.215,553.6,38.141Z"
                        transform="translate(1020.76 190.57)"
                      />
                      <path
                        id="Path_44"
                        data-name="Path 44"
                        d="M562.727,16.659a3.033,3.033,0,1,1-3.058,3A3.021,3.021,0,0,1,562.727,16.659Zm2,3.022a2.023,2.023,0,1,0-2,2.034A2.046,2.046,0,0,0,564.725,19.681Z"
                        transform="translate(1020.76 190.57)"
                      />
                    </g>
                  </svg>

                  <div className="ios__development__native__impressive__performance__heading">
                    Dependability and support
                  </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  As native languages are more mature than cross-platform ones,
                  they are generally more dependable as well, when it comes to
                  community support or available resources. Also, if you???re
                  thinking about expanding your app over the years, native
                  development is a future-proof choice. Both Kotlin and Java are
                  well-supported languages with rich ecosystems, offering a wide
                  variety of open-source libraries, patterns, and articles.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
                <div className="ios__development__native__impressive__performance__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31.278"
                    height="26.397"
                    viewBox="0 0 31.278 26.397"
                    stroke="currentColor"
                  >
                    <g
                      id="Group_3"
                      data-name="Group 3"
                      transform="translate(-1507.88 -202.63)"
                    >
                      <g id="Group_2" data-name="Group 2">
                        <path
                          id="Path_25"
                          data-name="Path 25"
                          d="M487.12,21.838a4.779,4.779,0,0,1,.215-.5,1.773,1.773,0,0,1,1.586-.966c.454-.009.909,0,1.429,0a4.776,4.776,0,0,1-1.55-3.909,4.612,4.612,0,0,1,1.611-3.216,4.782,4.782,0,0,1,6.374.067,4.838,4.838,0,0,1,0,7.058h1.06c.692,0,1.384,0,2.077,0,.43,0,.692.226.7.594.008.384-.257.624-.7.624H489.2c-.545,0-.853.22-.855.609s.307.615.849.615h27.123c.547,0,.852-.216.858-.6s-.3-.619-.844-.619H505.609c-.409,0-.665-.192-.707-.522a.606.606,0,0,1,.655-.7c.968,0,1.935,0,2.9,0h.3a4.757,4.757,0,0,1-1.525-4.183,4.612,4.612,0,0,1,1.651-3,4.768,4.768,0,0,1,6.415.238,4.819,4.819,0,0,1-.11,6.949c.468,0,.9,0,1.332,0a1.832,1.832,0,1,1-.008,3.662q-6.125,0-12.248,0h-.424c.072.129.126.23.183.327l7.612,12.9a3.127,3.127,0,0,1,.179.319.6.6,0,0,1-.535.872c-.071,0-.142,0-.214,0q-8.307,0-16.615,0c-.3,0-.576-.015-.739-.311a.749.749,0,0,1,.108-.8q3.832-6.485,7.659-12.973c.056-.1.109-.192.191-.338h-.383q-6.063,0-12.126,0a1.838,1.838,0,0,1-2.006-1.42c-.006-.017-.026-.03-.04-.045Zm15.64,2.8-7.422,12.573h14.843Zm-12.741-7.811a3.534,3.534,0,1,0,3.529-3.543A3.558,3.558,0,0,0,490.019,16.828Zm25.48-.006a3.533,3.533,0,1,0-3.521,3.551A3.555,3.555,0,0,0,515.5,16.822Z"
                          transform="translate(1020.76 190.57)"
                        />
                        <path
                          id="Path_26"
                          data-name="Path 26"
                          d="M502.767,21.592a.609.609,0,1,1,.6-.624A.6.6,0,0,1,502.767,21.592Z"
                          transform="translate(1020.76 190.57)"
                        />
                      </g>
                    </g>
                  </svg>

                  <div className="ios__development__native__impressive__performance__heading">
                    Stability and performance
                  </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  Native Android development equals stable performance. Native
                  SDKs and platforms for Android have been around for over 10
                  years, which makes them well-optimized and battle-tested.
                  There are plenty of development and testing tools available,
                  and it???s easy to find solutions to most problems that may
                  arise during the development.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
                <div className="ios__development__native__impressive__performance__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44.778"
                    height="44.8"
                    viewBox="0 0 44.778 44.8"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <g
                      id="Group_4"
                      data-name="Group 4"
                      transform="translate(-1419.402 -200.25)"
                    >
                      <path
                        id="Path_19"
                        data-name="Path 19"
                        d="M443.42,10.659V48.97a1.84,1.84,0,0,1-1.861.972c-7.688-.025-15.377-.015-23.065-.015h-.6c0,.95-.04,1.851.012,2.747a1.684,1.684,0,0,1-.984,1.806H399.609a1.606,1.606,0,0,1-.967-1.462c.013-5.45.006-10.9.008-16.349a1.345,1.345,0,0,1,1.448-1.44c.815-.006,1.631,0,2.447,0h.654v-.6c0-7.722.014-15.445-.017-23.168a1.6,1.6,0,0,1,1.8-1.785q18.312.047,36.623,0A1.779,1.779,0,0,1,443.42,10.659Zm-2.753,1.788H405.976V35.2c.122.01.22.025.319.026,3.119,0,6.237,0,9.356-.011a.892.892,0,0,0,.554-.256q5.051-5.028,10.084-10.075c.076-.076.138-.166.256-.309h-.5c-1.6,0-3.206,0-4.809,0a1.364,1.364,0,1,1-.012-2.724q4.307-.011,8.613,0a1.337,1.337,0,0,1,1.433,1.455q.007,4.285,0,8.571a1.7,1.7,0,0,1-.079.556,1.338,1.338,0,0,1-1.525.882A1.321,1.321,0,0,1,428.552,32c-.012-1.632-.005-3.265-.006-4.9v-.535c-.136.114-.2.163-.262.221q-5.086,5.087-10.162,10.181a.951.951,0,0,0-.216.614c-.014,3.032-.01,6.064-.01,9.1v.469h22.771ZM413.2,37.981H401.411V51.718h13.723V40.009l-.1-.067a3.353,3.353,0,0,1-.291.385q-2.87,2.88-5.755,5.744a2.019,2.019,0,0,1-.876.52,1.282,1.282,0,0,1-1.467-.684,1.411,1.411,0,0,1,.313-1.678q2.158-2.17,4.326-4.33C411.9,39.282,412.517,38.666,413.2,37.981Z"
                        transform="translate(1020.76 190.57)"
                      />
                    </g>
                  </svg>

                  <div className="ios__development__native__impressive__performance__heading">
                    Future-proof and scalable
                  </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  Thinking about a product that you can expand over the years?
                  Native iOS development will be a safe bet here. As a mature,
                  well-supported language, Swift is less likely to change as
                  dynamically as cross-platform frameworks. Also, note that
                  native apps are faster to scale, implement changes, and add
                  new features into, as there is only one platform that needs to
                  be configured. Keep that in mind if you???re expecting your iOS
                  app to grow rapidly or change in the future.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
                <div className="ios__development__native__impressive__performance__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49.642"
                    height="34.505"
                    viewBox="0 0 49.642 34.505"
                    stroke="currentColor"
                  >
                    <g
                      id="Group_5"
                      data-name="Group 5"
                      transform="translate(-1326.76 -198.558)"
                    >
                      <path
                        id="Path_18"
                        data-name="Path 18"
                        d="M306,19.426c.97-.846,1.932-1.7,2.913-2.536q5.055-4.3,10.12-8.59c.074-.063.141-.162.225-.179.281-.058.622-.2.838-.1a.957.957,0,0,1,.436.712c.043,1.371.022,2.745.022,4.118v.57h.623q10.128,0,20.255,0a3.9,3.9,0,0,1,.484.008.8.8,0,0,1,.71.789.766.766,0,0,1-.736.753c-.16.015-.322.011-.484.011q-10.587,0-21.175,0c-1.056,0-1.237-.18-1.237-1.234V10.393l-11,9.332,10.957,9.3a3.584,3.584,0,0,0,.046-.4c0-1.05,0-2.1,0-3.149,0-.753.26-1.008,1.021-1.008h21.053V23.93c0-1.341,0-2.682,0-4.022a.809.809,0,0,1,1.419-.667q6.335,5.375,12.672,10.747c.652.554.645.989-.013,1.547L342.583,42.189c-.073.062-.141.162-.225.178-.282.055-.625.193-.84.086a.966.966,0,0,1-.428-.717c-.042-1.356-.021-2.713-.021-4.07v-.607h-20.84c-.161,0-.324.01-.484,0a.8.8,0,0,1-.748-.8.765.765,0,0,1,.745-.743c.161-.014.323-.01.484-.01H341.4c1.05,0,1.228.181,1.228,1.243v3.353l11.008-9.335-10.961-9.3a3.836,3.836,0,0,0-.045.4c0,1.049,0,2.1,0,3.149,0,.751-.263,1.008-1.023,1.008h-21.05v.541c0,1.34,0,2.681,0,4.022a.809.809,0,0,1-1.422.662q-6.353-5.392-12.706-10.783a5.7,5.7,0,0,1-.429-.449Z"
                        transform="translate(1020.76 190.57)"
                      />
                    </g>
                  </svg>

                  <div className="ios__development__native__impressive__performance__heading">
                    In-house transfer options
                  </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  If you plan to transfer the project to in-house in the future,
                  it???s a good idea to go for native development. It might be
                  more challenging to find skilled cross-platform developers,
                  while building your own team of native Android developers
                  shouldn???t pose a big problem.
                </div>
              </div>
            </div>
            <div className="ios__development__native__ios__container__right">
              <div className="ios__development__native__ios__container__right__card">
                <a href="#">Unique user experience</a>
                <a href="#">Native Android features</a>
                <a href="#">Dependability and support</a>
                <a href="#">Stability and performance</a>
                <a href="#">In-house transfer options</a>
              </div>
            </div>
          </div>
          <div className="ios__development__native__sound__promising">
            <div className="ios__development__native__sound__promising__heading">
              Sounds promising? <span>Let???s discuss your idea! !</span>
            </div>
            <div className="ios__development__native__sound__promising__button">
              Get in Touch
            </div>
          </div>
          <div className="ios__development__native__cross__plat__development">
            <div className="ios__development__native__cross__plat__development__container">
              <div className="ios__development__native__cross__plat__development__container__left">
                <div className="ios__development__native__cross__plat__development__container__heading">
                  Cross-platform <span>development</span>
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  Cross-platform application development allows you to create
                  apps that run across multiple device platforms, using just one
                  codebase. If you???
                </div>
                <div className="ios__development__native__cross__plat__development__container__text__li">
                  <li>want to build a uniform application</li>
                  <li>have a limited project budget</li>
                  <li>wish to enter the market fast...</li>
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  ...you should consider our cross-platform development
                  services.
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  Learn about Cross-platform development
                </div>
              </div>
              <div className="ios__development__native__cross__plat__development__container__right">
                <img
                  loading="lazy"
                  className="ios__development__native__cross__plat__development__img"
                  src={img8}
                  alt="img8"
                />
              </div>
            </div>
          </div>

          <div className="android__development__our__stack">
            <div className="android__development__our__stack__all">
              <div className="android__development__our__stack__container">
                <div className="android__development__our__stack__container__heading">
                  Our tech <span>stack</span>
                </div>
                <div className="android__development__our__stack__container__col__row">
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Core
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>MVP or MVVM</li>
                      <li>RxJava 3 or Kotlin Coroutines</li>
                      <li>Dagger 2 or Koin</li>
                      <li>Retrofit and Room</li>
                      <li>Glide or Picasso</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      CI/CD
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Fastlane</li>
                      <li>Docker</li>
                      <li>TeamCity</li>
                      <li>Gitlab</li>
                      <li>AWS</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Testing
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Testing</li>
                      <li>Espresso</li>
                      <li>Charles</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Debugging
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>LeakCanary</li>
                      <li>Firebase Crashlytics</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Design
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Sketch</li>
                      <li>InVision</li>
                      <li>InVision</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container__emerging__technologies">
            <div className="container__emerging__technologies__heading__main">
              Emerging <span>Technologies</span>
            </div>
            <div className="container__emerging__technologies__text__main">
              We constantly push our limits and explore emerging technologies to
              build a solution that you help our clients stay ahead of the game.
            </div>
            <div className="container__emerging__technologies__section">
              {array.map((item) => (
                <WebdevArrEntry
                  label={item.label}
                  svg={item.svg}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
            {array
              .filter((item) => item.label === selected)
              .map((item) => (
                <div className="container__emerging__technologies__section__entry__data">
                  <div className="container__emerging__technologies__section__entry__data___heading">
                    {item.label}
                  </div>
                  <div className="container__emerging__technologies__section__entry__data__text">
                    {item.info}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
