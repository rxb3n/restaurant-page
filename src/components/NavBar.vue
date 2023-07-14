<template>
    <div class="nav-container">
        <div class="nav-elements">
            <h1 class="nav">Element</h1>
            <h1 class="nav">Element</h1>
            <h1 class="nav logo">LOGO</h1>
            <h1 class="nav">Element</h1>
            <h1 class="nav">Element</h1>
        </div>
    </div>
</template>

<style>

.nav-container {
    position: sticky;
    top: 0;
    background-color: white;
    display: flex;
    justify-content: space-around;
}

.nav-elements {
    width: 50%;
    position: relative;

    display: flex;
    flex-direction: row;

}
.nav {
    margin: auto;
}
.logo {
    font-size: 3.75em;
}
</style>