<template>
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
  <!--Hình chạy-->
  <div id="carouselId" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselId" data-slide-to="0" class="active"></li>
      <li data-target="#carouselId" data-slide-to="1"></li>
      <li data-target="#carouselId" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img src="../assets/images/header1.jpg" width="1550px" height="616px">
      </div>
      <div class="carousel-item">
        <img src="../assets/images/header2.jpeg" width="1550px" height="616px">
      </div>
      <div class="carousel-item">
        <img src="../assets/images/header3.webp" width="1550px" height="616px">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <br><br><br><br>
  <div class="container product-details" v-for="(item, index) in products" :key="index">
    <div class="row">
      <div class="col-md-6">
        
        <img :src="require(`@/assets/images/${item.image}`)" alt="Product Image" style="width: 100%; height: 450px;"
          class="img-fluid product-image">
      </div>
      <div class="col-md-6">
        <h2 class="product-title">{{ item.name }}</h2>
        <p class="product-price">{{ formatNumber(item.price) }}</p>
        <p class="product-description">{{ item.description }}</p>
        <div class="row">
          <div class="col-md-6">
            <router-link :to="'/cart/' +item.id">
              <button>
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label">Mua Ngay</span>
              </button>
            </router-link>
          </div>
          <div class="col-md-6 mt-2">
            <router-link to="/">
              Quay về
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="text-dark mt-2" style="background-color: #D0E7D2;">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-5">
                   <h6><b>THÔNG TIN</b></h6>
                    <p class="text-justify">
                        <b>
                            Mía Ơi không chỉ là một quán nước mà như một không gian văn hóa nhỏ tại địa
                             phương hiện tại và ở những nơi sau này Mía Ơi sẽ đến. Đó là "văn hoá" riêng của 
                             Mía Ơi và nó đặc biệt nhất theo cách của nó.
                        </b>
                    </p>
                </div>
                <div class="col-xs-6 mx-auto col-md-4">
                    <h6><b>THÔNG TIN NHANH</b></h6>
                    <ul class="footer-links">
                        <b>
                            <li>Mua hàng nhanh: 0909134492</li>
                            <li>Phản ánh phục vụ: 0909134492</li>
                            <li>Phản ánh sản phẩm: 0909134492</li>
                        </b>
                    </ul>
                </div>
            </div>
            <hr style="background-color: black;">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                        <a href="https://www.facebook.com/profile.php?id=100014351534501">Đỏ Thuận</a>.
                    </p>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="icons">
                        <li><a class="facebook" href="https://www.facebook.com/miaoiii/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                        <li><a class="linkedin" href="https://www.instagram.com/fks_rje/"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import databaseService from "@/databaseService";
import axios from 'axios';
const BASE_URL = 'http://localhost:3000';
export default {
  name: 'SelectProduct',
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      selectedProduct: null, // Thay vì 'product', bạn nên sử dụng 'products'
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
    async getProductById(productId) {
      try {
        // Tìm kiếm sản phẩm trong mảng products dựa trên productId
        const product = databaseService.products.find(item => item.id === productId);

        // Kiểm tra nếu sản phẩm tồn tại
        if (product) {
          this.selectedProduct = product;
        } else {
          console.error(`Không tìm thấy sản phẩm với ID ${productId}`);
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin sản phẩm:", error);
      }
    },
    async getProduct(productId) {
        try {
            const response = await axios.get(`${BASE_URL}/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product with ID ${productId}:`, error);
            throw error;
        }
    },
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
  },
  mounted() {
  this.getAllProduct()
  }


}
</script>
<style scoped>
body {
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #f8f9fa;
}

.navbar {
  background-color: #343a40;
  /* Màu nền thanh điều hướng */
}

.navbar-dark .navbar-nav .nav-link {
  color: #ffffff;
  /* Màu chữ thanh điều hướng */
}

.navbar-dark .navbar-toggler-icon {
  background-color: #ffffff;
  /* Màu biểu tượng toggle */
}

.navbar-dark .navbar-toggler {
  border-color: #ffffff;
  /* Màu đường viền toggle */
}

.product-details {
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-title {
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  color: #343a40;
}

.product-price {
  font-size: 24px;
  color: #007bff;
  margin-top: 10px;
}

.product-description {
  margin-top: 15px;
  color: #555;
  font-size: 16px;
}

button {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 17px;
  padding: 1em 2.7em;
  font-weight: 500;
  background: red;
  color: white;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 0.6em;
  cursor: pointer;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0.6em;
  margin-top: -0.25em;
  background-image: linear-gradient(rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3));
}

.label {
  position: relative;
  top: -1px;
}

.transition {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 500ms;
  background-color: green;
  border-radius: 9999px;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

button:hover .transition {
  width: 14em;
  height: 14em;
}

button:active {
  transform: scale(0.97);
}
/* Icon Mạng Xã Hội */
.icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.icons li
{
  display:inline-block;
  margin-bottom:4px
}
.icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.icons a{
  background-color:#818a91;
  color:#eceeef;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.icons a:active,.icons a:focus,.icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.icons a.facebook:hover
{
  background-color:#3b5998
}
.icons a.twitter:hover
{
  background-color:#00aced
}
.icons a.linkedin:hover
{
  background-color:#007bb6
}
.icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>