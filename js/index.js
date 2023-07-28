// scroll reveal library

window.sr = new ScrollReveal({ reset: true });

sr.reveal(".section-container", {
  duration: 2000,
  delay: 300,
  distance: "20em",
  origin: "top",
});

sr.reveal(".texts", {
  delay: 600,
  duration: 2000,
  distance: "30em",
  origin: "left",
});

sr.reveal(".card1", {
  rotate: { x: 20, y: 0, z: 10 },
  duration: 2000,
  delay: 600,
});

sr.reveal(".card-services", {
  rotate: { x: 50, y: 25, z: 0 },
  duration: 2000,
  delay: 600,
});

sr.reveal(".card-2", {
  duration: 2000,
  delay: 300,
  distance: "20em",
  origin: "bottom",
});

sr.reveal(".img-note", {
  duration: 2000,
  delay: 600,
  distance: "10em",
  origin: "top",
});

sr.reveal(".social-buttons", {
  duration: 2000,
  distance: "100em",
  origin: "bottom",
});
