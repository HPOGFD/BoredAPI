// script.js
document.getElementById("get-activity").addEventListener("click", function() {
  const button = document.getElementById("get-activity");
  const activityElement = document.getElementById("activity");
  const titleElement = document.getElementById("title");
  const mainElement = document.querySelector("main");

  // Disable button and show loading state
  button.disabled = true;
  button.textContent = "Loading...";
  activityElement.textContent = "Loading...";

  // Fetch activity from the API
  fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
          // Update activity and title
          activityElement.textContent = data.activity;
          titleElement.textContent = "🦾 HappyBot 🦿";

          // Toggle fun mode
          mainElement.classList.toggle("fun");

          // Change background color
          mainElement.style.backgroundColor = getRandomColor();
      })
      .catch(error => {
          // Display error message
          activityElement.textContent = "Oops! Something went wrong. Try again!";
          console.error("Error fetching activity:", error);
      })
      .finally(() => {
          // Re-enable button and reset text
          button.disabled = false;
          button.textContent = "Get unbored";
      });
});

// Generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
