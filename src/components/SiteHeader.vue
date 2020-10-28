<template>
  <header>
    <div class="max-w-full">
      <div
        class="navbar m-5 p-5 sm:max-w-screen-xl mx-auto grid grid-cols-2 grid-row-1"
      >
        <div class="flex justify-start">
          <a href="/de/" class="Logo">
            <img :src="logo" alt="Frederik Kohler Logo" class="logo" />
          </a>
        </div>
        <div class="flex justify-end">
          <nav>
            <nav class="flex items-center justify-between flex-wrap">
              <div
                class="mobil-menu sm:hidden"
                @click="mobilNavOpen = !mobilNavOpen"
              >
                <button
                  class="hamburger hamburger--squeeze"
                  :class="{ isActive: isActive }"
                  @click="isActive = !isActive"
                  type="button"
                >
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </div>

              <div class="desktop-menu hidden sm:block">
                <ul class="flex">
                  <li class="nav-item">
                    <router-link class="text-white" to="/">Home</router-link>
                  </li>

                  <li class="nav-item">
                    <router-link class="text-white" to="/about">
                      About
                    </router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="mobilNav opacity-0" :class="{ mobilNavOpen: mobilNavOpen }">
    <nav>
      <button class="close" @click="mobilNavOpen = !mobilNavOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ul>
        <li>
          <router-link to="/" @click="mobilNavOpen = !mobilNavOpen">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about" @click="mobilNavOpen = !mobilNavOpen">
            About
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import logo from '../assets/images/logo.svg'
export default {
  data: function () {
    return {
      logo: logo,
      isActive: false,
      mobilNavOpen: false,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: relative;
  z-index: auto;
}

.logo {
  width: auto;
  height: 60px;
}

.mobilNav {
  transform: scale(0.01);
  background: rgba(255, 255, 255, 1);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  transition: 0.3s ease;
}
.mobilNav nav {
  display: flex;
}
.mobilNav ul {
  align-self: center;
}
.mobilNav li {
  padding: 5px 0;
}
.mobilNav a {
  font-size: 1.25rem;
  font-weight: 800;
  color: rgba(43, 108, 176);
  text-transform: uppercase;
}
.mobilNavOpen {
  opacity: 1;
  transform: scale(1);
}
.close {
  position: fixed;
  top: 2em;
  right: 2em;
}
.close > svg {
  height: 4em;
}
</style>
