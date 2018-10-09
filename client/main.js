const API_URL = 'http://127.0.0.1:3000/channelinfo';
const videosElement = document.querySelector('#videos');


fetch(API_URL)
.then(response=>response.json())
.then(videos => {
    console.log(videos);
    videos.forEach((video)=>{
        const videosElement = document.createElement('div');
        videosElement.className =  'media';

        const img = document.createElement('img');
        img.src = video.videoItems[0].videoThumbnail;
        img.className = 'mr-3';
        videosElement.appendChild(img);

        const mediaBody = document.createElement('div');
        mediaBody.className = 'media-body';

        videosElement.appendChild(mediaBody);

        const h5 = document.createElement('h5');
        h5.className = 'mt-0';
        h5.textContent = video.videoItems[0].videoTitle;
        mediaBody.appendChild(h5);
        
    })
})