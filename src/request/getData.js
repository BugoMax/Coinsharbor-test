
import Promise from 'promise-polyfill';

const getData = (link) => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', link);
        xhr.onload = () => {

            if (xhr.status === 200) {

                const data = JSON.parse(xhr.responseText);

                resolve(data);

            } else {

                console.error('Error in request. Status: ' + xhr.status);
                console.error('Response text: ' + xhr.responseText);

                reject(new Error());
            }
        };
        xhr.send(null);
    });
};

export default getData;
