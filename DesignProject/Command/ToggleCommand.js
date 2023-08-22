import {NavigationCommand} from './NavigationCommand.js';

export class ToggleCommand extends NavigationCommand{
    constructor(receiver, onMessage, offMessage, toggleMethod) {
        super(receiver);
        this.onMessage = onMessage;
        this.offMessage = offMessage;
        this.toggleMethod = toggleMethod;
    }
    // 토글 메서드(toggleMusic, toggleVideo)를 호출하고 결과에 따른 메시지 출력
    execute() {
        const isOn = this.toggleMethod.call(this.receiver);
        console.log(isOn ? this.onMessage : this.offMessage);
    }
}