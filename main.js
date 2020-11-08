let now = new Date();
let daysPassedBox = document.querySelector('#days-passed');

if (now.getMonth() == 10) {
    
    let day = now.getDate() * 60 * 60 * 24;
    let hour = now.getHours() * 60 * 60;
    let minute = now.getMinutes() * 60;
    let second = now.getSeconds();

    let timePassed = day + hour + minute + second;

    let progressBar = document.querySelector("#bar1");
    let progressBarRemain = document.querySelector("#bar2");

    let procentPassed;
    let procentRemain;
    let daysPassed;
    
    setInterval(() => {
        let newNow = new Date();
        let day = newNow.getDate() * 60 * 60 * 24;
        let hour = newNow.getHours() * 60 * 60;
        let minute = newNow.getMinutes() * 60;
        let second = newNow.getSeconds();
        let newTimePassed = day + hour + minute + second;

        // Checking if timePassed is valid, if user wasn't focusing this tab timePassed+= 0.1 wasn't working so time froze
        if (newTimePassed > Math.ceil(timePassed)) {
            timePassed = newTimePassed;
        }
        
    }, 10000);

    setInterval(() => {
        timePassed += 0.1;
        procentPassed = (timePassed/2592000*100).toFixed(5);
        procentRemain = (100 - procentPassed).toFixed(5);
        daysPassed = (timePassed/86400).toFixed(5);
        daysPassedBox.innerHTML = daysPassed + " days";
        progressBar.style.width = procentPassed + "%";
        progressBar.innerHTML = procentPassed + "%";
        progressBarRemain.style.width = procentRemain + "%";
        progressBarRemain.innerHTML = procentRemain + "%";

    }, 100);

}




