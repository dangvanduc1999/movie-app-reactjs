import React, { useContext } from "react";
import Select, { components } from "react-select";
import { MovieContext } from "context/Context";
import { GET_SELECTED_CONDITION_FILTER } from "Reducer/type";
const controlStyles = {
  color: "white",
  fontFamily: "Poppins",
  margin: "1rem 0rem",
  fontSize: "1.4rem"
};
const selectStyle = {
  fontFamily: "Poppins",
  fontSize: "1.5rem"
};
function SelectList({ options, label }) {
  const { dispatch } = useContext(MovieContext);
  const ControlComponent = (props) => (
    <div style={selectStyle}>
      <p style={controlStyles}>{label}</p>
      <components.Control {...props} />
    </div>
  );
  const handleSelectedOptionChange = (selectedOption) => {
    const selectedOptionValue = selectedOption.id
      ? selectedOption.id
      : selectedOption.value.toLowerCase();
    dispatch({
      type: GET_SELECTED_CONDITION_FILTER,
      payload: {
        [label.replace(/^"|"$/g, "")]: selectedOptionValue
      }
    });
  };
  return (
    <Select
      styles={() => selectStyle}
      defaultValue={options[0]}
      components={{ Control: ControlComponent }}
      options={options}
      isSearchable={false}
      onChange={handleSelectedOptionChange}
    />
  );
}

export default SelectList;
