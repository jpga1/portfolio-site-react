import bootstrap from "/bootstrap-logo.svg";
import html from "/html-icon.svg";
import css from "/css-logo.svg";
import javascript from "/javascript-icon.svg";
import git from "/git-icon.svg";

export default function Technologies() {
  return (
    <div class="container-fluid text-center text-white slideshow-container">
      <div id="technologies" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#technologies" data-slide-to="0"></li>
          <li data-target="#technologies" data-slide-to="1"></li>
          <li data-target="#technologies" data-slide-to="2"></li>
          <li data-target="#technologies" data-slide-to="3"></li>
          <li data-target="#technologies" data-slide-to="4"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active w-100 mx-auto display-1 p-5">
            <img class="icon" src={html} alt="The HTML logo" />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img class="icon" src={css} alt="The CSS logo" />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img class="icon" src={javascript} alt="The JavaScript logo" />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img class="icon" src={bootstrap} alt="The bootstrap logo" />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img class="icon" src={git} alt="Git logo" />
          </div>
        </div>

        <a href="#technologies" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#technologies" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
}
