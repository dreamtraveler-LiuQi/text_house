function ajax(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error('Request failed with status ' + xhr.status));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Request failed'));
        };

        if (method === 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.send(data ? JSON.stringify(data) : null);
    });
}

window.ajax = ajax;