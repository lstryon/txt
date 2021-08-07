let video = document.getElementById("vd");

function diminuir_vel(){
    video.playbackRate -= 0.1
}

function aumentar_vel(){
    video.playbackRate += 0.1

}

function comecar(){
    video.play()
}

function parar(){
    video.pause()
    video.currentTime = 0

}

function avancar(){
    video.currentTime += 15
}

function retroceder(){
    video.currentTime -= 15
}