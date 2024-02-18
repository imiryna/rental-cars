import React from "react";
import { AdvertList } from "components/AdvertList/AdvertList";
import { ButtonGoBack } from "components/ButtonGoBack/ButtonGoBack";

const CatalogPage = () => {
  return (
    <>
      <ButtonGoBack />
      <AdvertList />
    </>
  );
};

export default CatalogPage;
