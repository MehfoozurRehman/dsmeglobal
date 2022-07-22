import React from 'react';
import {fetcher} from '../utils/functions';
import useSWR from 'swr';
import {Bounce} from 'react-reveal';

export function CareersFilters({setDeparment, setSearchQuery}) {
  const {data, error} = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_category`,
    fetcher,
    {suspense: true},
  );
  return (
    <div className="hot__offers__section__content__filters">
      <Bounce left>
        <input
          list="departments"
          name="department"
          id="department"
          placeholder="Department"
          onChange={e => {
            setDeparment(e.target.value);
          }}
        />
      </Bounce>
      <datalist id="departments">
        {error ? (
          <option>failed to load</option>
        ) : (
          data.map(category => (
            <option key={JSON.stringify(category)} value={category.name} />
          ))
        )}
      </datalist>
      <Bounce right>
        <input
          type="text"
          placeholder="Search"
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        />
      </Bounce>
    </div>
  );
}
