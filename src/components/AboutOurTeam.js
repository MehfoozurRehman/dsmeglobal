import React from "react";
import {
  Ahmed,
  Aniqa_Mukhtar,
  Azeem_Hammad,
  Daniyal_Pirzada,
  Director_Legal_Affairs,
  Dr_Aimon_Malik,
  Dr_Nimra_Qureshi,
  Gulraiz_Malik,
  Hammad_Habib,
  Hamza_Arshad,
  Joweriya_Shahid,
  Kamran_Ameen,
  Mehfooz_ur_Rehman,
  Moazam_Saleem,
  Muhammad_Mobeen,
  Musharraf_Hassan,
  Naimah_Jones,
  Qaiser_Riaz,
  Qasim,
  Sapna_Shams,
  Shahid_Aziz,
  Usman_Ijaz,
  Zunaira_Najam,
  Zunaira_Amjad,
} from "../assets/team";

export function AboutOurTeam({}) {
  const team = [
    { image: Shahid_Aziz, name: "Shahid Aziz" },
    { image: Dr_Aimon_Malik, name: "Dr.Aimon Malik" },
    { image: Dr_Nimra_Qureshi, name: "Dr.Nimra Qureshi" },
    { image: Director_Legal_Affairs, name: "Director Legal Affairs" },
    { image: Hammad_Habib, name: "Hammad Habib" },
    { image: Zunaira_Amjad, name: "Zunaira Amjad" },
    {
      image: Zunaira_Najam,
      name: "Zunaira Najam",
      designation: "Frontend Developer",
    },
    {
      image: Mehfooz_ur_Rehman,
      name: "Mehfooz ur Rehman",
      designation: "Frontend Developer",
    },
    {
      image: Aniqa_Mukhtar,
      name: "Aniqa Mukhtar",
      designation: "Graphic Designer",
    },

    { image: Joweriya_Shahid, name: "Joweriya Shahid" },
    {
      image: Azeem_Hammad,
      name: "Azeem Hammad",
      designation: "Frontend Develper",
    },
    {
      image: Daniyal_Pirzada,
      name: "Daniyal Pirzada",
      designation: "Frontend Developer",
    },
    {
      image: Hamza_Arshad,
      name: "Hamza Arshad",
      designation: "Frontend Developer",
    },
    {
      image: Gulraiz_Malik,
      name: "Gulraiz Malik",
      designation: "Frontend Developer",
    },
    {
      image: Kamran_Ameen,
      name: "Kamran Ameen",
      designation: "Frontend Developer",
    },
    {
      image: Moazam_Saleem,
      name: "Moazam Saleem",
      designation: "Frontend Developer",
    },
    { image: Muhammad_Mobeen, name: "Muhammad Mobeen" },
    {
      image: Musharraf_Hassan,
      name: "Musharraf Hassan",
      designation: "Backend Develper",
    },
    { image: Naimah_Jones, name: "Naimah Jones" },
    { image: Qaiser_Riaz, name: "Qaiser Riaz" },
    { image: Qasim, name: "Qasim" },
    { image: Sapna_Shams, name: "Sapna Shams" },
    { image: Usman_Ijaz, name: "Usman Ijaz" },
    {
      image: Ahmed,
      name: "Ahmed",
    },
  ];
  return (
    <div className="about__teams">
      <div className="about__teams__heading">
        Teamwork, Makes the dream work
      </div>
      <div className="about__teams__content">
        {team.map((item) => (
          <div
            className="about__teams__content__entry"
            key={JSON.stringify(item)}
          >
            <img
              src={item.image}
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
        ))}
      </div>
    </div>
  );
}
