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
  <h1 class="mt-3">MiaOi SaiGon</h1>
  <!-- Nội dung trang web -->
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4 col-lg-4 mt-2" v-for="(item, index) in products" :key="index">
        <!-- Sản phẩm -->
        <div class="card">
          <img :src="require(`@/assets/images/${item.image}`)" class="card-img-top" alt="Product" style="width: 100%; height: 450px;">
          <div class="overlay">
            <div class="text">
              <router-link :to="{ name: 'Product', params: { id: item.id }}">
                <a href="#" class="btn btn-white">Mua Ngay</a>
              </router-link>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5> <!-- Sử dụng item.tensp thay vì item.name -->
            <h5 class="my-4 font-weight-bold" style="color: red">
              <u>{{ formatNumber(item.price) }}</u><br /> <!-- Sử dụng item.gia thay vì item.price -->
            </h5>
            <p class="card-text">{{ item.description }}</p>
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

export default {
  name: 'MainProduct',
  props: {
    msg: String
  },
  data() {
    return {
      products: [], // Thay vì 'product', bạn nên sử dụng 'products'
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
  },
  mounted() {
    this.getAllProduct(); // Gọi phương thức getAllProduct() khi thành phần được tạo
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding-top: 56px;
  /* Để giữ thanh điều hướng Bootstrap cố định */
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

.card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(0, 0, 0, 0.5);
}

.card:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: 0.5s ease;
}

.card:hover .text {
  top: 40%;
}

.btn-white {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  transition: 0.5s ease;
  opacity: 0;
}

.card:hover .btn-white {
  opacity: 1;
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

/*Mía ơi tới chơi*/
@import url("https://fonts.googleapis.com/css?family=Sacramento");

h1 {
  margin-top: 2px;
  background-color: white;
  margin-bottom: 0px;
  color: #fff6a9;
  font-size: 5em;
  text-shadow:
    0 0 5px #ffa500,
    0 0 15px #ffa500,
    0 0 20px #ffa500,
    0 0 40px #ffa500,
    0 0 60px #ff0000,
    0 0 10px #ff8d00,
    0 0 98px #ff0000;
  font-family: "Sacramento", cursive;
  text-align: center;
  animation: blink 3s infinite;
}

@keyframes blink {

  20%,
  24%,
  55% {
    color: white;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow:
      0 0 5px #ffa500,
      0 0 15px #ffa500,
      0 0 20px #ffa500,
      0 0 40px #ffa500,
      0 0 60px #ff0000,
      0 0 10px #ff8d00,
      0 0 98px #ff0000;
    color: #fff6a9;
  }
}
</style>
