<template>
  <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <h2>Pasteleria riko</h2>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/about">¿Quienes somos?</router-link>
              </li>  
              <li class="nav-item">
                <router-link class="nav-link active" to="#">Contacto</router-link>
              </li>  
            </ul>
          </div>
        </div>
      
      </nav>

    <router-view/>
  </div>
</template>


// //puse dentro div dentro router-view para que no diera el error

