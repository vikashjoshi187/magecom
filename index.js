const TL = gsap.timeline();
let allHrDiv = document.getElementsByClassName("hr-div");
let animatedH2 = document.getElementsByClassName("animated-h2");
let hoverCard = document.getElementsByClassName("hover-card");
let animatedAnchors = document.getElementsByClassName("animated-anchors");
let burgerIcon =document.getElementById("burger-icon");
let smallNav =document.getElementById("small-nav");
let closeIcon =document.getElementById("close-icon");
function headingAmination() {
  TL.from(".mainheading", {
    y: "100%",
    stagger: 0.3,
    opacity: 1,
    duration: 0.6,
    delay: 0.3,
  });
  TL.from(".bg-img-txt", {
    color: "black",
  });
}

function page2Animations() {
  TL.from(".page-2-para", {
    stagger: 0.5,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
  });
}

function hrAnimation() {
  let allHrDiv = document.getElementsByClassName("hr-div");
  allHrDiv = [...allHrDiv];
  allHrDiv.forEach((element) => {
    gsap.from(element, {
      width: "0px",
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        bottom: "bottom 15%",
      },
    });
  });
}

function largeHeadingAnimation() {
  animatedH2 = [...animatedH2];
  animatedH2.forEach((element) => {
    gsap.from(element, {
      y: "100%",
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
        bottom: "bottom 15%",
      },
    });
  });
}

function hoverCardAnimation() {
  hoverCard = [...hoverCard];
  hoverCard.forEach((element) => {
    let innerChild = element.childNodes[7];
    element.addEventListener("mouseenter", () => {
      gsap.to(element.childNodes[1], {
        color: "#ff7518",
      });

      gsap.to(element.childNodes[3], {
        borderTop: "3px solid #ff7518",
      });

      gsap.to(innerChild, {
        marginTop: "0px",
      });

      gsap.to(innerChild.childNodes[1], {
        width: "100%",
      });

      gsap.to(innerChild.childNodes[5], {
        color: "whitesmoke",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element.childNodes[1], {
        color: "black",
      });

      gsap.to(element.childNodes[3], {
        borderTop: "3px solid black",
      });

      gsap.to(innerChild, {
        marginTop: "48px",
      });

      gsap.to(innerChild.childNodes[1], {
        width: "0%",
      });

      gsap.to(innerChild.childNodes[5], {
        color: "black",
      });
    });
  });
}

function anchorsAnimation() {
  console.log(animatedAnchors);
  animatedAnchors = [...animatedAnchors];

  animatedAnchors.forEach((element) => {
    console.log(element);

    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        backGround: "red",
      });
      console.log("hi");

      gsap.to(element.childNodes[1], {
        width: "100%",
      });

      gsap.to(element.childNodes[5], {
        color: "whitesmoke",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element.childNodes[1], {
        width: "0%",
      });

      gsap.to(element.childNodes[5], {
        color: "black",
      });
    });
  });
}



burgerIcon.addEventListener("click",()=>{
  gsap.to(smallNav,{
    height:"100vh"
  })
})
closeIcon.addEventListener("click",()=>{
  gsap.to(smallNav,{
    height:"0vh"
  })
})
hoverCardAnimation();
headingAmination();
page2Animations();
hrAnimation();
largeHeadingAnimation();
anchorsAnimation();
