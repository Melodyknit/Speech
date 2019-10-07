setTimeout(() => {
    L2Dwidget
        .on('*', (name) => {
            // console.log('%c EVENT ' + '%c -> ' + name, 'background: #222; color: yellow', 'background: #fff; color: #000')
        })
        .init({
            dialog: {
                // 开启对话框
                enable: true,
                script: {
                    // 每空闲 10 秒钟，显示一条一言
                    'every idle 10s': '$hitokoto$',
                    // 当触摸到星星图案
                    'hover #speech': '想和我说什么悄悄话呢',
                    'hover #read': '人家才不是因为懒才不帮你读',
                    'hover #text': '想对人家说什么吗（期待）',
                    // 当触摸到角色身体
                    'tap body': '哎呀！别碰我！',
                    // 当触摸到角色头部
                    'tap face': '我可不是小孩子，这样摸来摸去小心我咬你'
                }
            }
        });
    setTimeout(() => {
        function L2D(w) {
            if (window.innerWidth < 700 && window.innerWidth > 360) w = ['150px', '300px'];
            else if (window.innerWidth < 360) w = ['100px', '200px'];
            else w = ['200px', '400px'];
            var lsz = [$('#live2d-widget').style, $('#live2dcanvas').style]
            lsz.forEach(e => {
                e.width = w[0];
                e.height = w[1];
            })
        }
        L2D()
        window.onresize = () => {
            L2D()
        }
    }, 100)
}, 100)