import { Injectable } from '@angular/core';
@Injectable()

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

}

