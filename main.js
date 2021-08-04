const htmlEl = document.querySelector("#html");
const cssEl = document.querySelector("#css");
const jsEl = document.querySelector("#js");
const iframeEl = document.querySelector("#results");

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

function createHtml() {
    const html = htmlEl.value;
    const css = cssEl.value;
    const js = jsEl.value;
    console.log(html, css, js);

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

function setResults() {
    const result = createHtml();

    iframeEl.setAttribute("srcdoc", result);
}
