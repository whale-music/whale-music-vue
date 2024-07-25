export class AudioPlayer {
  audio: HTMLAudioElement;

  // 播放状态改变
  pausedChange: (status: boolean) => void = () => {};

  // 播放时长变化
  durationChange: (progress: number, event: Event) => void = () => {};

  // 当前播放进度事件
  currentProgressChange: (currentProgress: number, event: Event) => void =
    () => {};

  // 缓冲进度
  bufferProgressChange: (buffer: number, progress: ProgressEvent) => void =
    () => {};

  // 是否可以播放
  canplayEvent: () => void = () => {};

  // 音量事件
  volumeChange: (volume: number, event: Event) => void = () => {};

  // 播放完毕事件
  playerEndedChange: () => void = () => {};

  // 播放时长
  get duration() {
    return isNaN(this.audio.duration) ? 0 : this.audio.duration;
  }

  constructor(audioElement: HTMLAudioElement | undefined) {
    if (!audioElement) {
      throw new Error("audio element doesn't exist");
    }
    this.audio = audioElement;
    this.audio.volume = 0.3;
    this.addAudioEventListeners();
  }

  addAudioEventListeners() {
    // 添加播放事件监听器
    this.audio.addEventListener("play", this.onAudioPlay.bind(this));

    // 添加暂停事件监听器
    this.audio.addEventListener("pause", this.onAudioPause.bind(this));

    // 添加中止加载事件监听器
    this.audio.addEventListener("abort", this.onAudioAbort.bind(this));

    // 添加等待事件监听器（音频因缓冲而停止）
    this.audio.addEventListener("waiting", this.onAudioWaiting.bind(this));

    // 添加可以播放事件监听器
    this.audio.addEventListener("canplay", this.onAudioCanplay.bind(this));

    // 添加下载过程中定期触发事件监听器
    this.audio.addEventListener("progress", this.onAudioProgress.bind(this));

    // 添加音频时长改变事件监听器
    this.audio.addEventListener(
      "durationchange",
      this.onAudioDurationChange.bind(this),
    );

    // 添加寻找中事件监听器（用户开始移动/跳转音频播放位置）
    this.audio.addEventListener("seeking", this.onAudioSeeking.bind(this));

    // 添加寻找完毕事件监听器（用户完成移动/跳转音频播放位置）
    this.audio.addEventListener("seeked", this.onAudioSeeked.bind(this));

    // 添加时间更新事件监听器（音频当前播放位置发生改变）
    this.audio.addEventListener(
      "timeupdate",
      this.onAudioTimeUpdate.bind(this),
    );

    // 添加音量改变事件监听器
    this.audio.addEventListener(
      "volumechange",
      this.onAudioVolumeChange.bind(this),
    );

    // 添加播放结束事件监听器
    this.audio.addEventListener("ended", this.onAudioEnded.bind(this));
  }

  play() {
    return this.audio.play();
  }

  pause() {
    return this.audio.pause();
  }

  async reset() {
    // 暂停当前播放
    this.audio.pause();
    // 设置音频当前时间为0，以从头开始播放
    this.audio.currentTime = 0;
    // 播放音频
    return this.audio.play();
  }

  seekTo(time: number) {
    time = Math.max(time, 0);
    time = Math.min(time, this.duration);
    this.audio.currentTime = time;
  }

  setVolume(volume: number) {
    this.audio.volume = volume;
  }

  loadAudio(src: string) {
    this.audio.src = src;
    this.audio.load();
  }

  clear() {
    this.audio.src = "";
  }

  onAudioPlay() {
    console.debug("Audio is playing");
    // 你的逻辑
    this.pausedChange(this.audio.paused);
  }

  onAudioPause() {
    console.debug("Audio is paused");
    // 你的逻辑
    this.pausedChange(this.audio.paused);
  }

  onAudioAbort() {
    console.debug("Audio loading aborted");
    // 你的逻辑
    this.pausedChange(this.audio.paused);
  }

  onAudioWaiting() {
    console.debug("Audio is waiting");
    // 你的逻辑
    this.pausedChange(this.audio.paused);
  }

  onAudioCanplay() {
    console.debug("Audio can play now");
    // 你的逻辑
    this.canplayEvent();
  }

  onAudioProgress(progress: ProgressEvent) {
    console.debug("Audio is progressing");
    // 你的逻辑
    const buffer = this.audio.buffered.length
      ? this.audio.buffered.end(this.audio.buffered.length - 1)
      : 0;
    this.bufferProgressChange(buffer, progress);
  }

  onAudioDurationChange(event: Event) {
    console.debug("Audio duration changed");
    // 你的逻辑
    this.durationChange(this.duration, event);
  }

  onAudioSeeking() {
    console.debug("Audio is seeking");
    // 你的逻辑
  }

  onAudioSeeked() {
    console.debug("Audio seeked");
    // 你的逻辑
  }

  onAudioTimeUpdate(event: Event) {
    console.debug("Audio time updated");
    // 你的逻辑
    this.currentProgressChange(this.audio.currentTime, event);
  }

  onAudioVolumeChange(event: Event) {
    console.debug("Audio volume changed");
    // 你的逻辑
    this.volumeChange(this.audio.volume, event);
  }

  onAudioEnded() {
    console.debug("Audio ended");
    // 你的逻辑
    this.playerEndedChange();
  }
}
