import React from "react";
import { fetcher } from "../utils/functions";
import useSWR from "swr";

export function CareersFilters({ setDeparment, setSearchQuery }) {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_category`,
    fetcher,
    { suspense: true }
  );
  return (
    <div className="hot__offers__section__content__filters">
      <input
        list="departments"
        name="department"
        id="department"
        placeholder="Department"
        onChange={(e) => {
          setDeparment(e.target.value);
        }}
      />
      <datalist id="departments">
        {error ? (
          <option>failed to load</option>
        ) : (
          data.map((category) => (
            <option key={JSON.stringify(category)} value={category.name} />
          ))
        )}
      </datalist>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
}
