import "./css/skills.css";
function Skills() {
  return (
    <div id="Skills" className="Skills">
      <div class="wrapper">
        <div class="wrapper-skill">
          <h1 class="how-title">Skills</h1>

          <div class="skill">
            <p>CSS</p>

            <div class="skill-bar skill1">
              <span class="skill-count1">85%</span>
            </div>
          </div>

          <div class="skill">
            <p>HTML5</p>

            <div class="skill-bar skill2">
              <span class="skill-count2">75%</span>
            </div>
          </div>

          <div class="skill">
            <p>BOOTSTRAP</p>

            <div class="skill-bar skill3">
              <span class="skill-count3">50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
