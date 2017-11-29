const HOST = 'http://localhost:9000'

export default class API {

    // to read
    static get(path: String): Promise<any> {
        const fetchPromise = new Promise((resolve, reject) => {
            //noinspection TypeScriptUnresolvedFunction
            return fetch(`${HOST}${path}`, { method: 'get'})
                .then(res => {
                    if(res.status < 400) {
                        return res.json()
                    } else {
                        throw {code: res.status.toString()}
                    }
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
    static put(path: string, payload: Object): Promise<any> {
        return putOrPost('PUT', path, payload)
    }

    // to update
    static post(path: string, payload: Object): Promise<any> {
        return putOrPost('POST', path, payload)
    }

}

function putOrPost(method: string, path: string, payload: Object): Promise<any> {
    const fetchPromise = new Promise((resolve, reject) => {
        //noinspection TypeScriptUnresolvedFunction
        return fetch(`${HOST}${path}`, {
            method,
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