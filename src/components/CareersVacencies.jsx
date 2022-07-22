import React from 'react';
import {Bounce} from 'react-reveal';
import {CareersFilters} from '../components/CareersFilters';
import VacencyCard from '../components/VacencyCard';

export function CareersVacencies({
  setDeparment,
  setSearchQuery,
  noData,
  department,
  setIsApplyOpen,
  careerDataFiltered,
  setSelectedItem,
}) {
  return (
    <div className="hot__offers__section">
      <Bounce down>
        <div className="hot__offers__section__header">
          Open Vacancies - Join us
          <span>
            We give you opportunities to excel and achieve the global
            recognition that you deserve!
          </span>
        </div>
      </Bounce>
      <div className="hot__offers__section__content">
        <CareersFilters
          setDeparment={setDeparment}
          setSearchQuery={setSearchQuery}
        />
        {careerDataFiltered.length === 0 ? (
          <div
            style={{
              width: '100%',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <img
              loading="lazy"
              src={noData}
              alt="nodata"
              style={{
                width: 400,
              }}
            />
          </div>
        ) : (
          careerDataFiltered.map((item, i) => (
            <VacencyCard
              item={item}
              key={JSON.stringify(item)}
              noOfItems={i}
              department={department}
              onApply={() => {
                setIsApplyOpen(true);
                setSelectedItem(item);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
