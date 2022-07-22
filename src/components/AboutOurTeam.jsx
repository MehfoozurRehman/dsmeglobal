import React from "react";
import { Bounce } from "react-reveal";

export function AboutOurTeam({}) {
  const team = [
    {
      image: "Abdullah_Backend_Developer_szxgvm",
      name: "Abdullah",
      designation: "Backend Developer",
    },
    {
      image: "Ahmed__React_Developer_tq0bmz",
      name: "Ahmed",
      designation: "React Developer",
    },
    {
      image: "Ahsan_Saeed__Frontend_Developer_gykomy",
      name: "Ahsan Saeed",
      designation: "Frontend Developer",
    },
    {
      image: "Aimen_Aamer_Frontend_Developer_kncxlk",
      name: "Aimen Aamer",
      designation: "Frontend Developer",
    },
    {
      image: "Aniqa_Mukhtar_Graphic_Designer_vuxi60",
      name: "Aniqa Mukhtar",
      designation: "Graphic Designer",
    },
    {
      image: "Azeem_Hammad_Team_Lead_Frontend_Developer_yztlx3",
      name: "Azeem Hammad",
      designation: "Frontend Developer",
    },
    {
      image: "Danish_Azhar_picture_x4szi6",
      name: "Danish Azhar",
      designation: "",
    },
    {
      image: "Daniyal_Pirzada_Frontend_Developers_w9d6cg",
      name: "Daniyal Pirzada ",
      designation: "Frontend Developers",
    },
    {
      image: "Director_Legal_Affairs_f01roo",
      name: "Muhammad Soman",
      designation: "Director Legal Affairs",
    },
    {
      image: "Dr.Aimon_Malik_j9vrwo",
      name: "Dr.Aimon Malik",
      designation: "",
    },
    {
      image: "Dr.Nimra_Qureshi_ltctgl",
      name: "Dr.Nimra Qureshi",
      designation: "",
    },
    {
      image: "Gulraiz_Malik_Team_Lead_Frontend_Developer_hlhvzl",
      name: "Gulraiz Malik",
      designation: "Frontend Developer",
    },
    {
      image: "Hammad_Habib_Design_Head_dddcvb",
      name: "Hammad Habib",
      designation: "Design Head",
    },
    {
      image: "Hamza_Arshad_Frontend_Developer_fjqf8f",
      name: "Hamza Arshad",
      designation: "Frontend Developer",
    },
    {
      image: "Hira_Najm__Frontend_Developer_x2rfoa",
      name: "Hira Najm",
      designation: "Frontend Developer",
    },
    {
      image: "Joweriya_Shahid_Content_Writer_ft8mep",
      name: "Joweriya Shahid",
      designation: "Content Writer",
    },
    {
      image: "Kamran_Ameen_Backend_Developer_lmuq61",
      name: "Kamran Ameen",
      designation: "Backend Developer",
    },
    {
      image: "Muhammad_Mobeen_t9kkdl",
      name: "Laiba Asif",
      designation: "Marketing",
    },
    {
      image: "Mehfooz_ur_Rehman_Frontend_Developer_d3mlud",
      name: "Mehfooz ur Rehman",
      designation: "Frontend Developer",
    },
    {
      image: "Moazam_Saleem_Backend_Developer_i6yyfm",
      name: "Moazam Saleem",
      designation: "Backend Developer",
    },
    {
      image: "Muhammad_Mobeen_t9kkdl",
      name: "Muhammad Mobeen",
      designation: "Marketing",
    },
    {
      image: "Musharraf_Hassan_Backend_Developer_uelg3t",
      name: "Musharraf Hassan",
      designation: "Backend Developer",
    },
    {
      image: "Naimah_Jones__Business_Development_Lead_US_Office_njgftp",
      name: "Naimah Jones",
      designation: "Business Development Lead US Office",
    },
    {
      image: "Qaiser_Riaz_Frontend_Developer_hi9zb0",
      name: "Qaiser Riaz",
      designation: "Frontend Developer",
    },
    {
      image: "Qasim_Frontend_Developer_eybjrf",
      name: "Qasim",
      designation: "Frontend Developer",
    },
    {
      image: "Ramsha_Arshad_Talent_Acquisition_Recruiter_pyagxu",
      name: "Ramsha Arshad",
      designation: "Talent Acquisition Recruiter",
    },
    {
      image: "Rijaab_Manzoor_Business_Developer_w2kikd",
      name: "Rijaab Manzoor",
      designation: "Business Developer",
    },
    {
      image: "Salman_Nisar___Mobile_Architect_qduily",
      name: "Salman Nisar",
      designation: "Mobile Architect",
    },
    {
      image: "Sapna_Shams_QA_wm8tyc",
      name: "Sapna Shams",
      designation: "QA",
    },
    {
      image: "Saram_Nadeem__Business_Developer_rvtxpd",
      name: "Saram Nadeem",
      designation: "Business Developer",
    },
    {
      image: "Shahid_Aziz_Advisor_kkhqzt",
      name: "Shahid Aziz",
      designation: "Advisor",
    },
    {
      image: "Usman_Ijaz_Recruitment_Consultant_hmlf1g",
      name: "Usman Ijaz",
      designation: "Recruitment Consultant",
    },
    {
      image: "WhatsApp_Image_2022-07-22_at_2.15.31_PM_j9tlpg",
      name: "",
      designation: "",
    },
    {
      image: "Zoha_Waqas_Aidapro_jvv1yl",
      name: "Zoha Waqas",
      designation: "Recruitment Consultant",
    },
    {
      image: "Zunaira_Amjad__Business_Developer_cbog1k",
      name: "Zunaira Amjad",
      designation: "Business Developer",
    },
    {
      image: "Zunaira_Najam_Frontend_Developer_uhiual",
      name: "Zunaira Najam",
      designation: "Frontend Developer",
    },
  ];
  return (
    <div className="about__teams">
      <div className="about__teams__heading">
        <span>Teamwork</span>, Makes the dream work
      </div>
      <div className="about__teams__content">
        {team.map((item) => (
          <Bounce>
            <div
              className="about__teams__content__entry"
              key={JSON.stringify(item)}
            >
              <img
                src={
                  "https://res.cloudinary.com/mehfoozurrehman/image/upload/v1658515904/dsme_team/" +
                  item.image +
                  ".webp"
                }
                alt={item.name}
                className="about__teams__content__entry__img"
              />
              <div className="about__teams__content__entry__overlay">
                <div className="about__teams__content__entry__overlay__heading">
                  {item.name}
                </div>
                <div className="about__teams__content__entry__overlay__info">
                  {item.designation}
                </div>
              </div>
            </div>
          </Bounce>
        ))}
      </div>
    </div>
  );
}
