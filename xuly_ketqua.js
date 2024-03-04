// Lấy dữ liệu mảng từ LocalStorage
var Data = localStorage.getItem('Data');

// Kiểm tra dữ liệu tồn tại
if (Data) {
    var DsBaiThi = JSON.parse(Data);
    // Kiểm tra số lượng phần tử trong mảng DsBaiThi
    var mang=Object.values(DsBaiThi[0])
    console.log(mang);
    var resultDiv = document.getElementById("result");

        // Chèn giá trị của mảng[0] vào phần tử div
    resultDiv.innerHTML = mang[0];
}