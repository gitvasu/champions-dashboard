import React from "react";
import Loader from "./loader";

/**
 * A basic Higher order component HOC to render loader if list is getting fetched from API
 *
 * @param {Component} ComponentToLoad - A component passed as an argument to be loaded
 */

function WithLoader(ComponentToLoad) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <ComponentToLoad {...props} />;
    else return <Loader />;
  };
}

export default WithLoader;
