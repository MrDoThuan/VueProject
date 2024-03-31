<template>
  <body>
    <div class="sidebar">
      <img src="../assets/images/logo.png" alt="Admin Product">
        <ul class="listBar">
          <li>
              <router-link to="/admin" style="color: black;">
                  <i class="fa fa-list"></i>
                  <span><b>Danh Sách Sản Phẩm</b></span>
              </router-link>
          </li>
          <li class="goBar">
            <router-link to="/aboutadmin" style="color:white;">
              <i class="fa fa-user"></i>
              <span><b>Thông tin Tài Khoản</b></span>
            </router-link>
          </li>
          <li>
            <router-link to="/admin" style="color: black;">
                    <i class="fas fa-chart-bar"></i>
              <span><b>Thông Tin Mía Ơi</b></span>
            </router-link>
          </li>
          <li>
            <router-link to="/addadmin" style="color: black;">
                    <i class="fas fa-user-plus"></i>
              <span><b>Thêm Nhân Sự</b></span>
            </router-link>
          </li>
          <li>
            <router-link to="/add" style="color: black;">
                    <i class="fas fa-add"></i>
              <span><b>Thêm Sản Phẩm</b></span>
            </router-link>
          </li>
          <li>
            <router-link to="/loginadmin" style="color: black;">
              <i class="fas fa-sign-out-alt"></i>
              <span><b>Đăng Xuất</b></span>
            </router-link>
          </li>
        </ul>
    </div>

    <div class="container">
      <h2 class="text-center mb-4 text-success">Thông Tin Nhân Sự</h2>
      <img src="../assets/images/admin.jpg" alt="Profile Picture" class="profile-img">
      <form>
        <div class="form-row">
            <div class="form-group col-md-6">
              <label for="hoTen">Họ và Tên:</label>
              <input type="text" class="form-control" id="hoTen" value="Huỳnh Hữu Thuận" required>
            </div>
            <div class="form-group col-md-6">
              <label for="chucVu">Chức Vụ:</label>
              <input type="text" class="form-control" id="chucVu" value="Quản Trị Viên" required>
            </div>
            <div class="form-group col-md-6">
              <label for="ngaySinh">Ngày Tháng Năm Sinh:</label>
              <input type="input" class="form-control" id="ngaySinh" value="11/08/2004" required>
            </div>
            <div class="form-group col-md-6">
              <label for="tuoi">Tuổi:</label>
              <input type="number" class="form-control" id="tuoi" value="20" required>
            </div>
            <div class="form-group col-md-6">
                <label for="tuoi">Số điện thoại:</label>
                <input type="number" class="form-control" id="sdt" value="0909134492" required>
              </div>
            <div class="form-group col-md-6">
              <label for="gioiTinh">Giới Tính:</label>
              <select class="form-control" id="gioiTinh" required>
                <option value="" disabled selected>Chọn giới tính</option>
                <option selected>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </select>
            </div>
        </div>
        <div class="form-group">
          <label for="queQuan">Quê Quán:</label>
          <input type="text" class="form-control" id="queQuan" value="Hồ Chí Minh" required>
        </div>
        <div class="form-group">
          <label for="diaChi">Địa Chỉ:</label>
          <input type="text" class="form-control" id="diaChi" value="532/21/20/12 Khu y Tế Kĩ thuật Cao" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" value="huuthuan110804@gmail.com" required>
        </div>
      </form>
    </div>
  </body>
</template>

<script>
export default {
  name: 'AboutAdmin',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
display: flex;
}
.sidebar {
background-color: black;
padding: 0 1.5rem;
top: 0px;
left: 0px;
color:white;
width: 110px;
height: auto;
transition: all 0.5s linear;
}
.sidebar img {
width: 70px;
height: 60px;
overflow: hidden;
margin-top: 10px;
}
.sidebar:hover{
width: 250px ;
background-color: #b5f0b5;
color: black;
transition: 0.5s;
}
.listBar{
height: 70px;
padding: 0;
list-style: none;
position: relative;
}
.listBar li {
padding: 1rem;
margin: 8px 0px;
border-radius: 10px;
}
.listBar li:hover,
.goBar 
{
background-color: green;
color: #fff;
}
.listBar a {
font-size: 14px;
display: flex;
text-decoration: none;
align-items: center;
gap: 1.5rem;
}
.listBar a span {
overflow: hidden;
}
.listBar a i{
font-size: 1.3rem;
}

.container {
        max-width: 500px;
        margin: auto;
        padding: 30px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: auto;
        display: block;
        margin-bottom: 20px;
}
.form-group {
        margin-bottom: 25px;
}
.form-group label {
        font-weight: bold;
}
.form-control {
        border-radius: 20px;
}
</style>