import { User } from "react-feather";

export default function WebdevArrEntry() {
  return (
    <>
      <div className="container__emerging__technologies__section__wrapper">
        <input
          type="radio"
          name="name"
          defaultChecked="Checked"
          className="container__emerging__technologies__section__wrapper__input"
        />
        <div className="container__emerging__technologies__section__entry">
          <div className="container__emerging__technologies__section__entry__img">
            <User size={40} color="currentColor" />
          </div>
          <div className="container__emerging__technologies__section__entry__text">
            AR VR
          </div>
        </div>
      </div>
    </>
  );
}
