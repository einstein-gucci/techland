<style>
  .background {
      background-color: #add8e6; /* Hellblau für den Hintergrund */
      min-height: 100vh;
      margin: 0;
  }

  .navbar-custom {
      background-color: #4682b4; /* Etwas dunkleres Blau für die Navigationsleiste */
  }

  .container {
      padding-top: 20px;
  }
</style>

<script>
import "./styles.css";
import { isAuthenticated, user } from "../store"; 
import auth from "../auth.service"; 
</script>

<div class="background">
<nav class="navbar navbar-expand-lg navbar-custom">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="/">🌐 Techland</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {#if $isAuthenticated && $user.user_roles && ($user.user_roles.includes("admin") || $user.user_roles.includes("Vermieter"))}
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="/vermieter">👨‍💼 Vermieter</a>
        </li>
        {/if}
        {#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("Mieter")}
        <li class="nav-item">
          <a class="nav-link text-white" href="/mieter">🧑🏻‍💼 Mieter</a>
        </li>
        {/if}
        {#if $isAuthenticated}
        <li class="nav-item">
          <a class="nav-link text-white" href="/devices">🖥️ Devices</a>
        </li>
        {/if}
        {#if $isAuthenticated}
        <li class="nav-item">
          <a class="nav-link text-white" href="/account">⚙️ Account</a>
        </li>
        {/if}
      </ul>
      <div class="d-flex">
        {#if $isAuthenticated}
          <span class="navbar-text me-2 text-white">{$user.name}</span>
          <button type="button" class="btn btn-light" on:click={auth.logout}>Log Out ╰┈➤</button>
        {/if}
      </div>
    </div>
  </div>
</nav>

<div class="container mt-3">
  <slot />
</div>
</div>
