import React, { useContext } from "react";
import Select, { components } from "react-select";
import { MovieContext } from "context/Context";
import { GET_SELECTED_CONDITION_FILTER } from "Reducer/type";
const controlStyles = {
  color: "white",
  fontFamily: "Poppins",
  marginBottom: "1rem",
  fontSize: "1.4rem"
};
const selectStyle = {
  fontFamily: "Poppins",
  fontSize: "1.4rem"
};
function SelectList({ options, label }) {
  const { dispatch } = useContext(MovieContext);
  const ControlComponent = (props) => (
    <div>
      <p style={controlStyles}>{label}</p>
      <components.Control {...props} />
    </div>
  );
  const handleSelectedOptionChange = (selectedOption) => {
    const selectedOptionValue = selectedOption.id
      ? selectedOption.id
      : selectedOption.value;
    console.log(selectedOptionValue);
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
