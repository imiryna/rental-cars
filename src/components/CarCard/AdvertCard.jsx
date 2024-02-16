import { HeartIcon, ContainerCss, BtnCss, WraperCss, ImgCss, BlueHeartIcon, ModelWrapCss, GrigWrapCss, VerticalLine, ButtonCss } from "./AdvertCard.styled";
import { useDispatch } from "react-redux";
import { setCurrentCar } from "Store/advert/advertSlice";

export const AdvertCard = ({ carInfo, setIsOpenModal }) => {
  const dispatcher = useDispatch();

  const OpenModal = (e) => {
    const carId = e.target.id;
    document.body.style.overflow = "hidden";
    dispatcher(setCurrentCar(carId));
    setIsOpenModal(true);
  };

  const carFavorite = carInfo.year > 2010;

  return (
    <WraperCss>
      <ContainerCss>
        <ImgCss src={carInfo.img} width={461} height={276} />
        <BtnCss>{carFavorite ? <HeartIcon /> : <BlueHeartIcon />}</BtnCss>
      </ContainerCss>
      <ModelWrapCss>
        <div>
          <div>{carInfo.make}</div>
          <div>{carInfo.model},</div>
          <div>{carInfo.years}</div>
        </div>
        <div>{carInfo.rentalPrice}</div>
      </ModelWrapCss>
      <GrigWrapCss>
        <div>{carInfo.address.split(",")[1]}</div>
        <VerticalLine></VerticalLine>
        <div>{carInfo.address.split(",")[2]}</div>
        <VerticalLine></VerticalLine>
        <div>{carInfo.rentalCompany}</div>
        <VerticalLine></VerticalLine>
        <div>{carInfo.accessories[2]}</div>
        <div>{carInfo.type}</div>
        <VerticalLine></VerticalLine>
        <div>{carInfo.model}</div>
        <VerticalLine></VerticalLine>
        <div>{carInfo.id}</div>
        <VerticalLine></VerticalLine>
        <div>{carInfo.id}</div>
      </GrigWrapCss>
      <ButtonCss id={carInfo.id} onClick={OpenModal}>
        Learn more
      </ButtonCss>
    </WraperCss>
  );
};
