<template>
  <!-- NAVBAR AND HERO SECTION -->
  <NavBar/>
  <HeroView></HeroView>
<!-- ABOUT US SECTION -->

<section class="about-container">
  <div class="about-text">
    <h2 class="text-primary" >Notre Histoire</h2>
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
    <h2 class="text-primary" >NOS SAUCES (3000 CFA)</h2>
    <div class="menu-item" >
      <p>Sauce Gombo (Kopè)</p>
      <p id="text-secondary">Sauce gluante à base de gombo frais ou secs.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Arachide</p>
      <p id="text-secondary">Sauce onctueuse et parfumée à base de beurre d’arachide, de lait de coco, <br> de sauce hoisin et de sambal oelek.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Graine</p>
      <p id="text-secondary">Une sauce onctueuse et parfumée à base de noix de palme, <br> mijotée avec des morceaux de queue de bœuf, des crabes, des tripes et du poisson frais.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Feuille</p>
      <p id="text-secondary">A base de feuilles de manioc, gombo, patates ou épinards. <br> Mijotée avec de la viande ou du poisson fumé, des oignons, des tomates et des épices. <br> Idéale pour accompagner du riz ou du foutou</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Tomate Cocktail</p>
      <p id="text-secondary"> Une sauce crémeuse et piquante à base de mayonnaise, de sauce tomate, de Tabasco et de cognac.</p>
    </div>
    <div class="menu-item" >
      <p>Sauce Gouagouassou</p>
      <p id="text-secondary"> Une sauce onctueuse et parfumée à base de deux sauces mélangées: <br> une sauce aux gombos et une sauce à l’aubergine..</p>
    </div>
    
      <a class="btn btn-menu" href="#menu">VOIR MENU COMPLET</a>
  </div>

  <div class="menu-img">
    <img src="./assets/thumbnail_image004.jpg" height="768" width="480">
  </div>

</section>

<!-- ACCOMPAGNEMENTS SECTION -->

<section>
  <div class="accomp-container">

    <div class="accomp-box">
      <h3 class="text-primary">ACCOMPAGNEMENTS (1000 CFA)</h3>
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
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.btn-about {
  position: relative;
}

/* MENU SECTION */

.menu-container {
  background: linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.4)
        ), url(./assets/thumbnail_image003.jpg);
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
  text-align: center;
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
  background: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ), url(./assets/thumbnail_image002.jpg);
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
