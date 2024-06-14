function Page1Animation() {
  var tl = gsap.timeline();
  tl.from("nav h1, nav h4, nav button", {
    y: -10,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger: 0.1,
  });
  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.3,
  });
  tl.from(".center-part1 p", {
    x: -200,
    opacity: 0,
    duration: 0.2,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.5,
    duration: 0.15,
  });
}
function Page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(".elem", {
    opacity: 0,
    y:300,
    delay:1,
    stagger: {
      each: 0.5,
      amount: 4,
    },
    duration: 5,
  });
}
Page1Animation();
Page2Animation();
