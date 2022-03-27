import Worker from './ceshi.worker.js'
import common from './common'
import dandu from './dandu'

dandu()

if (Math.random()*0 > 5) {
    console.log('走上面')
    common('走上面')
} else {
    console.log('走worker')

    const worker = new Worker();

    let result;

    worker.onmessage = (event) => {
        console.log('外面', event.data)
        if (!result) {
            result = document.createElement("div");
            result.setAttribute("id", "result");

            document.body.append(result);
        }

        result.innerText = JSON.stringify(event.data);
    };

    const button = document.getElementById("button");

    button.addEventListener("click", () => {
        worker.postMessage({ postMessage: true , bb: {
                name: '你好呀',
                age: 18
            }});
    });

}

function de () {
    console.log('de')
}

export default de


// const worker = new Worker();
// let result;
// worker.onmessage = (event) => {
//     // 返回数据
//     console.log(event.data)
// };
// worker.postMessage({ postMessage: true });
