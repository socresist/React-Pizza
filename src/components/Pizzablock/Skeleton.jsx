import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="120" r="120" />
    <rect x="18" y="276" rx="20" ry="20" width="260" height="20" />
    <rect x="18" y="310" rx="20" ry="20" width="260" height="60" />
    <rect x="18" y="380" rx="20" ry="20" width="260" height="20" />
  </ContentLoader>
);

export default Skeleton;
