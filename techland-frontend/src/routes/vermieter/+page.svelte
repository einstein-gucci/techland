<style>
  .background {
      background-color: #add8e6; /* Hellblau für den Hintergrund */
      min-height: 100vh;
      padding: 20px;
      margin: 0;
  }

  .card {
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 800px;
      padding: 20px;
      margin-bottom: 20px;
  }

  .card-header {
      border-radius: 10px 10px 0 0;
      background-color: #4682b4; /* Dunkleres Blau für die Kartenüberschrift */
      color: white;
  }

  .btn-primary {
      background-color: #4682b4;
      border-color: #4682b4;
  }

  .btn-primary:hover {
      background-color: #315f86;
      border-color: #315f86;
  }

  .pagination .page-item .page-link.active {
      background-color: #4682b4;
      border-color: #4682b4;
      color: white;
  }

  h1 {
      text-align: center;
      margin-bottom: 20px;
  }
</style>

<script>
import axios from "axios";
import { page } from "$app/stores";
import { jwt_token } from "../../store";

const api_root = $page.url.origin;

let currentPage;
let nrOfPages = 0;
let defaultPageSize = 4;
let vermieters = [];
let vermieter = {
  email: null,
  name: null
};

$: if ($jwt_token !== "") {
  let searchParams = $page.url.searchParams;
  if (searchParams.has("page")) {
    currentPage = searchParams.get("page");
  } else {
    currentPage = "1";
  }
  getVermieters();
}

function getVermieters() {
  let query = `?pageSize=${defaultPageSize}&pageNumber=${currentPage}`;

  var config = {
    method: "get",
    url: `${api_root}/api/vermieter${query}`,
    headers: { Authorization: `Bearer ${$jwt_token}` },
  };

  axios(config)
    .then(function (response) {
      vermieters = response.data.content;
      nrOfPages = response.data.totalPages;
    })
    .catch(function (error) {
      alert("Could not get vermieters");
      console.log(error);
    });
}

function validateEmailAndCreateVermieter() {
  var config = {
    method: "get",
    url: "https://disify.com/api/email/" + vermieter.email,
  };

  axios(config)
    .then(function (response) {
      console.log("Validated email " + vermieter.email);
      console.log(response.data);
      if (response.data.format && !response.data.disposable && response.data.dns) {
        createVermieter();
      } else {
        alert("Email " + vermieter.email + " is not valid.");
      }
    })
    .catch(function (error) {
      alert("Could not validate email");
      console.log(error);
    });
}

function createVermieter() {
  var config = {
    method: "post",
    url: `${api_root}/api/vermieter`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${$jwt_token}`
    },
    data: vermieter,
  };

  axios(config)
    .then(function (response) {
      alert("Vermieter created");
      getVermieters();
    })
    .catch(function (error) {
      alert("Could not create vermieter");
      console.log(error);
    });
}
</script>

<div class="background">
<h1>👨‍💼 Vermieter</h1>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Neuer Vermieter</div>
        <div class="card-body">
          <form
            on:submit|preventDefault={validateEmailAndCreateVermieter}
            class="needs-validation"
            novalidate
          >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input bind:value={vermieter.email} class="form-control" id="email" type="email" required />
              <div class="invalid-feedback">Please provide an e-mail address.</div>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input bind:value={vermieter.name} class="form-control" id="name" type="text" required />
              <div class="invalid-feedback">Please provide a name.</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <h1>📋 Alle Vermieter</h1>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {#each vermieters as vermieter}
                <tr>
                  <td>{vermieter.email}</td>
                  <td>{vermieter.name}</td>
                </tr>
              {/each}
            </tbody>
          </table>
          <nav>
            <ul class="pagination">
              {#each Array(nrOfPages) as _, i}
                <li class="page-item">
                  <a class="page-link" class:active={currentPage == i + 1} href={"/vermieter?page=" + (i + 1)}>
                    {i + 1}
                  </a>
                </li>
              {/each}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
