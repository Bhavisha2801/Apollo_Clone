function login(){
    return `<div class="form-popup" id="myForm" style="display: none;">
    <form action="apolo.html" class="form-container">
      <h1>Login</h1>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required="" class="inp">
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required="" class="inp">
  
      <a href="apolo.html"><button type="submit" class="btn" onclick="changeText()" id="txtchange">Login</button></a>
      <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
  </div>`
}

export default login