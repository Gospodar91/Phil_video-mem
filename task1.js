"use strict";

const play=document.getElementById('myVideo')
const btn=document.getElementById('myBtn')

 const onClick=(e)=>{
     play.play()
     btn.removeEventListener('click',onClick)
 }
 btn.addEventListener('click',onClick)
 
//hello