
// this is for the tutorial section

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Copyrights',
        'name': 'manipulate text background.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a2',
        'title': 'Patents',
        'name': 'build gauge with css.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'Trademarks',
        'name': '3D popup card.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'Trade Secrets',
        'name': 'customize HTML5 form elements.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'Industrial Designs',
        'name': 'build gauge with css.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'IP Licensing and Agreements',
        'name': 'build gauge with css.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'title': 'IP in the Digital Age',
        'name': 'build gauge with css.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'Software and Intellectual Property',
        'name': 'build gauge with css.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'IP Issues in Artificial Intelligence (AI)',
        'name': 'build gauge with css.mp4',
        'duration': '3:38',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
