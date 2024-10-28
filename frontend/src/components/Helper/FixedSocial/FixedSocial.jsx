import React from 'react';

import classes from './FixedSocial.module.css';

function FixedSocial() {
  return (
    <div className={classes.fixed__social}>
      <a href="tel:05389118309">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FE610A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.47 19.47 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 13.45 13.45 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.28a16 16 0 0 0 6 6l1.28-1.27a2 2 0 0 1 2.11-.45 13.45 13.45 0 0 0 2.81.7 2 2 0 0 1 1.72 2z"></path>
        </svg>
      </a>
      <a
        href="https://maps.app.goo.gl/R66q1JT5hT1Tihbf9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FE610A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/asotokaportakirsehir/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42ZM14.5356 21.0059C14.5356 17.4325 17.4324 14.5357 21.0058 14.5357C24.5793 14.5357 27.4761 17.4325 27.4761 21.0059C27.4761 24.5794 24.5793 27.4762 21.0058 27.4762C17.4324 27.4762 14.5356 24.5794 14.5356 21.0059ZM21.0058 25.2059C18.6862 25.2059 16.8058 23.3255 16.8058 21.0059C16.8058 18.6863 18.6862 16.8059 21.0058 16.8059C23.3254 16.8059 25.2058 18.6863 25.2058 21.0059C25.2058 23.3255 23.3254 25.2059 21.0058 25.2059ZM29.2434 14.2761C29.2434 15.1111 28.5664 15.7881 27.7313 15.7881C26.8963 15.7881 26.2194 15.1111 26.2194 14.2761C26.2194 13.441 26.8963 12.7641 27.7313 12.7641C28.5664 12.7641 29.2434 13.441 29.2434 14.2761ZM15.805 8.47582C17.149 8.4145 17.578 8.4 21 8.4C24.422 8.4 24.851 8.4145 26.195 8.47582C27.5361 8.53699 28.452 8.75001 29.2535 9.06146C30.082 9.38346 30.7847 9.81429 31.4852 10.5148C32.1857 11.2153 32.6165 11.9179 32.9385 12.7465C33.25 13.548 33.463 14.4639 33.5242 15.805C33.5855 17.1489 33.6 17.578 33.6 20.9999C33.6 24.4219 33.5855 24.851 33.5242 26.1949C33.463 27.536 33.25 28.452 32.9385 29.2534C32.6165 30.082 32.1857 30.7846 31.4852 31.4852C30.7847 32.1856 30.082 32.6165 29.2535 32.9384C28.452 33.2499 27.5361 33.4629 26.195 33.5241C24.851 33.5854 24.422 33.5999 21 33.5999C17.578 33.5999 17.149 33.5854 15.805 33.5241C14.4639 33.4629 13.548 33.2499 12.7465 32.9384C11.918 32.6165 11.2153 32.1856 10.5148 31.4852C9.8143 30.7846 9.38346 30.082 9.06151 29.2534C8.75001 28.452 8.53699 27.536 8.47582 26.1949C8.4145 24.851 8.4 24.4219 8.4 20.9999C8.4 17.578 8.4145 17.1489 8.47582 15.805C8.53699 14.4639 8.75001 13.548 9.06151 12.7465C9.38346 11.9179 9.8143 11.2153 10.5148 10.5148C11.2153 9.81429 11.918 9.38346 12.7465 9.06146C13.548 8.75001 14.4639 8.53699 15.805 8.47582ZM21 10.6703C24.3643 10.6703 24.7629 10.6831 26.0915 10.7437C27.32 10.7997 27.9871 11.005 28.4311 11.1776C29.0193 11.4061 29.439 11.6792 29.8799 12.1201C30.3208 12.561 30.5938 12.9807 30.8224 13.5689C30.995 14.0129 31.2002 14.68 31.2563 15.9085C31.3169 17.2371 31.3297 17.6356 31.3297 20.9999C31.3297 24.3643 31.3169 24.7628 31.2563 26.0914C31.2002 27.3199 30.995 27.9871 30.8224 28.431C30.5938 29.0192 30.3208 29.4389 29.8799 29.8798C29.439 30.3207 29.0193 30.5938 28.4311 30.8223C27.9871 30.9949 27.32 31.2002 26.0915 31.2562C24.7631 31.3168 24.3646 31.3297 21 31.3297C17.6354 31.3297 17.237 31.3168 15.9085 31.2562C14.68 31.2002 14.0129 30.9949 13.5689 30.8223C12.9807 30.5938 12.561 30.3207 12.1201 29.8798C11.6792 29.4389 11.4061 29.0192 11.1776 28.431C11.005 27.9871 10.7998 27.3199 10.7437 26.0914C10.6831 24.7628 10.6703 24.3643 10.6703 20.9999C10.6703 17.6356 10.6831 17.2371 10.7437 15.9085C10.7998 14.68 11.005 14.0129 11.1776 13.5689C11.4061 12.9807 11.6792 12.561 12.1201 12.1201C12.561 11.6792 12.9807 11.4061 13.5689 11.1776C14.0129 11.005 14.68 10.7997 15.9085 10.7437C17.2371 10.6831 17.6357 10.6703 21 10.6703Z"
            fill="#FE610A"
          />
        </svg>
      </a>
    </div>
  );
}

export default FixedSocial;
