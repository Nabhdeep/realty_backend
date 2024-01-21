import http from 'http'
import express from './services/express'
import api from './api'
import {apiRoot , env , port , ip} from './config'

const app = express(apiRoot , api)
const server = http.createServer(app)

setImmediate(()=>{
    server.listen(port , ip, ()=>{
        console.log(`Express server listening on http://${ip}:${port}, in mode ${env}`);
    })
})


export default app