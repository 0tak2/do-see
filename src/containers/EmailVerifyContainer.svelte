<script lang="ts">
    import { requestEmailVerification } from '../firebase/auth'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    async function handleEmailVerfy() {
        const resp = await requestEmailVerification();
        if (resp.success === true) {
            alert('인증 메일이 발송되었습니다. 메일을 확인해주세요.');
        } else {
            console.error(resp.msg);
            alert('오류가 발생했습니다. 다시 시도해주십시오.');
        }
    }

    function handleGotoLoginPage() {
        dispatch("goToLogin");
    }
</script>

<div>
    <button on:click|once="{handleEmailVerfy}">인증 메일 발송하기</button><br />
    <button on:click="{handleGotoLoginPage}">로그인 페이지로 이동하기</button>
</div>