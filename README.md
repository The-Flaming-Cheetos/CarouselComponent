**GET:**

GET /attraction/:id/photos

GET /attraction/:id/info

GET /attraction/:id/reviews

GET /attraction/:id/hours

**Parameters**

The id of the attraction being rendered

**Returns**

Returns the data requested for (photos, reviews, info, etc.)

**Status codes**

200: Successfully got the requested data

404: Unsuccessful attempt

**POST:**

POST /attraction/:id/improve

**Parameters**

The id of the attraction being rendered

**Returns**

Returns a success message

'Successfully posted'

**Status codes**

200: Successful post

404: Unsuccessful attempt




**PUT:**

PUT /attraction/:id

**Parameters**

The id of the attraction being rendered

**Returns**

Returns a success message

'Successfully put'

**Status codes**

200: Successful put

404: Unsuccessful attempt


**PATCH:**

PATCH /attraction/:id

**Parameters**

The id of the attraction being rendered

**Returns**

Returns a success message

'Successfully patch'

**Status codes**

200: Successful patch

404: Unsuccessful attempt


**DELETE:**

DELETE /attraction/:id

**Parameters**

The id of the attraction being rendered

**Returns**

Returns a success message

'Successfully delete'

**Status codes**

200: Successful delete

404: Unsuccessful attempt