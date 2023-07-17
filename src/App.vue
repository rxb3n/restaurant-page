<template>
  <!-- NAVBAR AND HERO SECTION -->
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

<!-- ACCOMPAGNEMENTS SECTION -->

<section>
  <div class="accomp-container">

    <div class="accomp-box">
      <h3>ACCOMPAGNEMENTS (1000 CFA)</h3>
      <div class="accomp-items">
      <p>Foutou</p>
      <p>Foufou</p>
      <p>Placali</p>
      <p>Akassa</p>
      <p>Kabato</p>
      <button class="btn btn-accomp">VOIR PLUS</button>
    </div>

    </div>
  </div>
</section>

<!-- CAROUSEL IMAGES SECTION -->

<section>
  <GridView/>
</section>

<!-- FOOTER -->

<FooterView/>

</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroView from './components/HeroView.vue';
import FooterView from './components/FooterView.vue';
import GridView from "./components/GridView.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    HeroView,
    FooterView,
    GridView,
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
  background-color: white;
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
  height: 500px;
  background-image: url(./assets/thumbnail_image002.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1%;
}

.accomp-box {
  position: relative;
  top: 10%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
}

</style>
