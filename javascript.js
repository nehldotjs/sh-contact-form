// Select the submit button and the form from the DOM
const submitButton = document.getElementById("submitBtn");
const form = document.getElementById("form");
const name =document.getElementById("nameInput")
const email =document.getElementById("emailInput")
const phone =document.getElementById("phoneInput")
const gender =document.getElementById("genderInput")

// Add an event listener to the form that triggers when it's submitted
form.addEventListener("submit", async (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Define a function that performs an action and returns a promise
  async function performAction() {
    // Perform the action here and wait for it to complete
    const result = await someAction(console.log("MSSG FROM CONSOLE"));

    // Return a resolved promise with the result
    return Promise.resolve("Action completed successfully!");
  }

  try {
    // Call the performAction function and wait for it to complete
    const result = await performAction();

    // Show an alert with the result and log it to the console
    alert(result);
    console.log(result);
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
});

// Define a helper function that performs an action and returns a promise
async function someAction() {
  // Perform the action here and wait for it to complete
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Action completed successfully!");
    }, 1000);
  });

  // Return a resolved promise with the result
  return Promise.resolve(result);
}
