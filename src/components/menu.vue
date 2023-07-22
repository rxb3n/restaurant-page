<template>
    
    <div class="black-div">
        <p class=""><i class="fa-solid fa-location-dot icon-space"></i>Angré, Zone du nouveau CHU</p>
        <p class=""><i class="fa-solid fa-square-phone icon-space"></i>+225 0707563197</p>
        <p class=""><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i></p>
    </div>

    <div class="header">
        <div class="menu-icon" onclick="openModal()"><i class="fas fa-bars"></i></div>
        <div class="site-name">CANARI</div>
        <button class="button-tete">RESERVER</button>
    </div>
    
    <!-- Modal -->
    <div id="myModal" class="modal">
        <div class="modal-content">
            <p>PLACALI</p>
            <p>PLACALI</p>
            <p>PLACALI</p>
            <p>PLACALI</p>
        </div>
    </div>
<!-- hero -->
<div class="hero-section">
    <div class="description">
      <h1>VIVRE UNE EXPÉRIENCE INOUBLIABLE</h1>
      <p>Ceci est une description de votre hero section. Vous pouvez y mettre tout le contenu que vous voulez.</p>
      <button>Mon bouton</button>
    </div>
    <div class="image">
      <img src="../assets/thumbnail_IMG_4548.jpg" alt="Image de votre hero section">
    </div>
  </div>
<!-- hero -->
</template>

<script>

export default{
    name: 'menuView',
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

.black-div {
    background-color: black;
    height: 50px;
    color: white;
    display: flex;
    justify-content: space-between;
}

.black-div p{
    margin: 0;
    padding: 15px;
}
.icon-space{
    margin-right: 10px;
}

.header {
    background-color: white;
    color: black;
    height: 60px; /* Ajuster la hauteur de la barre de navigation */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}

.site-name {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}

.button-tete {
    padding: 8px 20px;
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: background-color ease 1s;
}
.button-tete:hover{
    background-color: darkgoldenrod;
}

/* Modal */

.menu-icon {
    cursor: pointer;
    color: black;
    padding: 0 15px;
    font-size: 24px; /* Ajustez la taille de l'icône si nécessaire */
}

.modal {
    display: none;
    position: fixed;
 top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #f1f1f1;
    padding: 20px;
    transition: left 0.3s ease;
}

.modal-open {
    left: 0;
}
/* hero */

.hero-section {
  display: flex;
  align-items: center;
  height: 100vh; /* Ajuster la hauteur comme souhaité */
}

.description {
  width: 50%;
  padding: 20px;
}

.image {
  width: 50%;
}

img {
  max-width: 100%;
  height: auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

/* hero */

</style>