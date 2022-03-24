import { LOCALES } from "../i18n/locales";
import usLogo from "../img/us.png";
import Select from "react-select";

const options = [
  { label: "English", value: LOCALES.ENGLISH, customAbbreviation: usLogo },
  { label: "日本語", value: LOCALES.JAPANESE, customAbbreviation: usLogo },
  { label: "Français", value: LOCALES.FRENCH, customAbbreviation: usLogo },
];

const formatOptionLabel = ({ value, label, customAbbreviation }) => (
  <div style={{ display: "flex", width: "100px" }}>
    <div>{label}</div>
    <div style={{ marginLeft: "10px", color: "#ccc" }}>
      <img
        src={customAbbreviation}
        style={{ width: 36, marginTop: 2 }}
        alt={value}
      />
    </div>
  </div>
);

const CustomSelect = ({ handleChange }) => (
  <Select
    defaultValue={options[0]}
    onChange={handleChange}
    formatOptionLabel={formatOptionLabel}
    options={options}
  />
);

export default CustomSelect;
