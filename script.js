let cookies = 0;
let clickPower = 1;
let clickUpgradeCost = 50;

let autoClickers = 0;
let autoClickerCost = 100;

// Load saved data (if any)
window.onload = () => {
  const savedData = JSON.parse(localStorage.getItem("cookieSave"));
  if (savedData) {
    cookies = savedData.cookies;
    clickPower = savedData.clickPower;
    clickUpgradeCost = savedData.clickUpgradeCost;
    autoClickers = savedData.autoClickers;
    autoClickerCost = savedData.autoClickerCost;
  }
  updateDisplay();
};

// HTML elements
const cookie = document.getElementById('cookie');
const cookieCount = document.getElementById('cookie-count');
const clickUpgradeBtn = document.getElementById('click-upgrade');
const autoClickerBtn = document.getElementById('auto-clicker');
const autoCount = document.getElementById('auto-count');

// Cookie clicking
cookie.addEventListener('click', () => {
  cookies += clickPower;
  updateDisplay();
  saveGame();
});

// Upgrade click power
clickUpgradeBtn.addEventListener('click', () => {
  if (cookies >= clickUpgradeCost) {
    cookies -= clickUpgradeCost;
    clickPower++;
    clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5);
    updateDisplay();
    saveGame();
  } else {
    alert("Not enough cookies for upgrade!");
  }
});

// Buy auto-clicker
autoClickerBtn.addEventListener('click', () => {
  if (cookies >= autoClickerCost) {
    cookies -= autoClickerCost;
    autoClickers++;
    autoClickerCost = Math.floor(autoClickerCost * 1.5);
    updateDisplay();
    saveGame();
  } else {
    alert("Not enough cookies for auto-clicker!");
  }
});

// Auto cookie generator
setInterval(() => {
  cookies += autoClickers;
  updateDisplay();
  saveGame();
}, 1000); // every second

// Update text on screen
function updateDisplay() {
  cookieCount.textContent = cookies;
  clickUpgradeBtn.textContent = `Upgrade Click (Cost: ${clickUpgradeCost})`;
  autoClickerBtn.textContent = `Buy Auto Clicker (Cost: ${autoClickerCost})`;
  autoCount.textContent = autoClickers;
}

// Save game
function saveGame() {
  const saveData = {
    cookies,
    clickPower,
    clickUpgradeCost,
    autoClickers,
    autoClickerCost
  };
  localStorage.setItem("cookieSave", JSON.stringify(saveData));
}
