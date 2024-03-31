<template>
  <div class="nav">
  <router-link to="/"></router-link>
  <router-link :to= "{ name: 'Product'}"></router-link>
  <router-link to="/login"></router-link>
  <router-link to="/registration"></router-link>
  <router-link to="/cart"></router-link>
  <router-link to="/order"></router-link>

  <router-link to="/loginadmin"></router-link>
  <router-link to="/admin"></router-link>
  <router-link to="/aboutadmin"></router-link>
  <router-link to="/add"></router-link>
  <router-link to="/addadmin"></router-link>
  </div>
  <router-view />
</template>