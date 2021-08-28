<script lang="ts">
    import { user } from '../stores';
    import { logIn, googleLogIn } from '../firebase/auth'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let email: string;
    let password: string;

    async function handleLogIn() {
        const resp = await logIn(email, password);
        if (resp.success === true) {
            const userInfo = resp.payload;
            user.set(userInfo);
            dispatch('logedIn');
        } else if (resp.msg === '[do-see/noEmailVerifyed] 이메일 인증이 완료되지 않아 로그인할 수 없습니다.') {
            dispatch('goToEmailVerfy');
        } else {
            console.error(resp.msg);
            alert('이메일과 비밀번호를 다시 한 번 확인해주십시오.');
        }
    }

    async function handleGoogleLogIn() {
        const resp = await googleLogIn();
        if (resp.success === true) {
            const userInfo = resp.payload;
            user.set(userInfo);
            dispatch('logedIn');
        } else {
            console.error(resp.msg);
            alert('이메일과 비밀번호를 다시 한 번 확인해주십시오.');
        }
    }

    function handleRegisterLink() {
        dispatch('gotoRegister');
    }
</script>

{#if $user.email !== ''}
    <div class="flex-container">
        이미 로그인되어 있습니다.
    </div>
{:else}
    <div class="flex-container">
        <input placeholder="이메일" bind:value="{email}" />
        <input type="password" placeholder="비밀번호" bind:value="{password}" />
        <button on:click="{handleLogIn}">로그인</button>
        <button on:click="{handleRegisterLink}">계정 등록</button>
    </div>
    <div>
        또는 <button on:click="{handleGoogleLogIn}">구글 계정으로 로그인하기</button>
    </div>
{/if}

<style>
    .flex-container {
        display: flex;
        flex-direction: column;
    }
</style>