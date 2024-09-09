


// document.addEventListener("DOMContentLoaded", function () {
//     fetch('./Footer/index.html').then(res => {
//         if (!res.ok) {
//             throw new Error("Lỗi mạng")
//         }
//         return res.text()
//     }).then(data => {
//         const footer = document.getElementById('footer')
//         footer.innerHTML = data

//         const link = document.createElement('link')
//         link.rel = 'stylesheet'
//         link.href = './Footer/footer.css'
//         document.head.appendChild(link)

//     }).then(() => {
//         const subscribe = document.querySelector("#subscribe")
//         if (subscribe) {
//             subscribe.addEventListener("submit", function (event) {
//                 event.preventDefault();
//                 console.log('aaa',document.querySelector("#email").value);
//                 let email = document.querySelector("#email").value;
//                 let confirm = document.querySelector("#confirm").value;

//                 if (email == confirm) {
//                     document.querySelector("#subscribe>p:last-child").innerText = "Thank You for signing up! Success"
//                     document.querySelector("#subscribe>p:last-child").style.color = "green";
//                     document.querySelector("#subscribe>p:last-child").style.visibility = "visible";
//                 }
//                 else {
//                     document.querySelector("#subscribe>p:last-child").innerText = "Email address do not match!"
//                     document.querySelector("#subscribe>p:last-child").style.color = "red";
//                     document.querySelector("#subscribe>p:last-child").style.visibility = "visible";
//                 }
//             })
//         }
//     }).catch(err => {
//         console.log("Something went wrong!!!");
//     })
// })
const template = `
  <div id="footer1">
    <div id="contact">
    <p id="mailp">
        Nhận email ưu đãi & tin tức mới nhất từ chúng tôi!!
    </p>
   
    <form id="subscribe">
        <p id="mailp">
            Nhập Email
        </p>
        <!-- <input class="email" type="email" required> -->
        <input id="email" class="email" type="email" >
        <!-- <div id="info">i</div> -->
        <p id="mailp">
            Xác nhận Email
        </p>
        <!-- <input class="email" type="email" required> -->
        <input id="confirm" class="email" type="email" >
        <button id="submitemail" type="submit">Gửi thông tin</button>
        <p id="subscribed"></p>
    </form>
    </div>
    <div id="links">
        <div>
            <h4>CHĂM SÓC KHÁCH HÀNG </h4>
            <p>Vận chuyển</p>
            <p>Trả lại & Trao đổi</p>
            <p>Theo dõi đơn hàng </p>
            <p>Liên hệ với chúng tôi </p>
            <p>Trợ giúp & Câu hỏi thưởng gặp</p>
        </div>

        <div>
            <h4>TÀI KHOẢN CỦA TÔI</h4>
            <p>Lịch sử đặt hàng</p>
            <p>Danh sách yêu thích</p>
            <p>Đăng nhập hoặc Đăng kí</p>
        </div>

        <div>
            <h4>KHÁM PHÁ</h4>
            <p>Về chúng tôi</p>
            <p>Mua sắm theo mùi hương</p>
            <p>Tin mới & Đang diễn ra</p>
        </div>

        <div>
            <h4>THÔNG TIN CỬA HÀNG</h4>
            <p>Danh sách cửa hàng </p>
        </div>
    </div>
</div>

<div id="footer2">
    <div>
        <p id="mediap">KẾT NỐI</p>
        <div id="medialinks">
          <a href="https://www.facebook.com/profile.php?id=61561498092832"><img src="./images/icon.jpg" alt=""></a>
        </div>
        <img src="./images/momo.png" alt="">
    </div>
    <div >
        <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfa8fc09a/Happiness_Guaranteedtimes.jpg" alt="">
        <a>Sơ Đồ</a> | <a>Điều Khoản Sử Dụng</a> | <a>Chính Sách Bảo Mật</a>
        <br>
        <p id="copyright">@Soundarya. All Rights Reserved.</p>
    </div>
</div>
`;

function fetchFooter() {
  return new Promise((resolve, reject) => {
    const footer = document.getElementById("footer");
    footer.innerHTML = template;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./Footer/footer.css";
    document.head.appendChild(link);
    resolve();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchFooter()
    .then(() => {
      const subscribe = document.querySelector("#subscribe");
      if (subscribe) {
        subscribe.addEventListener("submit", function (event) {
          event.preventDefault();
          let email = document.querySelector("#email").value;
          let confirm = document.querySelector("#confirm").value;

          if (email == confirm) {
            document.querySelector("#subscribe>p:last-child").innerText =
              "Thank You for signing up! Success";
            document.querySelector("#subscribe>p:last-child").style.color =
              "green";
            document.querySelector("#subscribe>p:last-child").style.visibility =
              "visible";
          } else {
            document.querySelector("#subscribe>p:last-child").innerText =
              "Email address do not match!";
            document.querySelector("#subscribe>p:last-child").style.color =
              "red";
            document.querySelector("#subscribe>p:last-child").style.visibility =
              "visible";
          }
        });
      }
    })
    .catch((err) => {
      console.log("Something went wrong!!!");
    });
});



