// class PrivateSingleton {
//     constructor() {
//         this.message = 'I am an instance'
//         console.log(this.message)
//     }
// }
class Singleton {
    constructor() {
        console.log('in Singleton constructor');
        // throw new Error('Use Singleton.getInstance()');
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

Singleton.getInstance()
Singleton.getInstance()
Singleton.getInstance()
Singleton.getInstance()