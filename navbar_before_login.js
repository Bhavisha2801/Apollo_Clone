function navbar() {
    return `<div class="fixed_header">
    <div class="navbar">
        <div class="logo">
        <a href="./apolo.html"><img src="https://newassets.apollo247.com/images/ic_logo.png" alt="logo"></a>
        
        </div>
        <div class="options">
            <p><a href="Doctors.html">Doctors</a> <br> <span class="line"></span> <a>Consult <br> Online</a>
            </p>
            <p><a href="pharmacyy.html">Pharmacy</a> <br><span class="line"></span> <a>Medicnes & <br> other
                    products</a> </p>
            <p><a href="appointment.html">Appointment</a>  <br> <span class="line"></span> <a> Book an
                    <br>Appointment</a> </p>
            <p><a href="Blog.html">Blog</a> <br> <span class="line"></span> <a>Latest <br>Updates</a>
            
            </p>
            <a href="cart.html"><img class="cart" src="cart.png" alt=""></a>
            
            <a onclick="openForm()"><img class="user-profile" src="./opoloimages/user-profilee.webp" alt="user-profile"></a>


         </div>
        </div>
    </div>`;
    
}

export default navbar;