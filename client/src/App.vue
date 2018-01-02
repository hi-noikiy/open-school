<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </router-link>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/class">Class Page</router-link>
        </div>
        <div class="navbar-end">
          <a href="#" class="navbar-item">
            Notifications
          </a>
          <a href="#" class="navbar-item">
            Inbox
          </a>
        </div>
      </div>
    </nav>
    <div id="content"><router-view/></div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#content {
  padding: 0 50px;
}
h1 {
  font-size: 4em;
}
h2{
  font-size: 3em;
}
h3{
  font-size: 2em;
}
h4{
  font-size: 1.5em;
}
</style>
