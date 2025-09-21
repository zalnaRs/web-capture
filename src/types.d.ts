export interface Context {
	selectedSource?: MediaStream;
	isRecording: boolean;
	isPaused: boolean;
	previewURL?: string;
}

export interface Settings {
	videoBitrate: number;
	fps: number;
	audioBitrate: number;
	mimeType?: string;

	skipCountdown: boolean;
}
