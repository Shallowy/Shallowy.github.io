$$("script[type='text/plain']").forEach(script=>{
    var pre = document.createElement("pre");
    var code = document.createElement("code");
    code.className = script.className;
    pre.appendChild(code);
    script.parentNode.insertBefore(pre, script);
    code.appendChild(script);
});