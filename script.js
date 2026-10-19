document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ========================================
       MOBILE HAMBURGER
    ======================================== */

    const sidebar =
      document.getElementById(
        "sidebar"
      );


    const menuToggle =
      document.getElementById(
        "menuToggle"
      );


    if (
      sidebar &&
      menuToggle
    ) {


      function closeMobileMenu() {

        sidebar.classList.remove(
          "open"
        );


        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );


        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

      }



      menuToggle.addEventListener(
        "click",
        function () {

          const isOpen =
            sidebar.classList.toggle(
              "open"
            );


          menuToggle.setAttribute(
            "aria-expanded",
            isOpen
              ? "true"
              : "false"
          );


          menuToggle.setAttribute(
            "aria-label",
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          );

        }
      );



      const navigationLinks =
        sidebar.querySelectorAll(
          ".nav-link"
        );


      navigationLinks.forEach(
        function (link) {

          link.addEventListener(
            "click",
            closeMobileMenu
          );

        }
      );



      document.addEventListener(
        "keydown",
        function (event) {

          if (
            event.key === "Escape" &&
            sidebar.classList.contains(
              "open"
            )
          ) {

            closeMobileMenu();

          }

        }
      );



      window.addEventListener(
        "resize",
        function () {

          if (
            window.innerWidth > 760
          ) {

            closeMobileMenu();

          }

        }
      );

    }



    /* ========================================
       ABOUT CAROUSEL
    ======================================== */

    const carousel =
      document.getElementById(
        "aboutCarousel"
      );


    const carouselPrev =
      document.getElementById(
        "carouselPrev"
      );


    const carouselNext =
      document.getElementById(
        "carouselNext"
      );


    if (
      carousel &&
      carouselPrev &&
      carouselNext
    ) {


      carouselNext.addEventListener(
        "click",
        function () {

          carousel.scrollBy({

            left:
              carousel.clientWidth
              *
              0.75,

            behavior:
              "smooth"

          });

        }
      );



      carouselPrev.addEventListener(
        "click",
        function () {

          carousel.scrollBy({

            left:
              -carousel.clientWidth
              *
              0.75,

            behavior:
              "smooth"

          });

        }
      );

    }



    /* ========================================
       01
       CLICK COUNTER
    ======================================== */

    const scoreDisplay =
      document.getElementById(
        "score"
      );


    const timeDisplay =
      document.getElementById(
        "time"
      );


    const clickButton =
      document.getElementById(
        "clickButton"
      );


    const startButton =
      document.getElementById(
        "startButton"
      );


    const gameMessage =
      document.getElementById(
        "message"
      );


    if (
      scoreDisplay &&
      timeDisplay &&
      clickButton &&
      startButton &&
      gameMessage
    ) {


      let score =
        0;


      let timeLeft =
        10;


      let gameTimer =
        null;


      let gameRunning =
        false;



      clickButton.addEventListener(
        "click",
        function () {


          if (!gameRunning) {
            return;
          }


          score++;


          scoreDisplay.textContent =
            score;


          clickButton.classList.remove(
            "clicked"
          );


          void
            clickButton.offsetWidth;


          clickButton.classList.add(
            "clicked"
          );

        }
      );



      startButton.addEventListener(
        "click",
        function () {


          if (gameTimer) {

            clearInterval(
              gameTimer
            );

          }


          score =
            0;


          timeLeft =
            10;


          gameRunning =
            true;


          scoreDisplay.textContent =
            "0";


          timeDisplay.textContent =
            "10";


          gameMessage.textContent =
            "";


          clickButton.disabled =
            false;


          startButton.disabled =
            true;


          startButton.textContent =
            "Playing...";



          gameTimer =
            setInterval(
              function () {


                timeLeft--;


                timeDisplay.textContent =
                  timeLeft;



                if (
                  timeLeft <= 0
                ) {


                  clearInterval(
                    gameTimer
                  );


                  gameTimer =
                    null;


                  gameRunning =
                    false;


                  clickButton.disabled =
                    true;


                  startButton.disabled =
                    false;


                  startButton.textContent =
                    "Play Again";


                  gameMessage.textContent =
                    "You got "
                    +
                    score
                    +
                    " clicks!";

                }


              },
              1000
            );

        }
      );

    }



    /* ========================================
       02
       KINETIC TYPE LAB
    ======================================== */

    const typeOutput =
      document.getElementById(
        "typeOutput"
      );


    const typeInput =
      document.getElementById(
        "typeInput"
      );


    const stretchSlider =
      document.getElementById(
        "stretchSlider"
      );


    const rotateSlider =
      document.getElementById(
        "rotateSlider"
      );


    const spacingSlider =
      document.getElementById(
        "spacingSlider"
      );


    const stretchValue =
      document.getElementById(
        "stretchValue"
      );


    const rotateValue =
      document.getElementById(
        "rotateValue"
      );


    const spacingValue =
      document.getElementById(
        "spacingValue"
      );


    const typeRandomize =
      document.getElementById(
        "typeRandomize"
      );


    if (
      typeOutput &&
      typeInput &&
      stretchSlider &&
      rotateSlider &&
      spacingSlider &&
      stretchValue &&
      rotateValue &&
      spacingValue &&
      typeRandomize
    ) {


      function updateType() {


        const stretch =
          Number(
            stretchSlider.value
          );


        const rotation =
          Number(
            rotateSlider.value
          );


        const spacing =
          Number(
            spacingSlider.value
          );


        typeOutput.style.transform =
          "scaleX("
          +
          stretch / 100
          +
          ") rotate("
          +
          rotation
          +
          "deg)";


        typeOutput.style.letterSpacing =
          spacing
          +
          "px";


        stretchValue.textContent =
          stretch
          +
          "%";


        rotateValue.textContent =
          rotation
          +
          "°";


        spacingValue.textContent =
          spacing
          +
          "px";

      }



      typeInput.addEventListener(
        "input",
        function () {


          const text =
            typeInput.value.trim();


          typeOutput.textContent =
            text
              ? text.toUpperCase()
              : "PLAY";

        }
      );



      stretchSlider.addEventListener(
        "input",
        updateType
      );


      rotateSlider.addEventListener(
        "input",
        updateType
      );


      spacingSlider.addEventListener(
        "input",
        updateType
      );



      typeRandomize.addEventListener(
        "click",
        function () {


          stretchSlider.value =
            Math.floor(
              Math.random()
              *
              101
            )
            +
            60;


          rotateSlider.value =
            Math.floor(
              Math.random()
              *
              31
            )
            -
            15;


          spacingSlider.value =
            Math.floor(
              Math.random()
              *
              29
            )
            -
            8;


          updateType();

        }
      );


      updateType();

    }



    /* ========================================
       03
       DIMENSION LAB
    ======================================== */

    const dimensionLab =
      document.querySelector(
        ".dimension-lab"
      );


    const dimensionStage =
      document.getElementById(
        "dimensionStage"
      );


    const dimensionCube =
      document.getElementById(
        "dimensionCube"
      );


    const dimensionRandomize =
      document.getElementById(
        "dimensionRandomize"
      );


    if (
      dimensionLab &&
      dimensionStage &&
      dimensionCube &&
      dimensionRandomize
    ) {


      let rotateX =
        -18;


      let rotateY =
        28;


      let dragging =
        false;


      let startX =
        0;


      let startY =
        0;


      let startRotateX =
        rotateX;


      let startRotateY =
        rotateY;



      function updateCube() {

        dimensionCube.style.transform =
          "rotateX("
          +
          rotateX
          +
          "deg) rotateY("
          +
          rotateY
          +
          "deg)";

      }



      dimensionStage.addEventListener(
        "pointerdown",
        function (event) {


          dragging =
            true;


          startX =
            event.clientX;


          startY =
            event.clientY;


          startRotateX =
            rotateX;


          startRotateY =
            rotateY;


          dimensionStage.setPointerCapture(
            event.pointerId
          );

        }
      );



      dimensionStage.addEventListener(
        "pointermove",
        function (event) {


          if (!dragging) {
            return;
          }


          const movementX =
            event.clientX
            -
            startX;


          const movementY =
            event.clientY
            -
            startY;


          rotateY =
            startRotateY
            +
            movementX
            *
            0.55;


          rotateX =
            startRotateX
            -
            movementY
            *
            0.55;


          updateCube();

        }
      );



      function stopCubeDragging() {

        dragging =
          false;

      }


      dimensionStage.addEventListener(
        "pointerup",
        stopCubeDragging
      );


      dimensionStage.addEventListener(
        "pointercancel",
        stopCubeDragging
      );



      dimensionStage.addEventListener(
        "dblclick",
        function () {


          rotateX =
            -18;


          rotateY =
            28;


          updateCube();

        }
      );



      const cubePalettes = [

        [
          "#FF6B35",
          "#6677FF",
          "#D9D9E2",
          "#FFB4D5",
          "#8AF5FF",
          "#FFE66D"
        ],

        [
          "#C7FF51",
          "#AFA0FF",
          "#FFFFFF",
          "#FF6B9A",
          "#5CE1E6",
          "#FFB347"
        ],

        [
          "#FF595E",
          "#1982C4",
          "#E8E8E8",
          "#FFCA3A",
          "#8AC926",
          "#6A4C93"
        ],

        [
          "#FF8A00",
          "#00C2FF",
          "#ECECEC",
          "#FF4FB3",
          "#B6FF5C",
          "#9B8CFF"
        ]

      ];



      const cubeProperties = [

        "--cube-front",
        "--cube-back",
        "--cube-right",
        "--cube-left",
        "--cube-top",
        "--cube-bottom"

      ];



      dimensionRandomize.addEventListener(
        "click",
        function () {


          const palette =
            cubePalettes[
              Math.floor(
                Math.random()
                *
                cubePalettes.length
              )
            ];


          cubeProperties.forEach(
            function (
              property,
              index
            ) {


              dimensionLab.style.setProperty(
                property,
                palette[index]
              );

            }
          );

        }
      );


      updateCube();

    }



    /* ========================================
       04
       POSTER LAB
    ======================================== */

    const posterCard =
      document.getElementById(
        "posterCard"
      );


    const posterHeadline =
      document.getElementById(
        "posterHeadline"
      );


    const posterInput =
      document.getElementById(
        "posterInput"
      );


    const posterGenerate =
      document.getElementById(
        "posterGenerate"
      );


    const posterShapeOne =
      document.getElementById(
        "posterShapeOne"
      );


    const posterShapeTwo =
      document.getElementById(
        "posterShapeTwo"
      );


    const posterShapeThree =
      document.getElementById(
        "posterShapeThree"
      );


    if (
      posterCard &&
      posterHeadline &&
      posterInput &&
      posterGenerate &&
      posterShapeOne &&
      posterShapeTwo &&
      posterShapeThree
    ) {


      const posterPalettes = [

        {
          bg: "#F04A2E",
          ink: "#111111",
          accent: "#F6EEDB",
          one: "#2447FF",
          two: "#F7D84C"
        },

        {
          bg: "#1E2BFF",
          ink: "#FFFFFF",
          accent: "#FF8ACD",
          one: "#C7FF51",
          two: "#FF6534"
        },

        {
          bg: "#F9F2DE",
          ink: "#111111",
          accent: "#111111",
          one: "#FF5B87",
          two: "#00B8A9"
        },

        {
          bg: "#B7F15B",
          ink: "#17231B",
          accent: "#FFFFFF",
          one: "#834BFF",
          two: "#FF783E"
        },

        {
          bg: "#FF9DD6",
          ink: "#171719",
          accent: "#FFFFFF",
          one: "#1822D9",
          two: "#C7FF51"
        }

      ];



      posterInput.addEventListener(
        "input",
        function () {


          const text =
            posterInput.value.trim();


          posterHeadline.textContent =
            text
              ? text.toUpperCase()
              : "AFTER HOURS";

        }
      );



      posterGenerate.addEventListener(
        "click",
        function () {


          const palette =
            posterPalettes[
              Math.floor(
                Math.random()
                *
                posterPalettes.length
              )
            ];


          posterCard.style.setProperty(
            "--poster-bg",
            palette.bg
          );


          posterCard.style.setProperty(
            "--poster-ink",
            palette.ink
          );


          posterCard.style.setProperty(
            "--poster-accent",
            palette.accent
          );


          posterCard.style.setProperty(
            "--poster-shape-one",
            palette.one
          );


          posterCard.style.setProperty(
            "--poster-shape-two",
            palette.two
          );



          const rotation =
            Math.floor(
              Math.random()
              *
              11
            )
            -
            5;


          const spacing =
            Math.floor(
              Math.random()
              *
              5
            )
            -
            3;


          const size =
            Math.floor(
              Math.random()
              *
              14
            )
            +
            40;



          posterHeadline.style.transform =
            "rotate("
            +
            rotation
            +
            "deg)";


          posterHeadline.style.letterSpacing =
            spacing
            +
            "px";


          posterHeadline.style.fontSize =
            size
            +
            "px";



          posterShapeOne.style.top =
            Math.floor(
              Math.random()
              *
              55
            )
            +
            "%";


          posterShapeOne.style.right =
            (
              Math.floor(
                Math.random()
                *
                45
              )
              -
              25
            )
            +
            "px";



          posterShapeTwo.style.left =
            (
              Math.floor(
                Math.random()
                *
                45
              )
              -
              25
            )
            +
            "px";


          posterShapeTwo.style.bottom =
            Math.floor(
              Math.random()
              *
              75
            )
            +
            "px";


          posterShapeTwo.style.transform =
            "rotate("
            +
            Math.floor(
              Math.random()
              *
              90
            )
            +
            "deg)";


          posterShapeThree.style.transform =
            "rotate("
            +
            (
              Math.floor(
                Math.random()
                *
                40
              )
              -
              20
            )
            +
            "deg)";

        }
      );

    }



    /* ========================================
       05
       CURSOR PLAYGROUND
    ======================================== */

    const cursorStage =
      document.getElementById(
        "cursorStage"
      );


    const cursorOrb =
      document.getElementById(
        "cursorOrb"
      );


    const cursorAdd =
      document.getElementById(
        "cursorAdd"
      );


    const cursorClear =
      document.getElementById(
        "cursorClear"
      );


    if (
      cursorStage &&
      cursorOrb &&
      cursorAdd &&
      cursorClear
    ) {


      const cursorColors = [

        "#55F7FF",
        "#FF5BC8",
        "#C7FF51",
        "#FF7A3D",
        "#A68CFF",
        "#FFE65A"

      ];


      const cursorShapes = [

        "circle",
        "square",
        "blob"

      ];



      function createCursorShape(
        x,
        y
      ) {


        const shape =
          document.createElement(
            "span"
          );


        const shapeType =
          cursorShapes[
            Math.floor(
              Math.random()
              *
              cursorShapes.length
            )
          ];


        const color =
          cursorColors[
            Math.floor(
              Math.random()
              *
              cursorColors.length
            )
          ];


        const size =
          Math.floor(
            Math.random()
            *
            45
          )
          +
          22;



        shape.className =
          "cursor-drop "
          +
          shapeType;


        shape.style.left =
          x
          +
          "px";


        shape.style.top =
          y
          +
          "px";


        shape.style.width =
          size
          +
          "px";


        shape.style.height =
          size
          +
          "px";


        shape.style.background =
          color;


        cursorStage.appendChild(
          shape
        );



        const allShapes =
          cursorStage.querySelectorAll(
            ".cursor-drop"
          );


        if (
          allShapes.length > 35
        ) {

          allShapes[0].remove();

        }

      }



      /* FOLLOW MOUSE */

      cursorStage.addEventListener(
        "pointermove",
        function (event) {


          const rectangle =
            cursorStage.getBoundingClientRect();


          const x =
            event.clientX
            -
            rectangle.left;


          const y =
            event.clientY
            -
            rectangle.top;


          cursorOrb.style.left =
            x
            +
            "px";


          cursorOrb.style.top =
            y
            +
            "px";


          cursorOrb.style.opacity =
            "1";

        }
      );



      cursorStage.addEventListener(
        "pointerleave",
        function () {

          cursorOrb.style.opacity =
            "0";

        }
      );



      /* CLICK / TAP */

      cursorStage.addEventListener(
        "pointerdown",
        function (event) {


          const rectangle =
            cursorStage.getBoundingClientRect();


          const x =
            event.clientX
            -
            rectangle.left;


          const y =
            event.clientY
            -
            rectangle.top;


          createCursorShape(
            x,
            y
          );

        }
      );



      /* RANDOM SHAPE BUTTON */

      cursorAdd.addEventListener(
        "click",
        function () {


          const x =
            Math.random()
            *
            cursorStage.clientWidth;


          const y =
            Math.random()
            *
            cursorStage.clientHeight;


          createCursorShape(
            x,
            y
          );

        }
      );



      /* CLEAR */

      cursorClear.addEventListener(
        "click",
        function () {


          const shapes =
            cursorStage.querySelectorAll(
              ".cursor-drop"
            );


          shapes.forEach(
            function (shape) {

              shape.remove();

            }
          );

        }
      );

    }


  }
);
