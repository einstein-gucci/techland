<style>
  .background {
      background-color: #add8e6; /* Hellblau für den Hintergrund */
      min-height: 100vh;
      padding: 20px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .card {
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 600px;
      padding: 20px;
      margin: 20px;
      text-align: center;
  }

  .card-header {
      border-radius: 10px 10px 0 0;
      background-color: #4682b4; /* Dunkleres Blau für die Kartenüberschrift */
      color: white;
      padding: 10px;
      font-size: 1.5em;
  }

  .card-body {
      padding: 20px;
  }

  img {
      border-radius: 50%;
      max-width: 150px;
      margin-bottom: 20px;
  }
</style>

<script>
import { isAuthenticated, user } from "../../store";
</script>

<div class="background">
<div class="card">
  <div class="card-header">⚙️ Account Details</div>
  <div class="card-body">
    {#if $isAuthenticated}
      <p><img src={$user.picture} alt="Profile picture of {$user.given_name} {$user.family_name}" /></p>
      <p><b>First Name:</b> {$user.given_name}</p>
      <p><b>Last Name:</b> {$user.family_name}</p>
      <p><b>Email:</b> {$user.email}</p>
      <!-- Show roles only if user has at least one role -->
      {#if $user.user_roles && $user.user_roles.length > 0}
        <p><b>Roles:</b> {$user.user_roles}</p>
      {/if}
    {:else}
      <p>Not logged in</p>
    {/if}
  </div>
</div>
</div>
