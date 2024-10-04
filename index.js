let pageContent = document.querySelector(".div-bg-video")
let cursor = document.querySelector(".cursor")

// without gasp

// pageContent.addEventListener("mousemove", function(cur){
// //  console.log(cur.x)
// cursor.style.left = cur.x+"px"
// cursor.style.top = cur.y+"px"

// })

// with gsap

 pageContent.addEventListener("mousemove", function(cur){
 gsap.to(cursor,{
    x: cur.x,
    y: cur.y,
    // duration: 0.2,
    // ease: "power1.out"

 })

 })
 pageContent.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale: 1,
        opacity:1
    })
 })

 pageContent.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale: 0,
        opacity:1
    })
 })

