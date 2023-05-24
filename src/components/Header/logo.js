import React from "react";
import companyLogo from "../../assets/Screenshot 2022-08-04 110515.png";
export default function logo() {
  return (
    <>
      <img  src={companyLogo} alt="BigCo Inc. logo" min-width={'100%'} max-width={'100%'}/>
    </>
  );
}
