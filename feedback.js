document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    alert("Thank you for taking the time to provide feedback. Unfortunately, this form is currently just a placeholder and is not in use.");
  });
});
