let cookies = 0;
let clickPower = 1;
let upgradeCost = 50;

const cookie = document.getElementById('cookie');
const cookieCount = document.getElementById('cookie-count');
const upgradeBtn = document.getElementById('upgrade');

cookie.addEventListener('click', () => {
  cookies += clickPower;
  cookieCount.textContent = cookies;
});

upgradeBtn.addEventListener('click', () => {
  if (cookies >= upgradeCost) {
    cookies -= upgradeCost;
    clickPower += 1;
    upgradeCost = Math.floor(upgradeCost * 1.5);
    upgradeBtn.textContent = `Upgrade Click (Cost: ${upgradeCost})`;
    cookieCount.textContent = cookies;
  } else {
    alert("Not enough cookies!");
  }
});
