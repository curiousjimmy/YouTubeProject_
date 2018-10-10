const API_URL = 'http://127.0.0.1:3000/';


fetch(API_URL)
    .then(response => response.json())
    .then(channelDatas => {
        const videosElement = document.querySelector('#videos');
        console.log(channelDatas);
        for (i = 0; i < channelDatas.length; i++) {
            channelDatas[i].videoItems.forEach((videoItem) => {
                console.log(videoItem);
                
                const videoElement = document.createElement('div');
                videoElement.className = 'card col-4';

                const img = document.createElement('div');
                img.src = videoItem.videoThumbnailUrl;
                /* img.className = 'embed-responsive embed-responsive-16by9';

                const iframe = document.createElement('iframe');
                iframe.width = '286';
                iframe.height = '180';
                iframe.src = `https://www.youtube.com/embed/${videoItem.videoId}`;
                iframe.frameBorder = '0'; */
                

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const h5 = document.createElement('h5');
                h5.className = 'card-title';
                h5.innerText = videoItem.videoTitle;

                /*  const p5 = document.createElement('p5');
                 p5.className = 'card-text';
                 p5.innerText = videoItem.videoDescription; */

                const a = document.createElement('a');
                a.className = 'btn btn-primary';
                a.innerText = 'Watch Now';
                a.href = `https://www.youtube.com/watch?v=${videoItem.videoId}`;

                videoElement.appendChild(img);
/*                 img.appendChild(iframe);
 */                videoElement.appendChild(cardBody);
                cardBody.appendChild(h5);
                /* cardBody.appendChild(p5); */
                cardBody.appendChild(a);

                videosElement.appendChild(videoElement);
            });
        }

    });