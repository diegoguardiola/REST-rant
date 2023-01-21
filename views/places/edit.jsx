const React = require('react')
const Default = require('../default.jsx')

function edit (data) {
    return(
        <Default>
            <main>
                <h1>Edit Place</h1>
                <form method='POST' action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Place</label>
                        <input
                            className='form-control' 
                            type = 'text'
                            name = 'name'
                            defaultValue={data.place.name}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input
                            className='form-control'
                            type='url'
                            name='pic'
                            defaultValue={data.place.pic}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input
                            className='form-control'
                            type='text'
                            name='state'
                            id='state'
                            defaultValue={data.place.state}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input
                            className='form-control'
                            type='text'
                            name='city'
                            id='city'
                            defaultValue={data.place.city}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='founded'>Founded</label>
                        <input 
                            className='form-control test-center'
                            id='founded'
                            name='founded'
                            value={data.place.founded}>
                        </input>
                    </div>
                    <input
                        className='btn btn-primary'
                        type='submit'
                        value='Update Place'
                    />
                </form>
            </main>
        </Default>
    )
}

module.exports = edit