<template>
  <section>
    <!-- Content Page Heading -->
    <content-page-heading>
      <template v-slot:header> How to shop </template>
      <template v-slot:description>
        We are excited to offer both in-store shopping and store pickup, with
        online orders ready in under 25 minutes. Find out how online orders work
        and answers to some of your common questions below.
      </template>
    </content-page-heading>

    <!-- Background fluid container -->
    <div class="bg-white">
      <!-- Content container -->
      <div class="py-5 md:py-10 px-4 md:px-12 xl:px-32 2xl:container">
        <!-- Content box -->
        <div class="py-20">
          <!-- Text section -->
          <div class="text-left max-w-prose">
            <h2
              class="text-3xl sm:text-2xl lg:text-4xl xl:text-6xl text-gray-900"
            >
              You're just four easy steps away from enjoying your order
            </h2>
          </div>

          <!-- List of steps -->
          <ol
            class="list-none mt-20 grid gap-10 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            <!-- Step 1 -->
            <li>
              <!--<h4 class="tracking-widest text-brand-blue-500 text-base uppercase">Step 1</h4> -->
              <div
                class="w-16 p-4 mb-5 flex flex-row flex-nowrap items-center justify-center bg-brand-blue-200 rounded-full"
              >
                <svg
                  class="w-8 fill-current text-brand-blue-800"
                  xmlns:dc="http://purl.org/dc/elements/1.1/"
                  xmlns:cc="http://creativecommons.org/ns#"
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  xmlns:svg="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  viewBox="0 -1 80.12178 80"
                  version="1.1"
                  x="0px"
                  y="0px"
                >
                  <path
                    d="M 8.805571,-0.71903352 C 3.9446049,-0.71317352 0.00512318,3.2255765 1.9757719e-7,8.0865365 l 0,45.7591305 C 0.00512318,58.706627 3.9446049,62.646107 8.805571,62.651237 l 29.943749,0 0,13.44496 -14.168543,0 c -0.724535,0 -1.311424,0.58762 -1.311424,1.31142 0,0.72453 0.586889,1.31142 1.311424,1.31142 l 31.856792,0 c 0.724535,0 1.311425,-0.58689 1.311425,-1.31142 0,-0.7238 -0.58689,-1.31142 -1.311425,-1.31142 l -15.065107,0 0,-13.44496 29.943749,0 c 4.860967,-0.005 8.800448,-3.94461 8.805571,-8.80557 l 0,-45.7591305 c -0.0051,-4.86096 -3.944604,-8.79971002 -8.805571,-8.80557002 l -62.51064,0 z m 0,2.62284992 62.51064,0 c 3.413361,0.004 6.179062,2.7700901 6.182722,6.1827201 l 0,37.8301805 -74.8760842,0 0,-37.8301805 c 0.00366,-3.41263 2.7700927,-6.1783301 6.1827222,-6.1827201 z m 47.250563,5.0536601 c -3.812953,0 -6.904254,3.0912995 -6.904254,6.9042605 l 0,1.26158 -1.378858,0 c -1.475416,-0.006 -2.734903,1.06561 -2.964705,2.52346 l -3.157914,17.82868 c -0.01317,0.0761 -0.02052,0.15214 -0.02052,0.22898 0.0037,2.59223 2.104042,4.69261 4.696266,4.69627 l 19.460857,0 c 2.592222,-0.004 4.69275,-2.10404 4.695679,-4.69627 0,-0.0768 -0.0068,-0.15286 -0.01994,-0.22898 L 67.30483,17.646777 c -0.230532,-1.45785 -1.489436,-2.52932 -2.965582,-2.52346 l -1.377978,0 0,-1.26158 c 0,-3.812961 -3.09145,-6.9042605 -6.905135,-6.9042605 z m 0,2.62285 c 2.365348,0 4.282285,1.9167895 4.282285,4.2814105 l 0,1.26158 -8.563397,0 0,-1.26158 c 0,-2.364621 1.916496,-4.2814105 4.281112,-4.2814105 z M 21.350738,10.835456 c -3.162003,-0.0533 -6.270141,1.347091 -8.319466,3.964481 -3.1528223,4.02738 -2.886208,9.7547 0.625953,13.47251 1.95551,2.06309 4.672008,3.2343 7.515256,3.23942 4.834619,0 9.023706,-3.35127 10.085624,-8.06879 1.061187,-4.71679 -1.288022,-9.53979 -5.656452,-11.611661 -1.365134,-0.64723 -2.813639,-0.97171 -4.250915,-0.99596 z m -0.09059,2.621391 c 1.224768,0.0131 2.459613,0.31785 3.597987,0.93673 3.311634,1.80036 4.838203,5.73063 3.609422,9.29402 -1.228049,3.56412 -4.85145,5.71868 -8.569263,5.09588 -3.717811,-0.62281 -6.441606,-3.84092 -6.441606,-7.60996 -0.0029,-1.72424 0.574362,-3.39951 1.639207,-4.7549 1.524405,-1.94849 3.826057,-2.98683 6.164253,-2.96177 z m 26.512877,4.28961 1.378858,0 0,2.37921 c 0,0.72454 0.586889,1.31143 1.311424,1.31143 0.724533,0 1.311718,-0.58689 1.311718,-1.31143 l 0,-2.37921 8.563397,0 0,2.37921 c 0,0.72454 0.58689,1.31143 1.311425,1.31143 0.724535,0 1.311425,-0.58689 1.311425,-1.31143 l 0,-2.37921 1.377978,0 c 0.188085,-7.3e-4 0.347615,0.13588 0.376157,0.32104 0.0015,0.009 0.0029,0.0177 0.0044,0.0258 l 3.137686,17.71229 c -0.05562,1.10364 -0.965388,1.97081 -2.070485,1.97227 l -19.460857,0 c -1.105098,-10e-4 -2.015303,-0.86863 -2.070193,-1.97227 l 3.137392,-17.71229 c 0.0015,-0.008 0.0028,-0.017 0.0035,-0.0258 0.02854,-0.18516 0.188805,-0.32177 0.376159,-0.32104 z m -22.987893,0.068 c -0.292901,-0.003 -0.588507,0.0915 -0.834411,0.28908 l -4.052427,3.29777 -1.334879,-1.56327 c -0.469849,-0.55109 -1.298189,-0.6163 -1.848542,-0.14572 -0.551085,0.46985 -0.616295,1.29819 -0.145713,1.84854 l 2.166356,2.53666 c 0.46253,0.54157 1.272539,0.61471 1.825087,0.16535 l 5.045451,-4.1049 c 0.55694,-0.45814 0.639041,-1.28062 0.183829,-1.83975 -0.256058,-0.31452 -0.628166,-0.47981 -1.004751,-0.48376 z m -12.640161,15.93968 c -0.723802,0 -1.311424,0.58763 -1.311424,1.31143 0,0.72453 0.587622,1.31142 1.311424,1.31142 l 17.798781,0 c 0.724535,0 1.311424,-0.58689 1.311424,-1.31142 0,-0.7238 -0.586889,-1.31143 -1.311424,-1.31143 l -17.798781,0 z m 0,5.62069 c -0.723802,0 -1.311424,0.58762 -1.311424,1.31142 0,0.72454 0.587622,1.31143 1.311424,1.31143 l 10.491981,0 c 0.724535,0 1.311424,-0.58689 1.311424,-1.31143 0,-0.7238 -0.586889,-1.31142 -1.311424,-1.31142 l -10.491981,0 z m -9.5221192,9.16502 74.8760842,0 0,5.3058 c -0.0037,3.41336 -2.769361,6.17906 -6.182722,6.18272 l -62.51064,0 c -3.4133613,-0.004 -6.1790629,-2.77009 -6.1827222,-6.18272 l 0,-5.3058 z"
                  ></path>
                </svg>
              </div>

              <p class="text-xl text-gray-900 font-bold tracking-tight mb-4">
                <span class="sr-only">Title: </span>1. Browse
              </p>
              <p class="text-lg text-gray-500">
                Start by visiting our
                <a
                  rel="external"
                  class="text-brand-blue-700 font-medium underline hover:text-brand-blue-900 transition-all ease-in-out duration-150"
                  href="https://athenawebmenu.azurewebsites.net/"
                  >online menu</a
                >. Browse through a host of different products like dried
                flower, pre-rolls, edibles and much more.
                <!--Call the store at <a href="tel:+1613-595-1420">613-595-1420</a> for help from our knowledgeable staff.-->
              </p>
            </li>

            <li>
              <div
                class="w-16 p-4 mb-5 flex flex-row flex-nowrap items-center justify-center bg-brand-blue-200 rounded-full"
              >
                <svg
                  class="w-8 fill-current text-brand-blue-800"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  style="enable-background: new 0 0 100 100"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M50.06,46l3.33,12.44c0.18,0.67,0.79,1.11,1.45,1.11c0.13,0,0.26-0.02,0.39-0.05c0.8-0.21,1.27-1.04,1.06-1.84l-1.88-7.03   l9.01,9.01c0.29,0.29,0.68,0.44,1.06,0.44s0.77-0.15,1.06-0.44c0.59-0.59,0.59-1.54,0-2.12l-9.01-9.01l7.03,1.88   c0.8,0.22,1.62-0.26,1.84-1.06c0.21-0.8-0.26-1.62-1.06-1.84L51.9,44.16c-0.12-0.03-0.25-0.05-0.38-0.05c-0.01,0-0.01,0-0.02,0   c-0.17,0-0.34,0.04-0.5,0.1c-0.04,0.02-0.08,0.03-0.12,0.05c-0.16,0.07-0.31,0.16-0.44,0.29c-0.13,0.13-0.22,0.28-0.29,0.44   c-0.02,0.04-0.04,0.08-0.05,0.12c-0.06,0.16-0.1,0.33-0.1,0.5c0,0,0,0.01,0,0.01C50.01,45.75,50.03,45.87,50.06,46z"
                    ></path>
                    <path
                      d="M51.51,39.01c0.83,0,1.5-0.67,1.5-1.5v-4.28c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5v4.28   C50.01,38.34,50.68,39.01,51.51,39.01z"
                    ></path>
                    <path
                      d="M39.13,47.11h4.28c0.83,0,1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5h-4.28c-0.83,0-1.5,0.67-1.5,1.5S38.3,47.11,39.13,47.11z"
                    ></path>
                    <path
                      d="M44.72,50.28L41.7,53.3c-0.59,0.59-0.59,1.54,0,2.12c0.29,0.29,0.68,0.44,1.06,0.44s0.77-0.15,1.06-0.44l3.03-3.03   c0.59-0.59,0.59-1.54,0-2.12C46.26,49.69,45.31,49.69,44.72,50.28z"
                    ></path>
                    <path
                      d="M57.24,41.38c0.38,0,0.77-0.15,1.06-0.44l3.03-3.03c0.59-0.59,0.59-1.54,0-2.12c-0.59-0.59-1.54-0.59-2.12,0l-3.03,3.03   c-0.59,0.59-0.59,1.54,0,2.12C56.47,41.24,56.85,41.38,57.24,41.38z"
                    ></path>
                    <path
                      d="M44.72,40.94c0.29,0.29,0.68,0.44,1.06,0.44s0.77-0.15,1.06-0.44c0.59-0.59,0.59-1.54,0-2.12l-3.03-3.03   c-0.59-0.59-1.54-0.59-2.12,0c-0.59,0.59-0.59,1.54,0,2.12L44.72,40.94z"
                    ></path>
                    <path
                      d="M84.65,23.26c-0.29-0.34-0.71-0.54-1.15-0.54H21.36L17.98,4.75c-0.15-0.81-0.94-1.35-1.75-1.2   c-0.81,0.15-1.35,0.94-1.2,1.75l3.61,19.19c0,0,0,0,0,0l8.16,43.37c0.03,0.18,0.1,0.34,0.19,0.49c0.04,0.07,0.1,0.11,0.15,0.17   c0.06,0.07,0.11,0.15,0.18,0.21c0.08,0.06,0.17,0.1,0.26,0.15c0.06,0.03,0.11,0.08,0.18,0.1c0.16,0.06,0.33,0.09,0.51,0.09   c0,0,0,0,0.01,0h47.06c0.72,0,1.34-0.51,1.47-1.22l8.16-43.37C85.05,24.06,84.94,23.61,84.65,23.26z M74.09,66.09H29.52L27.5,55.36   l-5.58-29.64h59.77L74.09,66.09z"
                    ></path>
                    <path
                      d="M35.38,78.33c-5,0-9.07,4.07-9.07,9.07s4.07,9.07,9.07,9.07c5,0,9.07-4.07,9.07-9.07S40.38,78.33,35.38,78.33z    M35.38,93.47c-3.35,0-6.07-2.72-6.07-6.07s2.72-6.07,6.07-6.07c3.35,0,6.07,2.72,6.07,6.07S38.73,93.47,35.38,93.47z"
                    ></path>
                    <path
                      d="M67.86,78.18c-5,0-9.07,4.07-9.07,9.07s4.07,9.07,9.07,9.07c5,0,9.07-4.07,9.07-9.07S72.86,78.18,67.86,78.18z    M67.86,93.32c-3.35,0-6.07-2.72-6.07-6.07s2.72-6.07,6.07-6.07c3.35,0,6.07,2.72,6.07,6.07S71.21,93.32,67.86,93.32z"
                    ></path>
                    <path
                      d="M75.34,74.91c0.83,0,1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5H28.27c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5H75.34z"
                    ></path>
                  </g>
                </svg>
              </div>
              <p class="text-xl text-gray-900 font-bold tracking-tight mb-4">
                <span class="sr-only">Title: </span>2. Checkout
              </p>
              <p class="text-lg text-gray-500">
                Hit the checkout button on the online menu to complete your
                order. You can choose to pay online or pay at the store. We'll
                send you an email indicating that we have received your order.
              </p>
            </li>

            <li>
              <div
                class="w-16 p-4 mb-5 flex flex-row flex-nowrap items-center justify-center bg-brand-blue-200 rounded-full"
              >
                <svg
                  class="h-8 fill-current text-brand-blue-800"
                  xmlns:dc="http://purl.org/dc/elements/1.1/"
                  xmlns:cc="http://creativecommons.org/ns#"
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  xmlns:svg="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  viewBox="-7 0 80 80.14844"
                  version="1.1"
                  x="0px"
                  y="0px"
                >
                  <path
                    d="M 16.762993,0.55111238 C 12.832529,0.55586238 9.6472395,3.7409938 9.6429293,7.6714573 l 0,14.9673737 -12.3373954,7.476481 c -1.47132,0.90593 -2.3702945,2.508808 -2.3760419,4.237323 l 0,35.782273 c 0.00503,5.223622 4.23822925,9.45668 9.4618459,9.462427 l 57.2176121,0 c 5.223617,-0.0057 9.456529,-4.238805 9.461558,-9.462427 l 0,-35.782273 c -0.0057,-1.726359 -0.90227,-3.327802 -2.371436,-4.234444 L 56.680671,22.701303 c -0.04382,-0.0266 -0.08847,-0.05082 -0.134449,-0.07173 l -0.188863,-0.08778 0,-3.132929 c 0,-0.317547 -0.117137,-0.623599 -0.32907,-0.859959 L 40.297123,1.0117484 c -0.02011,-0.02223 -0.04164,-0.043985 -0.06392,-0.06479 -0.242103,-0.2528805 -0.577023,-0.3958555 -0.927611,-0.3958555 -0.04814,0 -0.09697,0.00285 -0.145101,0.00855 l -0.02217,-0.0019 c -0.0431,-0.00475 -0.08559,-0.00665 -0.12869,-0.00665 l -22.24664,0 z m 0,2.57411042 21.255111,0 0,8.6439272 c 0.0043,3.930463 3.189887,7.115899 7.120352,7.120924 l 7.736748,0 0.907174,1.011684 0,25.398288 -20.782377,12.700151 -20.782378,-12.700151 0,-37.6285887 c 0.0022,-2.509425 2.035938,-4.543356 4.54537,-4.5462345 z m 23.830093,2.072596 9.972292,11.1175652 -5.426922,0 c -2.509433,-0.0029 -4.542497,-2.0368 -4.54537,-4.546234 l 0,-6.5713312 z M 20.953672,23.028645 c -0.711233,0 -1.28749,0.576973 -1.28749,1.287497 0,0.711227 0.576257,1.287487 1.28749,1.287487 l 24.092656,0 c 0.711233,0 1.287491,-0.57626 1.287491,-1.287487 0,-0.710524 -0.576258,-1.287497 -1.287491,-1.287497 l -24.092656,0 z m 35.403687,2.498975 10.993764,6.784662 c 0.708361,0.436079 1.14153,1.207707 1.144404,2.040353 l 0,1.955708 -12.138168,7.418332 0,-18.199055 z m -46.7144297,0.121495 0,18.07756 -12.1384563,-7.418332 0,-1.955708 c 0.00216,-0.83049 0.4338807,-1.601253 1.1400857,-2.038044 L 9.6429293,25.649115 Z m 11.3107427,5.258212 c -0.711233,0 -1.28749,0.576973 -1.28749,1.287497 0,0.711227 0.576257,1.287488 1.28749,1.287488 l 24.092656,0 c 0.711233,0 1.287491,-0.576261 1.287491,-1.287488 0,-0.710524 -0.576258,-1.287497 -1.287491,-1.287497 l -24.092656,0 z m 0,7.878683 c -0.711233,0 -1.28749,0.576973 -1.28749,1.287487 0,0.711237 0.576257,1.287212 1.28749,1.287212 l 12.138457,0 c 0.711232,0 1.287203,-0.575975 1.287203,-1.287212 0,-0.710514 -0.575971,-1.287487 -1.287203,-1.287487 l -12.138457,0 z m -23.449199,0.539524 34.823856,21.281605 c 0.412371,0.252159 0.931113,0.252159 1.342767,0 l 34.824431,-21.281605 0,30.809374 c -0.0036,3.801871 -3.08471,6.883139 -6.886577,6.887443 l -57.2176121,0 c -3.80186745,-0.0048 -6.8832728,-3.085572 -6.8868649,-6.887443 l 0,-30.809374 z"
                  ></path>
                </svg>
              </div>
              <p class="text-xl text-gray-900 font-bold tracking-tight mb-4">
                <span class="sr-only">Title: </span>3. Receive email
              </p>
              <p class="text-lg text-gray-500">
                When we're done preparing up your order, we'll send you an email
                indicating that your order is ready for pickup and you can head
                to the store.
                <a
                  href="https://goo.gl/maps/rG3U2kfMMjundn8P6"
                  class="text-brand-blue-700 font-medium underline hover:text-brand-blue-900 transition-all ease-in-out duration-150"
                >
                  Need directions?</a
                >
              </p>
            </li>

            <li>
              <div
                class="w-16 p-4 mb-5 flex flex-row flex-nowrap items-center justify-center bg-brand-blue-200 rounded-full"
              >
                <svg
                  class="h-8 fill-current text-brand-blue-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  x="0px"
                  y="0px"
                >
                  <path
                    d="M58.66,34a5,5,0,0,0-4.89-4H46.62l-4.81-9.59A5,5,0,0,0,37.07,17H14.6a5,5,0,0,0-5,4.41L8.14,30.09A5,5,0,0,0,4,35v6a5,5,0,0,0,5,5h1.08a7,7,0,0,0,13.84,0H39.08a7,7,0,0,0,13.84,0h4.61a3,3,0,0,0,2.93-3.63ZM39.93,21.1a1.06,1.06,0,0,0,.06.15L44.38,30H27V19H37.07A3,3,0,0,1,39.93,21.1Zm-28.31.59a3,3,0,0,1,3-2.69H25V30H10.19ZM17,50a5,5,0,1,1,5-5A5,5,0,0,1,17,50Zm29,0a5,5,0,1,1,5-5A5,5,0,0,1,46,50Zm12.3-6.37a1,1,0,0,1-.78.37H52.92a7,7,0,0,0-13.84,0H23.92a7,7,0,0,0-13.84,0H9a3,3,0,0,1-3-3V35a3,3,0,0,1,3-3H53.77a3,3,0,0,1,2.93,2.37l1.8,8.42A1,1,0,0,1,58.3,43.63Z"
                  ></path>
                </svg>
              </div>
              <p class="text-xl text-gray-900 font-bold tracking-tight mb-4">
                <span class="sr-only">Title: </span>4. Go to the store
              </p>
              <p class="text-lg text-gray-500 mb-4">
                When you arrive, head to the front door with your valid ID and
                the credit card that the purchase was paid with.
              </p>
            </li>
          </ol>

          <!-- Text section -->
          <div class="mt-32 text-left max-w-prose">
            <h2
              class="text-3xl sm:text-2xl lg:text-4xl xl:text-6xl text-gray-900"
            >
              We're here to help
            </h2>

            <p class="mt-3 sm:mt-8 text-xl text-gray-500">
              From pre-rolls and bath bombs, to gummies and CBD oil, we have
              something for everyone! Not sure which product is right for you?
            </p>

            <p class="mt-3 sm:mt-5 text-xl text-gray-500">
              <strong>In-store:</strong> Pull up one of our comfy chairs and
              learn all about our cannabis products from one of our experts,
              we'd love to help!
            </p>

            <p class="mt-3 sm:mt-5 text-xl text-gray-500">
              <strong>Online:</strong> Need help ordering? You can
              <a
                class="text-brand-blue-700 font-medium underline hover:text-brand-blue-900 transition-all ease-in-out duration-150"
                href="mailto:hello@athenacannabis.ca"
                >email</a
              >
              or call us at <a href="tel:+16135951420">613-595-1420</a>.
            </p>

            <p class="mt-3 sm:mt-5 text-xl text-gray-500">
              Don't take it personally, but if you look under 25 years we may
              ask you for two pieces of valid ID.
            </p>
          </div>

          <!-- Ready to start searching section -->
          <div class="mt-32">
            <div class="bg-brand-blue-200 rounded-md relative overflow-hidden">
              <!-- Text portion -->
              <div class="relative py-24 pl-10 z-10 max-w-prose">
                <h2
                  class="text-3xl sm:text-3xl xl:text-4xl font-medium text-brand-blue-800"
                >
                  Ready to start searching?
                </h2>

                <a
                  rel="external"
                  href="https://athenawebmenu.azurewebsites.net/"
                  class="mt-10 md:mt-10 ml-0 py-2 px-4 md:py-3 md:px-6 inline-flex justify-center align-bottom border-2 border-brand-blue-900 shadow-sm text-xl rounded-md text-brand-blue-800 bg-none hover:bg-brand-blue-900 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150 ease-in-out"
                >
                  <span class="">Explore now</span
                  ><span class="sr-only">Click here to visit the store</span>
                  <!--<svg class="h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" x="0px" y="0px"><title>shopping, paper, bag, cart</title><g data-name="Shopping Bag"><path d="M50.051,10.64a1,1,0,0,0-1-.9H17.921a1.008,1.008,0,0,0-.99.83l-6.79,39.52a1.017,1.017,0,0,0,.88,1.17l28.7,3h.11a.892.892,0,0,0,.22-.03.743.743,0,0,0,.27-.1l5.99-3.38,6.35,1.42a1,1,0,0,0,.88-.22,1.017,1.017,0,0,0,.33-.85ZM38.921,52.16l-26.63-2.78,6.47-37.64h23.77ZM24.937,23.787a5.359,5.359,0,0,1-1.284-4.227l.616-4.71a1,1,0,0,1,1.983.259l-.617,4.71a3.356,3.356,0,1,0,6.659.835l.693-5.793a1,1,0,0,1,1.986.237l-.693,5.793a5.356,5.356,0,0,1-9.343,2.9Z"></path></g></svg>-->
                </a>
              </div>

              <!-- Background image -->
              <div class="absolute -bottom-5 -right-5 transform z-0">
                <img
                  class="h-40 sm:h-60 md:h-72 lg:h-80"
                  src="/images/how-to-shop/product-collage.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <!-- Text section -->
          <div class="mt-32 text-left max-w-prose">
            <h2 class="text-3xl sm:text-4xl xl:text-6xl text-gray-900">
              Still have questions?
            </h2>

            <p class="mt-3 sm:mt-8 text-xl text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our
              <a
                href="mailto:hello@athenacannabis.ca"
                class="underline font-medium text-brand-blue-700 hover:text-brand-blue-900"
                >customer support</a
              >
              team.
            </p>

            <div class="mt-12 lg:mt-10">
              <dl class="space-y-6">
                <!--
                <div>
                  <dt class="text-xl leading-6 font-medium text-gray-900">
                    What are your store hours?
                  </dt>
                  <dd class="mt-2 text-lg text-gray-500">
                    Store pickup available daily from 11:00 AM - 7:00 PM.
                  </dd>
                </div>
                -->

                <div>
                  <dt class="text-xl leading-6 font-medium text-gray-900">
                    How long will my order take to prepare?
                  </dt>
                  <dd class="mt-2 text-lg text-gray-500">
                    Orders placed online are ready in 25 minutes or less. (Order
                    25 minutes before close for same day pickup).
                  </dd>
                </div>

                <div>
                  <dt class="text-xl leading-6 font-medium text-gray-900">
                    What do I need to bring when I pickup my order?
                  </dt>
                  <dd class="mt-2 text-lg text-gray-500">
                    When you arrive, head to the front door with your valid ID
                    and the credit card that the purchase was paid with. We'll
                    also ask you for your order number which can be found on the
                    "Order ready" email.
                  </dd>
                </div>

                <div>
                  <dt class="text-xl leading-6 font-medium text-gray-900">
                    Can I place an order at the store?
                  </dt>
                  <dd class="mt-2 text-lg text-gray-500">
                    Yes! We are now open for in-store shopping.
                  </dd>
                </div>

                <div>
                  <dt class="text-xl leading-6 font-medium text-gray-900">
                    Can someone else pick up my order?
                  </dt>
                  <dd class="mt-2 text-lg text-gray-500">
                    Unfortunately no, the original purchaser must be present at
                    the store for pick up with valid ID and the credit card that
                    was used to purchase the items.
                  </dd>
                </div>

                <div>
                  <dt class="text-xl leading-6 font-medium text-gray-900">
                    Can I have my order delivered to my home?
                  </dt>
                  <dd class="mt-2 text-lg text-gray-500">
                    We’re currently just offering store pickup, but we plan on
                    adding home delivery in the fall.
                  </dd>
                </div>

                <div>
                  <dt class="text-xl leading-6 font-medium text-gray-900">
                    Who can place an order?
                  </dt>
                  <dd class="mt-2 text-lg text-gray-500">
                    Anyone that is at least 19 years of age may purchase
                    cannabis and cannabis accessories.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContentPageHeading from "../components/Content/PageHeading.vue";

export default {
  components: {
    ContentPageHeading,
  },
  setup() {},
};
</script>
