import React from "react";
import { HeartIcon, ContainerCss, BtnCss, WraperCss, ImgCss, ModelWrapCss, GrigWrapCss, VerticalLine, ButtonCss } from "./AdvertCard.styled";

export const AdvertCard = ({ carInfo }) => {
  return (
    <WraperCss>
      <ContainerCss>
        <ImgCss src={carInfo.img} width={268} height={276} />
        <BtnCss>
          <HeartIcon />
        </BtnCss>
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
      <ButtonCss>Learn more</ButtonCss>
    </WraperCss>
  );
};
