import { Settings } from '../types';

let recordedChunks = [];
let startTime: Number;

let mediaRecorder: MediaRecorder;

const startRecording = async (stream: MediaStream, settings: Settings) => {
	startTime = new Date().getTime();

	mediaRecorder = new MediaRecorder(stream, {
		videoBitsPerSecond: settings.$videoBitrate,
		audioBitsPerSecond: settings.$audioBitrate,
		mimeType: settings.$mimeType,
	});

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

const selectSource = async (settings: Settings): Promise<MediaStream> => {
	// TODO: configurable settings
	const stream = await navigator.mediaDevices.getDisplayMedia({
		video: {
			frameRate: settings.$fps,
		},
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
