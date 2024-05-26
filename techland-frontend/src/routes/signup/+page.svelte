<style>
  .background {
      background-color: #add8e6; /* Hellblau für den Hintergrund */
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
  }

  .card {
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 500px;
      padding: 20px;
  }

  .card-header {
      border-radius: 10px 10px 0 0;
      background-color: #4682b4; /* Dunkleres Blau für die Kartenüberschrift */
      color: white;
  }

  .card-body {
      padding: 20px;
  }

  .btn-primary {
      background-color: #4682b4;
      border-color: #4682b4;
  }

  .btn-primary:hover {
      background-color: #315f86;
      border-color: #315f86;
  }

  .form-label {
      font-weight: bold;
  }

  .row.align-items-end .col-auto {
      display: flex;
      align-items: center;
  }
</style>

<script>
import { isAuthenticated } from "../../store";
import auth from "../../auth.service";

let email = "";
let password = "";
let firstName = "";
let lastName = "";
let signupForm;

$: if ($isAuthenticated) {
  // reset the input values as soon as the user is registered.
  email = "";
  password = "";
}

function signup() {
  // form validation with bootstrap: see https://getbootstrap.com/docs/5.3/forms/validation/
  if (signupForm.checkValidity()) {
    console.log("signup");
    auth.signup(email, password, firstName, lastName);
  }
  signupForm.classList.add("was-validated");
}
</script>

<div class="background">
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Sign up</div>
        <div class="card-body">
          <form
            on:submit|preventDefault={signup}
            bind:this={signupForm}
            class="needs-validation"
            novalidate
          >
            <div class="mb-3">
              <label for="username" class="form-label">E-Mail</label>
              <input
                bind:value={email}
                type="email"
                class="form-control"
                id="username"
                name="username"
                required
              />
              <div class="invalid-feedback">
                Please provide an e-mail address.
              </div>
            </div>
            <div class="mb-3">
              <label for="first-name" class="form-label">First Name</label>
              <input
                bind:value={firstName}
                type="text"
                class="form-control"
                id="first-name"
                name="first-name"
              />
            </div>
            <div class="mb-3">
              <label for="last-name" class="form-label">Last Name</label>
              <input
                bind:value={lastName}
                type="text"
                class="form-control"
                id="last-name"
                name="last-name"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                bind:value={password}
                type="password"
                class="form-control"
                id="password"
                name="password"
                required
              />
              <div class="invalid-feedback">Please choose a password.</div>
            </div>
            <div class="row align-items-end">
              <div class="col">
                <button type="submit" class="btn btn-primary">Sign up</button>
              </div>
              <div class="col-auto">
                <a href="/">Log in</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
