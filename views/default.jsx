const React = require('react')

//return statement that includes the HTML skeleton you wish all of your pages to include
function Def (html) {
    return (
        <html>
            <head>
                <title> Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

