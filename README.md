# Server API

### Get attraction details: <br />

GET `api/attraction/:id`

**Parameters**

The id of the attraction being rendered

**Returns**

Returns the data requested for (photos, reviews, info, etc.)


```json
{
  "reviewCount": "1801",
  "duration": "2-3 hours",
  "trip_address": "525 S Winchester Blvd North San Jose, San Jose, CA 95128-2588",
  "trip_hours": "10 - 4pm",
  "trip_days": "M - F",
  "trip_description": "This is the winchester house...",
  "attractionTitle": "Winchester House",
  "images": {"image1":"url"},
  "tours": {"tour1":"description"},
}
```

**Status codes**

200: Successfully got the requested data

404: Unsuccessful attempt




### Add a picture: <br />

POST `api/attraction/:id/photos/:photoURL`

**Parameters**

The id of the attraction being rendered
The url to the photo you want to add

**Returns**

Returns the id of the photo

`213`

**Status codes**

200: Successful post

404: Unsuccessful attempt



### Add an improvement suggestion: <br />

POST `api/attraction/:id/improve`

**Parameters**

The id of the attraction being rendered

`Request Body`: Expects JSON with the following keys
```json
{
  "id" : 1,
  "user":"username",
  "improve":"improvement suggestion"
}
```

**Status codes**

200: Successful post

404: Unsuccessful attempt


### Update: <br />

PUT `api/attraction/:id`

**Parameters**

The id of the attraction being rendered

**Returns**

Returns a success message

'Successfully put'

**Status codes**

200: Successful put

404: Unsuccessful attempt


### PATCH: <br />

PATCH `api/attraction/:id`

**Parameters**

The id of the attraction being rendered

**Returns**

Returns a success message

'Successfully patch'

**Status codes**

200: Successful patch

404: Unsuccessful attempt


### Remove a photo: <br />

DELETE `api/attraction/:id/photo/:photoID`

**Parameters**

The id of the attraction being rendered
The id of the photo to be deleted

**Returns**

Returns a success message

'Successfully delete'

**Status codes**

200: Successful delete

404: Unsuccessful attempt