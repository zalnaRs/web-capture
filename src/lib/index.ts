let recordedChunks = [];
let startTime: Number;

let mediaRecorder: MediaRecorder;

const startRecording = async (stream: MediaStream) => {
	startTime = new Date().getTime();

	mediaRecorder = new MediaRecorder(stream);

	mediaRecorder.ondataavailable = (ev) => {
		if (ev.data.size > 0) {
			recordedChunks.push(ev.data);
		}
	};

	mediaRecorder.onstop = () => {
		const url = URL.createObjectURL(new Blob(recordedChunks, { type: mediaRecorder.mimeType }));

		mediaRecorder.stop();

		const a = document.createElement('a');
		a.download = 'video-stream.webm';
		a.href = url;
		a.style.display = 'none';
		document.body.append(a);
		a.click();
		a.remove();

		window.URL.revokeObjectURL(url);
		mediaRecorder = undefined;
		recordedChunks = [];
	};

	mediaRecorder.start();
};

const stopRecording = async () => {
	mediaRecorder.stop();
};

const selectSource = async (): Promise<MediaStream> => {
	// TODO: configurable settings
	const stream = await navigator.mediaDevices.getDisplayMedia({
		video: true,
		audio: true,
	});

	return stream;
};

const RecordingAPI = {
	selectSource,
	startRecording,
	stopRecording,
	properties: {
		startTime,
	},
};

export default RecordingAPI;
