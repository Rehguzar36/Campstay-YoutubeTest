### URLs
 - Rest API Reference: https://github.com/typicode/jsonplaceholder#how-to
 - Base URL for this test: https://my-json-server.typicode.com/Campstay/youtube-test/

### Example request code
```
fetch('https://my-json-server.typicode.com/Campstay/youtube-test/users/2/videos')
  .then(response => response.json())
  .then(json => console.log(json))
```

> Expected response
```
[
  {
    description: "Started out trying to be the next Beatles.\nGot my Johnny Walkers out instead."
    id: 3
    size: 12492.8
    title: "Johnny Walker Beatles Time"
    uploadedAt: "2019-04-07T12:16:47+10:00"
    url: "https://s3-ap-southeast-2.amazonaws.com/coding-test-asset/walker.mp4"
    userId: 2
  }
]
```

### Data Dictionary
#### Users
 - id (number)
 - name (string)
 - type (string): Either 'guest' or 'uploader'
#### Videos
 - id (number)
 - userId (number): References the uploader record
 - title (string)
 - description (string): In markdown format
 - uploadedAt (datetime)
 - url (string)
 - size (number)
#### Comments
 - id (number)
 - userId (number): References the guest who wrote the comment
 - videoId (number): References the video the comment was made against
 - date (datetime)
 - body (string)
#### Profile
 - id (number): Your user ID
 - name (string)
 - memberSince (datetime)
 - watched (array): Which videos you have watched, and how far through you made it
 - subscriptions (array): Which uploaders you have subscribed to
