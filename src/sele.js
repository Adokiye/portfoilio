// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="stylesheet" href="./assets/css/reset.css" />
//         <!-- Add the slick-theme.css if you want default styling -->
//         <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
//         />
//         <!-- Add the slick-theme.css if you want default styling -->
//         <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
//         />
//         <link
//             href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
//             rel="stylesheet"
//         />
//         <link
//             href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
//             rel="stylesheet"
//             integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
//             crossorigin="anonymous"
//         />
//         <link rel="stylesheet" href="./assets/css/main.css" />
//         <link rel="stylesheet" href="./assets/css/header.css" />
//         <link rel="stylesheet" href="./assets/css/sele.css" />
//         <title>Adokiye Iruene - Sele</title>
//     </head>
//     <body>
//         <header class="header">
//             <nav class="nav container">
//                 <ul class="nav__list d-none d-md-flex">
//                     <li class="nav__item">
//                         <a
//                             href="index.html"
//                             class="nav__link active"
//                             onclick="setActive(this)"
//                         >
//                             HOME
//                         </a>
//                     </li>
//                     <li class="nav__item">
//                         <a
//                             href="index.html#contact"
//                             class="nav__link"
//                             onclick="setActive(this)"
//                         >
//                             GET IN TOUCH
//                         </a>
//                     </li>
//                     <li class="nav__item">
//                         <a
//                             href="index.html#values"
//                             class="nav__link"
//                             onclick="setActive(this)"
//                         >
//                             VALUES
//                         </a>
//                     </li>
//                     <li class="nav__item">
//                         <a
//                             href="index.html#projects"
//                             class="nav__link"
//                             onclick="setActive(this)"
//                         >
//                             PROJECTS
//                         </a>
//                     </li>
//                 </ul>
//                 <div class="nav__icon d-md-none">
//                     <a href="javascript:;" onclick="toggleNavMenu()">
//                         <svg
//                             width="36"
//                             height="36"
//                             viewBox="0 0 36 36"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M31.5 18H11.5"
//                                 stroke="white"
//                                 stroke-width="2"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                             />
//                             <path
//                                 d="M31.5 9H17.5"
//                                 stroke="white"
//                                 stroke-width="2"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                             />
//                             <path
//                                 d="M31.5 27H4.5"
//                                 stroke="white"
//                                 stroke-width="2"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                             />
//                         </svg>
//                     </a>
//                 </div>
//                 <div class="nav-mobile">
//                     <ul class="nav__list">
//                         <li class="nav__item">
//                             <a
//                                 href="index.html#"
//                                 class="nav__link active"
//                                 onclick="setActive(this)"
//                             >
//                                 HOME
//                             </a>
//                         </li>
//                         <li class="nav__item">
//                             <a
//                                 href="index.html#contact"
//                                 class="nav__link"
//                                 onclick="setActive(this)"
//                             >
//                                 GET IN TOUCH
//                             </a>
//                         </li>
//                         <li class="nav__item">
//                             <a
//                                 href="index.html#values"
//                                 class="nav__link"
//                                 onclick="setActive(this)"
//                             >
//                                 VALUES
//                             </a>
//                         </li>
//                         <li class="nav__item">
//                             <a
//                                 href="index.html#projects"
//                                 class="nav__link"
//                                 onclick="setActive(this)"
//                             >
//                                 PROJECTS
//                             </a>
//                         </li>
//                         <li class="nav__item">
//                             <a
//                                 class="nav__link nav__link--close"
//                                 onclick="closeNavMobile()"
//                             >
//                                 <svg
//                                     width="60"
//                                     height="60"
//                                     viewBox="0 0 60 60"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M45 15L15 45"
//                                         stroke="white"
//                                         stroke-width="2"
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                     />
//                                     <path
//                                         d="M15 15L45 45"
//                                         stroke="white"
//                                         stroke-width="2"
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                     />
//                                 </svg>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//         <main>
//             <div class="container">
//                 <section>
//                     <div class="row align-items-center sele-landing">
//                         <div class="col-lg-4 text-center text-lg-left mb-4">
//                             <h1 class="font-weight-normal bebas">
//                                 SELE
//                             </h1>
//                             <div class="pill__box">
//                                 <p class="pill">Laravel</p>
//                                 <p class="pill">Android</p>
//                             </div>
//                         </div>
//                         <div class="col-lg-8">
//                             <div class="sele-landing__image">
//                                 <img src="./assets/img/sele.png" alt="Sele" />
//                             </div>
//                         </div>
//                     </div>
//                     <div class="values__title">
//                         <h2 class="bebas text-center">
//                             <svg
//                                 width="50"
//                                 height="50"
//                                 viewBox="0 0 50 50"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M8.2182 34.9272L20.5455 22.5999L8.2182 10.2726"
//                                     stroke="#9038FF"
//                                     stroke-width="4.10909"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M24.6546 39.0363L41.0909 39.0363"
//                                     stroke="#9038FF"
//                                     stroke-width="4.10909"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                             Project Brief
//                         </h2>
//                     </div>
//                     <p class="sele-landing__brief">
//                         I’m an enthusiastic web developer and I have developed
//                         simple and intelligent solutions from complex
//                         requirements. I’m available for remote gigs. Let’s make
//                         something special
//                     </p>
//                 </section>

//                 <section class="carousel">
//                     <div id="carousel">
//                         <div>
//                             <img src="./assets/img/carousel1.png" alt="" />
//                         </div>
//                         <div>
//                             <img src="./assets/img/carousel2.png" alt="" />
//                         </div>
//                         <div>
//                             <img src="./assets/img/carousel3.png" alt="" />
//                         </div>
//                         <div>
//                             <img src="./assets/img/carousel2.png" alt="" />
//                         </div>
//                         <div>
//                             <img src="./assets/img/carousel1.png" alt="" />
//                         </div>
//                         <div>
//                             <img src="./assets/img/carousel3.png" alt="" />
//                         </div>
//                     </div>

//                     <div class="carousel-buttons">
//                         <a class="carousel-button previous">
//                             <svg
//                                 width="44"
//                                 height="28"
//                                 viewBox="0 0 44 28"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M42.2856 14H5.4285"
//                                     stroke="#9038FF"
//                                     stroke-width="3.42857"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M14 2L2 14L14 26"
//                                     stroke="#9038FF"
//                                     stroke-width="3.42857"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </a>
//                         <a class="carousel-button next">
//                             <svg
//                                 width="44"
//                                 height="28"
//                                 viewBox="0 0 44 28"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M1.71436 14H38.5715"
//                                     stroke="#9038FF"
//                                     stroke-width="3.42857"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M30 2L42 14L30 26"
//                                     stroke="#9038FF"
//                                     stroke-width="3.42857"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </a>
//                     </div>
//                 </section>

//                 <section class="more-projects">
//                     <div class="values__title">
//                         <h2 class="bebas text-center">
//                             <svg
//                                 width="50"
//                                 height="50"
//                                 viewBox="0 0 50 50"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M8.2182 34.9272L20.5455 22.5999L8.2182 10.2726"
//                                     stroke="#9038FF"
//                                     stroke-width="4.10909"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M24.6546 39.0363L41.0909 39.0363"
//                                     stroke="#9038FF"
//                                     stroke-width="4.10909"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                             More Projects
//                         </h2>
//                     </div>

//                     <div class="projects">
//                         <div class="project__item row move">
//                             <div class="col-5 col-md-6 project__item--box">
//                                 <h2 class="project__title">9Move</h2>
//                                 <h4 class="project__subtitle">
//                                     Ride Hailing App
//                                 </h4>
//                                 <a class="project__link" href="#">
//                                     View Work
//                                     <svg
//                                         width="30"
//                                         height="30"
//                                         viewBox="0 0 30 30"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M5.75 15H23.25"
//                                             stroke="white"
//                                             stroke-width="2"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                         />
//                                         <path
//                                             d="M16.25 6.25L25 15L16.25 23.75"
//                                             stroke="white"
//                                             stroke-width="2"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                         />
//                                     </svg>
//                                 </a>
//                             </div>
//                             <div class="project__image">
//                                 <img
//                                     src="./assets/img/nine-move.png"
//                                     alt="9Move"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section class="text-center">
//                     <h2 style="color: #555555;">
//                         Lets build something amazing together
//                     </h2>
//                     <div class="hire-me">
//                         <button class="btn btn__primary--outline w-100">
//                             Hire Me
//                             <svg
//                                 width="30"
//                                 height="30"
//                                 viewBox="0 0 30 30"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M3.75 15H21.25"
//                                     stroke="#9038FF"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M16.25 6.25L25 15L16.25 23.75"
//                                     stroke="#9038FF"
//                                     stroke-width="2"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </section>
//             </div>
//         </main>
//         <footer class="footer">
//             <div class="container">
//                 <div class="row mt-4">
//                     <div class="col-md-6 footer__link--box">
//                         <a href="twitter.com" class="footer__link">
//                             <svg
//                                 width="33"
//                                 height="28"
//                                 viewBox="0 0 33 28"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M31.3164 2.08498C30.0125 3.0047 28.5688 3.70814 27.041 4.1682C26.221 3.22532 25.1312 2.55703 23.9189 2.25372C22.7067 1.9504 21.4306 2.0267 20.2632 2.47229C19.0957 2.91788 18.0933 3.71126 17.3915 4.74513C16.6896 5.779 16.3222 7.00347 16.339 8.25295V9.61453C13.9462 9.67657 11.5752 9.14589 9.43713 8.06974C7.29908 6.99359 5.46037 5.40538 4.08474 3.44656C4.08474 3.44656 -1.36159 15.7008 10.8926 21.1471C8.0885 23.0506 4.74804 24.005 1.36157 23.8703C13.6158 30.6782 28.5932 23.8703 28.5932 8.2121C28.592 7.83283 28.5555 7.45451 28.4843 7.08199C29.8739 5.71154 30.8546 3.98127 31.3164 2.08498V2.08498Z"
//                                     stroke="white"
//                                     stroke-width="2.72316"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </a>
//                         <a href="facebook.com" class="footer__link">
//                             <svg
//                                 width="34"
//                                 height="33"
//                                 viewBox="0 0 34 33"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M24.9887 2.72314H20.9039C19.0984 2.72314 17.3668 3.4404 16.09 4.71713C14.8133 5.99387 14.096 7.72548 14.096 9.53105V13.6158H10.0113V19.0621H14.096V29.9548H19.5424V19.0621H23.6271L24.9887 13.6158H19.5424V9.53105C19.5424 9.16994 19.6858 8.82362 19.9412 8.56827C20.1965 8.31292 20.5428 8.16947 20.9039 8.16947H24.9887V2.72314Z"
//                                     stroke="white"
//                                     stroke-width="2.72316"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </a>
//                         <a href="instagram.com" class="footer__link">
//                             <svg
//                                 width="33"
//                                 height="33"
//                                 viewBox="0 0 33 33"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M23.4689 2.72314H9.85308C6.09317 2.72314 3.04517 5.77115 3.04517 9.53105V23.1469C3.04517 26.9068 6.09317 29.9548 9.85308 29.9548H23.4689C27.2288 29.9548 30.2768 26.9068 30.2768 23.1469V9.53105C30.2768 5.77115 27.2288 2.72314 23.4689 2.72314Z"
//                                     stroke="white"
//                                     stroke-width="2.72316"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M22.1074 15.4814C22.2754 16.6146 22.0819 17.7719 21.5542 18.7887C21.0266 19.8056 20.1918 20.6301 19.1686 21.1452C18.1453 21.6602 16.9857 21.8395 15.8547 21.6575C14.7237 21.4755 13.6789 20.9415 12.8688 20.1315C12.0588 19.3214 11.5248 18.2766 11.3428 17.1456C11.1608 16.0146 11.3401 14.855 11.8551 13.8317C12.3701 12.8084 13.1947 11.9736 14.2115 11.446C15.2284 10.9184 16.3857 10.7249 17.5188 10.8929C18.6747 11.0643 19.7448 11.6029 20.5711 12.4292C21.3974 13.2554 21.936 14.3256 22.1074 15.4814Z"
//                                     stroke="white"
//                                     stroke-width="2.72316"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M24.1497 8.8501H24.1638"
//                                     stroke="white"
//                                     stroke-width="2.72316"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </a>
//                     </div>
//                     <div class="d-none d-md-block col-md-6">
//                         <p class="footer__credits">
//                             <span class="mr-3">Adokiye 2019</span>
//                             <span>Designed by Inioluwa</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     </body>
//     <script
//         src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
//         integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
//         crossorigin="anonymous"
//     ></script>
//     <script
//         src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
//         integrity="sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm"
//         crossorigin="anonymous"
//     ></script>
//     <script
//         type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
//     ></script>
//     <script src="./assets/js/main.js"></script>
//     <script src="./assets/js/carousel.js"></script>
// </html>
