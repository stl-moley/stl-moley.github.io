let t1 = gsap.timeline();

t1.from('.letter1', {
duration: 2.5,
opacity: 0,
stagger: 0.25,
color: '#A12A0E'
})

t1.to('.letter1', {
duration: 0.5,
delay: 0.5,
fontSize: '16rem',
x: -280,
y: 100

})

t1.to('.letter2', {
duration: 0.5,
delay: -0.5,
fontSize: '8rem',
x: -200,
y: -100
})

t1.to('.letter3', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '8rem',
    x: -190,
    y: 180
})

t1.to('.letter4', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '10rem',
    x: -100,
    y: -50
})

t1.to('.letter5', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '8rem',
    x: 20,
    y: 250
})

t1.to('.letter6', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '10rem',
    x: 80,
    y: -150
})

t1.to('.letter7', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '16rem',
    x: 280,
    y: 150
})

t1.to('.letter8', {
    duration: 0.5,
    delay: -0.6,
    fontSize: '16rem',
    x: 280,
    y: 150
})

t1.from('header', {
    duration: 0.8,
    opacity: 0,
    y: 40
})

t1.from('.hero', {
    duration: 1,
    opacity: 0,
    height: 0

}, "<-0.5")

t1.from('.triangle', {
    duration: 1,
    opacity: 0,
}, "<0.5")

t1.from('.lines', {
    duration: 1,
    opacity: 0,
}, "<0.5")


function emVisible(){
    if (x.matches){
        t1.to('.letter1', {
            x: 0,
            y: 0
            })

            t1.from('.letter8', {
            duration: 0.5,
            delay: 0.2,
            x: 0,
            y: 0
            })
    } 
}

var x = window.matchMedia("(max-width:600px)")

emVisible(x)

