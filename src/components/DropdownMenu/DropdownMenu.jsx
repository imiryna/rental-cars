import { useState } from "react";
import { MenuItemsCss, ContainerMenu, DropdownPanelCss, BoxForFilterCss, TitleCss, BoxDropMenu, ArrowUpIcon, ArrowDownIcon, BtnCss, TextMenuModel } from "./DropdownMenu.styled";

import { useDispatch } from "react-redux";

export const DropdownMenu = ({ children, title, placeHolder, handleFunction }) => {
  const [isToggledDropdown, setIsToggledDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatcher = useDispatch();

  const handleToggleDropdown = () => {
    setIsToggledDropdown(!isToggledDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsToggledDropdown(false);
    dispatcher(handleFunction(option));
  };

  return (
    <BoxForFilterCss>
      <TitleCss>{title}</TitleCss>
      <DropdownPanelCss>
        {selectedOption ? selectedOption : placeHolder}
        <BtnCss onClick={handleToggleDropdown}>{isToggledDropdown ? <ArrowDownIcon /> : <ArrowUpIcon />}</BtnCss>
      </DropdownPanelCss>
      {isToggledDropdown && (
        <BoxDropMenu>
          <TextMenuModel>
            <ContainerMenu>
              {children.map((item) => (
                <MenuItemsCss key={item} onClick={() => handleOptionClick(item)}>
                  {item}
                </MenuItemsCss>
              ))}
            </ContainerMenu>
          </TextMenuModel>
        </BoxDropMenu>
      )}
    </BoxForFilterCss>
  );
};
