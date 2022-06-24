window.onload = () => {
  let changeLight = document.querySelector(".light");
  let bg = document.querySelector("div.container");
  let mainName = document.querySelector("h1");
  let nameParts = document.querySelectorAll("h2");
  let btn = document.querySelectorAll(".active-button");
  let activeBtn = document.querySelector('.search-category.active-button')
  // console.log('activeBtn', activeBtn)
  let nonActiveBtn = document.querySelectorAll(".non-active-button");
  let black = "#000000";
  let gold = "#bdae82";
  let white = "#ffffff";
  let price = document.querySelectorAll(".price-card__price");
  let contactsBlock = document.getElementById("contacts");
  let form = document.querySelector('form');
  let footerLinks = document.querySelector('footer');
  // console.log('footerLinks', footerLinks)

  changeLight.addEventListener("click", (item) => {
    item.preventDefault();
    changeLight.classList.toggle("dark");
    changeLight.classList.toggle("sun");
    if (changeLight.classList.contains("sun")) {
      document.body.style.backgroundColor = black;
      document.body.style.color = white;
      mainName.style.color = gold;
      nameParts.forEach((item) => {
        item.style.color = gold;
        item.classList.remove("dark-name");
      });
      btn.forEach(item => {
        item.style.backgroundColor = gold;
      })
      activeBtn.style.backgroundColor = gold;
      activeBtn.style.color = black;
      nonActiveBtn.forEach((elem) => {
        elem.style.backgroundColor = "#000000";
        elem.style.color = gold;
      });
      price.forEach((item) => {
        item.style.color = gold;
      });
      bg.classList.remove("light-bg");
      bg.classList.add("dark-bg");
      contactsBlock.classList.add("contacts-dark");
      contactsBlock.classList.remove("contacts-light");
      form.classList.add('dark-form');
      form.classList.remove('light-form');
      footerLinks.classList.add('dark-footer')
      footerLinks.classList.remove('light-footer')
    } else {
      document.body.style.backgroundColor = white;
      document.body.style.color = black;
      bg.classList.remove("dark-bg");
      bg.classList.add("light-bg");
      mainName.style.color = black;
      nameParts.forEach((item) => {
        item.style.color = black;
        item.classList.add("dark-name");
      });
      btn.forEach(item => {
        item.style.backgroundColor = white;
      })
      
      activeBtn.style.backgroundColor = black;
      activeBtn.style.color = gold;

      nonActiveBtn.forEach((elem) => {
        elem.style.backgroundColor = gold;
        elem.style.color = black;
      });
      price.forEach((item) => {
        item.style.color = black;
      });
      contactsBlock.classList.remove("contacts-dark");
      contactsBlock.classList.add("contacts-light");
      form.classList.add('light-form');
      form.classList.remove('dark-form')
      footerLinks.classList.add('light-footer')
      footerLinks.classList.remove('dark-footer')
    }
  });

  // change pictures on portfolio  part depened on class
  let portfolioSeason = [
  
    {
      season: "Winter",
      address: "../assets/images/winter/",
    },
    {
      season: "Spring",
      address: "../assets/images/spring/",
    },
    {
      season: "Summer",
      address: "../assets/images/summer/",
    },
    {
      season: "Autumn",
      address: "../assets/images/autumn/",
    },
  ];
  // console.log('portfolioSeason', portfolioSeason[0].season)

  let portfolioPhoto = document.querySelectorAll(".portfolio-photo img");
  let portfolioPhotoBlock = document.querySelector('.portfolio-photo')
  // console.log("portfolioPhoto", portfolioPhoto);
  let searchBtns = document.querySelectorAll(".search-category");
    // console.log("searchBtn", searchBtn);
  function changeImage(item) {
    console.log('item', item)
    portfolioSeason.forEach(elem => {
      console.log('elem.season', elem.season)
      if (item == elem.season) {
        for (let i = 0; i < portfolioPhoto.length; i++) {
          portfolioPhoto[i].src = `${elem.address}/${i+1}.jpg`
          console.log('elem.address', elem.address)
        }
      }
    })
    }
  for (var searchBtn of searchBtns) {

    searchBtn.addEventListener('click', function () {
      console.log('searchBtn', searchBtn)
      // console.log('searchBtn', searchBtn)
      searchBtns.forEach(i => {
        i.classList.remove('active-button')
        i.addEventListener('click', elem => {
          changeImage(i.textContent)
        })
      }
      );
      this.classList.toggle('active-button');
      })
      
  };

 };

