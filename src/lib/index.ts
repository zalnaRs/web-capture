import { Settings } from '../types';
import { isFirefox } from './utils';

let recordedChunks = [];

let mediaRecorder: MediaRecorder;

const startRecording = async (stream: MediaStream, settings: Settings) => {
	console.log(settings);
	mediaRecorder = new MediaRecorder(stream, {
		videoBitsPerSecond: settings.videoBitrate,
		audioBitsPerSecond: settings.audioBitrate,
		mimeType: isFirefox ? 'video/webm' : settings.mimeType,
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

const pauseRecording = async () => {
	mediaRecorder.pause();
};

const stopRecording = async () => {
	mediaRecorder.stop();
};

const resumeRecording = async () => {
	mediaRecorder.resume();
};

const selectSource = async (settings: Settings): Promise<MediaStream> => {
	// TODO: configurable settings
	const stream = await navigator.mediaDevices.getDisplayMedia({
		video: {
			frameRate: settings.fps,
		},
		audio: {
			echoCancellation: false,
		},
	});

	return stream;
};

const RecordingAPI = {
	selectSource,
	startRecording,
	stopRecording,
	pauseRecording,
	resumeRecording,
};

export default RecordingAPI;
