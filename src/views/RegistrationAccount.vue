<template>
  <!-- Thanh điều hướng Bootstrap -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #618264; width: 100%;">
    <img src="../assets/images/logo.png" width="50px" height="70px">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/" class="text-light mr-2"><span class="fa fa-list"></span> Trang Chủ <span
              class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/registration" class="text-light mr-2"><span class="fa fa-bell"></span> Đăng Kí</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="text-light mr-2"><span class="fa fa-user"></span> Đăng Nhập</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="text-light"><span class="fa fa-shopping-cart"></span>Giỏ hàng</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <br><br><br><br>
<div class="container mid">
    <h2 class="title text-danger text-center">Đăng ký thành viên</h2>
    <form @submit.prevent="addUser">
        <div class="form-group position-relative">
            <label for="username" class="title">Tên đăng nhập:</label><span id="errorSname" class="text-danger"></span>
            <div class="input-group">
                <input type="text" v-model="newUsers.name" class="form-control" placeholder="Nhập tên đăng nhập">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
        </div>
        <div class="form-group position-relative">
            <label for="password" class="title">Mật khẩu:</label><span id="errorpass"  class="text-danger"></span>
            <div class="input-group">
                <input type="password" v-model="newUsers.password" class="form-control"  placeholder="Nhập mật khẩu">
                <span class="input-group-text eye-icon"><i class="fa fa-eye"></i></span>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="terms"  v-model="addcheckbox">
                <label class="form-check-label title" for="terms">
                    Tôi đồng ý với chính sách thành viên và các điều khoản
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn-danger btn-block title" name="submit" :disabled="!addcheckbox">Đăng kí</button>
    </form>
    <!-- Thông báo sau khi thêm -->
    <div v-if="addSuccess" class="success">Đăng Kí Thành Công!!</div>
    <div v-if="addError" class="error">{{ addError }}</div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      newUsers: {
        name: '',
        password: ''
      },
      addSuccess: false,
      addError: '',
      addcheckbox: false,
    };
  },
  methods: {
    addUser() {
      // Gửi yêu cầu POST để thêm admin mới
      axios.post('http://localhost:3000/users', this.newUsers)
        .then(() => {
          // Reset form và hiển thị thông báo thành công
          this.newUsers.name = '';
          this.newUsers.password = '';
          this.addcheckbox = true;
          this.addSuccess = true;
          this.addError = '';
        })
        .catch(error => {
          console.error('Lỗi khi đăng kí:', error);
          this.addSuccess = false;
          this.addError = 'Đã xảy ra lỗi trong quá trình đăng kí.';
        });
    }
  }
};
</script>
<style scoped>
        .mid {
            max-width: 500px;
            margin: 50px auto;
            border: 1px solid #ced4da;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: white;
        }
        .navbar {
      background-color: #343a40; /* Màu nền thanh điều hướng */
    }
    .navbar-dark .navbar-nav .nav-link {
      color: #ffffff; /* Màu chữ thanh điều hướng */
    }
    .navbar-dark .navbar-toggler-icon {
      background-color: #ffffff; /* Màu biểu tượng toggle */
    }
    .navbar-dark .navbar-toggler {
      border-color: #ffffff; /* Màu đường viền toggle */
    }
        .form-group {
            margin-bottom: 25px;
        }

        label {
            font-weight: bold;
            color: #495057;
        }

        .btn-primary {
            background-color: #007bff;
            border: 1px solid #007bff;
            transition: background-color 0.3s;
        }

        .btn-primary:hover {
            background-color: #0056b3;
            border: 1px solid #0056b3;
        }

        .eye-icon {
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: #6c757d;
            transition: color 0.3s;
        }

        .eye-icon:hover {
            color: #495057;
        }

        .eye-icon i {
            font-size: 18px;
        }

        .eye-icon.active i::before {
            content: "\f070";
        }

        .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #007bff;
            border-color: #007bff;
        }

        .custom-control-input:checked ~ .custom-control-label::after {
            background-color: #007bff;
        }

        .custom-radio .custom-control-label::before {
            border-radius: 50%;
        }

        .form-control {
            border: 1px solid #ced4da;
            border-radius: 5px;
            transition: border-color 0.3s;
        }

        .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
        }

        #ChuyenButton {
            display: none;
            transition: background-color 0.3s, border-color 0.3s;
        }

        #ChuyenButton:hover {
            background-color: greenyellow;
            border: 1px solid greenyellow;
            color: black;
        }

        #ChuyenButton:active {
            background-color: green;
            border: 1px solid green;
        }
        input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid #555;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]:checked {
  background: linear-gradient(45deg, #e44d26, #f16529);
  border-color: #e44d26;
}

input[type="checkbox"]:checked::before {
  content: "\2713";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: #fff;
}
.title {
    font-family: 'Pacifico', cursive;
     margin-top: 4px;
}
</style>