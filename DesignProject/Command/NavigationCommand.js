// 실행될 기능에 대한 클래스
// 실행될 기능을 execute 메서드로 선언
export class NavigationCommand{
    constructor(receiver) {
        this.receiver = receiver;
    }
    
    // 커맨드 클래스 부모 역할
    execute() {
        throw new Error('execute method must be override');
    }
}