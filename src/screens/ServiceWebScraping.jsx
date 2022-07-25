import React from 'react'
import { HomeJumbotron } from "../components/HomeJumbotron";
import software from "../assets/software.svg";

function ServiceWebScraping() {
  return (
<>
    <div className="container">
    <HomeJumbotron
      taglinesLine="Web Scraping"
      info="Our web scrapers sift through the web’s maze of data to find precisely what you need. "
      img={software}
      talk={true}
      />
  </div>
     
     <div className="Android__and__ios__boxes__all">
     <div className="Android__and__ios__boxes">
     <div className="ios__mobile__page__container__ios__company__heading">
     Our web scrapers sift through the web’s maze of data to find precisely <span>what you need.</span>

   </div>
       <div className="Android__and__ios__box__one__and__two">
         <div className="Android__and__ios__box__one">
           <div className="svg__Android__and__ios__box__two">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="34"
               height="34"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="feather feather-smartphone"
             >
               <rect
                 x="5"
                 y="2"
                 width="14"
                 height="20"
                 rx="2"
                 ry="2"
               ></rect>
               <line x1="12" y1="18" x2="12.01" y2="18"></line>
             </svg>
             <div className="Android__and__ios__box__one__heading">
             Extraction             </div>
           </div>
           <div className="Android__and__ios__box__one__content">
           Our web scraping tools scan the web and extract the information you need. We specialize in creating custom crawl clusters that crawl through large quantities of data from multiple sources in parallel, retrieving usable data faster while breaking free of scaling constraints.
           </div>
         </div>
         <div className="Android__and__ios__box__two">
           <div className="svg__Android__and__ios__box__two">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="34"
               height="34"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="feather feather-smartphone"
             >
               <rect
                 x="5"
                 y="2"
                 width="14"
                 height="20"
                 rx="2"
                 ry="2"
               ></rect>
               <line x1="12" y1="18" x2="12.01" y2="18"></line>
             </svg>
             <div className="Android__and__ios__box__two__heading">
             Cleaning
             </div>
           </div>
           <div className="Android__and__ios__box__two__content">
           Our data cleansing takes the raw data extracted by the web scraping tools and runs it through a processing platform to shake off old material, duplicates, incorrect details, and more. While data is valuable, ‘clean’ data is gold, enabling you to make the best possible decisions.
           </div>
         </div>
       </div>
       <div className="Android__and__ios__box__one__and__two">
         <div className="Android__and__ios__box__one">
           <div className="svg__Android__and__ios__box__two">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="34"
               height="34"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="feather feather-smartphone"
             >
               <rect
                 x="5"
                 y="2"
                 width="14"
                 height="20"
                 rx="2"
                 ry="2"
               ></rect>
               <line x1="12" y1="18" x2="12.01" y2="18"></line>
             </svg>
             <div className="Android__and__ios__box__one__heading">
             Quality Assurance
             </div>
           </div>
           <div className="Android__and__ios__box__one__content">
           We have quality assurance checks built into every step of the process, ensuring your web scraping tools function well and work quickly.
           </div>
         </div>
         <div className="Android__and__ios__box__two">
           <div className="svg__Android__and__ios__box__two">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="34"
               height="34"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="feather feather-smartphone"
             >
               <rect
                 x="5"
                 y="2"
                 width="14"
                 height="20"
                 rx="2"
                 ry="2"
               ></rect>
               <line x1="12" y1="18" x2="12.01" y2="18"></line>
             </svg>
             <div className="Android__and__ios__box__two__heading">
             Verification & Validation
             </div>
           </div>
           <div className="Android__and__ios__box__two__content">
           We verify your data at every step of the process and check the integrity of the results created.
           </div>
         </div>
       </div>
     </div>
   </div>
   </>
    )
}

export default ServiceWebScraping