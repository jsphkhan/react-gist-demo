import { makeGETCall } from '../../network';
import config from '../../config';

//show loading message
const beforeCall = () => {
    return {
        type: 'BEFORE_ALL_GISTS'
    }
}
const onSuccess = (dataObj, username) => {
    //I can pass normalized data here
    return {
        type: 'ALL_GISTS_SUCCESS',
        payload: dataObj,
        username: username,
        isLoading: false
    }
}
const onFailure = (err) => {
    return {
        type: 'ALL_GISTS_ERROR',
        errorMsg: err,
        isLoading: false
    }
}

//thunk middleware action
const fetchAllGists = (username) => {
    return function(dispatch) {
        dispatch(beforeCall());
        //make the API call
        return makeGETCall(config.getAllGistUrl(username)).then((res) => {
            //console.log('Git Response', res);
            if(res.length) {
                //if there is data retured by Github API
                dispatch(onSuccess(res, username));
            } else {
                dispatch(onFailure(`0 Gists Found for ${username}`));
            }
        }).catch((err) => {
            //if network is down
            //404 etc
            //console.log('Error', err);
            dispatch(onFailure(`Some problem while making call`)); //${err} - you can pass - optional
        });
    }
}

export {fetchAllGists};