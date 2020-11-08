let now = new Date();

if (now.getMonth() == 10) {
    
    let day = now.getDate() * 60 * 60 * 24;
    let hour = now.getHours() * 60 * 60;
    let minute = now.getMinutes() * 60;
    let second = now.getSeconds();

    let timePassed = day + hour + minute + second;

    let progressBar = document.querySelector("#bar1");
    let progressBarRemain = document.querySelector("#bar2");

    setInterval(() => {
        timePassed += 0.1;
        let procentPassed = (timePassed/2592000*100).toFixed(5);
        let procentRemain = (100 - procentPassed).toFixed(5);
        progressBar.style.width = procentPassed + "%";
        progressBar.innerHTML = procentPassed + "%";
        progressBarRemain.style.width = procentRemain + "%";
        progressBarRemain.innerHTML = procentRemain + "%";
    }, 100);



}