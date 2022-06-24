export default function WebdevArrEntry({ label, svg, selected, setSelected }) {
  return (
    <>
      <div className="container__emerging__technologies__section__wrapper">
        <input
          type="radio"
          name="name"
          defaultChecked={selected === label}
          onChange={() => {
            setSelected(label);
          }}
          className="container__emerging__technologies__section__wrapper__input"
        />
        <div className="container__emerging__technologies__section__entry">
          <div className="container__emerging__technologies__section__entry__img">
            {svg}
          </div>
          <div className="container__emerging__technologies__section__entry__text">
            {label}
          </div>
        </div>
      </div>
    </>
  );
}
