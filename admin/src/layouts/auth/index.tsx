import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import routes from "../../routes";

// Chakra imports
import { Box, useColorModeValue } from "@chakra-ui/react";

// Layout components
import { SidebarContext } from "../../contexts/SidebarContext";
import { AppRoute } from "../../interfaces/route.interface";

// Custom Chakra theme
export default function Auth() {
  // states and functions
  const [toggleSidebar, setToggleSidebar] = useState<Boolean>(false);
  // functions for changing the states from components
  const getRoute = (): Boolean => {
    return window.location.pathname !== "/auth/full-screen-maps";
  };
  const getRoutes = (routes: Array<AppRoute>): any => {
    return routes.map((prop: AppRoute | any, key: React.Key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.path}
            // path={prop.layout + prop.path}
            element={prop.component}
            key={key}
          />
        );
      }
      if (prop.collapse) {
        return getRoutes(prop.items);
      }
      if (prop.category) {
        return getRoutes(prop.items);
      } else {
        return null;
      }
    });
  };
  const authBg = useColorModeValue("white", "navy.900");
  document.documentElement.dir = "ltr";
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Box
          bg={authBg}
          float="right"
          minHeight="100vh"
          height="100%"
          position="relative"
          w="100%"
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          {getRoute() ? (
            <Box mx="auto" minH="100vh">
              <Routes>
                {getRoutes(routes)}
                <Route
                  path="/"
                  element={<Navigate replace to="/auth/sign-in" />}
                />
              </Routes>
              <Outlet />
            </Box>
          ) : null}
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
