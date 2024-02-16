import { useEffect } from "react";
import { AdvertCard } from "components/CarCard/AdvertCard";
import { useSelector, useDispatch } from "react-redux";
import { selectCarsAdvert, selectPage, selectIsLoading } from "Store/advert/advertSelector";
import { getAllAdvertThunk } from "Store/advert/advertThunk";
import { loadMore } from "Store/advert/advertSlice";
import { MainWrapCss, BoxListCss } from "./AdvertList.styled";
import { Loader } from "components/Loader/Loader";

export const AdvertList = () => {
  const dispatcher = useDispatch();
  const allCarsAdvert = useSelector(selectCarsAdvert);
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatcher(getAllAdvertThunk(currentPage));
  }, [dispatcher, currentPage]);

  const handleLoadMore = () => {
    dispatcher(loadMore());
  };
  return (
    <MainWrapCss>
      {allCarsAdvert.map((item) => (
        <BoxListCss key={item.id}>
          <AdvertCard carInfo={item} />
        </BoxListCss>
      ))}
      <button onClick={handleLoadMore}>Load more</button>
      {isLoading && <Loader />}
    </MainWrapCss>
  );
};
