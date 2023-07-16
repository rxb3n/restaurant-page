<template>
  <NavBar/>
  <HeroView></HeroView>
<!-- ABOUT US SECTION -->

<section class="about-container">
  <div class="about-text">
    <h2>Our Story</h2>
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
    <h2>Food Varieties</h2>
    <h2>OUR MENU</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
      Aliquam placeat autem ipsum error in.<br/>
      Neque at nihil perferendis officiis ut nisi doloribus ex,<br/>
      iusto voluptatum voluptates,<br/>
      placeat tenetur quasi eum.
      </p>
      <a class="btn btn-menu" href="#menu">VIEW MENU</a>
  </div>

</section>

<!-- WEEKLY SECTION -->

<section class="weekly-container">
  <div class="weekly">
    <h2>WEEKLY SPECIALS</h2>
    <ul>
      <li class="weekly-item">FOOD</li>
      <li class="weekly-item">FOOD</li>
      <li class="weekly-item">FOOD</li>
      <li class="weekly-item">FOOD</li>
      <li class="weekly-item">FOOD</li>
      <li class="weekly-item">FOOD</li>
      <li class="weekly-item">FOOD</li>
      <li class="weekly-item">FOOD</li>
      <li class="weekly-item">FOOD</li>
    </ul>
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
#app{
  margin: 0;
  padding: 0;
}



.bold {
  font-size: 2em;
  font-weight: 800;
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
  margin-top: 5%;
  display: flex;
  justify-content: center;
}

a{
  color: black;
  text-decoration: none;
}

</style>
