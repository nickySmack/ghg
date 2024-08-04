import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      {/* <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}

      <svg 
        width={size}
        height={size} 
        fill="#03a9f4" stroke="#03a9f4" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="m509.28 358.31-25.225-25.225c-13.492-13.491-29.037-24.016-46.338-31.393 22.971-30.875 35.492-68.473 35.492-107.22v-37.536c0-5.123-4.154-9.277-9.277-9.277h-37.536c-21.776 0-42.92 3.817-63.014 11.36-6.721-35.362-23.657-67.348-49.411-93.103l-51.413-51.415c-1.739-1.739-4.099-2.718-6.559-2.718s-4.82 0.977-6.559 2.718l-51.415 51.415c-25.754 25.754-42.69 57.741-49.412 93.103-20.094-7.543-41.237-11.36-63.014-11.36h-37.539c-5.123 0-9.277 4.154-9.277 9.277v37.536c0 38.75 12.523 76.348 35.492 107.22-17.302 7.377-32.844 17.901-46.338 31.393l-25.223 25.225c-3.623 3.623-3.623 9.496 0 13.119l25.225 25.225c27.966 27.966 65.148 43.367 104.7 43.367s76.732-15.401 104.7-43.367l9.388-9.388v103.67c0 5.123 4.154 9.277 9.277 9.277s9.277-4.154 9.277-9.277v-103.68l9.387 9.387c27.966 27.966 65.148 43.367 104.7 43.367s76.732-15.401 104.7-43.367l25.225-25.225c3.622-3.621 3.622-9.494-1e-3 -13.117zm-38.343 25.224c-24.461 24.461-56.984 37.933-91.577 37.933-34.594 0-67.117-13.471-91.578-37.933l-25.225-25.225c-1.739-1.739-4.099-2.718-6.559-2.718s-4.82 0.977-6.559 2.718l-25.225 25.225c-24.461 24.461-56.984 37.933-91.578 37.933-34.593 0-67.116-13.471-91.577-37.933l-18.665-18.666 18.664-18.664c14.549-14.547 31.821-25.15 51.336-31.511 2.954-0.964 5.23-3.341 6.062-6.334s0.111-6.204-1.921-8.555c-25.278-29.231-39.199-66.64-39.199-105.34v-28.259h28.26c23.192 0 45.573 4.822 66.522 14.33 2.688 1.221 5.799 1.089 8.374-0.356s4.308-4.03 4.668-6.96c4.411-35.951 20.312-68.522 45.98-94.191l44.856-44.855 44.855 44.855c25.669 25.67 41.569 58.241 45.98 94.191 0.36 2.932 2.093 5.516 4.668 6.96 2.577 1.445 5.686 1.577 8.374 0.356 20.949-9.51 43.33-14.33 66.522-14.33h28.259v28.259c0 38.696-13.922 76.106-39.199 105.34-2.032 2.35-2.753 5.561-1.921 8.555s3.108 5.371 6.062 6.334c19.516 6.362 36.789 16.963 51.337 31.511l18.664 18.665-18.66 18.664z" />
      <path d="m256 121.98c-5.123 0-9.277 4.154-9.277 9.277v145.15c0 5.123 4.154 9.277 9.277 9.277s9.277-4.154 9.277-9.277v-145.15c0-5.123-4.153-9.277-9.277-9.277z" />
      <path d="m402.9 224.55c-3.46-3.78-9.329-4.039-13.107-0.579-30.952 28.332-62.13 47.358-92.671 56.551-4.906 1.477-7.686 6.651-6.209 11.557 1.208 4.015 4.892 6.605 8.879 6.605 0.886 0 1.786-0.127 2.678-0.396 33.231-10.002 66.826-30.401 99.851-60.632 3.78-3.459 4.039-9.327 0.579-13.106z" />
      <path d="m414.89 362.25c-29.705 0.658-74.196-17.102-119.08-47.492-4.244-2.873-10.01-1.763-12.883 2.48s-1.763 10.01 2.48 12.884c47.051 31.861 94.687 50.699 128 50.699 0.633 0 1.265-7e-3 1.889-0.021 5.122-0.113 9.183-4.356 9.07-9.479-0.11-5.123-4.35-9.17-9.478-9.071z" />
      <path d="m214.88 280.52c-30.54-9.193-61.719-28.219-92.671-56.551-3.78-3.46-9.647-3.201-13.106 0.579-3.46 3.779-3.2 9.647 0.579 13.106 33.024 30.231 66.617 50.63 99.85 60.632 0.892 0.268 1.791 0.396 2.678 0.396 3.987 0 7.671-2.591 8.88-6.605 1.476-4.906-1.305-10.08-6.21-11.557z" />
      <path d="m229.06 317.24c-2.872-4.24-8.641-5.351-12.883-2.479-44.881 30.391-89.374 48.164-119.08 47.492-0.07-1e-3 -0.139-2e-3 -0.208-2e-3 -5.028 0-9.159 4.02-9.271 9.073-0.113 5.122 3.948 9.366 9.07 9.479 0.626 0.014 1.253 0.021 1.889 0.021 33.312 0 80.949-18.84 128-50.699 4.244-2.875 5.354-8.643 2.481-12.885z" />
      </svg>



     

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
