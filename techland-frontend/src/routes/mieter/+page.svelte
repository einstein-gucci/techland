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
  let mieters = [];
  let mieter = {
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
    getMieters();
  }

  function getMieters() {
    let query = `?pageSize=${defaultPageSize}&pageNumber=${currentPage}`;

    var config = {
      method: "get",
      url: `${api_root}/api/mieter${query}`,
      headers: { Authorization: `Bearer ${$jwt_token}` },
    };

    axios(config)
      .then(function (response) {
        mieters = response.data.content;
        nrOfPages = response.data.totalPages;
      })
      .catch(function (error) {
        alert("Could not get mieters");
        console.log(error);
      });
  }

  function validateEmailAndCreateMieter() {
    var config = {
      method: "get",
      url: "https://disify.com/api/email/" + mieter.email,
    };

    axios(config)
      .then(function (response) {
        console.log("Validated email " + mieter.email);
        console.log(response.data);
        if (response.data.format && !response.data.disposable && response.data.dns) {
          createMieter();
        } else {
          alert("Email " + mieter.email + " is not valid.");
        }
      })
      .catch(function (error) {
        alert("Could not validate email");
        console.log(error);
      });
  }

  function createMieter() {
    var config = {
      method: "post",
      url: `${api_root}/api/mieter`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$jwt_token}`
      },
      data: mieter,
    };

    axios(config)
      .then(function (response) {
        alert("Mieter created");
        getMieters();
      })
      .catch(function (error) {
        alert("Could not create mieter");
        console.log(error);
      });
  }

  function deleteMieter(mieterId) {
    var config = {
      method: "delete",
      url: `${api_root}/api/mieter/${mieterId}`,
      headers: { Authorization: `Bearer ${$jwt_token}` },
    };

    axios(config)
      .then(function (response) {
        alert("Mieter deleted");
        getMieters();
      })
      .catch(function (error) {
        alert("Could not delete mieter");
        console.log(error);
      });
  }
</script>

<div class="background">
  <h1>🧑🏻‍💼 Mieter</h1>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Neuer Mieter</div>
          <div class="card-body">
            <form
              on:submit|preventDefault={validateEmailAndCreateMieter}
              class="needs-validation"
              novalidate
            >
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input bind:value={mieter.email} class="form-control" id="email" type="email" required />
                <div class="invalid-feedback">Please provide an e-mail address.</div>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input bind:value={mieter.name} class="form-control" id="name" type="text" required />
                <div class="invalid-feedback">Please provide a name.</div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <h1>📋 Alle Mieter</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {#each mieters as mieter}
                  <tr>
                    <td>{mieter.email}</td>
                    <td>{mieter.name}</td>
                    <td>
                      <button class="btn btn-danger btn-sm" on:click={() => deleteMieter(mieter.id)}>
                        Löschen
                      </button>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
            <nav>
              <ul class="pagination">
                {#each Array(nrOfPages) as _, i}
                  <li class="page-item">
                    <a class="page-link" class:active={currentPage == i + 1} href={"/mieter?page=" + (i + 1)}>
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
