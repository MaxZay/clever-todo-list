import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import {publicRoutes} from "../utils/routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((item) =>
        <Route path={item.path} element={item.Component}/>
      )}
    </Routes>
  );
};

export default AppRouter;