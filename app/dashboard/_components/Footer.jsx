import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-zinc-5 text-center text-surface dark:bg-neutral-700 dark:text-white pt-20">
      <div className="container pt-20">
        {/* Social media icons container */}
        <div className="mb-6 flex justify-center space-x-2">
          {/* Facebook Icon */}

          {/* Twitter Icon */}
          <a
            href="https://twitter.com/radhikaas25"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://github.com/radhikaa25"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .296c-6.629 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.256c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.746.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.832 2.809 1.302 3.495.995.108-.776.42-1.302.763-1.601-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.467-2.381 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.982-.399 3.004-.404 1.022.005 2.047.138 3.006.404 2.291-1.553 3.298-1.23 3.298-1.23.656 1.653.244 2.874.12 3.176.772.841 1.233 1.912 1.233 3.222 0 4.609-2.806 5.628-5.479 5.921.43.372.815 1.103.815 2.222v3.293c0 .321.192.694.801.576 4.767-1.588 8.202-6.086 8.202-11.387 0-6.627-5.373-12-12-12z" />
              </svg>
            </span>
          </a>


          {/* LinkedIn Icon */}
          <a
            href="http://www.radhika.com/radhikaa._.25"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </a>

          {/* GitHub Icon */}
          <a
            href="http://www.linkedin.com/in/radhika-sharma-30403623b"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.9V329.6c0-28.2-10.1-47.4-35.3-47.4-19.3 0-30.8 12.9-35.9 25.3-1.8 4.3-2.3 10.2-2.3 16.1v224h-92.9V148.9h92.9v50.3c12.4-19 34.5-46.2 84.4-46.2 61.6 0 108.4 40.4 108.4 127.3V448z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Footer content */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left Side */}
          <p className="text-sm">
            © {new Date().getFullYear()} Code-Master. All rights reserved.
          </p>

          {/* Right Side */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-sm flex items-center">
              Made  by Radhika
            </p>
            <a
              href="https://twitter.com/radhikaas25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
            </a>
            <a
              href="http://www.linkedin.com/in/radhika-sharma-30403623b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
