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
            <img class="icon" src="/html-icon.svg" alt="The HTML logo" />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img class="icon" src="/css-logo.svg" alt="The CSS logo" />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img
              class="icon"
              src="/javascript-icon.svg"
              alt="The JavaScript logo"
            />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img
              class="icon"
              src="/bootstrap-logo.svg"
              alt="The bootstrap logo"
            />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img class="icon" src="/react-icon.svg" alt="The react logo" />
          </div>
          <div class="carousel-item w-100 mx-auto display-1 p-5">
            <img class="icon" src="/git-icon.svg" alt="Git logo" />
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
