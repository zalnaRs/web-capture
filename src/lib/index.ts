let recordedChunks = [];

const startPreview = async (stream: MediaStream) => {
	const mediaRecorder = new MediaRecorder(stream);
	mediaRecorder.start();

	mediaRecorder.ondataavailable = (ev) => {
		recordedChunks.push(ev.data);
	};
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
	startPreview,
};

export default RecordingAPI;
