// function beidiaoyong() {
//     console.log('worker 里被调用的')
// }
//
// function ceshi() {
//     console.log('worker ceshi')
//     beidiaoyong()
// }
//
// module.exports = ceshi;

import wd from './wdemo'
import comm from './common'


onmessage = function (event) {
    var workerResult = event.data;

    console.log(Promise)

    console.log('event', event)
    console.log('event.data', event.data)

    comm('woker 里面')

    wd()
    // workerResult.onmessage = true;
    postMessage(workerResult);
};

export default onmessage
