<template>
<body>

<div class="container">
  <div class="card">
    <div class="card-header">
      <img src="../assets/images/logo.png" width="100px" height="100px" alt="Admin Product">
      Đăng Nhập (Quản Trị Viên)
    </div>
    <div class="card-body">
      <form @submit.prevent="login">
        <div class="form-group">
          <input type="text" class="form-control" v-model="adminname" id="username" placeholder="Tài Khoản">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" v-model="password" id="password" placeholder="Mật Khẩu">
        </div>
        <button type="submit" class="btn btn-primary btn-submit">Đăng Nhập</button>
      </form>
      <div v-if="loginError" class="alert alert-danger text-center mt-3">{{ loginError }}</div>
    </div>
  </div>
</div>

</body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      adminname: '',
      password: '',
      loginError: ''
    };
  },
  methods: {
    login() {
      // Gửi yêu cầu GET để lấy dữ liệu admin từ db.json
      axios.get('http://localhost:3000/admin')
        .then(response => {
          // Kiểm tra thông tin đăng nhập
          const admin = response.data.find(admin => admin.adminname === this.adminname && admin.password === this.password);
          if (admin) {
            // Đăng nhập thành công
            alert('Đăng nhập thành công!');
            // Thực hiện các hành động tiếp theo, ví dụ: chuyển hướng đến trang quản trị
            this.$router.push('/admin')
          } else {
            // Đăng nhập thất bại
            this.loginError = 'Sai tên đăng nhập hoặc mật khẩu!';
          }
        })
        .catch(error => {
          console.error('Lỗi khi đăng nhập:', error);
          this.loginError = 'Đã xảy ra lỗi trong quá trình đăng nhập.';
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
      background-color: #f0f0f0;
    }
    .container {
      max-width: 600px;
      margin-top: 50px;
    }
    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      border: none;
    }
    .card-header {
      background-color: #618264;
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      border-bottom: none;
    }
    .card-body {
      padding: 30px;
    }
    .form-group {
      margin-bottom: 30px;
    }
    .btn-submit {
      width: 100%;
    }
    .btn-submit:hover {
      background-color: #2980b9;
    }
    .form-control:focus {
      border-color: #3498db;
      box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
    }
    .admin-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 5px solid #fff;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      margin: 0 auto;
    }
</style>