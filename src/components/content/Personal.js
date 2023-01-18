import "./css/personal.css";
function Personal(props) {
  return (
    <div className="Personal">
      <div id="Personal data" class="history">
        <section id="profile" class="profile">
          <section class="data">
            <h1> Personal data</h1>
            <p>
              {props.firstname} {props.lastname}
            </p>
            <p>Date of birth : 15/4/1999</p>
            <p>Age : 23</p>
            <p>height : 171</p>
            <p>weight : 73</p>
            <p>Languages : Thai , English </p>
            <p>
              Military status : Exempted (Finished 3 years of reserve office's
              training corps course)
            </p>
          </section>
        </section>

        <section class="photo">
          <img src="https://scontent.fnak2-1.fna.fbcdn.net/v/t39.30808-6/292336504_485415456726340_2715842361265629579_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=MW2AXf4HZ50AX9gZgBV&_nc_oc=AQm5evNe9HsVJUtZQUq0sEL60mfeZlzjTFerSzPcZTEr6S8Ra4NB0yrRNnz-AAOJ7-18GYTQi8c0Kx8rIXbvLCd8&_nc_ht=scontent.fnak2-1.fna&oh=00_AfCgVDFDMj-FwkvcACVsMH9Ez1WsjAeLGXDP1uM3ZPl5EA&oe=63C2855F"></img>
        </section>
      </div>
    </div>
  );
}

export default Personal;
