<template>
  <NavBar/>
  <HeroView></HeroView>
<!-- ABOUT US SECTION -->

<section class="about-container">
  <div class="about-text">
    <h2>Notre Histoire</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolor ab sapiente aut fuga quae qui iusto dolorem consectetur natus atque.
    </p>
    <a href="#about" class="btn-about btn">About us</a>
  </div>
</section>

<!-- MENU SECTION -->

<section class="menu-container">

  <div class="menu-box">
    <h2>NOS SAUCES (3000 CFA)</h2>
    <div class="menu-item" >
      <p>Sauce Gombo (Kopè)</p>
      <p id="text-secondary">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Arachide</p>
      <p id="text-secondary">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Graine</p>
      <p id="text-secondary">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Feuille</p>
      <p id="text-secondary">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Tomate Cocktail</p>
      <p id="text-secondary">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Gouagouassou</p>
      <p id="text-secondary">Lorem ipsum dolor sit amet.</p>
    </div>
    
      <a class="btn btn-menu" href="#menu">VOIR MENU COMPLET</a>
  </div>

  <div class="menu-img">
    <img src="./assets/thumbnail_image004.jpg" height="735" width="380">
  </div>

</section>

<section>
  <div class="accomp-container">
    <h3>ACCOMPAGNEMENTS (1000 CFA)</h3>
    <div class="accomp-items">
      <p>Foutou</p>
      <p>Foufou</p>
      <p>Placali</p>
      <p>Akassa</p>
      <p>Kabato</p>
      <p>etc...</p>
    </div>

  </div>
</section>


<FooterView/>

</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroView from './components/HeroView.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroView,
    FooterView,
  }
}

</script>

<style>
#text-secondary {
  font-size: 0.75em;
  color: grey;
}
.bold {
  font-size: 2em;
  font-weight: 800;
}

.btn {
  margin-top: 2%;
  border: 3px solid black;
  padding: 10px;
  transition: 0.2s;
}


.btn:hover {
  background-color: black;
  color: white;
}

/* ABOUT US SECTION */
.about-container {
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-about {
  position: relative;
  left: 50%;
}

/* MENU SECTION */

.menu-container {
  background-image: url(./assets/thumbnail_image003.jpg);
  margin-top: 5%;
  display: flex;
  justify-content: center;
  height: 1250px;
  margin-bottom: 1%;

}

.menu-box {
  background-color: white;
  height: fit-content;
  position: relative;
  top: 20%;
  padding: 3%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.menu-img {
  position: relative;
  top: 20%;
}

a{
  color: black;
  text-decoration: none;
}

/* ACCOMPAGNEMENTS */
.accomp-container {
  background-image: url(./assets/thumbnail_image002.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-bottom: 2%;
}

</style>
