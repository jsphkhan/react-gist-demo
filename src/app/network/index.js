//Make Network calls
//fetch() Promise API's
//catch block/error handdling shoud be invoked outside, or else req can fail silently
//without the caller being notified

const makeGETCall = (url) => {
    return fetch(url).then((rawResponse) => {
        //if 200
        if(rawResponse.ok) {
            return rawResponse.json();
        } else {
            throw new Error(rawResponse.status);
        }
    })
}

//You can add more types of call below eg. POST, PUT, PATCH etc. 
//or generalize the method above.

export {makeGETCall};