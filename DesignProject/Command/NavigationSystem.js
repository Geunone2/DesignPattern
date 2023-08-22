
export class NavigationSystem{
    // 초기값 설정
    constructor() {
        this.musicOn = false;
        this.videoOn = false;
    }

    toggleMusic() {
        this.musicOn = !this.musicOn;
        return this.musicOn;
    }

    toggleVideo() {
        this.videoOn = !this.videoOn;
        return this.videoOn;
    }
}