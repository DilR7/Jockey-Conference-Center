ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1800,
});

ScrollReveal().reveal(".desc, .form, .content1 ",{ origin: "top" });
ScrollReveal().reveal(".card, .price1 ", {
  origin: "bottom",
});
ScrollReveal().reveal(".gambar1, .text2, .img-2l, .left-3, .text4, .box4 h3", {
  origin: "left",
});
ScrollReveal().reveal(".text1, .gambar2, .right2, .right-3, .launch-time", {
  origin: "right",
});
