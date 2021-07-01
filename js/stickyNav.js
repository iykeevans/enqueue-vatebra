const navigation = document.getElementById("navigation");

document.addEventListener("scroll", (event) => {
  if (window.scrollY > 0) {
    navigation.classList.add("nav--sticky");
  } else {
    navigation.classList.remove("nav--sticky");
  }
});
