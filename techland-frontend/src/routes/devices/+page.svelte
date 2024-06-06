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
    max-width: 1000px;
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

  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
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

  .filter-form, .devices-table {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .delete-icon {
    font-size: 18px;
    color: #fff;
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

  let devices = [];
  let device = {
    name: null,
    description: null,
    deviceType: null,
    mietpreis: null
  };

  let mietpreisMin;
  let deviceType;

  $: {
    if ($jwt_token !== "") {
      let searchParams = $page.url.searchParams;
      if (searchParams.has("page")) {
        currentPage = searchParams.get("page");
      } else {
        currentPage = "1";
      }
      getDevices();
    }
  }

  function getDevices() {
    let query = "?pageSize=" + defaultPageSize + "&pageNumber=" + currentPage; 
    if (mietpreisMin) {
      query += "&min=" + mietpreisMin;
    }
    if (deviceType && deviceType !== "All") {
      query += "&type=" + deviceType;
    }
    
    var config = {
      method: "get",
      url: api_root + "/api/device" + query,
      headers: { Authorization: "Bearer " + $jwt_token },
    };

    axios(config)
      .then(function (response) {
        devices = response.data.content;
        nrOfPages = response.data.totalPages;
      })
      .catch(function (error) {
        alert("Could not get devices");
        console.log(error);
      });
  }

  function createDevice() {
    var config = {
      method: "post",
      url: api_root + "/api/device",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + $jwt_token
      },
      data: device,
    };

    axios(config)
      .then(function (response) {
        alert("Device created");
        getDevices();
      })
      .catch(function (error) {
        alert("Could not create device");
        console.log(error);
      });
  }

  function deleteDevice(deviceId) {
    var config = {
      method: "delete",
      url: `${api_root}/api/device/${deviceId}`,
      headers: { Authorization: `Bearer ${$jwt_token}` },
    };

    axios(config)
      .then(function (response) {
        alert("Device deleted");
        getDevices();
      })
      .catch(function (error) {
        alert("Could not delete device");
        console.log(error);
      });
  }

  function assignToMe(deviceId) {
    var config = {
      method: "put",
      url: `${api_root}/api/service/me/assignDevice?deviceId=${deviceId}`,
      headers: { Authorization: `Bearer ${$jwt_token}` },
    };
    axios(config)
      .then(function (response) {
        getDevices();
      })
      .catch(function (error) {
        alert("Could not assign device to me");
        console.log(error);
      });
  }

  function completeDevice(deviceId) {
    var config = {
      method: "put",
      url: `${api_root}/api/service/me/completeDevice?deviceId=${deviceId}`,
      headers: { Authorization: `Bearer ${$jwt_token}` },
    };
    axios(config)
      .then(function (response) {
        getDevices();
      })
      .catch(function (error) {
        alert("Could not complete device");
        console.log(error);
      });
  }

  function applyFilter() {
    getDevices();
  }
</script>

<div class="background">
<h1>🖥️ Device</h1>
<div class="container filter-form">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">New Device erfassen</div>
        <div class="card-body">
          <form
            on:submit|preventDefault={createDevice}
            class="needs-validation"
            novalidate
          >
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                bind:value={device.name}
                class="form-control"
                id="name"
                type="text"
                required
              />
              <div class="invalid-feedback">Please provide a name.</div>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <input
                bind:value={device.description}
                class="form-control"
                id="description"
                type="text"
                required
              />
              <div class="invalid-feedback">Please provide a description.</div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label for="type" class="form-label">Type</label>
                <select bind:value={device.deviceType} class="form-select" id="type" required>
                  <option value="COMPUTER">COMPUTER</option>
                  <option value="MOBIL">MOBIL</option>
                  <option value="AUDIOVIDEO">AUDIOVIDEO</option>
                  <option value="HAUSHALT">HAUSHALT</option>
                  <option value="KÜCHENGERÄT">KÜCHENGERÄT</option>
                  <option value="BÜRO">BÜRO</option>
                  <option value="WERKZEUG">WERKZEUG</option>
                  <option value="SMARTHOME">SMARTHOME</option>
                </select>
                <div class="invalid-feedback">Please select a type.</div>
              </div>
              <div class="col">
                <label for="mietpreis" class="form-label">Mietpreis</label>
                <input
                  bind:value={device.mietpreis}
                  class="form-control"
                  id="mietpreis"
                  type="number"
                  required
                />
                <div class="invalid-feedback">Please provide a mietpreis.</div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <h1 class="mt-3">🔎 Filter Devices</h1>
  <form class="mb-5">
    <div class="row mb-3">
      <div class="col">
        <label class="form-label" for="mietpreis">Min Mietpreis</label>
        <input bind:value={mietpreisMin} class="form-control" id="mietpreis" type="number" />
      </div>
      <div class="col">
        <label class="form-label" for="type">Device Type</label>
        <select bind:value={deviceType} class="form-select" id="type">
          <option value="All">All</option>
          <option value="COMPUTER">COMPUTER</option>
          <option value="MOBIL">MOBIL</option>
          <option value="AUDIOVIDEO">AUDIOVIDEO</option>
          <option value="HAUSHALT">HAUSHALT</option>
          <option value="KÜCHENGERÄT">KÜCHENGERÄT</option>
          <option value="BÜRO">BÜRO</option>
          <option value="WERKZEUG">WERKZEUG</option>
          <option value="SMARTHOME">SMARTHOME</option>
        </select>
      </div>
    </div>
    <button type="button" class="btn btn-primary" on:click={applyFilter}>Apply Filter</button>
  </form>

  <h1>📋 Alle Devices</h1>
  <div class="row justify-content-center devices-table">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Type</th>
                <th scope="col">Mietpreis</th>
                <th scope="col">State</th>
                <th scope="col">VermieterId</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {#each devices as device}
                <tr>
                  <td>{device.name}</td>
                  <td>{device.description}</td>
                  <td>{device.deviceType}</td>
                  <td>{device.mietpreis}</td>
                  <td>{device.deviceState}</td>
                  <td>{device.vermieterId}</td>
                  <td>
                    <button class="btn btn-danger delete-icon" on:click={() => deleteDevice(device.id)}>🗑️</button>
                  </td>
                  <td>
                    {#if device.deviceState === "Vermietet"}
                      <button type="button" class="btn btn-primary btn-sm" on:click={() => completeDevice(device.id)}>
                        Retournieren
                      </button>
                    {:else if device.deviceState === "Retourniert"}
                      <button type="button" class="btn btn-primary btn-sm" on:click={() => completeDevice(device.id)}>
                        Retourniert
                      </button>
                    {:else if device.deviceState === "Verfügbar"}
                      <button type="button" class="btn btn-primary btn-sm" on:click={() => assignToMe(device.id)}>
                        Mieten
                      </button>
                    {/if}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
          <nav>
            <ul class="pagination">
              {#each Array(nrOfPages) as _, i}
                <li class="page-item">
                  <a
                    class="page-link"
                    class:active={currentPage == i + 1}
                    href={"/devices?page=" + (i + 1)}
                    >{i + 1}
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
