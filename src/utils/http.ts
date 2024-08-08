import {AxiosPromise} from "axios";
// import * as axios from "axios/index";
import axios from "axios";
// import axios = require("axios/index");
// const axios = require('axios');

// https://axios.nodejs.cn/docs

const instance = axios.create({
    baseURL: 'http://localhost:8081/eip'
});

// interceptor configuration
// const myInterceptor = instance.interceptors.request.use(function () {/*...*/});
// instance.interceptors.request.eject(myInterceptor);

export function httpPost(url: string, data: any):AxiosPromise<any> {
    return instance({
        url: url,
        method:'post',
        data: data,
        // headers: signHeader
    });
};

// export instance;