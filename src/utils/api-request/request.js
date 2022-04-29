import axios from 'axios'
export default class Request {
    constructor(obj) {
        this.path = obj.path;
        this.params = obj.params;
        this.requestBody = obj.requestBody;
    }

    
}