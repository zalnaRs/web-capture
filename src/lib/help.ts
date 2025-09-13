export const videoBitrateHelp = `Video Bitrate is the amount of "storage" the recorder will use for one second, bigger bitrate=better quality.
5Mbps is a good middle-ground for most video codecs and will produce completely transparent (without artifacts) video.`;

export const audioBitrateHelp = `Audio Bitrate is the amount of "storage" the recorder will use for one second, bigger bitrate=better quality.
128Kbps is a good middle-ground for most audio codecs and will produce completely transparent (without artifacts) audio.`;

export const fpsHelp = `Frame per seconds determine how "smooth" your video will be. This value should be your monitor refresh rate (most likely 60hz).
Using more FPS than your refresh rate is useless and will only wastes space. If you increase the FPS you should also increase the video bitrate.`;

export const codecHelp = `Containers (.mp4, .webm, .mkv) determine how a video file is stored.
Codecs (video: H264, H265, VP8/9, AV1, audio: Opus, Vorbis, AAC-LC, HE-AAC) determine how the video and/or audio is compressed.
Newer codecs are better quality and require less bitrate, but may require more processing power, if hardware acceleration is not avaliable.

tl;dr:
Video: H264~VP8<VP9~H265<AV1
Audio: Vorbis~AAC-LC<HE-AAC<Opus

VPx/AVx/Vorbis/Opus are not patended and they're free software, while the others are part of MPEG4 and require a license (so they may not show up, depending on the browser).`;
