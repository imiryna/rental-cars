import React from "react";
import { MainWrapCss, BoxGrig, BoxFoFiltrCss, SearchBtnCss } from "./Layout.styled";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <MainWrapCss>
        <BoxGrig>
          <BoxFoFiltrCss>
            <span>Car brand</span>
            <div>dpopdown</div>
          </BoxFoFiltrCss>

          <BoxFoFiltrCss>
            <span>Price/ 1 hour</span>
            <div>dropdown</div>
          </BoxFoFiltrCss>

          <BoxFoFiltrCss>
            <span>Сar mileage / km</span>
            <div>dropdown</div>
          </BoxFoFiltrCss>

          <BoxFoFiltrCss>
            <span>From 3,000</span>
            <div>vl</div> <span>To 5,500 </span>
          </BoxFoFiltrCss>
        </BoxGrig>
        <div>
          <SearchBtnCss>Search</SearchBtnCss>
        </div>
      </MainWrapCss>
      <Outlet />
    </div>
  );
};
