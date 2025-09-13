const mimeTypes = [
	{
		container: 'mp4',
		video: 'H264',
		audio: 'AAC-LC',
		mimeType: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
	},
	{
		container: 'mp4',
		video: 'H264',
		audio: 'HE-AAC',
		mimeType: 'video/mp4; codecs="avc1.42E01E, mp4a.40.5"',
	},
	{
		container: 'mp4',
		video: 'H265',
		audio: 'AAC-LC',
		mimeType: 'video/mp4; codecs="hev1.1.6.L93.90, mp4a.40.2"',
	},
	{
		container: 'webm',
		video: 'VP8',
		audio: 'Vorbis',
		mimeType: 'video/webm; codecs="vp8, vorbis"',
	},
	{
		container: 'webm',
		video: 'VP8',
		audio: 'Opus',
		mimeType: 'video/webm; codecs="vp8, opus"',
	},
	{
		container: 'webm',
		video: 'VP9',
		audio: 'Opus',
		mimeType: 'video/webm; codecs="vp9, opus"',
	},
	{
		container: 'webm',
		video: 'AV1',
		audio: 'Opus',
		mimeType: 'video/webm; codecs="av1, opus"',
	},
	// {
	// 	container: 'mp4',
	// 	video: 'h264',
	// 	audio: 'aac-lc',
	// 	mimeType: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"', // Baseline profile + AAC-LC
	// },
	// {
	// 	container: 'mp4',
	// 	video: 'h264',
	// 	audio: 'aac-he',
	// 	mimeType: 'video/mp4; codecs="avc1.42E01E, mp4a.40.5"', // Baseline + AAC-HE v1
	// },
	{
		container: 'mp4',
		video: 'h265',
		audio: 'aac-lc',
		mimeType: 'video/mp4; codecs="hev1.1.6.L93.B0, mp4a.40.2"', // Main profile
	},
	// {
	//     container: "mp4",
	//     video: null,
	//     audio: "aac-lc",
	//     mimeType: "audio/mp4; codecs=\"mp4a.40.2\""
	// },
	// {
	//     container: "mp4",
	//     video: null,
	//     audio: "aac-he",
	//     mimeType: "audio/mp4; codecs=\"mp4a.40.5\""
	// },
	// {
	//     container: "webm",
	//     video: null,
	//     audio: "opus",
	//     mimeType: "audio/webm; codecs=\"opus\""
	// },
	// {
	//     container: "ogg",
	//     video: null,
	//     audio: "vorbis",
	//     mimeType: "audio/ogg; codecs=\"vorbis\""
	// }
];

export default mimeTypes;
