import React from "react";
import VarcencyCardContent from "./VarcencyCardContent";

export default function VacencyCard({ item, onApply, department }) {
  let filterMatch;
  item.department.map((item) => {
    filterMatch = item.value === department;
  });

  return (
    <>
      {department === "" ? (
        <VarcencyCardContent item={item} onApply={onApply} />
      ) : filterMatch ? (
        <VarcencyCardContent item={item} onApply={onApply} />
      ) : null}
    </>
  );
}
