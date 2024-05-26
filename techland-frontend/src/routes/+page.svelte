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

    .btn-primary {
        background-color: #4682b4;
        border-color: #4682b4;
    }

    .btn-primary:hover {
        background-color: #315f86;
        border-color: #315f86;
    }

    .welcome-message {
        text-align: center;
        font-size: 1.5em; /* Größere Schriftart */
        margin-top: 20px;
    }
</style>

<script>
    import { isAuthenticated } from "../store";
    import auth from "../auth.service";

    let username = "";
    let password = "";
    let loginForm;

    function loginWithUsernameAndPassword() {
        if (loginForm.checkValidity()) {
            auth.login(username, password);
        }
        loginForm.classList.add("was-validated");
    }
</script>

<div class="background">
    {#if $isAuthenticated}
        <div class="container mt-5">
            <div class="welcome-message">
                <h1>Willkommen bei Techland!</h1>
                <p>
                    Wir freuen uns, Sie hier zu haben. Entdecken Sie die große Auswahl an elektronischen Geräten,
                    die wir anbieten, und die auf Ihre Bedürfnisse zugeschnitten sind. Egal ob Sie mieten oder leasen möchten,
                    Techland hat alles, was Sie brauchen.
                </p>
                <p>
                    Unsere Plattform ist benutzerfreundlich und sicher, damit Sie die beste Erfahrung machen können.
                    Zögern Sie nicht, unser Support-Team zu kontaktieren, wenn Sie Fragen haben. Genießen Sie Ihre Zeit bei Techland!
                </p>
                <p style="text-align: center; font-size: 2.2em;">
                    📱🖥️🖨️🕹️📽️📸💻📺📻📠
                </p>
            </div>
        </div>
    {:else}
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <form
                                on:submit|preventDefault={loginWithUsernameAndPassword}
                                bind:this={loginForm}
                                class="needs-validation"
                                novalidate
                            >
                                <div class="mb-3">
                                    <label for="username" class="form-label">Email</label>
                                    <input
                                        bind:value={username}
                                        type="text"
                                        class="form-control"
                                        id="username"
                                        name="username"
                                        required
                                    />
                                    <div class="invalid-feedback">
                                        Please provide your username.
                                    </div>
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
                                    <div class="invalid-feedback">
                                        Please provide your password.
                                    </div>
                                </div>
                                <div class="row align-items-end">
                                    <div class="col">
                                        <button
                                            type="submit"
                                            class="btn btn-primary btn-block">Log in</button>
                                    </div>
                                    <div class="col-auto">
                                        <p class="mt-2 mb-0">Don't have an account?</p>
                                        <a href="/signup" class="btn btn-link">Sign up</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
