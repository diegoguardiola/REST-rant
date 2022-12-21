# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method       | Path                     | Purpose                                 |
| :---:        | :---:                    | :---:                                   |
| GET          | /                        | Home Page                               |
| GET          | /places                  | Places index page                       |
| POST         | /places                  | Create new place                        |
| GET          | /places/new              | Form page for creating place            |
| GET          | /places/:id              | Details about place                     |
| PUT          | /places/:id              | Update a place                          |
| GET          | /places/:id/edit         | Form page for editing an existing place |
| DELETE       | /places/:id              | Delete a particular place               |
| POST         | /places/:id/rant         | Create a rant (comment) about a place   |
| DELETE       | /places/:id/rant/:rantId | Delete a rant (comment) about a place   |
| GET          | *                        | 404 page                                |