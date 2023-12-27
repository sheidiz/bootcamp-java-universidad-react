import { Subject } from 'rxjs';

export class MensajeManager {

    //atributo!
    subject$ = new Subject();// BehaviorSubject

    getSubject() {
        return this.subject$.asObservable();
    }

    next(data) {
        this.subject$.next(data);//
    }

    reset() {
        this.subject$.next('');
    }
}

/*
function x() {
    function y() {
        //algo mas
    }
    return x;
}
*/