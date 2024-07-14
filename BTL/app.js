const music = new Audio('audio/nhac-trap-cang-nhat-2023.mp3');
// music.play();

const songs = [
    {
        id: "1",
        songName: `Tetvoven <br>
        <div class="subtitle">Wxrdie, Andree Right Hand, Machiot</div>`,
        poster:"ảnh/1.jpg"
    },
    {
        id: "2",
        songName: `Nhạc Trap Căng Nhất 2023<br>
        <div class="subtitle">Wxrdie, RPT JasonDilla, 24K.Right</div>`,
        poster:"ảnh/2.jpg"
    },
    {
        id: "3",
        songName: `CHÊ HỘ<br>
        <div class="subtitle">Wxrdie, Gill, Lucin3x</div>`,
        poster:"ảnh/3.jpg"
    },
    {
        id: "4",
        songName: `CẦN GÌ NÓI IU <br>
        <div class="subtitle">Wxrdie</div>`,
        poster:"ảnh/4.jpg"
    },
    {
        id: "5",
        songName: `Trí Trá<br>
        <div class="subtitle">Wxrdie, Nclownz</div>`,
        poster:"ảnh/5.jpg"
    }, 
    {
        id: "6",
        songName: `Youngz <br>
        <div class="subtitle">Wxrdie, Tommy Tèo</div>`,
        poster:"ảnh/6.jpg"
    },
    {
        id: "7",
        songName: `Thích Quá Rùi Nà <br>
        <div class="subtitle">Wxrdie,tlinh, Trung Trần, MCK, Phongkhin</div>`,
        poster:"ảnh/1.jpg"
    },
    {
        id: "8",
        songName: `Kỷ Nguyên Mới <br>
        <div class="subtitle">Wxrdie, KayC, Machiot</div>`,
        poster:"ảnh/8.jpg"
    },
    {
        id: "9",
        songName: `Chơi Đồ <br>
        <div class="subtitle">Wxrdie, MCK, Sony Tran </div>`,
        poster:"ảnh/9.jpg"
    },
    {
        id: "10",
        songName: `Ổ QUỶ<br>
        <div class="subtitle"> DMT, Nguyễn Băng Qua, Trần Lả Lướt, Rocky CDE</div>`,
        poster:"ảnh/10.jpg"
    },
    {
        id: "11",
        songName: `ĐỢI <br>
        <div class="subtitle">52Hz</div>`,
        poster:"ảnh/11.jpg"
    },
    {
        id: "12",
        songName: `Tối Nay Ta Đi Đâu Nhờ <br>
        <div class="subtitle">RPT MCK</div>`,
        poster:"ảnh/12.jpg"
    },
    {
        id: "13",
        songName: `PHONG <br>
        <div class="subtitle">VSTRA</div>`,
        poster:"ảnh/13.jpg"
    },
    {
        id: "14",
        songName: `TỪNG QUEN  <br>
        <div class="subtitle">WREN EVANS</div>`,
        poster:"ảnh/14.jpg"
    },
    {
        id: "15",
        songName: `nếu lúc đó <br>
        <div class="subtitle">tlinh</div>`,
        poster:"ảnh/15.jpg"
    },
    {
        id: "16",
        songName: `Đáy Biển 海底 - Nhất Chi Lựu Liên<br>
        <div class="subtitle">支榴莲</div>`,
        poster:"ảnh/16.jpg"
    },
    {
        id: "17",
        songName: ` Chơi Như Tụi Mỹ <br>
        <div class="subtitle">Andree Right Hand</div>`,
        poster:"ảnh/17.jpg"
    },
    {
        id: "18",
        songName: `LỆ LƯU LY <br>
        <div class="subtitle">VŨ PHỤNG TIÊN x DT TẬP RAP x DRUM7</div>`,
        poster:"ảnh/18.jpg"
    },

]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
  
});

let masterPlay =document.getElementById('masterPlay');
let wave =document.getElementById('wave');


masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');

    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105,.0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `ảnh/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els)=> {
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=> {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.with = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }  
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.with = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=> {
    index-=1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length; 
    }   
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `ảnh/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els)=> {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++; 
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1; 
    }   
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `ảnh/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els)=> {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});




































let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft +=330;
});
pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -=330;
});
