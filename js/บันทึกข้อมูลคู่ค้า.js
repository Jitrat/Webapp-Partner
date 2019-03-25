function checkText() {
    var dataNumberPartner = document.getElementById("numberpartner").value;
    var dataCompany = document.getElementById("companyname").value;
    var dataTel = document.getElementById("tel").value;
    var dataEmail = document.getElementById("email").value.indexOf('@');
    var dataAddress = document.getElementById("address").value;
    var dataFax = document.getElementById("fax").value;
    var dataType = document.getElementById("typecustomer").value;
    if(dataNumberPartner == ""){
        alert("กรุณากรอกรหัสคู่ค้า");
    }
    else if(dataCompany == ""){
        alert("กรุณากรอกชื่อบริษัท");
    }
    else if(dataTel.length != 10){
        alert("เบอร์โทรศัพท์ต้องมี 10 หลัก ");
    }
    else if(dataEmail == -1){
        alert("Emailผิดพลาด");
    }
    else if(dataAddress == ""){
        alert("กรุณากรอกที่อยู่");
    }
    else if(dataFax == ""){
        alert("กรุณากรอกFax");
    }
    else if(dataType == "choose"){
        alert("กรุณาเลือกประเภทลูกค้า");
    }
    else{
        alert("บันทึกข้อมูลสำเร็จ"); 
        location.href('./หน้าหลัก.html')
    }   
}