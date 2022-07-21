import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/functions";

export function FooterTopics() {
  const { data, error } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_techonologies`,
    fetcher,
    { suspense: true }
  );
  return (
    <div className="footer__container__content__col">
      <div className="footer__container__content__col__heading">
        Technologies
      </div>

      {error ? (
        <div>failed to load</div>
      ) : (
        data
          .filter((item, i) => i < 7)
          .map((item) => (
            <a
              href="#"
              key={JSON.stringify(item)}
              className="footer__container__content__col__link"
            >
              {item.name}
            </a>
          ))
      )}
    </div>
  );
}
