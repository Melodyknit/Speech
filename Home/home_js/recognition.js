const recognition = (() => {
    try {
        return new function() {
            this.r = new(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition);
            this.r.interimResults = true;
            this.r.maxAlternatives = 1;
            this.a = new Array;
            this.r.lang = 'zh_CH';
            // this.r.lang = 'ja_JP';
            this.extract = {
                result: (itme, fun) => {
                    this.r.start();
                    // console.warn(event)
                    // 传输进来的功能
                    this.a.push($creat('p'))
                    this.r.addEventListener('result', e => {
                        var a = Array.from(e.results[0][0].transcript).join('')
                        this.a[this.a.length - 1].innerText = a
                        fun(itme, this.a[this.a.length - 1]);
                        if (e.results[0].isFinal) {
                            this.a.push($creat('p'))
                            if (/搜索/.test(a)) {
                                window.open('https://www.baidu.com/s?ie=utf-8&wd=' + a.substring(2))
                            }
                        };
                    });
                }
            };
            this.start = (itme, fun) => {
                this.extract.result(itme, fun)
                this.r.onend = () => this.r.start();
            };
            this.stop = () => {
                this.r.abort();
                this.r.onend = () => this.r.abort();
            };
        }
    } catch (e) {
        return '您当前浏览器不兼容语音功能';
    };
})();
// const transcript = Array.from(event.results)
// .map(result => result[0])
// .map(result => result.transcript)
// .join('');
// // 判断是否结束




// if (event.results[0].isFinal) {
// // 判断语句是否是
// console.log('over', typeof transcript)
// if (transcript.includes('早上好')) {}
// }