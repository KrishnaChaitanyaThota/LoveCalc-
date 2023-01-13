function fn1() {
    let sum = 0;
    var yes_no1 = document.getElementsByName('yes_no1');
    var yes_no2 = document.getElementsByName('yes_no2');
    var yes_no3 = document.getElementsByName('yes_no3');
    var yes_no4 = document.getElementsByName('yes_no4');
    var yes_no5 = document.getElementsByName('yes_no5');



    yes_no1.forEach((evnt) => {
        if (evnt.checked) {
            sum = sum + parseInt(evnt.value);
            return;
        }
    });

    yes_no2.forEach((evnt) => {
        if (evnt.checked) {
            sum = sum + parseInt(evnt.value);
            return;
        }
    });

    yes_no3.forEach((evnt) => {
        if (evnt.checked) {
            sum = sum + parseInt(evnt.value);
            return;
        }
    });

    yes_no4.forEach((evnt) => {
        if (evnt.checked) {
            sum = sum + parseInt(evnt.value);
            return;
        }
    });

    yes_no5.forEach((evnt) => {
        if (evnt.checked) {
            sum = sum + parseInt(evnt.value);
            return;
        }
    });


    if (sum == 5) {
        document.getElementById("sum_relation").innerHTML = "Best Friends";
    } else {
        document.getElementById("sum_relation").innerHTML = "Friends";
    }


}
