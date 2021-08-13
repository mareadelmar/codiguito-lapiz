const htmlEl = document.querySelector("#html");
const cssEl = document.querySelector("#css");
const jsEl = document.querySelector("#js");
const iframeEl = document.querySelector("#results");

const configCodeMirror = {
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true,
    theme: "dracula",
};

const htmlContainer = CodeMirror(htmlEl, {
    ...configCodeMirror,
    mode: "xml",
    stylesheet: "codemirror/lib/codemirror/css/xmlcolors.css",
    parserfile: "codemirror/parsexml.js",
    path: "codemirror/lib/codemirror/js/",
    autoCloseTags: true,
});

const cssContainer = CodeMirror(cssEl, {
    ...configCodeMirror,
    mode: "css",
    stylesheet: "codemirror/lib/codemirror/css/csscolors.css",
    parserfile: "codemirror/parsecss.js",
    path: "codemirror/lib/codemirror/js/",
    autoCloseBrackets: true,
});

const jsContainer = CodeMirror(jsEl, {
    ...configCodeMirror,
    mode: "javascript",
    stylesheet: "codemirror/lib/codemirror/css/jscolors.css",
    parserfile: "codemirror/parsejs.js",
    path: "codemirror/lib/codemirror/js/",
    autoCloseBrackets: true,
});

htmlEl.addEventListener("input", setResults);
cssEl.addEventListener("input", setResults);
jsEl.addEventListener("input", setResults);

Split({
    columnGutters: [
        {
            track: 1,
            element: document.querySelector(".gutter-y"),
        },
    ],
    rowGutters: [
        {
            track: 1,
            element: document.querySelector(".gutter-x"),
        },
    ],
});

function setResults() {
    const result = createHtml();
    iframeEl.setAttribute("srcdoc", result);
}

function createHtml() {
    const html = htmlContainer.getValue();
    const css = cssContainer.getValue();
    const js = jsContainer.getValue();

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${js}
            </script>
        </body>
    </html>
    `;
}
