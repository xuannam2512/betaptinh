function TinhToan2So() {
    var a = parseInt(document.getElementById('firstNum').value);
    var b = parseInt(document.getElementById('secondNum').value);

    var checkCong = document.getElementById("plus");
    var checkTru = document.getElementById("sub");
    var checkNhan = document.getElementById("mul");
    var checkChia = document.getElementById("div");

    if(checkCong.checked == true) {
    	document.getElementById('result').value = (a + b)
    }

    if(checkTru.checked == true) {
    	document.getElementById('result').value = (a - b);
    }

    if(checkNhan.checked == true) {
    	document.getElementById('result').value = (a * b);
    }

    if(checkChia.checked == true) {
    	document.getElementById('result').value = (a / b);
    }

}