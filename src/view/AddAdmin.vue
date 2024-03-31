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
          <li>
            <router-link to="/aboutadmin" style="color:black;">
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
          <li class="goBar">
            <router-link to="/addadmin" style="color: white;">
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
      <h2 class="text-center mb-4 text-success">Thêm Nhân Sự</h2>
      <form @submit.prevent="addAdmin">
            <div class="form-group">
              <label for="hoTen">Tên Đăng Ký</label>
              <input type="text" class="form-control"  v-model="newAdmin.adminname" id="hoTen" placeholder="Nhập họ và tên" required>
            </div>
            <div class="form-group">
              <label for="hoTen">Mật Khẩu</label>
              <input type="text" class="form-control"  v-model="newAdmin.password" id="hoTen" placeholder="Nhập họ và tên" required>
            </div>
            <button type="submit" class="btn btn-primary">Thêm Admin</button>
      </form>
          <!-- Thông báo sau khi thêm -->
    <div v-if="addSuccess" class="success">Đã Thêm Nhân Sự!!</div>
    <div v-if="addError" class="error">{{ addError }}</div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newAdmin: {
        adminname: '',
        password: ''
      },
      addSuccess: false,
      addError: ''
    };
  },
  methods: {
    addAdmin() {
      // Gửi yêu cầu POST để thêm admin mới
      axios.post('http://localhost:3000/admin', this.newAdmin)
        .then(() => {
          // Reset form và hiển thị thông báo thành công
          this.newAdmin.adminname = '';
          this.newAdmin.password = '';
          this.addSuccess = true;
          this.addError = '';
        })
        .catch(error => {
          console.error('Lỗi khi thêm admin:', error);
          this.addSuccess = false;
          this.addError = 'Đã xảy ra lỗi trong quá trình thêm admin.';
        });
    }
  }
};
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
height: 100vh;
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