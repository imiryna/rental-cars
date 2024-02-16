import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentCar, selectCarsAdvert } from "Store/advert/advertSelector";
import { ModalCss, ModalContentCss, BtnCss, CloseIcon, ContainerCss, ImgCss } from "./Modal.styled";

export const Modal = () => {
  const currentCarId = useSelector(selectCurrentCar);
  const allCars = useSelector(selectCarsAdvert);
  const currentCar = allCars.find((car) => car.id == currentCarId);
  return (
    <>
      {currentCar && (
        <ModalCss>
          <ModalContentCss>
            <BtnCss>
              <CloseIcon />
            </BtnCss>
            <ContainerCss>
              <ImgCss src={currentCar.img} width={461} height={276} />
            </ContainerCss>
            <div>
              <div>
                <div>{currentCar.make}</div>
                <div>{currentCar.model},</div>
                <div>{currentCar.years}</div>
              </div>
            </div>
            <div>
              <div>info</div>
              <div>VerticalLine</div>
              <div>info</div>
              <div>VerticalLine</div>
              <div>{currentCar.rentalCompany}</div>
              <div>VerticalLine</div>
              <div>{currentCar.accessories[2]}</div>
              <div>{currentCar.type}</div>
              <div>VerticalLine</div>
              <div>{currentCar.model}</div>
              <div></div>
              <div>{currentCar.id}</div>
              <div>VerticalLine</div>
              <div>{currentCar.id}</div>
            </div>
            <button>Rental car</button>
          </ModalContentCss>
        </ModalCss>
      )}
    </>
  );
};
