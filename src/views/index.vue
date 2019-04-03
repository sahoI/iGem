<template>
  <div id="app">

    <div class="header">
      <div class="header-logo">
        <router-link tag="li" id="top" to="/" exact><a><img src="../assets/iGEM_logo.png"><div class="text">iGEM-ksu</div></a></router-link>
      </div>
      <div class="sns">
        <li>
          <a
            href="https://m.facebook.com/%E3%82%B5%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%B9-%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E7%A0%94%E7%A9%B6%E4%BC%9A-318397598923158/">
            <img src="../assets/flogo_RGB_HEX-144.png" class="facebook">
          </a>
        </li>
        <li>
          <a href="https://twitter.com/@iGEM_KSU">
            <img src="../assets/Twitter_Social_Icon_Rounded_Square_Color.png" class="twitter">
          </a>
        </li>
      </div>
      <div class="navigation">
        <div id="nav-content">
          <ul>
            <router-link tag="li" id="top" to="/" exact><a>Top</a></router-link>
            <router-link tag="li" id="about_iGem" to="/about_iGem"><a>About iGem</a></router-link>
            <router-link tag="li" id="member" to="/member"><a>Member</a></router-link>
            <router-link tag="li" id="about_synthetic_biology" to="/about_synthetic_biology"><a>About Synthetic
              Biology</a></router-link>
            <router-link tag="li" id="schedule" to="/schedule"><a>Schedule</a></router-link>
            <router-link tag="li" id="about_iGem_ksu" to="/about_iGem_ksu"><a>About iGem-ksu</a></router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>