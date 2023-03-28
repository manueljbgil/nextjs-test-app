import Image from "next/image";
import { Info } from "./styles";

const Footer = () => {
  return (
    <div>
      <hr style={{ width: "100%", border: "0.2px solid gray" }}></hr>
      <Info>
        <Image
          src="/burger_brand_white.png"
          width={200}
          height={180}
          style={{ opacity: "0.2" }}
          alt="burger"
        />
      </Info>
      <p
        style={{
          textAlign: "center",
          color: "gray",
          fontFamily: "Switzer-Variable",
          fontSize: "14px",
          letterSpacing: 1.5,
        }}
      >
        Copyright © 2023 Digital-Restaurant. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
