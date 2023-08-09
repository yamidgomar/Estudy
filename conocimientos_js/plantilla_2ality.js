//https://2ality.com/2015/01/template-strings-html.html
/*
t tmpl = addrs => html`
    <table>
    ${addrs.map(addr => html`
                <tr>$${addr.first}</tr>
                <tr>$${addr.last}</tr>
            `)}
            </table>
        `;
        `)}
`
*/

function escapeHtml(str){
    return str
        .replace(/&/g, '&amp;') // first!
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

console.log(escapeHtml('<h1>&<\h1>'))
