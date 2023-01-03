const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
          <main>
            <h1>Show Page</h1>
          </main>
        </Def>
    )
}

module.exports = show


//connect the show route via a link from the index route and to 
//adjust it so that real data is sent to our show page, not just stub content.