export class DoomClass {
    // logMessages : Array<Object> = [
    //     {
    //         person : String,
    //     message : String,
    //     createdAt: Date
    //     }
    // ]
    logMessages: Array<{
        person: string, 
        message: string, 
        createdAt: Date
    }>;

    constructor() {
        
    }

    addAccessItem(person, message) {
        console.log("it does work");
        
    }

}

