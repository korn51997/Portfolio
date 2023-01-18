function Navbar() {
  return (
    <div id="Top" className="Navbar">
      <nav>
        <div class="logo">
          <img src="https://sv1.img.in.th/ogGly.png" alt=""></img>
        </div>
        <div class="menu">
          <a href="#Personal data">Personal data</a>
          <a href="#Skills">Skills</a>
          <a href="#Education">Education</a>
        </div>
        <div class="contact">
          <a href="">
            <i class="fa-brands fa-facebook fa-2xl "></i>
          </a>
          <a href="">
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-phone fa-2xl"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
