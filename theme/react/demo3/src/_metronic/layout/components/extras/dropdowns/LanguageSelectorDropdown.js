/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import clsx from "clsx";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_helpers";
import { useLang, setLanguage } from "../../../../i18n";
import { DropdownItemToggler } from "../../../../_partials/dropdowns";

const languages = [
  {
    lang: "en",
    name: "English",
    flag: toAbsoluteUrl("/media/svg/flags/226-united-states.svg"),
  },
  {
    lang: "zh",
    name: "Mandarin",
    flag: toAbsoluteUrl("/media/svg/flags/015-china.svg"),
  },
  {
    lang: "es",
    name: "Spanish",
    flag: toAbsoluteUrl("/media/svg/flags/128-spain.svg"),
  },
  {
    lang: "ja",
    name: "Japanese",
    flag: toAbsoluteUrl("/media/svg/flags/063-japan.svg"),
  },
  {
    lang: "de",
    name: "German",
    flag: toAbsoluteUrl("/media/svg/flags/162-germany.svg"),
  },
  {
    lang: "fr",
    name: "French",
    flag: toAbsoluteUrl("/media/svg/flags/195-france.svg"),
  },
];

export function LanguageSelectorDropdown() {
  const lang = useLang();
  const currentLanguage = languages.find((x) => x.lang === lang);
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownItemToggler}
        id="dropdown-toggle-my-cart"
        className="mb-2"
      >
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id="language-panel-tooltip">Select Language</Tooltip>
          }
        >
          <div className="btn btn-icon btn-clean btn-lg">
            <img
              className="w-25px h-25px w-lg-30px h-lg-30px rounded-circle"
              src={currentLanguage.flag}
              alt={currentLanguage.name}
            />
          </div>
        </OverlayTrigger>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-left">
        <ul className="navi navi-hover py-4">
          {languages.map((language) => (
            <li
              key={language.lang}
              className={clsx("navi-item", {
                active: language.lang === currentLanguage.lang,
              })}
            >
              <a
                href="#"
                onClick={() => setLanguage(language.lang)}
                className="navi-link"
              >
                <span className="symbol symbol-20 mr-3">
                  <img src={language.flag} alt={language.name} />
                </span>
                <span className="navi-text">{language.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}
