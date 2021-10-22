import React from "react";
import {
  optionGenres,
  yearOptions,
  runTimeOptions,
  sortByOptions
} from "constant/optionsFilter";
import SelectList from "components/selecForm/SelectList";
import "./selectForm.scss";
function SelectForm() {
  return (
    <div className="grid wide">
      <div className="row list__select">
        <div className="col l-3 m-3 c-6">
          <SelectList options={optionGenres} label={"Genres"} />
        </div>
        <div className="col l-3 m-3 c-6">
          <SelectList options={yearOptions} label={"Year"} />
        </div>
        <div className="col l-3 m-3 c-6">
          <SelectList options={runTimeOptions} label={"Time"} />
        </div>{" "}
        <div className="col l-3 m-3 c-6">
          <SelectList options={sortByOptions} label={"Sort"} />
        </div>
      </div>
    </div>
  );
}

export default SelectForm;
