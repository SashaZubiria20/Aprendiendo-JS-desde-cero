/*
    Visibility Change: Sirve para cuando hay un video o audio, no se siga reproduciendo al cambiar de pestaña y asi ahorrar recursos

*/

const video = document.getElementById('videoAPI')

// addEventListener('visibilitychange', (e) => {
//     if (document.visibilityState === 'visible') {
//         console.log('PLAY')
//         video.play()
//     } else if (document.visibilityState === 'hidden') {
//         console.log('PAUSE')
//         video.pause()
//     }
// })

addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause())