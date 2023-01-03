const React = require('react')
const Def = require('./default')



function home () {
    return (
      <Def>
          <main>
              <h1>REST-rant</h1>
              <div>
                <img src='/images/aron-visuals-4zxSWESyZio-unsplash.jpg' width={800}></img>
                <div>
                  Photo by Aron Visuals
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  
module.exports = home