<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
        
    <link rel="shortcut icon" type="image/x-icon" href="https://img.icons8.com/office/40/000000/business.png">
    <style>
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }

      .navbar-brand img {
        width: 60px;
      }
      .carousel-item img {
        width: 100%;
        height: 700px;
        object-fit: cover;
      }
    </style>
    <title>Duong seller</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://meet.google.com/usy-hkha-nop"
          ><lottie-player src="https://assets9.lottiefiles.com/packages/lf20_w98viu8m.json"  background="transparent"  speed="1"  style="width: 60px; height: 60px;"  loop  autoplay></lottie-player></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">AboutUs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><button id="fruits" class="btn btn-success">Fruits</button></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><button id="game" class="btn btn-danger">Game</button></a>
            </li>
          </ul>
          <form id="search" class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              name="inputData"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/12/Hero-Image_12112020.jpg?resize=1200%2C675"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Minh Duong</h3>
            <p>Minh Duong likes playing game</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://labx.org/wp-content/uploads/2019/09/EE-lets-play-780x320.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h2 class="text-warning">Gaming</h2>
            <p>Let's Play</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://m.economictimes.com/thumb/msid-81523699,width-1200,height-900,resizemode-4,imgsize-378374/online-gaming.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Too Easy</h5>
            <p>You can be better</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container">
      <h1 class="text-center mt-5">Nguyen Minh Duong</h1>
      <hr />
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Giới Thiệu
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Nguyen Minh Duong</strong> Hi my name is Duong. I am 12 years old. I like to be a seller or a teacher or a coder and more 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              My Skill
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row text-center">
                  <div class="col-lg-4">
                    <img src="https://img.icons8.com/office/40/000000/controller.png"/>
                  </div>
                  <div class="col-lg-4">
                    <img src="https://img.icons8.com/office/40/000000/monitor.png"/>
                  </div>
                  <div class="col-lg-4">
                    <img src="https://img.icons8.com/office/40/000000/html.png"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Contact Me
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">

                <div class="row">
                    <div class="col-lg-4">
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_bp1bwvhv.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>
                    </div>
                    <form id="fb">
                      <div class="form-group">
                        <label for="usr">Name:</label>
                        <input name="name" type="text" class="form-control" id="usr">
                      </div>
                      <div class="form-group">
                        <label for="pwd">Email:</label>
                        <input name="email" type="email" class="form-control" >
                      </div>
                      <div class="form-group">
                        <label for="comment">Comment:</label>
                        <textarea name="comment" class="form-control" rows="5" id="comment"></textarea>
                      </div>
                      <button type="submit" class="btn btn-success mt-2">Success</button>
                    </form>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
      <h1 class="text-center mt-5">Products</h1>
      <hr />
      <div id="card" class="card-deck row">


      </div>
    </div>


    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
      crossorigin="anonymous"
    ></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script src="./main.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
      let formfb = document.getElementById("fb")
      formfb.onsubmit = (e)=>{
        e.preventDefault()
        let name = formfb.name.value
        let email = formfb.email.value
        let comment = formfb.comment.value
        $.ajax({
                     url: './sendEmail.php',
                     method: 'POST',
                     dataType: 'json',
                     data: {
                         name: name,
                         email: email,
                         messenger:comment,
                     },
                     success: function (data) {
                        
                     }
                 });
                 return false;
      }
    </script>
  </body>
</html>
