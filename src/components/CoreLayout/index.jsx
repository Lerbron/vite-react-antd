import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";


const checkIsLogin= () => {
  const isLogin= sessionStorage.getItem('login')
  return isLogin == 1
}

const RouteComponent= ({Component, auth, ...props}) => {
  if (!auth) return <Component {...props} />
  if (auth && checkIsLogin()) return <Component {...props} />
  let redirectLink= `/login?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`
  return <Navigate to={redirectLink} replace={true} />;
}

export default memo(props => {
  const renderRoute = () => {
    let { routes } = props;
    return routes.map((route) => {
      const { path, exact, auth, element:Component } = route;

      return (
        <Route
          key={path + ""}
          exact={!!exact}
          path={path}
          element={<RouteComponent Component={Component} auth={auth} />}
        />
      )
    })
  }

  return (
    <Routes>
      {renderRoute()}
    </Routes>
  )
})