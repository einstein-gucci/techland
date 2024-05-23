<script>
  import axios from "axios";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { jwt_token} from "../../store";

  // TODO: setze hier die URL zu deinem mit Postman erstellten Mock-Server ein
  const api_root = $page.url.origin;
  
  let devices = [];
  let device = {
    name: null,
    description: null,
    deviceType: null,
    mietpreis: null
  };

  onMount(() => {
    getDevices();
  }); 

  function getDevices() {
    var config = {
      method: "get",
      url: api_root + "/api/device",
      headers: { Authorization: "Bearer "+$jwt_token },
    };

    axios(config)
      .then(function (response) {
        devices = response.data;
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
        Authorization: "Bearer "+$jwt_token
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
</script>

<h1 class="mt-3">Create Device</h1>
<form class="mb-5">
  <div class="row mb-3">
    <div class="col">
      <label class="form-label" for="name">Name</label>
      <input
        bind:value={device.name}
        class="form-control"
        id="name"
        type="text"
      />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
      <label class="form-label" for="description">Description</label>
      <input
        bind:value={device.description}
        class="form-control"
        id="description"
        type="text"
      />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
      <label class="form-label" for="type">Type</label>
      <select bind:value={device.deviceType} class="form-select" id="type">
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
    <div class="col">
      <label class="form-label" for="mietpreis">Mietpreis</label>
      <input
        bind:value={device.mietpreis}
        class="form-control"
        id="mietpreis"
        type="number"
      />
    </div>
  </div>
  <button type="button" class="btn btn-primary" on:click={createDevice}
    >Submit</button>
</form>

<h1>All Devices</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Type</th>
      <th scope="col">Mietpreis</th>
      <th scope="col">State</th>
      <th scope="col">VermieterId</th>
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
      </tr>
    {/each}
  </tbody>
</table>
