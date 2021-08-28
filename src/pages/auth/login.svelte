<script lang="ts">
    import { redirect } from "@roxi/routify";
    import LoginContainer from "../../containers/LoginContainer.svelte";

    function handleLogedIn() {
        $redirect('/');
    }

    function gotoRegister() {
        $redirect('/auth/register');
    }

    function goToEmailVerfy() {
        $redirect('/auth/verify');
    }
</script>

<div>
    <h1>도씨@한벗둥지 로그인</h1>
    <LoginContainer on:logedIn="{handleLogedIn}" on:goToEmailVerfy="{goToEmailVerfy}" on:gotoRegister="{gotoRegister}"/>
</div>
