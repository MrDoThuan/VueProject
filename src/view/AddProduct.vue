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
            <router-link to="/aboutadmin" style="color: black;">
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
          <li class="goBar">
            <router-link to="/add" style="color: white;">
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
    <h2 class="text-center mb-4">Thêm Sản Phẩm</h2>
    <form @submit.prevent="addProduct">
        <div class="form-group">
            <label for="productCode">Mã Sản Phẩm: </label>
            <input type="text" v-model="newProduct.id" class="form-control" id="productCode" placeholder="Nhập mã sản phẩm">
        </div>
        <div class="form-group">
            <label for="productName">Tên Sản Phẩm:</label>
            <input type="text" v-model="newProduct.name" class="form-control" id="productName" placeholder="Nhập tên sản phẩm">
        </div>
        <div class="form-group">
            <label for="productName">Giá sản phẩm:</label>
            <input type="text" v-model="newProduct.price" class="form-control" id="productName" placeholder="Nhập tên sản phẩm">
        </div>
        <div class="form-group">
            <label for="productImage">Hình Ảnh:</label>
            <div class="input-group">
                <input type="text" v-model="newProduct.image" class="form-control" id="productImageURL" placeholder="URL của hình ảnh">
            </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="productCode">Số Lượng Mua: </label>
            <input type="text" v-model="newProduct.soluongmua" class="form-control" id="productPrice" placeholder="Nhập mã sản phẩm">
        </div>
        <div class="form-group col-md-6">
            <label for="productCode">Số Lượng Tồn: </label>
            <input type="number" v-model="newProduct.soluongton" class="form-control" id="productNumber" placeholder="Nhập mã sản phẩm">
        </div>
        </div>
        <div class="form-group">
            <label for="productDescription">Mô Tả:</label>
            <textarea class="form-control" v-model="newProduct.description" id="productDescription" rows="3" placeholder="Nhập mô tả sản phẩm"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Thêm Sản Phẩm</button>
    </form>
    <div v-if="addSuccess" class="success">Đã Thêm Sản Phẩm!!</div>
    <div v-if="addError" class="error">{{ addError }}</div>
</div>
  </body>
</template>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2"></script> -->
<script>
import axios from 'axios';

export default {
  data() {
    return {
      newProduct: {
        id: "",
      name: "",
      image: "",
      price: 0,
      soluongton: "",
      description: "c",
      soluongmua: "",
      },
      addSuccess: false,
      addError: ''
    };
  },
  methods: {
    addProduct() {
      // Gửi yêu cầu POST để thêm admin mới
      axios.post('http://localhost:3000/products', this.newProduct)
        .then(() => {
          // Reset form và hiển thị thông báo thành công
          this.newProduct.id="";
          this.newProduct.name="";
          this.newProduct.image="";
          this.newProduct.price= 0;
          this.newProduct.soluongton="";
          this.newProduct.description="";
          this.newProduct.soluongmua="";
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
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .form-group label {
            font-weight: bold;
        }
        .btn-primary {
            width: 100%;
        }
</style>