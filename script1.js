/*
DEVELOPMENT NOTES!!!

The fetch request function did not correctly load json data from the provided server link when passed the website url,
 with or wihtout the videos path extension to dynamically populate the website contents.

 As an alternative I have populate the site features mostly with static data such as comments, video objects and description.

 I tried passing the db.json file raw data as a json array for videos and users and extracted individual json objects as shown below:

 the getVidoes function needs to be improved to only extract data object for a single video rather than everything in the array and then 
 manipulte it for display via html.

 I did not get to spend enough time to make it fully operational, production ready since i was working on another assesment application from 
 another organisation that i interviewed for. I will finish it off in my spare time. 


 I have Added a Just for Testing Button on the main page to display the fetch response that i get using the data from the actual db.json data object.

*/ 

// const webUrl = 'https://my-json-server.typicode.com/Campstay/youtube-test';

// var userDetails = document.getElementById("user-details");
// userDetails.addEventListener('click', getUser);
                
// function getUser()
// {
//     fetch(webUrl)
//     .then(response => response.json())
//     .then((Obj) => 
//     {
//         Obj.users.forEach(usrObj => {
//             id = usrObj.id;
//             name = usrObj.name;
//             type = usrObj.type;
    
//             for(var key in usrObj) {
//                 var value = usrObj[key];
//                 userDetails.innerHTML += key + ":" + value + "<br>";
//               }
//         });
//     });
// }

// function displayDate()
// {
//     var d = new Date();
//     document.getElementById("time").value = d.toDateString();
//     '<h5>' + output + '</h5>';  
// }

var videoTitle = document.getElementById("demo");
videoTitle.addEventListener('click', getVideos);

function getVideos()
{
    dbObj.videos.forEach(vidObj => {
        id = vidObj.id;
        title = vidObj.title;
        userId = vidObj.userId;
        description = vidObj.description;
        uploadedAt = vidObj.uploadedAt;
        url = vidObj.url;
        size = vidObj.size;

        for(var key in vidObj) {
            var value = vidObj[key];
            videoTitle.innerHTML += key + ":" + value + "<br>";
          }
    });
}

var dbObj, id, userId, title, description, uploadedAt, url, size = "";
dbObj = {
    "users": [
      {
        "id": 1,
        "name": "Fred",
        "type": "guest"
      },
      {
        "id": 2,
        "name": "Sam",
        "type": "uploader"
      },
      {
        "id": 3,
        "name": "Issac",
        "type": "uploader"
      },
      {
        "id": 4,
        "name": "Ash",
        "type": "guest"
      },
      {
        "id": 5,
        "name": "Lana",
        "type": "guest"
      },
      {
        "id": 6,
        "name": "Ursula",
        "type": "guest"
      },
      {
        "id": 7,
        "name": "Carla",
        "type": "guest"
      },
      {
        "id": 8,
        "name": "Elmo",
        "type": "guest"
      },
      {
        "id": 9,
        "name": "Dawn",
        "type": "guest"
      },
      {
        "id": 10,
        "name": "Joan",
        "type": "guest"
      }
    ],
    "videos": [
      {
        "id": 1,
        "userId": 3,
        "title": "Whales",
        "description": "*Shot from a beach off the coast of Hawaii*\n - Camera: Canon SimpleMount AlphaBeta\n - Lens cap: Off\n\nCheck out my other videos at https://my.videos.online/Issac",
        "uploadedAt": "2019-01-01T08:14:53-10:00",
        "url": "https://s3-ap-southeast-2.amazonaws.com/coding-test-asset/whales.mp4",
        "size": 14745.6
      },
      {
        "id": 2,
        "userId": 3,
        "title": "Underwater",
        "description": "Was trying to find the Lost City of Atlantis - but got distracted.",
        "uploadedAt": "2019-04-01T18:43:13+08:00",
        "url": "https://s3-ap-southeast-2.amazonaws.com/coding-test-asset/underwater.mp4",
        "size": 68096.0
      },
      {
        "id": 3,
        "userId": 2,
        "title": "Johnny Walker Beatles Time",
        "description": "Started out trying to be the next Beatles.\nGot my Johnny Walkers out instead.",
        "uploadedAt": "2019-04-07T12:16:47+10:00",
        "url": "https://s3-ap-southeast-2.amazonaws.com/coding-test-asset/walker.mp4",
        "size": 12492.8
      }
    ],
    "comments": [
      {
        "id": 1,
        "userId": 4,
        "videoId": 1,
        "date": "2019-02-04T18:48:20-08:00",
        "body": "non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus"
      },
      {
        "id": 2,
        "userId": 9,
        "videoId": 1,
        "date": "2019-03-01T07:45:29-08:00",
        "body": "malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis"
      },
      {
        "id": 3,
        "userId": 8,
        "videoId": 1,
        "date": "2019-01-20T15:50:26-08:00",
        "body": "pretium aliquet, metus urna convallis erat, eget tincidunt dui augue"
      },
      {
        "id": 4,
        "userId": 8,
        "videoId": 1,
        "date": "2019-02-24T06:53:49-08:00",
        "body": "pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus"
      },
      {
        "id": 5,
        "userId": 10,
        "videoId": 1,
        "date": "2019-01-31T07:44:19-08:00",
        "body": "In tincidunt congue turpis. In condimentum."
      },
      {
        "id": 6,
        "userId": 7,
        "videoId": 1,
        "date": "2019-02-01T08:32:35-08:00",
        "body": "condimentum. Donec at arcu. Vestibulum ante ipsum primis in"
      },
      {
        "id": 7,
        "userId": 7,
        "videoId": 1,
        "date": "2019-03-03T08:26:33-08:00",
        "body": "est tempor bibendum. Donec felis orci, adipiscing"
      },
      {
        "id": 8,
        "userId": 10,
        "videoId": 2,
        "date": "2019-04-11T15:16:17-07:00",
        "body": "dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque"
      },
      {
        "id": 9,
        "userId": 6,
        "videoId": 2,
        "date": "2019-04-19T10:47:38-07:00",
        "body": "aliquam, enim nec tempus scelerisque, lorem ipsum sodales"
      },
      {
        "id": 10,
        "userId": 5,
        "videoId": 2,
        "date": "2019-04-04T06:51:14-07:00",
        "body": "sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam"
      },
      {
        "id": 11,
        "userId": 8,
        "videoId": 2,
        "date": "2019-04-22T14:07:49-07:00",
        "body": "Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit,"
      },
      {
        "id": 12,
        "userId": 5,
        "videoId": 2,
        "date": "2019-04-14T16:53:45-07:00",
        "body": "dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et,"
      },
      {
        "id": 13,
        "userId": 8,
        "videoId": 3,
        "date": "2019-04-17T22:52:38-07:00",
        "body": "justo sit amet nulla. Donec non justo. Proin non"
      },
      {
        "id": 14,
        "userId": 9,
        "videoId": 3,
        "date": "2019-04-19T23:10:09-07:00",
        "body": "euismod in, dolor. Fusce feugiat."
      },
      {
        "id": 15,
        "userId": 9,
        "videoId": 3,
        "date": "2019-04-11T06:39:22-07:00",
        "body": "id enim. Curabitur massa. Vestibulum accumsan neque et"
      },
      {
        "id": 16,
        "userId": 9,
        "videoId": 3,
        "date": "2019-04-09T06:35:25-07:00",
        "body": "ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis"
      }
    ],
    "profile": {
      "id": 1,
      "name": "Fred",
      "memberSince": "2019-01-01T06:35:25-07:00",
      "watched": [
        {
          "videoId": 1,
          "percentage": 100,
          "times": 3,
          "lastViewed": "2019-04-23T10:25:31-07:00"
        },
        {
          "videoId": 2,
          "percentage": 80,
          "times": 1,
          "lastViewed": "2019-04-22T17:31:46-07:00"
        }
      ],
      "subscriptions": [
        {
          "userId": 3
        }
      ]
    }
  }
