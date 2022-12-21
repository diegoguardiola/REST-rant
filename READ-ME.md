# Project REST-Rant

TBD - SUMMARY

## Tech Usage

**CSS Framework:** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

## Routes

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

## Database

**places** 

| Field      | Type      |
| :---:      | :---:     |
| _id        | Object ID |
| name       | String    |
| city       | String    |
| state      | String    |
| cuisines   | String    |
| pic        | String    |

**rants**

| Field     | Type                  |
| :---:     | :---:                 |
| _id       | Object ID             |
| place_id  | ref(places) Object_Id |
| rant      | Boolean               |
| rating    | Number                |
| comment   | String                |
| reviewer  | String                |

## Planning

### User Stories

TBD

### Wireframes

TBD

## Notes

Possible bonus ideas:

* Update for comments
* Aggregate rating for a place
* Auto-complete state dropdown