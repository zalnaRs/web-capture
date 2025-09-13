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
};

export default RecordingAPI;
