<script>
export default {
  name: 'App',
}
</script>

<template>
  <div class="app">
    <header class="app-header">
      <div class="header-logo">
        <img src="/logo_rec.png" alt="Real Estate Care" class="logo" />
      </div>
    </header>

    <main class="app-main">
      <h1 class="welcome-title">Welkom bij RealEstateCare</h1>
      <p class="welcome-sub">Caring is in our nature</p>
    </main>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background-color: #f2f2f2;
  max-width: 480px;
  margin: 0 auto;
}

.app-header {
  background-color: #293439;
  padding: 16px 20px;
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
}

.app-main {
  padding: 40px 20px;
  text-align: center;
}

.welcome-title {
  color: #293439;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
}

.welcome-sub {
  color: #00aaa2;
  font-size: 15px;
}
</style>
