function appointment(){
    return `<div class="form-popup" id="myapnt" style="display: none;">
    <form action="apolo.html" class="form-container">
      <h1>Book Appointment</h1>
  
      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" required="" class="inp">

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required="" class="inp">
  
      <label for="number"><b>Mobile Number</b></label>
      <input type="text" placeholder="Enter Number" name="number" required="" class="inp">
  
      <a href="apolo.html"><button type="submit" class="btn" id="txtchange">Book Appointment</button></a>
      <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
  </div>`
}


export default appointment;