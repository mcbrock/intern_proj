const axios = require('axios')
const input_ary = 'topic - subtopic - vidtype - N';

axios ({
    method: 'post', //post or get?
    baseURL: 'http://0.0.0.0:2200', //our server url
    url: '/NemoText',
    'Content-Type': 'application/json',
    data: {
        specifics: input_ary
    }

})
    .then((result) => { console.log(result.data) })
    .catch((err) => { console.error(err) })
