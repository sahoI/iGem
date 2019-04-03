<template>
  <div id="app">
    <!--<hearder></hearder>-->
    <router-view/>
    <div class="contents">

    </div>
  </div>
</template>

<script>
  // import header from './components/header'

  export default {
    // components: {
    //   header
    // }
  }
</script>

<style>

  #app {
    /*-webkit-font-smoothing: antialiased;*/
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  li {
    float: left;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  footer {
    width: 100%;
    height: 100%;
    background-color: #37AB9D;
    color: #ffffff;
    padding-bottom: 10px;
    float: right;
  }

  @media (max-width: 1296px) {
    .sp-only {
      display: none;
    }
  }

  header {
    float: left;
    width: 100%;
    height: 80px;
  }

  .header .header-logo {
    float: left;
    font-family: "Lao MN";
  }

  .header .header-logo img {
    padding-left: 30px;
    float: left;
  }

  .header .header-logo .text {
    color: #586365;
    float: left;
    font-size: 50px;
    padding-left: 20px;
    padding-top: 10px;
  }

  .header .sns li {
    padding-right: 10px;
    padding-top: 10px;
    float: right;
  }

  .header .sns .facebook {
    padding-right: 20px;
  }

  .navigation {
    clear: left;
    height: 80px;
    background: #37AB9D;
    text-decoration: none;
    color: #CFEAEF;
  }

  .navigation .nav-content {
    color: #CFEAEF;
  }

  .navigation ul {
    padding-top: 25px;
  }

  .navigation li a {
    border-right: 1px solid #586365;
    border-radius: 5px;
  }

  .navigation a {
    padding: 30px 10px;
    text-decoration: none;
    color: #CFEAEF;
    font-size: 20px;
  }

  .navigation a:hover {
    height: 80px;
    color: #586365;
    background-color: #FFC042;
  }

  .contents {
    height: 600px;
  }
</style>
