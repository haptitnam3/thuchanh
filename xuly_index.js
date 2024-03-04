class bang{
    constructor(ten,ngaysinh,cccd,diachi){
        this.ten=ten;
        this.ngaysinh=ngaysinh;
        this.cccd=cccd;
        this.diachi=diachi;
    }
}
const listData=[];
document.getElementById("batdau").addEventListener("click", function(event) {
    var hoTen = document.getElementById("input-hoten").value;
    var ngaySinh = document.getElementById("input-ngaysinh").value;
    var cccd = document.getElementById("input-cccd").value;
    var diaChi = document.getElementById("input-diachi").value;

    // Sử dụng thông tin đã lấy được ở đây
    console.log("Họ và tên: " + hoTen);
    console.log("Ngày sinh: " + ngaySinh);
    console.log("CCCD: " + cccd);
    console.log("Địa chỉ: " + diaChi);

    //lưu trữ lại data
    listData.push(new bang(hoTen,ngaySinh,cccd,diaChi));
    localStorage.setItem('Data', JSON.stringify(listData));


    // Chuyển đến trang "baithi.html" sau khi lấy thông tin
    window.location.href = "baithi.html";
});