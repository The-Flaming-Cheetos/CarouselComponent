### Server API

### Get attraction details:

`GET api/attraction/:id/photos`

`GET api/attraction/:id/info`

`GET api/attraction/:id/reviews`

`GET api/attraction/:id/hours`

**Parameters**

The id of the attraction being rendered

**Returns**

Returns the data requested for (photos, reviews, info, etc.)

example for hours:

`{"monday": "9 - 5", "tuesday": "9 - 5", "wednesday": "9 - 5", "thursday": "9 - 5", "friday": "9 - 5", "saturday": "closed", "sunday": "closed",}`

**Status codes**

200: Successfully got the requested data

404: Unsuccessful attempt




### Add a picture:

`POST api/attraction/:id/photos/:photoURL`

**Parameters**

The id of the attraction being rendered
The url to the photo you want to add

**Returns**

Returns the id of the photo

`213`

**Status codes**

200: Successful post

404: Unsuccessful attempt



### Add an improvement suggestion:

`POST api/attraction/:id/improve`

**Parameters**

The id of the attraction being rendered

`Request Body`: Expects JSON with the following keys
`{"id" : 1, "user":"username", "improve":"improvement suggestion"}`

**Status codes**

200: Successful post

404: Unsuccessful attempt


### Update:

`PUT api/attraction/:id`

**Parameters**

The id of the attraction being rendered

**Returns**

Returns a success message

'Successfully put'

**Status codes**

200: Successful put

404: Unsuccessful attempt


### PATCH:

`PATCH api/attraction/:id`

**Parameters**

The id of the attraction being rendered

**Returns**

Returns a success message

'Successfully patch'

**Status codes**

200: Successful patch

404: Unsuccessful attempt


### Remove a photo:

`DELETE api/attraction/:id/photo/:photoID`

**Parameters**

The id of the attraction being rendered
The id of the photo to be deleted

**Returns**

Returns a success message

'Successfully delete'

**Status codes**

200: Successful delete

404: Unsuccessful attempt