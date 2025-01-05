function updateClock(){

  const now = new Date();
  const hours = now.getHours().toString().padStart(2,0);
  const Minutes = now.getMinutes().toString().padStart(2,0);
  const seconds = now.getSeconds().toString().padStart(2,0);

  const timeString = (`${hours}: ${Minutes}: ${seconds}`);
  document.getElementById("clock").textContent = timeString;

}
updateClock();
setInterval(updateClock,1000);