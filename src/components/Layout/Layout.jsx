import { DropdownMenu } from "components/DropdownMenu/DropdownMenu";
import { MainWrapCss, BoxGrid, SearchBtnCss } from "./Layout.styled";
import { Outlet, useNavigate } from "react-router-dom";
import { selectCarMake, selectCarPrices, selectfilteredMake, selectfilteredPrice } from "Store/advert/advertSelector";
import { useSelector, useDispatch } from "react-redux";
import { commonFilter, setFilterMake, setFilterPrice } from "Store/advert/advertSlice";

export const Layout = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const allCarMake = useSelector(selectCarMake);
  const allCarPrice = useSelector(selectCarPrices);
  const makeFilter = useSelector(selectfilteredMake);
  const priceFilter = useSelector(selectfilteredPrice);

  const handleInputFilter = () => {
    if (makeFilter === "" && priceFilter === "") {
      alert("Choose one of the filters to search");
    }
    dispatcher(commonFilter({ make: makeFilter, price: priceFilter }));
    navigate("/catalog");
  };

  return (
    <div>
      <MainWrapCss>
        <BoxGrid>
          <DropdownMenu title="Car brand" handleFunction={setFilterMake}>
            {allCarMake}
          </DropdownMenu>
          <DropdownMenu title="Prices" handleFunction={setFilterPrice}>
            {allCarPrice}
          </DropdownMenu>
          <SearchBtnCss onClick={handleInputFilter}>Search</SearchBtnCss>
        </BoxGrid>
      </MainWrapCss>
      <Outlet />
    </div>
  );
};
