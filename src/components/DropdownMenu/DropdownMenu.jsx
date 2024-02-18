import { useState } from "react";
import { MenuItemsCss, ContainerMenu } from "./DropdownMenu.styled";
import { BoxForFilterCss, TitleCss, BoxDropMenu, ArrowUpIcon, ArrowDownIcon, BtnCss, TextMenuModel } from "components/Layout/Layout.styled";
import { useDispatch } from "react-redux";

export const DropdownMenu = ({ children, title, handleFunction }) => {
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
      <TitleCss>
        {selectedOption ? selectedOption : title}
        <BtnCss onClick={handleToggleDropdown}>{isToggledDropdown ? <ArrowDownIcon /> : <ArrowUpIcon />}</BtnCss>
      </TitleCss>
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
    // <div>
    //   <ContainerMenu>
    //     {makesCar.map((make) => (
    //       <MenuItemsCss key={make.make}>{make.make}</MenuItemsCss>
    //     ))}
    //     {priseCar.map((prise, index) => (
    //       <MenuItemsCss key={index}>{prise.prise}</MenuItemsCss>
    //     ))}
    //   </ContainerMenu>
    // </div>
  );
};
