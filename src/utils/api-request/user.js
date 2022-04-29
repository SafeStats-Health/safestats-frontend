import Request from './request'

export class CreateUser {
    path = 'post_user'
    constructor (obj) {
        new Request({ ...obj, path })
    }
}
