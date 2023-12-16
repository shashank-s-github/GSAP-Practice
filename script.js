var tl = gsap.timeline()

tl.from("#nav img, #nav h3, #nav h4, #nav button", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
})

tl.from("#main h1", {
  y: 200,
  opacity: 0,
  stagger: 0.3
})

tl.from("#main #left-image", {
  x: -100,
  scale: 0,
  // stagger: 0.3
})

tl.from("#main #top-image", {
  x: 100,
  scale: 0,
  // stagger: 0.3
})

tl.from("#main #bottom-image", {
  x: -100,
  scale: 0,
  // stagger: 0.3
})

tl.from("#main #right-image", {
  x: 100,
  scale: 0,
  // stagger: 0.3
})

tl.from("#main h5", {
  scale: 0,
  opacity: 0
})

tl.to("#main h5", {
  y: 40,
  repeat: -1,
  duration: 1,
  yoyo: true
})