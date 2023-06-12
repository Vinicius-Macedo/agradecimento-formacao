import React from "react";

type Props = {
  title: string;
  description?: string;
};

export default function SegredosItems(props: Props) {
  return (
    <div className="flex gap-4 items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#d9c034"
        height="175.9"
        preserveAspectRatio="xMidYMid meet"
        version="1"
        viewBox="0.0 -0.0 170.0 175.9"
        width="170"
        zoomAndPan="magnify"
        className="w-15 h-auto object-contain shrink-0"
      >
        <g id="change1_1">
          <path
            d="m432.17 211.89c-45.767 0-83.03 37.263-83.03 83.03-1e-5 45.767 37.263 83.03 83.03 83.03 45.767 1e-5 83.03-37.263 83.03-83.03 0-19.786-6.6953-37.48-18.065-51.976l-7.8178 9.2659c9.9118 12.204 13.791 25.754 13.791 42.71 0 39.221-31.718 70.92-70.939 70.92s-70.939-31.699-70.939-70.92 31.718-70.939 70.939-70.939c12.428 0 21.724 1.7866 31.872 7.3911l7.4275-9.7539c-11.882-6.5621-24.797-9.7286-39.299-9.7286z"
            fill="inherit"
            fillRule="evenodd"
            transform="translate(-349.14 -202.1)"
          />
          <path
            d="m401.44 284c3.3481 9e-5 5.8807 2.7473 7.5977 8.2416 3.4339 10.302 5.8807 15.453 7.3402 15.453 1.116 5e-5 2.275-0.85844 3.477-2.5755 24.124-38.632 46.445-69.882 66.963-93.748 5.3226-6.181 13.779-9.2716 25.369-9.2718 2.7471 1.7e-4 4.5928 0.25771 5.5373 0.77264 0.94418 0.51527 1.4164 1.1592 1.4165 1.9316-1.7e-4 1.2021-1.4167 3.563-4.2496 7.0826-33.138 39.835-63.873 81.901-92.203 126.2-1.9746 3.0906-6.0096 4.636-12.105 4.6359-6.1812 3e-5 -9.8299-0.25753-10.946-0.77267-2.919-1.2877-6.353-7.8552-10.302-19.703-4.4642-13.135-6.6964-21.377-6.6963-24.725-5e-5 -3.6056 3.0047-7.0826 9.0143-10.431 3.6915-2.0603 6.9538-3.0905 9.7869-3.0906"
            fill="inherit"
            transform="translate(-349.14 -202.1)"
          />
        </g>
      </svg>
      <div>
        <p className="font-bold text-white">{props.title}</p>
        {props.description ? <p className="text-semiwhite">{props.description}</p> : ""}
      </div>
    </div>
  );
}
