function fn() {
    let boy_name = document.getElementById('boy_name').value;
    let gilr_name = document.getElementById('girl_name').value;

    let l1 = boy_name.length;
    let l2 = gilr_name.length;

    let diff = 10 - Math.abs(l2 - l1);

    let percentage = (diff) / 10 * 100;
    document.getElementById("percentage").innerHTML = percentage;


}
