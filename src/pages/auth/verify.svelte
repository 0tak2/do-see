<script lang="ts">
    import EmailVerifyContainer from "../../containers/EmailVerifyContainer.svelte";
    import { redirect } from "@roxi/routify";

    function goToLoginPage() {
        $redirect('/auth/login');
    }
</script>

<div>
    <h1>이메일 인증</h1>
    <div>이메일 인증을 완료해야 로그인할 수 있습니다.</div>

    <EmailVerifyContainer on:goToLogin={goToLoginPage} />
</div>