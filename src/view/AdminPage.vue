<template>

  <body>
    <div class="sidebar">
      <img src="../assets/images/logo.png" alt="Admin Product">
      <ul class="listBar">
        <li class="goBar">
          <router-link to="/admin" style="color: white;">
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
        <li>
          <router-link to="/" style="color: black;">
            <i class="fas fa-sign-out"></i>
            <span><b>Quay về trang chủ</b></span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="body-nav">
      <div class="body-header">
        <div class="title-color">
          <h1>Danh Sách Sản Phẩm</h1>
        </div>
        <img src="../assets/images/admin.jpg" alt="AdminImage">
      </div>
      <div class="body-list">
        <table class="table">
          <thead>
            <tr class="align-middle text-center">
              <th>STT</th>
              <th>Hình Sản Phẩm</th>
              <th>Mã Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá</th>
              <th>Số lượng tồn</th>
              <th>Mô Tả</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="index">
              <td scope="row">1</td>
              <td><img :src="require(`@/assets/images/${item.image}`)" style="width: 110px; height: 170px;"></td>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.soluongton }}</td>
              <td>{{ item.description }}</td>
              <td>
                <button class="edit" type="submit"><span class="fa fa-pen-to-square"></span> Sửa</button>
                <button class="delete" @click="deleteProduct(item.id)" type="delete"><span class="fa fa-trash"></span> Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </body>
</template>

<script>
import databaseService from "@/databaseService";
import axios from 'axios';
const BASE_URL = 'http://localhost:3000';
export default {
  name: 'AdminPage',
  props: {
    msg: String
  },
  data() {
    return {
      products: [], // Khai báo mảng products để lưu dữ liệu sản phẩm
    }
  },
  methods: {
    formatNumber(price) {
      if (!price) return "";
      return price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
    // Phương thức để lấy dữ liệu từ API khi thành phần được tạo
    async getAllProduct() {
      try {
        // Gửi yêu cầu GET đến API để lấy dữ liệu sản phẩm
        this.products = await databaseService.getAllProducts("products"); // Thay 'items' bằng tên tương ứng với mảng trong db.json
        // Giữ lại 8 phần tử cuối cùng 
        // this.products = this.products.slice(-8);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
      console.log(this.products);
    },
    async deleteProduct(productId) {
        try {
            const response = await axios.delete(`${BASE_URL}/products/${productId}`);
            this.getAllProduct();
            return response.data;
            
        } catch (error) {
            console.error(`Error deleting product with ID ${productId}:`, error);
            throw error;
        }
    },
  },
  mounted() {
    this.getAllProduct(); // Gọi phương thức getAllProduct() khi component được tạo
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
  color: white;
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

.sidebar:hover {
  width: 300px;
  background-color: #b5f0b5;
  color: black;
  transition: 0.5s;
}

.listBar {
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
.goBar {
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

.listBar a i {
  font-size: 1.3rem;
}

.body-nav {
  background-color: white;
  padding: 1.0rem;
  width: 100%;
}

.body-header img {
  border-radius: 50%;
  cursor: pointer;
  width: 70px;
  height: 70px;
}

.body-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 10px;
  padding: 10px 2rem;
  margin-bottom: 1rem;
}

.body-list {
  border-radius: 10px;
  margin-top: 1rem;
  padding: 2rem;
  background-color: #fff;
}

table {
  width: 100%;
}

thead {
  background-color: #C1CDC1;
  border-radius: 10px;
}

th {
  font-size: 16px;
  color: black;
  text-align: center;
}

tbody {
  padding: 15px;
  background-color: #fff;
}

td {
  font-size: 14px;
  text-align: center;
  color: black;
}

.title-color {
  color: green;
}

.body-list button {
  padding: 1 0rem;
  border-radius: 10px;
  font-size: 15px;

}

.body-list button.edit {
  background-color: blue;
  color: #fff;
}

.body-list button.delete {
  background-color: red;
  color: #fff;
}
</style>
