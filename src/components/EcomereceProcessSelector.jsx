export default function EcomereceProcessSelector({
  label,
  selected,
  setSelected,
}) {
  return (
    <div className="ecommerce__screen__container__process__content__selector__entry">
      <input
        type="radio"
        defaultChecked={selected === label}
        onChange={() => {
          setSelected(label);
        }}
        className="ecommerce__screen__container__process__content__selector__entry__input"
        name="ecommerce__screen__container__process__content__selector__entry"
      />
      <div className="ecommerce__screen__container__process__content__selector__entry__content">
        {label}
      </div>
    </div>
  );
}
