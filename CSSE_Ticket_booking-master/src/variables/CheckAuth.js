const jwt = localStorage.getItem('csse_we_32');

export function checkAuthUser() {

    if (jwt) {
        const token = parseJwt(jwt);
        return token.ROLE_USER === 'PASSENGER';
    }else{
        return false;
    }
}

export function checkAuthAdmin() {

    if (jwt) {
        const token = parseJwt(jwt);
        return token.ROLE_USER === 'ADMIN';
    }else{
        return false;
    }
}

export function checkAuthInspector() {

    if (jwt) {
        const token = parseJwt(jwt);
        return token.ROLE_USER === 'INSPECTOR';
    }else{
        return false;
    }
}

function parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = decodeURIComponent(atob(base64Url).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(base64);
}





