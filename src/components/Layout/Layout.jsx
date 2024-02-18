import { DropdownMenu } from "components/DropdownMenu/DropdownMenu";
import { MainWrapCss, BoxGrid, SearchBtnCss } from "./Layout.styled";
import { Outlet, Navigate } from "react-router-dom";
import { selectCarsAdvert, selectFilteredCarsAdvert, selectPage, selectIsLoading } from "Store/advert/advertSelector";
import { selectCarMake, selectCarPrices, selectfilteredMake, selectfilteredPrice } from "Store/advert/advertSelector";
import { useSelector, useDispatch } from "react-redux";
import { commonFilter, setFilterMake, setFilterPrice } from "Store/advert/advertSlice";
import { Loader } from "components/Loader/Loader";

export const Layout = () => {
  const dispatcher = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const allCarMake = useSelector(selectCarMake);
  const allCarPrice = useSelector(selectCarPrices);
  const makeFilter = useSelector(selectfilteredMake);
  const priceFilter = useSelector(selectfilteredPrice);

  const handleInputFilter = () => {
    if (makeFilter === "" && priceFilter === "") {
      alert("Choose one of the filters to search");
    }
    dispatcher(commonFilter({ make: makeFilter, price: priceFilter }));
    return <Navigate to="/categori" />;
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
        </BoxGrid>
        <div>
          <SearchBtnCss onClick={handleInputFilter}>Search</SearchBtnCss>
        </div>
        {isLoading && <Loader />}
      </MainWrapCss>
      <Outlet />
    </div>
  );
};
