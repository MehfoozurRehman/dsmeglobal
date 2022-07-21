import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utils/functions";

export function FooterServices() {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  return (
    <div className="footer__container__content__col">
      <div className="footer__container__content__col__heading">Services</div>

      {error ? (
        <div>failed to load</div>
      ) : (
        data.map((item) => (
          <Link
            onClick={() => {
              window.localStorage.setItem("servicesData", JSON.stringify(item));
              setTimeout(() => {
                window.scrollTo({ behavior: "smooth", top: 0 });
              }, 300);
            }}
            to="/service"
            key={JSON.stringify(item)}
            className="footer__container__content__col__link"
          >
            {item.title}
          </Link>
        ))
      )}
    </div>
  );
}
