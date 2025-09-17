// Wait for 3 seconds (animation time), then redirect
setTimeout(() => {
  window.location.href = "mainpage.html";
}, 3200);

// Also allow click to skip
document.querySelector(".rocket").addEventListener("click", () => {
  window.location.href = "mainpage.html";
});
