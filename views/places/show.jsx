const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
                Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>
              {data.place.name}
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <h5>
              rating
              </h5>
            <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
              Edit
            </a>
            <form method ="POST" action = {`/places/${data.place.id}?_method=DELETE`} >
              <button type='submit' className='btn btn-danger'>DELETE</button>
            </form>
          </div>
          <div className='row'>
              <h2>Comments</h2>
              {comments}
          </div>
        </div>
      </main>
    </Def>
    )
}

module.exports = show


//connect the show route via a link from the index route and to 
//adjust it so that real data is sent to our show page, not just stub content.
