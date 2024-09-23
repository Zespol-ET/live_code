    const htmlCode = document.querySelector('.html-code textarea')
    const cssCode = document.querySelector('.css-code textarea')
    const jsCode = document.querySelector('.js-code textarea')
    const result = document.querySelector('#result')

    function run(){
        localStorage.setItem(`htmlCode`, htmlCode.value);
        localStorage.setItem(`cssCode`, cssCode.value);
        localStorage.setItem(`jsCode`, jsCode.value);
        result.contentDocument.body.innerHTML = `<style>${cssCode.value}</style>` + htmlCode.value;
        result.contentWindow.eval(localStorage.jsCode);
    }
    htmlCode.onkeyup = () => run();
    cssCode.onkeyup = () => run();
    jsCode.onkeyup = () => run();


    htmlCode.value = localStorage.htmlCode;
    cssCode.value = localStorage.cssCode;
    jsCode.value = localStorage.jsCode;