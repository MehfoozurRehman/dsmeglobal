import React, { useEffect, useState } from "react";
import quote from "../assets/quote.svg";
import Input from "../components/Input";
import { fetcher } from "../utils/functions";
import axios from "axios";
import useSWR from "swr";

export default function QuoteScreen({ setNoShowContactUs }) {
  const { data } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  useEffect(() => {
    setNoShowContactUs(false);

    return () => {
      setNoShowContactUs(true);
    };
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="contact__section" style={{ marginTop: "8em" }}>
        <div className="contact__section__content">
          <div className="contact__section__content__left">
            <img
              loading="lazy"
              src={quote}
              alt="quote"
              className="contact__section__content__img"
            />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
              axios
                .post(`${process.env.REACT_APP_API_URL}api/v1/set_quote`, {
                  username: name,
                  email: email,
                  service: service,
                  budget: budget,
                  phone: phone,
                  company: company,
                  message: message,
                })
                .then(() => {
                  console.log("data submited");
                });
            }}
            className="contact__section__content__middle"
          >
            <div className="contact__section__content__middle__header">
              <div className="contact__section__content__middle__sub__heading">
                Tell us about your project
              </div>
              <div className="contact__section__content__middle__heading">
                GET A <span>QUOTE</span>
              </div>
            </div>
            <div className="contact__section__content__middle__form">
              <div className="contact__section__content__middle__form__row">
                <Input
                  type="text"
                  placeholder="Name"
                  required={true}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Input
                  type="email"
                  required={true}
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="contact__section__content__middle__form__row">
                <Input
                  type="tel"
                  placeholder="Phone"
                  required={true}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  required={true}
                  placeholder="Services"
                  list={data.map((item) => item.title)}
                  onChange={(e) => {
                    setService(e.target.value);
                  }}
                />
              </div>
              <div className="contact__section__content__middle__form__row">
                <Input
                  type="text"
                  required={true}
                  placeholder="Estimated Budget"
                  list={[
                    "$50,000 - $100,000",
                    "$100,000 - $200,000",
                    "$200,000 - $500,000",
                    "$500,000 or above",
                    "Request budget guidance",
                  ]}
                  onChange={(e) => {
                    setBudget(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  placeholder="Company/Organization"
                  required={true}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
              </div>
              <Input
                variant="textarea"
                type="text"
                required={true}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                label="Message"
                placeholder="Let us know a bit more about the project you have in mind..."
              />
            </div>
            <button className="contact__section__content__middle__form__button">
              Get a quote
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
