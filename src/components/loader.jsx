import React from "react";
import ContentLoader from "react-content-loader";

/**
 * The loader component to render loading svg when their is some network call
 */
const Loader = () => {
  return (
    <ContentLoader
      backgroundColor={"#fff"}
      viewBox="0 0 1000 380"
      height={380}
      width={1000}
    >
      <circle cx="70" cy="50" r="30" />
      <rect x="0" y="90" rx="0" ry="0" width="140" height="25" />

      <circle cx="330" cy="50" r="30" />
      <rect x="260" y="90" rx="0" ry="0" width="140" height="25" />

      <circle cx="590" cy="50" r="30" />
      <rect x="520" y="90" rx="0" ry="0" width="140" height="25" />

      <circle cx="850" cy="50" r="30" />
      <rect x="780" y="90" rx="0" ry="0" width="140" height="25" />

      {/*  */}

      <circle cx="70" cy="280" r="30" />
      <rect x="0" y="320" rx="0" ry="0" width="140" height="25" />

      <circle cx="330" cy="280" r="30" />
      <rect x="260" y="320" rx="0" ry="0" width="140" height="25" />

      <circle cx="590" cy="280" r="30" />
      <rect x="520" y="320" rx="0" ry="0" width="140" height="25" />

      <circle cx="850" cy="280" r="30" />
      <rect x="780" y="320" rx="0" ry="0" width="140" height="25" />
    </ContentLoader>
  );
};

export default Loader;
