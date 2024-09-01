


document.addEventListener("DOMContentLoaded", function () {
    fetch('./Footer/index.html').then(res => {
        if (!res.ok) {
            throw new Error("Lỗi mạng")
        }
        return res.text()
    }).then(data => {
        const footer = document.getElementById('footer')
        footer.innerHTML = data

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = './Footer/footer.css'
        document.head.appendChild(link)

    }).then(() => {
        const subscribe = document.querySelector("#subscribe")
        if (subscribe) {
            subscribe.addEventListener("submit", function (event) {
                event.preventDefault();
                console.log('aaa',document.querySelector("#email").value);
                let email = document.querySelector("#email").value;
                let confirm = document.querySelector("#confirm").value;

                if (email == confirm) {
                    document.querySelector("#subscribe>p:last-child").innerText = "Thank You for signing up! Success"
                    document.querySelector("#subscribe>p:last-child").style.color = "green";
                    document.querySelector("#subscribe>p:last-child").style.visibility = "visible";
                }
                else {
                    document.querySelector("#subscribe>p:last-child").innerText = "Email address do not match!"
                    document.querySelector("#subscribe>p:last-child").style.color = "red";
                    document.querySelector("#subscribe>p:last-child").style.visibility = "visible";
                }
            })
        }
    }).catch(err => {
        console.log("Something went wrong!!!");
    })
})



