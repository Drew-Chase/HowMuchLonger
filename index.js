let progress = document.querySelector(".circular-progress").style;
let timestamp = document.querySelector("#content");
progress.setProperty('--progress', 0);
timestamp.innerText = "00:00:00.000";
let now = new Date();
const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0, 0);
const isFriday = now.getDay() === 5;
const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, isFriday ? 0 : 30, 0, 0);
const timer = setInterval(() => {
    now = new Date();
    if (now > endTime) {
        clearInterval(timer);
        timestamp.innerText = "GO HOME!";
        return;
    }
    const diff = endTime.getTime() - now.getTime();
    let duration = endTime.getTime() - startTime.getTime();
    let elapsed = now.getTime() - startTime.getTime();
    let progressValue = (elapsed / duration) * 100;
    progress.setProperty('--progress', progressValue);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    const milliseconds = diff % 1000;
    timestamp.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}, 100);

