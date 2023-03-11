// Get the DOM elements
const submitButton = document.getElementById("submitBtn");
const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const passWordInput = document.getElementById("passwordInput");
const genderInput = document.getElementById("genderInput");
const section2 = document.getElementById("section2");
const contactToggleBtn = document.getElementById("contactToggleBtn");
const toggleOffBtn = document.getElementById("toggleOffBtn");
AOS.init();
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  delay: 100
});
// Add event listeners
contactToggleBtn.addEventListener("click", () => {
  section2.classList.add("transform");
});

toggleOffBtn.addEventListener("click", () => {
  section2.classList.remove("transform");
});

// Define the someAction function
async function someAction() {
  // Perform the action here and wait for it to complete
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Action completed successfully!");
    }, 1000);
  });

  // Return a resolved promise with the result
  return Promise.resolve(result);
}

form.addEventListener("submit", async (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  try {
    // Perform the action and wait for it to complete
    const result = await someAction();

    // Show an alert with the result and log it to the console
    alert(result);
    // Reset the form inputs
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    genderInput.value = "";
    passWordInput.value = "";
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
});
