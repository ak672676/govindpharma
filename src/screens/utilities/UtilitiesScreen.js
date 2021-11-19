import React from "react";
import { Card } from "react-bootstrap";
import UtilityItem from "../../components/utilityItem/UtilityItem";

function UtilitiesScreen() {
  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ display: "flex" }}>
       <UtilityItem name={"Type"} link="/type"/>
       <UtilityItem name={"Packing"} link="/packing"/>
       {/* <UtilityItem /> */}
      </div>
    </div>
  );
}

export default UtilitiesScreen;
