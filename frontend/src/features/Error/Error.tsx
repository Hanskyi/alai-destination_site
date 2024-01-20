import React from 'react';
import style from './Error.module.scss';

interface Props {
  statusCode: string;
  message: string;
}

const Error: React.FC<Props> = ({ statusCode, message }) => {
  return (
    <div className={style.skyBlock}>
      <div className={style.skyBlock_hotBaloon}>
        <svg
          width="203"
          height="339"
          viewBox="0 0 203 339"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M56.1619 222.141L148.269 208.249C147.026 211.705 145.388 217.454 143.597 224.261C141.476 232.319 139.122 241.94 136.925 251.182C134.729 260.425 132.69 269.295 131.2 275.854C130.455 279.133 129.847 281.835 129.426 283.717C129.217 284.648 129.054 285.378 128.943 285.879H67.8027C67.7701 285.624 67.7306 285.315 67.6841 284.957C67.5336 283.797 67.3107 282.111 67.0213 280.011C66.4426 275.811 65.5976 269.95 64.5325 263.307C62.4654 250.415 59.5632 234.538 56.1619 222.141Z"
              stroke="white"
              strokeWidth="2"
            />
          </g>
          <g filter="url(#filter1_d)">
            <rect
              x="87.9185"
              y="224.015"
              width="24.3043"
              height="60.9015"
              stroke="white"
              strokeWidth="2"
            />
          </g>
          <path
            d="M147.142 238.005L125.026 238.743V240.954L147.142 241.691V243.166H155.251V236.531H147.142V238.005Z"
            fill="#2E4152"
          />
          <path
            d="M133.872 242.428L136.084 244.639C136.673 245.229 138.787 250.291 139.769 252.748L144.193 253.486C142.964 251.52 140.359 247.293 139.769 246.114C139.032 244.639 138.295 243.165 138.295 241.691C138.295 240.216 138.295 238.742 136.084 238.004C133.872 237.267 133.202 238.013 133.135 238.004C133.725 238.004 134.363 239.97 134.609 240.953H133.135C133.135 241.199 133.282 241.838 133.872 242.428Z"
            fill="#DFDCD5"
          />
          <path
            d="M132.398 255.698C128.859 255.698 125.026 256.189 123.552 256.435C120.357 259.138 113.968 264.839 113.968 266.019C113.968 267.493 115.443 276.339 115.443 279.288C115.443 281.647 115.443 285.923 113.968 291.82H130.186C127.975 288.134 127.975 285.185 127.975 280.762V270.442C127.975 269.705 130.924 269.705 130.924 267.493C130.924 265.281 130.186 264.544 129.449 263.807C128.859 263.217 128.466 261.841 128.712 261.595C132.644 261.35 141.244 260.711 144.193 260.121C147.142 259.531 146.896 257.91 146.404 257.172L142.719 251.275L139.033 252.012C139.278 252.749 139.917 254.518 140.507 255.698C141.097 256.877 140.261 256.681 139.77 256.435C138.787 256.189 135.936 255.698 132.398 255.698Z"
            fill="#F4B00C"
          />
          <path
            d="M123.551 248.325C122.372 248.325 122.077 250.782 122.077 252.011L119.128 251.274L120.602 246.114L122.814 240.216C123.06 238.987 123.846 235.941 125.025 236.53C126.205 237.12 126.5 239.97 126.5 240.953C126.746 241.69 127.237 242.428 127.974 243.165C128.391 243.582 127.237 244.148 126.5 244.639C126.746 245.376 127.237 246.998 127.237 247.588C127.237 248.178 126.254 248.325 125.763 248.325H123.551Z"
            fill="#EBDAD2"
          />
          <rect x="58.3271" y="274.479" width="81.2002" height="12.5803" fill="#86522F" />
          <path
            d="M62.9019 325.237C62.9019 331.312 67.8267 336.237 73.9019 336.237H125.096C131.172 336.237 136.096 331.312 136.096 325.237V285.916H62.9019V325.237Z"
            fill="#8E684F"
          />
          <path
            d="M115.443 285.186C111.905 273.391 116.918 265.527 119.866 263.07C118.392 261.104 113.232 258.352 104.385 263.07C88.9038 284.448 80.0579 288.871 69.7373 293.295C59.4167 297.718 43.9358 290.346 25.5061 302.141C10.7624 311.577 4.12769 330.645 2.65332 339C6.33925 336.543 17.9868 330.154 35.0895 324.256C52.1923 318.359 58.4338 329.171 59.4167 335.314C73.1775 331.137 102.468 321.308 109.545 315.41C118.392 308.038 119.866 299.929 115.443 285.186Z"
            fill="#039BA7"
          />
          <path
            d="M111.757 266.018C112.937 263.659 116.672 263.561 118.392 263.807C121.341 263.806 123.552 263.07 124.289 260.121C125.026 257.172 124.289 254.223 123.552 253.486C122.815 252.749 119.866 250.537 120.603 249.063C121.193 247.884 122.323 246.606 122.815 246.114C124.289 243.903 122.815 242.428 123.552 240.217C124.289 238.005 126.501 240.217 126.501 238.005C126.501 235.794 125.026 235.057 123.552 234.319L123.552 234.319C122.077 233.582 116.917 231.371 114.706 235.057C112.494 238.743 113.231 241.691 113.968 243.166C114.706 244.64 113.968 246.114 112.494 246.852C110.768 247.715 107.999 248.846 106.597 252.012C105.652 254.143 103.422 254.604 101.774 257.901C100.642 260.164 101.437 262.333 102.174 263.807C102.911 265.281 102.408 266.125 105.123 267.493C106.301 268.086 110.283 268.967 111.757 266.018Z"
            fill="#34495E"
          />
          <path
            d="M135.673 250.884C137.87 241.637 140.227 232.005 142.351 223.932H144.717C140.508 239.863 135.323 262.23 132.29 275.568H129.944C131.435 269.007 133.475 260.132 135.673 250.884Z"
            fill="white"
          />
          <path
            d="M125.355 296.209V317.657C125.355 320.97 122.669 323.657 119.355 323.657H103.625"
            stroke="#6D4225"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <g filter="url(#filter2_i)">
            <path
              d="M101.214 0C45.3152 0 0 45.4889 0 101.602C0 122.392 6.22 144.432 16.8938 160.532C32.6719 184.33 45.7799 199.14 56.68 227.589H144.924C146.995 221.699 148.733 217.035 149.797 214.72C157.894 197.109 177.044 170.629 185.535 157.822C196.209 141.723 202.429 122.392 202.429 101.602C202.429 45.4889 157.113 0 101.214 0Z"
              fill="#FFCD38"
            />
          </g>
          <g filter="url(#filter3_i)">
            <path
              d="M101.214 0C45.3152 0 0 45.4889 0 101.602C0 122.392 6.22 144.432 16.8938 160.532C32.6719 184.33 45.7799 199.14 56.68 227.589H101.214V0Z"
              fill="#CE9A00"
            />
          </g>
          <path
            d="M152.781 91.3446C147.874 17.4608 111.613 -0.162718 99.0527 2.54842L98.355 227.589H122.079C122.544 224.878 123.754 218.37 124.87 214.032C132.546 173.362 156.922 153.705 152.781 91.3446Z"
            fill="#FFC20E"
          />
          <path
            d="M49.5985 91.3446C53.9943 17.4608 86.4784 -0.162718 97.7299 2.54842L98.355 227.589H77.1022C76.6855 224.878 75.602 218.37 74.6018 214.032C67.7259 173.362 45.8884 153.705 49.5985 91.3446Z"
            fill="#EBAF00"
          />
          <defs>
            <filter
              id="filter0_d"
              x="50.896"
              y="203.003"
              width="102.924"
              height="87.8752"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter
              id="filter1_d"
              x="82.9185"
              y="219.015"
              width="34.3043"
              height="70.9015"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter
              id="filter2_i"
              x="-6"
              y="0"
              width="208.429"
              height="228.589"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-8" dy="1" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
              id="filter3_i"
              x="0"
              y="0"
              width="106.214"
              height="227.589"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={style.skyBlock_bottomSky}>
        <svg
          width="100%"
          height="392"
          viewBox="0 0 2638 392"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="1332" height="392" fill="url(#pattern0)" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2519 391.782V392H2637V50.5832C2637.2 48.8696 2637.3 47.127 2637.3 45.3608C2637.3 20.3087 2616.99 0 2591.94 0C2570.08 0 2551.84 15.4529 2547.54 36.0276C2537.42 32.8294 2526.65 31.1045 2515.47 31.1045C2460.57 31.1045 2415.39 72.7378 2409.78 126.156C2399.94 118.565 2387.6 114.05 2374.2 114.05C2357.52 114.05 2342.47 121.057 2331.84 132.289C2318.16 107.506 2291.76 90.7216 2261.45 90.7216C2228.72 90.7216 2200.57 110.287 2188.04 138.359C2181.45 134.443 2173.76 132.194 2165.54 132.194C2142.58 132.194 2123.72 149.757 2121.67 172.182C2108.17 160.205 2090.4 152.931 2070.93 152.931C2043.44 152.931 2019.34 167.437 2005.87 189.213C1995.85 179.585 1982.24 173.667 1967.25 173.667C1953.96 173.667 1941.76 178.318 1932.19 186.081C1930.55 151.75 1902.2 124.418 1867.46 124.418C1843.84 124.418 1823.17 137.054 1811.85 155.935C1805.68 153.983 1799.11 152.931 1792.29 152.931C1762.48 152.931 1737.37 173.059 1729.81 200.466C1719.46 194.942 1707.64 191.811 1695.09 191.811C1681.9 191.811 1669.52 195.267 1658.8 201.321C1645.36 182.982 1623.66 171.075 1599.18 171.075C1590.33 171.075 1581.85 172.631 1573.98 175.485C1565.87 160.509 1550.02 150.339 1531.79 150.339C1515.85 150.339 1501.73 158.113 1493.01 170.076C1488.48 151.315 1471.59 137.379 1451.44 137.379C1427.82 137.379 1408.67 156.527 1408.67 180.147C1408.67 181.252 1408.71 182.346 1408.79 183.43C1402 180.484 1394.51 178.851 1386.63 178.851C1381.62 178.851 1376.76 179.513 1372.14 180.755C1372.3 178.846 1372.38 176.914 1372.38 174.963C1372.38 137.027 1341.63 106.274 1303.69 106.274C1265.75 106.274 1235 137.027 1235 174.963C1235 195.514 1244.03 213.957 1258.33 226.545V391.782H2519Z"
            fill="white"
          />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xmlnsXlink="#image0" transform="scale(0.000750751 0.00255102)" />
            </pattern>
            <image
              id="image0"
              width="1332"
              height="392"
              xmlnsXlink="data:image/png;base64,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BAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACqIdAEAAAAAKoh0AQAAAAAqiHQBAAAAACq8Z9UiwAAAAAAqMD/A4Met4/RI54dAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      </div>
      <p className={style.skyBlock_text}>
        {statusCode} Error: {message}
      </p>
    </div>
  );
};

export default Error;
