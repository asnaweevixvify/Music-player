let prevButton = document.querySelector('#prevbutton')
let playButton = document.querySelector('#playbutton')
let nextButton = document.querySelector('#nextbutton')
let progessBar = document.querySelector('.progress')
let progressContainer = document.querySelector('.bar')
let img = document.querySelector('img')
let song = document.querySelector('#myaudio')
let nameSongDisplay = document.querySelector('.h1-name')
let i = 1;

let nameSong=[
    {name:"เพลงตลก"},
    {name:"เพลงตื่นเต้น"},
    {name:"เพลงเหงา"},
    {name:"เพลงชิว"},
    {name:"เพลงซาน"}
]

function play(){
    if(playButton.classList.contains('fa-play')){
        playButton.classList.replace('fa-play' , 'fa-pause')
        img.classList.add('imgplay')
        img.style.animationPlayState = 'running';
        song.play();
        song.addEventListener('timeupdate',function(){
            let progress = (song.currentTime / song.duration) * 100;
            progessBar.style.width = `${progress}%`
        })
    }
    else if(playButton.classList.contains('fa-pause')){
        playButton.classList.replace('fa-pause' , 'fa-play')
        img.style.animationPlayState = 'paused';
        song.pause();
    }

}

function next(){
    img.classList.remove('imgplay')
    progessBar.style.width = '0%'
    i+=1
    if(i>nameSong.length){
        i-=nameSong.length
    }
    img.src=`/pic/${i}.jpg`
    song.src=`/song/${i}.mp3`
    song.id='myaudio';
    nameSongDisplay.innerHTML = `${nameSong[i-1].name}`
    if(playButton.classList.contains('fa-pause')){
        song.play();
    }
    else{
        song.pause();
    }
    
}

function prev(){
    img.classList.remove('imgplay')
    progessBar.style.width = '0%'
    i-=1
    if(i===0){
        i+=nameSong.length
    }
    img.src=`/pic/${i}.jpg`
    song.src=`/song/${i}.mp3`
    song.id='myaudio';
    nameSongDisplay.innerHTML = `${nameSong[i-1].name}`
}
progressContainer.addEventListener('click',function(e){
    const width = this.clientWidth
    const clickX = e.offsetX;
    const duration = song.duration
    song.currentTime = (clickX/width*duration);
})
song.addEventListener('ended',function(){
    progessBar.style.width = '0%'
    i+=1
    if(i>nameSong.length){
        i-=nameSong.length
    }
    img.src=`/pic/${i}.jpg`
    song.src=`/song/${i}.mp3`
    song.id='myaudio';
    nameSongDisplay.innerHTML = `${nameSong[i-1].name}`
    song.play();
})