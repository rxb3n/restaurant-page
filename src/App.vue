<template>
  <!-- NAVBAR AND HERO SECTION -->
  <NavBar/>
  <HeroView id="section-0"></HeroView>

<!-- VIDEO SECTION -->

<section id="section-1">
  <div class="video-container">
    <video class="video-main" autoplay muted playsinline loop>
      <source src="./assets/video-main.mp4" type="video/mp4">
    </video>
  </div>
</section>

<!-- MENU SECTION -->

<section class="menu-container" id="section-2">

  <div class="menu-box">

    <div class="sauces">

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

    <div class="btn-menu-container">
      <a class="btn btn-menu" href="/menu.html">VOIR MENU COMPLET</a>
    </div>

    </div>

    <div class="accomp-container">

<div class="accomp-box">
  <h3 class="text-primary">ACCOMPAGNEMENTS (1000 CFA)</h3>
  <div class="accomp-items">
  <p>Foutou</p>
  <p>Foufou</p>
  <p>Placali</p>
  <p>Akassa</p>
  <p>Kabato</p>
</div>

</div>
</div>


    


  </div>





  <div class="menu-img">
  </div>

</section>

<section class="action-container"  id="section-3">
  <div class="action-text">
    <h2 class="text-primary" >REJOIGNEZ-NOUS</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolor ab sapiente aut fuga quae qui iusto dolorem consectetur natus atque.
    </p>
    <a href="#about" class="btn-action btn">Contactez-nous</a>
  </div>
</section>



<!-- CAROUSEL IMAGES SECTION -->

<section  id="#section-4">
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
/* import menuView from "./components/menu.vue"; */

export default {
  name: 'App',
  components: {
    NavBar,
    HeroView,
    FooterView,
    GridView,
    /* menuView, */
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

.btn-menu {

}

.btn-menu-container {
  margin-top: 10%;
  margin-left: 50%;
}


.btn:hover {
  background-color: black;
  color: white;
}

/* ABOUT US SECTION */
.action-container {
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.btn-action {
  position: relative;
}

/* MENU SECTION */

.menu-container {
  background: linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.4)
        ), url(./assets/thumbnail_image003.jpg);
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
  flex-direction: row;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1%;
}

.accomp-box {
  position: relative;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
}

</style>
