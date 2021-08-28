<script lang="ts">
    import { redirect } from "@roxi/routify";
    import RegisterContainer from "../../containers/RegisterContainer.svelte";

    function goToEmailVerfy() {
        $redirect('/auth/verify');
    }
</script>

<div>
    <h1>계정 등록</h1>
    <RegisterContainer on:goToEmailVerfy="{goToEmailVerfy}" />
</div>