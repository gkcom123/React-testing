import axios from 'axios';

const utility = (function(){

    const makeAjax = function() {
        const apiUrl = 'http://jsonplaceholder.typicode.com/posts/4';
        return axios.get(apiUrl);
    };
    return {
        makeAjax: makeAjax
    }
    
})();
export {utility};