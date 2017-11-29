const HOST = 'http://localhost:9000'

export default class API {

    // to read
    static get(path: String): Promise<any> {
        const fetchPromise = new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            return fetch(`${HOST}${path}`, { method: 'get'})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })

        return fetchPromise
    }

    // to create
    static put(path: String, payload: Object): Promise<any> {
        const fetchPromise = new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            return fetch(`${HOST}${path}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })

        return fetchPromise
    }

    // to update
    static post(path: String, payload: Object): Promise<any> {
        const fetchPromise = new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            return fetch(`${HOST}${path}`, {
                method: 'post',
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(data => {
                console.log(`POST to ${HOST}${path} : ${JSON.stringify(data)}`)
                resolve(data)
            })
            .catch(err => reject(err))
        })

        return fetchPromise
    }

}