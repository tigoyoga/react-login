import React from "react";
import routeItems from "./routes";
import { Routes as RS, Route } from "react-router-dom";

const Routes = () => {
  return (
    <RS>
      {routeItems.map((route, index) => {
        return <Route key={index} {...route} />;
      })}
    </RS>
  );
};

export default Routes;
