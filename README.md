GET:
Routes

GET /attraction/:id/photos

GET /attraction/:id/info

GET /attraction/:id/reviews

GET /attraction/:id/hours

Parameters

The id of the attraction being rendered

Returns

Returns the data requested for (photos, reviews, info, etc.)

Status codes

200: Successfully got the requested data
404: Unsuccessful attempt

POST:
POST /attraction/:id/improve

Parameters

The id of the attraction being rendered

Returns

Returns a success message

'Successfully posted'

Status codes

200: Successful post
404: Unsuccessful attempt


schema:
photos
reviews
hours
attraction
tours
improve this listing