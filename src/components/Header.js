import { FormattedMessage } from "react-intl";
import CustomSelect from "../components/CustomSelect";

const Header = (props) => {
  const menu = [
    {
      key: "about_project",
      title: "About the project",
      path: "#",
    },
    {
      key: "contact_us",
      title: "Contact us",
      path: "#",
    },
  ];

  return (
    <header>
      <div className="container header_content">
        <div className="brand">ReactIntl</div>
        <nav>
          <ul>
            {menu.map(({ title, path, key }) => (
              <li key={title}>
                <a href={path}>
                  <FormattedMessage id={key} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="spacer"></div>
        <FormattedMessage id="languages" />
        &nbsp;
        <div className="switcher">
          {/* Language switch dropdown here */}
          <CustomSelect {...props} />
        </div>
      </div>
    </header>
  );
};

export default Header;
