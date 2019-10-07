const $ = event => document.querySelector(event);
const $creat = event => document.createElement(event);
const elements = [$('#text'), $('#speech')];
const spee = ['<svg class="icon" style="width: 80%; height: 80%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1589"><path d="M515.041727 670.617766c91.584167 0 166.095647-74.504255 166.095647-166.095646V229.350568c0-91.584167-74.51148-166.095647-166.095647-166.095647-91.598617 0-166.102872 74.51148-166.102871 166.095647V504.52212c0 91.591392 74.504255 166.095647 166.102871 166.095646z" fill="" p-id="1590"></path><path d="M801.643237 874.001665H558.391759v-45.423608c161.507768-21.313766 286.60151-159.788217 286.60151-327.01819a43.350032 43.350032 0 0 0-86.700064 0c0 134.124998-109.12648 243.251478-243.258703 243.251479-134.124998 0-243.244253-109.12648-243.244253-243.251479a43.350032 43.350032 0 0 0-86.700063 0c0 167.229972 125.100967 305.711649 286.601509 327.01819v45.423608H228.440217a43.350032 43.350032 0 0 0 0 86.700064h573.20302a43.350032 43.350032 0 0 0 0-86.700064z" fill="" p-id="1591"></path></svg>']


const speechOtText = {
    text: [],
    creatText: function(itme, text) {
        itme.appendChild(text)
        console.log(text)

    },
    push: function(itme, text) {

    },
    getSpeechSwitchText: function(itme) {

        recognition.start(itme, this.creatText)

    }
}


if (recognition) {
    speechOtText.getSpeechSwitchText($('#text'))

    elements[1].innerHTML = spee[0];
    elements[1].addEventListener('mousedown', itme => {

    })
    elements[1].addEventListener('mouseup', itme => {
        recognition.stop()

    })

} else {

}















// function is(event) {
//     console.log('yes')
//     if (event == 'mousedown') recognition.start();
//     else recognition.abort();
// }
// recognition.thisIs = function() {
//     this.start()
// }
// if (recognition) {
//     elements[1].innerHTML = spee[0]
//     elements[1].addEventListener('mousedown', event => {
//         let creatElement = [$creat('p'), $creat('u')];
//         creatElement.forEach(event => {
//             elements[0].appendChild(event);
//         })
//         recognition.lang = 'zh-CN';
//         recognition.interimResults = true;
//         recognition.maxAlternatives = 5;
//         recognition.start();
//         recognition.onend = () => { is(event.type) }
//         recognition.addEventListener('result', event => {
//             console.log(event)
//             const transcript = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('');
//             // console.log(transcript)
//             creatElement[1].innerText = transcript
//                 // 判断是否结束
//             if (event.results[0].isFinal) {
//                 creat(transcript)
//                 if (transcript.includes('早上好')) {
//                     console.log('早上好亲爱的')
//                 }
//             }
//         })
//     })
//     elements[1].addEventListener('mouseup', event => {
//         recognition.abort();
//         recognition.onend = () => { is(event.type) }

//     })
// } else {
//     // elements[1].innerHTML = spee[1]
// }
// recognition.onresult = function(event) {
//     console.log(event.srcElement.onerror(event))
// }
// recognition.onerror = function(event) {
//     console.log(event)
// }
window.onload = () => {
    let src = ["live2d_js/L2Dwidget.min.js", 'live2d_js/L2D.js']
    src.forEach(e => {
        let scr = $creat('script')
        scr.src = e;
        document.body.appendChild(scr)
    })
}