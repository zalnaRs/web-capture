let mediaRecorder;
const recordedChunks = [];

const startButton = document.querySelector("#start_button");
const codecsSelect = document.querySelector("#codecs_select");

let selectedMimeType;

window.onload = () => {
  const supportedCodecs = getAvailableCodecs();

  for (let i = 0; i < supportedCodecs.length; i++) {
    const option = document.createElement("option");
    if (i == 0) option.selected = true;
    option.textContent = supportedCodecs[i];
    codecsSelect.append(option);
  }

  selectedMimeType = supportedCodecs[0];
  codecsSelect.onchange = (e) => {
    selectedMimeType = e.target.value;
  };

  startButton.onclick = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") stopRecording();
    else startRecording();
  };
};

const getAvailableCodecs = () => {
  const mimeTypes = [
    "video/webm",
    "video/webm; codecs=vp8",
    "video/webm; codecs=vp9",
    'video/webm; codecs="h264"',
    'video/mp4; codecs="avc1.42002A"',
    'video/mp4; codecs="avc1.640028"',
    "video/x-matroska",
  ];

  const availableCodecs = [];

  mimeTypes.forEach((mimeType) => {
    if (MediaRecorder.isTypeSupported(mimeType)) {
      availableCodecs.push(mimeType);
    }
  });

  return availableCodecs;
};

const downloadVideo = async () => {
  const blob = new Blob(recordedChunks, { type: mediaRecorder.mimeType });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style = "display: none;";
  a.href = url;
  a.download = "screen-capture.webm";
  document.body.append(a);
  a.click();

  window.URL.revokeObjectURL(url);
  recordedChunks.length = 0;
};

const stopRecording = async () => {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    startButton.textContent = "Start";
  }
};

const startRecording = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: {
      frameRate: 60,
    },
    audio: true,
  });

  mediaRecorder = new MediaRecorder(stream, {
    mimeType: selectedMimeType,
    videoBitsPerSecond:
      parseInt(document.querySelector("#bitrate_range").value) * 1000,
  });

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    downloadVideo();
  };

  mediaRecorder.start();
  startButton.textContent = "Stop";
};
