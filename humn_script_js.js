function generateRitual() {
  const input = document.getElementById("prompt").value.toLowerCase();
  const ritualInfo = document.getElementById("ritualInfo");
  const player = document.getElementById("player");
  const downloadLink = document.getElementById("downloadLink");

  let audioFile = "";
  let ritualLabel = "";

  if (input.includes("focus") || input.includes("study")) {
    audioFile = "audio/coverless-book-lofi-186307.mp3";
    ritualLabel = "Focus Ritual: Coverless Book Lofi";
  } else if (input.includes("dream") || input.includes("manifest")) {
    audioFile = "audio/day-dream-lofi-music-365925.mp3";
    ritualLabel = "Dream Ritual: Day Dream Lofi";
  } else if (input.includes("calm") || input.includes("relax") || input.includes("unwind")) {
    audioFile = "audio/embrace-364091.mp3";
    ritualLabel = "Calm Ritual: Embrace";
  } else if (input.includes("background") || input.includes("chill")) {
    audioFile = "audio/lofi-background-music-314199.mp3";
    ritualLabel = "Chill Ritual: Lofi Background Music";
  } else if (input.includes("night") || input.includes("sleep")) {
    audioFile = "audio/quiet-night-lofi-332744.mp3";
    ritualLabel = "Night Ritual: Quiet Night Lofi";
  } else if (input.includes("time") || input.includes("run")) {
    audioFile = "audio/runnin-out-of-time-lofi-pop-261578.mp3";
    ritualLabel = "Flow Ritual: Runnin Out of Time Lofi Pop";
  } else {
    audioFile = "audio/lofi-background-music-326931.mp3";
    ritualLabel = "Default Ritual: Lofi Background";
  }

  ritualInfo.innerText = ritualLabel;
  player.src = audioFile;
  downloadLink.href = audioFile;
  downloadLink.style.display = "inline-block";
}
