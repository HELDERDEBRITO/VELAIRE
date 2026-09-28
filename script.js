/* =========================================================
  VELAIRE V7
  INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PROJECT DATABASE
  ======================================================= */

  const projects = [

    {
      code: "PROJECT NO. 01",
      type: "CONCEPT PROJECT",
      location: "MONACO",
      coordinates: "43°44'N / 7°25'E",
      title: "VILLA<br>NOIR",
      description:
        "A sculptural Mediterranean residence defined by limestone planes, deep shadows and uninterrupted relationships between architecture and water.",
      image: "Images/villa-noir.jpg",
      materials: ["STONE", "GLASS", "WATER"],
      study: "01 / 06",
      spatialIdea:
        "A sequence of sheltered courtyards and horizontal planes organized around water, shadow and Mediterranean light.",
      diagram: `
        <path d="M40 120 H220 V70 H390 V110 H570 V45 H760"></path>
        <path d="M120 120 V30 H300 V70"></path>
        <path d="M390 110 V150 H610 V90"></path>
      `
    },

    {
      code: "PROJECT NO. 02",
      type: "CONCEPT PROJECT",
      location: "LAKE COMO · ITALY",
      coordinates: "45°59'N / 9°15'E",
      title: "LAKE<br>RESIDENCE",
      description:
        "A quiet architectural composition where travertine, glass and water establish a continuous dialogue between interior and landscape.",
      image: "Images/lake-residence.jpg",
      materials: ["TRAVERTINE", "GLASS", "WATER"],
      study: "02 / 06",
      spatialIdea:
        "A linear sequence extending from the mountain toward the lake, dissolving the threshold between interior and landscape.",
      diagram: `
        <path d="M40 125 H210 V80 H390 V45 H570 V85 H760"></path>
        <path d="M110 125 V45 H300"></path>
        <path d="M390 45 V140 H650"></path>
      `
    },

    {
      code: "PROJECT NO. 03",
      type: "CONCEPT PROJECT",
      location: "ST. MORITZ · SWITZERLAND",
      coordinates: "46°29'N / 9°50'E",
      title: "ALPINE<br>RETREAT",
      description:
        "A mountain residence conceived around warmth, stone and controlled views of the alpine landscape.",
      image: "Images/alpine-retreat.jpg",
      materials: ["STONE", "WOOD", "GLASS"],
      study: "03 / 06",
      spatialIdea:
        "A protected central hearth anchors a sequence of intimate spaces opening toward carefully framed alpine views.",
      diagram: `
        <path d="M40 120 H180 V80 H330 V40 H470 V80 H620 V120 H760"></path>
        <path d="M180 80 V145 H470 V40"></path>
        <path d="M620 120 V55 H760"></path>
      `
    },

    {
      code: "PROJECT NO. 04",
      type: "CONCEPT PROJECT",
      location: "MALIBU · CALIFORNIA",
      coordinates: "34°01'N / 118°41'W",
      title: "PACIFIC<br>HOUSE",
      description:
        "A horizontal composition dissolving the boundary between concrete, glass and the Pacific horizon.",
      image: "Images/pacific-house.jpg",
      materials: ["CONCRETE", "GLASS", "WATER"],
      study: "04 / 06",
      spatialIdea:
        "A continuous horizontal volume calibrated toward the Pacific horizon, with architecture extending into landscape.",
      diagram: `
        <path d="M40 120 H250 V70 H430 V45 H610 V80 H760"></path>
        <path d="M250 70 V145 H610 V80"></path>
        <path d="M430 45 V120"></path>
      `
    },

    {
  code: "PROJECT NO. 05",
  type: "CONCEPT PROJECT",
  location: "DUBAI · UAE",
  coordinates: "25°12'N / 55°16'E",
  title: "PALM<br>RESIDENCE",
  description:
    "A refined residence shaped by limestone, water and deep architectural shadows, creating a measured dialogue between structure, light and horizon.",
  image: "Images/palm-residence.jpg",
  materials: ["LIMESTONE", "GLASS", "WATER"],
  study: "05 / 06",
  spatialIdea:
    "A sequence of shaded courtyards and monumental planes organized around water, privacy and controlled views of the horizon.",
  diagram: `
    <path d="M40 120 H180 V70 H360 V40 H540 V75 H760"></path>
    <path d="M180 70 V145 H540 V75"></path>
    <path d="M360 40 V120"></path>
  `
},

    {
      code: "PROJECT NO. 06",
      type: "CONCEPT PROJECT",
      location: "ARIZONA · USA",
      coordinates: "34°02'N / 111°05'W",
      title: "DESERT<br>HOUSE",
      description:
        "A monolithic desert residence carved from stone, shadow and silence, where architecture extends into an uninterrupted relationship with landscape and horizon.",
      image: "Images/desert-house.jpg",
      materials: ["STONE", "CONCRETE", "GLASS"],
      study: "06 / 06",
      spatialIdea:
        "A sequence of monumental planes and shaded courtyards organized around silence, landscape and the changing desert light.",
      diagram: `
        <path d="M40 120 H190 V75 H360 V45 H540 V80 H760"></path>
        <path d="M190 75 V145 H540 V80"></path>
        <path d="M360 45 V120"></path>
      `
    }

  ];


  /* =======================================================
     LOADER
  ======================================================= */

  const loader =
    document.getElementById("loader");

  const loaderProgress =
    document.getElementById("loaderProgress");

  let progress = 0;

  const progressTimer = setInterval(() => {

    progress +=
      Math.floor(Math.random() * 9) + 3;

    if (progress >= 100) {

      progress = 100;

      clearInterval(progressTimer);

      loaderProgress.textContent = "100";

      setTimeout(() => {

        loader.classList.add("hide");
        document.body.classList.add("loaded");

      }, 500);

    } else {

      loaderProgress.textContent =
        String(progress).padStart(2, "0");

    }

  }, 90);


  /* =======================================================
     MENU
  ======================================================= */

  const menu =
    document.getElementById("fullscreenMenu");

  const menuToggle =
    document.getElementById("menuToggle");

  const menuLinks =
    document.querySelectorAll(".menu-link");


  function openMenu() {

    menu.classList.add("open");

    menuToggle.classList.add("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    document.body.classList.add("menu-open");

  }


  function closeMenu() {

    menu.classList.remove("open");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove("menu-open");

  }


  if (menuToggle) {

    menuToggle.addEventListener(
      "click",
      () => {

        if (menu.classList.contains("open")) {
          closeMenu();
        } else {
          openMenu();
        }

      }
    );

  }


  menuLinks.forEach(link => {

    link.addEventListener(
      "click",
      () => {
        closeMenu();
      }
    );

  });


  /* =======================================================
     MENU PROJECT PREVIEW
  ======================================================= */

  const menuPreview =
    document.getElementById("menuPreviewImage");

  const menuPreviewCode =
    document.getElementById("menuPreviewCode");

  const menuPreviewLocation =
    document.getElementById("menuPreviewLocation");

  const workLink =
    document.querySelector(".menu-link");


  if (
    workLink &&
    menuPreview &&
    menuPreviewCode &&
    menuPreviewLocation
  ) {

    workLink.addEventListener(
      "mouseenter",
      () => {

        menuPreview.style.backgroundImage =
          `url("${projects[0].image}")`;

        menuPreviewCode.textContent =
          projects[0].code;

        menuPreviewLocation.textContent =
          projects[0].location;

      }
    );

  }


  /* =======================================================
     REVEAL OBSERVER
  ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            observer.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -50px 0px"
        }
      );


    revealElements.forEach(element => {

      revealObserver.observe(element);

    });

  } else {

    revealElements.forEach(element => {

      element.classList.add("visible");

    });

  }


  /* =======================================================
     STAGGERED REVEALS
  ======================================================= */

  const groups = [
    ".global-location",
    ".service",
    ".standard-item",
    ".study-card"
  ];


  groups.forEach(selector => {

    const elements =
      document.querySelectorAll(selector);

    elements.forEach(
      (element, index) => {

        element.style.transitionDelay =
          `${index * 80}ms`;

      }
    );

  });


  /* =======================================================
     CURSOR
  ======================================================= */

  const cursor =
    document.getElementById("cursor");

  let mouseX =
    window.innerWidth / 2;

  let mouseY =
    window.innerHeight / 2;

  let cursorX = mouseX;
  let cursorY = mouseY;


  if (cursor) {

    window.addEventListener(
      "mousemove",
      event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

      }
    );


    function animateCursor() {

      cursorX +=
        (mouseX - cursorX) * 0.16;

      cursorY +=
        (mouseY - cursorY) * 0.16;

      cursor.style.left =
        `${cursorX}px`;

      cursor.style.top =
        `${cursorY}px`;

      requestAnimationFrame(
        animateCursor
      );

    }


    if (
      window.matchMedia(
        "(pointer:fine)"
      ).matches
    ) {

      animateCursor();

    } else {

      cursor.style.display =
        "none";

    }


    const interactiveElements =
      document.querySelectorAll(
        "a, button, .project-image, .material-button, .global-location, .service"
      );


    interactiveElements.forEach(
      element => {

        element.addEventListener(
          "mouseenter",
          () => {
            cursor.classList.add("active");
          }
        );

        element.addEventListener(
          "mouseleave",
          () => {
            cursor.classList.remove("active");
          }
        );

      }
    );

  }


  /* =======================================================
     MAGNETIC ELEMENTS
  ======================================================= */

  if (
    window.matchMedia(
      "(pointer:fine)"
    ).matches
  ) {

    document
      .querySelectorAll(".magnetic")
      .forEach(element => {

        element.addEventListener(
          "mousemove",
          event => {

            const rect =
              element.getBoundingClientRect();

            const x =
              event.clientX -
              rect.left -
              rect.width / 2;

            const y =
              event.clientY -
              rect.top -
              rect.height / 2;

            element.style.transform =
              `translate(${x * 0.12}px, ${y * 0.12}px)`;

          }
        );


        element.addEventListener(
          "mouseleave",
          () => {

            element.style.transform =
              "translate(0,0)";

          }
        );

      });

  }


  /* =======================================================
     HERO PARALLAX
  ======================================================= */

  const heroImage =
    document.querySelector(".hero-image");


  if (heroImage) {

    window.addEventListener(
      "scroll",
      () => {

        const scrollY =
          window.scrollY;

        if (
          scrollY <
          window.innerHeight
        ) {

          heroImage.style.transform =
            `translateY(${scrollY * 0.08}px) scale(1.02)`;

        }

      },
      {
        passive: true
      }
    );

  }


  /* =======================================================
     MATERIAL SYSTEM
  ======================================================= */

  const materialButtons =
    document.querySelectorAll(
      ".material-button"
    );

  const materialTextures =
    document.querySelectorAll(
      ".material-texture"
    );

  const materialTitle =
    document.getElementById(
      "materialTitle"
    );

  const materialDescription =
    document.getElementById(
      "materialDescription"
    );


  const materialData = {

    stone: {
      title: "STONE",
      description: "WEIGHT / PERMANENCE"
    },

    wood: {
      title: "WOOD",
      description: "WARMTH / GRAIN"
    },

    concrete: {
      title: "CONCRETE",
      description: "STRUCTURE / SILENCE"
    },

    glass: {
      title: "GLASS",
      description: "REFLECTION / TRANSPARENCY"
    },

    water: {
      title: "WATER",
      description: "MOTION / HORIZON"
    }

  };


  materialButtons.forEach(button => {

    button.addEventListener(
      "mouseenter",
      () => {

        const material =
          button.dataset.material;

        materialButtons.forEach(item => {

          item.classList.remove(
            "active"
          );

        });


        materialTextures.forEach(texture => {

          texture.classList.remove(
            "active"
          );

        });


        button.classList.add(
          "active"
        );


        const texture =
          document.querySelector(
            `.material-texture.${material}`
          );


        if (texture) {

          texture.classList.add(
            "active"
          );

        }


        if (
          materialData[material] &&
          materialTitle &&
          materialDescription
        ) {

          materialTitle.textContent =
            materialData[material].title;

          materialDescription.textContent =
            materialData[material].description;

        }

      }
    );

  });


  /* =======================================================
     PROJECT MODAL
  ======================================================= */

  const modal =
    document.getElementById(
      "projectModal"
    );

  const modalImage =
    document.getElementById(
      "modalImage"
    );

  const modalCode =
    document.getElementById(
      "modalCode"
    );

  const modalType =
    document.getElementById(
      "modalType"
    );

  const modalLocation =
    document.getElementById(
      "modalLocation"
    );

  const modalCoordinates =
    document.getElementById(
      "modalCoordinates"
    );

  const modalTitle =
    document.getElementById(
      "modalTitle"
    );

  const modalDescription =
    document.getElementById(
      "modalDescription"
    );

  const modalMaterials =
    document.getElementById(
      "modalMaterials"
    );

  const modalStudyNumber =
    document.getElementById(
      "modalStudyNumber"
    );

  const modalStudyIdea =
    document.getElementById(
      "modalStudyIdea"
    );

  const modalClose =
    document.getElementById(
      "modalClose"
    );

  const previousProject =
    document.getElementById(
      "previousProject"
    );

  const nextProject =
    document.getElementById(
      "nextProject"
    );

  const modalContent =
    document.querySelector(
      ".project-modal-content"
    );


  let currentProject = 0;


  /* =======================================================
     RENDER PROJECT
  ======================================================= */

  function renderProject(index) {

    const project =
      projects[index];

    if (!project) return;

    currentProject = index;


    const modalProgressCurrent =
      document.getElementById(
        "modalProgressCurrent"
      );

    const modalProgressBar =
      document.getElementById(
        "modalProgressBar"
      );


    if (modalProgressCurrent) {

      modalProgressCurrent.textContent =
        String(index + 1).padStart(2, "0");

    }


    if (modalProgressBar) {

      modalProgressBar.style.width =
        `${((index + 1) / projects.length) * 100}%`;

    }


    if (modal) {

      modal.dataset.project =
        String(index);

    }


    /* -------------------------------------------------------
       RESET MODAL SCROLL
    ------------------------------------------------------- */

    if (modalContent) {

      modalContent.scrollTop = 0;

    }


    /* -------------------------------------------------------
       RESET IMAGE TRANSITION
    ------------------------------------------------------- */

    if (modalImage) {

      modalImage.style.opacity = "0";

    }


    /* -------------------------------------------------------
       PRELOAD IMAGE
    ------------------------------------------------------- */

    const preload =
      new Image();


    preload.onload = () => {

      if (!modalImage) return;

      requestAnimationFrame(() => {

        modalImage.src =
          project.image;

        modalImage.alt =
          `${project.location} architectural concept`;

        requestAnimationFrame(() => {

          modalImage.style.opacity =
            "1";

        });

      });

    };


    preload.onerror = () => {

      if (!modalImage) return;

      modalImage.src =
        project.image;

      modalImage.alt =
        `${project.location} architectural concept`;

      modalImage.style.opacity =
        "1";

    };


    preload.src =
      project.image;


    /* -------------------------------------------------------
       PROJECT INFORMATION
    ------------------------------------------------------- */

    if (modalCode) {

      modalCode.textContent =
        project.code;

    }


    if (modalType) {

      modalType.textContent =
        project.type;

    }


    if (modalLocation) {

      modalLocation.textContent =
        project.location;

    }


    if (modalCoordinates) {

      modalCoordinates.textContent =
        project.coordinates;

    }


    if (modalTitle) {

      modalTitle.innerHTML =
        project.title;

    }


    if (modalDescription) {

      modalDescription.textContent =
        project.description;

    }


    /* -------------------------------------------------------
       SPATIAL STUDY
    ------------------------------------------------------- */

    if (modalStudyNumber) {

      modalStudyNumber.textContent =
        project.study;

    }


    if (modalStudyIdea) {

      modalStudyIdea.textContent =
        project.spatialIdea;

    }


    /* -------------------------------------------------------
       MATERIAL PALETTE
    ------------------------------------------------------- */

    if (modalMaterials) {

      modalMaterials.innerHTML = "";

      project.materials.forEach(
        material => {

          const tag =
            document.createElement(
              "i"
            );

          tag.textContent =
            material;

          modalMaterials.appendChild(
            tag
          );

        }
      );

    }


    /* -------------------------------------------------------
       ARCHITECTURAL DIAGRAM
    ------------------------------------------------------- */

    const modalDiagram =
      document.querySelector(
        ".modal-diagram"
      );


    if (modalDiagram) {

      modalDiagram.innerHTML =
        project.diagram;

    }

  }


  /* =======================================================
     OPEN PROJECT
  ======================================================= */

  function openProject(index) {

    if (!modal) return;

    renderProject(index);

    modal.classList.add(
      "open"
    );

    document.body.classList.add(
      "modal-open"
    );

    document.body.style.overflow =
      "hidden";


    setTimeout(() => {

      if (modalClose) {

        modalClose.focus();

      }

    }, 100);

  }


  /* =======================================================
     CLOSE PROJECT
  ======================================================= */

  function closeProject() {

    if (!modal) return;

    modal.classList.remove(
      "open"
    );

    document.body.classList.remove(
      "modal-open"
    );

    document.body.style.overflow =
      "";

  }


  /* =======================================================
     PROJECT OPEN BUTTONS
  ======================================================= */

  document
    .querySelectorAll(
      "[data-project-open]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        event => {

          event.preventDefault();

          const index =
            Number(
              button.dataset.projectOpen
            );

          if (
            Number.isInteger(index) &&
            projects[index]
          ) {

            openProject(index);

          }

        }
      );

    });


  /* =======================================================
     PROJECT IMAGE OPEN
  ======================================================= */

  document
    .querySelectorAll(
      ".project-image"
    )
    .forEach(image => {

      image.addEventListener(
        "click",
        () => {

          const project =
            image.closest(
              ".project"
            );

          if (!project) return;

          const index =
            Number(
              project.dataset.project
            );

          if (
            Number.isInteger(index) &&
            projects[index]
          ) {

            openProject(index);

          }

        }
      );

    });


  /* =======================================================
     MODAL CLOSE
  ======================================================= */

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeProject
    );

  }


  if (modal) {

    modal.addEventListener(
      "click",
      event => {

        if (
          event.target === modal
        ) {

          closeProject();

        }

      }
    );

  }


  /* =======================================================
     PROJECT NAVIGATION
  ======================================================= */

  if (previousProject) {

    previousProject.addEventListener(
      "click",
      () => {

        const newIndex =
          (
            currentProject -
            1 +
            projects.length
          ) %
          projects.length;

        renderProject(
          newIndex
        );

      }
    );

  }


  if (nextProject) {

    nextProject.addEventListener(
      "click",
      () => {

        const newIndex =
          (
            currentProject +
            1
          ) %
          projects.length;

        renderProject(
          newIndex
        );

      }
    );

  }


  /* =======================================================
     KEYBOARD
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        if (
          modal &&
          modal.classList.contains(
            "open"
          )
        ) {

          closeProject();

        }


        if (
          menu &&
          menu.classList.contains(
            "open"
          )
        ) {

          closeMenu();

        }

      }


      if (
        modal &&
        modal.classList.contains(
          "open"
        )
      ) {

        if (
          event.key === "ArrowRight" &&
          nextProject
        ) {

          event.preventDefault();

          nextProject.click();

        }


        if (
          event.key === "ArrowLeft" &&
          previousProject
        ) {

          event.preventDefault();

          previousProject.click();

        }

      }

    }
  );


  /* =======================================================
     SMOOTH INTERNAL NAVIGATION
  ======================================================= */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetID =
            link.getAttribute(
              "href"
            );


          if (
            !targetID ||
            targetID === "#" ||
            !document.querySelector(
              targetID
            )
          ) {

            return;

          }


          event.preventDefault();


          document
            .querySelector(targetID)
            .scrollIntoView({
              behavior: "smooth"
            });

        }
      );

    });


  /* =======================================================
     ACTIVE SECTION
  ======================================================= */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              document.body.dataset.section =
                entry.target.id;

            }

          });

        },
        {
          threshold: 0.35
        }
      );


    sections.forEach(section => {

      sectionObserver.observe(
        section
      );

    });

  }


  /* =======================================================
     IMAGE FALLBACK
  ======================================================= */

  document
    .querySelectorAll("img")
    .forEach(image => {

      image.addEventListener(
        "error",
        () => {

          image.style.background =
            "linear-gradient(135deg,#77736c,#d8d0c3)";

          image.style.minHeight =
            "100%";

          image.removeAttribute(
            "src"
          );

        }
      );

    });


  /* =======================================================
     PREVENT IMAGE DRAG
  ======================================================= */

  document
    .querySelectorAll("img")
    .forEach(image => {

      image.addEventListener(
        "dragstart",
        event => {

          event.preventDefault();

        }
      );

    });


  /* =======================================================
     PAGE VISIBILITY
  ======================================================= */

  document.addEventListener(
    "visibilitychange",
    () => {

      if (
        document.hidden
      ) {

        document.body.classList.add(
          "page-hidden"
        );

      } else {

        document.body.classList.remove(
          "page-hidden"
        );

      }

    }
  );


  /* =======================================================
     INITIAL PROJECT
  ======================================================= */

  renderProject(0);

});


/* =========================================================
  V11.4 — PROJECT IMAGE PARALLAX
========================================================= */

if (
  !window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches &&
  window.matchMedia(
    "(pointer:fine)"
  ).matches
) {

  document
    .querySelectorAll(".project-image")
    .forEach(image => {

      image.addEventListener(
        "mousemove",
        event => {

          const rect =
            image.getBoundingClientRect();

          const x =
            (event.clientX - rect.left) /
              rect.width -
            0.5;

          const y =
            (event.clientY - rect.top) /
              rect.height -
            0.5;

          image.style.setProperty(
            "--parallax-x",
            `${x * 6}px`
          );

          image.style.setProperty(
            "--parallax-y",
            `${y * 4}px`
          );

        }
      );


      image.addEventListener(
        "mouseleave",
        () => {

          image.style.setProperty(
            "--parallax-x",
            "0px"
          );

          image.style.setProperty(
            "--parallax-y",
            "0px"
          );

        }
      );

    });

}
