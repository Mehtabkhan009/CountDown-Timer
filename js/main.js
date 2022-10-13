const dayEle   = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minsEle = document.getElementById('mins');
const secondsEle = document.getElementById('seconds');

 const newYear = "1 jan 2023";

 function  counter(ele) {
    const newYeardate = new Date(newYear);

    const currentDate = new Date();
    const totalseconds = Math.floor(newYeardate - currentDate ) / 1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)% 24
    const mins = Math.floor(totalseconds/60)% 60
    const seconds = Math.floor(totalseconds)% 60
    // console.log(days,hours,mins,seconds);

    dayEle.innerHTML=days;
    hoursEle.innerHTML=timeformat(hours);
    minsEle.innerHTML=timeformat(mins);
    secondsEle.innerHTML=timeformat(seconds);

    function timeformat(time){
        return time<10?(`0${time}`):time
    }
} 
counter();
setInterval(counter, 1000)


// const dayEle   = document.getElementById('days');
// const hoursEle = document.getElementById('hours');
// const minsEle = document.getElementById('mins');
// const secondsEle = document.getElementById('seconds');

// const commingYear = "1 jan 2023";
// function counter(){
//     const yearTocome = new Date(commingYear)
//     const currentDate = new Date();
//      const totalseconds = (yearTocome - currentDate)/1000;
//      const days = Math.floor(totalseconds/3600/24)
//      const hours = Math.floor(totalseconds/3600)%24
//      const mins = Math.floor(totalseconds/60)%60
//      const seconds = Math.floor(totalseconds)%60
//      console.log(days ,hours,mins,seconds);

//     dayEle.innerHTML= timeFormat(days)
//     hoursEle.innerHTML= timeFormat(hours)
//     minsEle.innerHTML= timeFormat(mins)
//     secondsEle.innerHTML= timeFormat(seconds)
//     function timeFormat(time){
//         return time <10?(`0${time}`):time
//     }
// }
// counter()
setInterval(counter , 1000)
