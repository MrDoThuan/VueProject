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

  <br><br><br><br>
  <div class="container">
    <table class="table cart-table">
      <thead class="thead-light">
        <tr>
          <th scope="col"><input type="checkbox"></th>
          <th scope="col">STT</th>
          <th scope="col">Hình Ảnh</th>
          <th scope="col">Tên Sản Phẩm</th>
          <th scope="col">Giá Sản Phẩm</th>
          <th scope="col">Size</th>
          <th scope="col">Số lượng</th>
          <th scope="col">Thành Tiền</th>
          <th scope="col" style="width: 170px;">Thao Tác</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cart-item">
          <td class="align-middle"><input type="checkbox">
          </td>
          <td class="align-middle"><b></b></td>
          <td class="align-middle">
            <!--Lấy hình ảnh-->
            <img src="" alt="Produt Image">
          </td>
          <td class="align-middle">
            <div class="item-details">
              <!--Lấy tên sản phẩm-->
              <div class="item-title" style="font-size: 20px;">Name</div>
            </div>
          </td>
          <!--Lấy giá sản phẩm-->
          <td class="align-middle item-price"></td>
          <!--Lấy size-->
          <td class="align-middle item-size"></td>
          <!--Lấy số lượng sản phẩm-->
          <td class="align-middle item-quantity" ><input type="text" style="width: 40px!important"></td>
          <!--Lấy tổng tiền-->
          <td class="align-middle item-total"></td>
          <td class="align-middle item-actions">
            <button class="edit"><i class="fa fa-edit"></i> Sửa</button>
              <button class="delete"><i class="fa fa-trash"></i> Xóa</button>
          </td>
        </tr>
        <!-- Thêm các cart-item khác nếu cần -->
      </tbody>
      <tfoot>
      <tr class="cart-item">
          <td></td>
          <td></td>
          <td colspan="5" class="text-right"><strong>Tổng Tiền:</strong></td>
          <td class="total-price">$</td>
          <td class="align-middle item-actions">
              <router-link to="/order"><button class="bill"><i class="fa fa-list"></i> Hóa Đơn</button></router-link>
            </td>
        </tr>
      </tfoot>
    </table>
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
export default {
  name: 'CartProduct',
  props: {
    msg: String,
  }
}
</script>
<style scoped>
    body {
      background-color: #f8f9fa;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    .cart-table {
      width: 1200px;
      border-collapse: collapse;
      margin-top: 20px;
    }

    .cart-item {
      border: 1px solid #ddd;
      border-radius: 10px;
      overflow: hidden;
      background-color: #fff;
      margin-bottom: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease-in-out,border 0.2s ease-in-out;
    }

    .cart-item:hover {
      transform: scale(1.02);
      border: 1px solid transparent;
    }

    .cart-item img {
      max-width: 100%;
      height: auto;
      border-bottom: 1px solid #ddd;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .item-details {
      padding: 20px;
    }

    .item-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }

    .item-size,
    .item-topping,
    .item-price,
    .item-actions {
      font-size: 16px;
      margin-bottom: 8px;
      color: #555;
    }

    .item-price {
      font-size: 20px;
      font-weight: bold;
      color: #e44d26;
    }

    .item-actions button {
      padding: 5px 10px;
      margin-right: 5px;
      font-size: 14px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }

    .item-actions button.edit {
      background-color: #17a2b8;
      color: #fff;
    }

    .item-actions button.delete {
      background-color: #dc3545;
      color: #fff;
    }
    
    .item-actions button.bill {
      background-color: #f16529;
      color: #fff;
    }

    .item-actions button:hover {
      background-color: #555;
    }

    .total-price {
      font-size: 24px;
      font-weight: bold;
      color: #e44d26;
    }

    .table th, .table td {
      border: none;
    }

    .table thead th {
      background-color: #e44d26;
      color: #fff;
      border: none;
    }

    .table tfoot th {
      background-color: #343a40;
      color: #fff;
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