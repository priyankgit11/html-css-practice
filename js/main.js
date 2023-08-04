const radios = document.getElementsByName("carousel");
      var start = -1;
      const stopInterval = setInterval(function () {
        autoRotate(radios, ++start);
      }, 2000);
      function autoRotate(radios, start) {
        const maxSize = Object.keys(radios).length;
        start = start % maxSize;
        console.log(start);
        radios[start].checked = true;
        document.getElementById("carousel-img").src =
          "images/" + radios[start].id + ".png";
      }
      function changeCarousel(radio) {
        document.getElementById("carousel-img").src =
          "images/" + radio.id + ".png";
        setInterval(2000);
        clearInterval(stopInterval);
        var cont = radio.id.substring(1) - 1;
        setInterval(function () {
          autoRotate(radios, ++cont);
        }, 2000);
      }
      function showMenu()
      {
        const menu = document.getElementsByClassName("vertical-menu");
        console.log(menu[0]);
        menu[0].style.display = "flex";
      }
      function hideMenu()
      {
        const menu = document.getElementsByClassName("vertical-menu");
        menu[0].style.display = "none";
      }