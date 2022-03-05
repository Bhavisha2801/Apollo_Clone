function navbar() {
    return `<div class="fixed_header">
    <div class="navbar">
        <div class="logo">
            <img src="https://newassets.apollo247.com/images/ic_logo.png" alt="logo">
        </div>
        <div class="options">
            <p><a href="Doctors.html">Doctors</a> <br> <span class="line"></span> <a>Consult <br> Online</a>
            </p>
            <p><a href="Pharmacy.html">Pharmacy</a> <br><span class="line"></span> <a>Medicnes & <br> other
                    products</a> </p>
            <p><a href="Lab_Tests.html">Lab Tests</a> <br> <span class="line"></span> <a> Health
                    <br>check-ups</a> </p>
            <p><a href="Blog.html">Blog/a> <br> <span class="line"></span> <a>Latest <br>Updates</a>
            </p>
            <img id="cart.png" alt="">
            <a onclick="openForm()" id="anchor">
            <img class="user-profile" src="user-profilee.webp" alt="user-profile">
            <p id="para">Login</p>
            </a>


         </div>
        </div>
    </div>`;
    
}

export default navbar;