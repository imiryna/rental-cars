import { HeartIcon, BtnCss, WraperCss, ImgCss, BlueHeartIcon, ModelWrapCss, GrigWrapCss, VerticalLine, ButtonCss, ContentBoxCss, PriceContentCss, ContentInfoCss } from "./AdvertCard.styled";
import { BlueTextCss } from "components/Modal/Modal.styled";
import { useDispatch } from "react-redux";
import { setCurrentCar } from "Store/advert/advertSlice";
import { toggleToFavorites } from "Store/advert/advertSlice";
import { selectFavorites } from "Store/advert/advertSelector";
import { useSelector } from "react-redux";

export const AdvertCard = ({ carInfo, setIsOpenModal }) => {
  const dispatcher = useDispatch();

  const OpenModal = (e) => {
    const carId = e.target.id;
    document.body.style.overflow = "hidden";
    dispatcher(setCurrentCar(carId));
    setIsOpenModal(true);
  };

  const toggleFavoritesByClick = () => {
    dispatcher(toggleToFavorites(carInfo.id));
  };

  const allFavorites = useSelector(selectFavorites);

  const carFavorite = allFavorites.includes(carInfo.id);

  return (
    <WraperCss>
      <ImgCss src={carInfo.img} width={461} height={276} />
      <BtnCss onClick={toggleFavoritesByClick}>{carFavorite ? <BlueHeartIcon /> : <HeartIcon />}</BtnCss>
      <ModelWrapCss>
        <ContentBoxCss>
          <ContentInfoCss>{carInfo.make}</ContentInfoCss>
          <ContentInfoCss>
            <BlueTextCss>{carInfo.model}</BlueTextCss>
          </ContentInfoCss>
          <ContentInfoCss>{carInfo.year}</ContentInfoCss>
        </ContentBoxCss>
        <PriceContentCss>{carInfo.rentalPrice}</PriceContentCss>
      </ModelWrapCss>
      <GrigWrapCss>
        <VerticalLine>{carInfo.address.split(",")[1]}</VerticalLine>
        {/* <VerticalLine></VerticalLine> */}
        <VerticalLine>{carInfo.address.split(",")[2]}</VerticalLine>
        {/* <VerticalLine></VerticalLine> */}
        <VerticalLine>{carInfo.rentalCompany}</VerticalLine>
        {/* <VerticalLine></VerticalLine> */}
        <VerticalLine>{carInfo.type}</VerticalLine>
        {/* <VerticalLine></VerticalLine> */}
        <VerticalLine>{carInfo.model}</VerticalLine>
        {/* <VerticalLine></VerticalLine> */}
        <VerticalLine>{carInfo.id}</VerticalLine>
        <div>{carInfo.accessories[2]}</div>
      </GrigWrapCss>
      <ButtonCss id={carInfo.id} onClick={OpenModal}>
        Learn more
      </ButtonCss>
    </WraperCss>
  );
};
