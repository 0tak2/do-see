<script lang="ts">
    import { user } from '../stores';
    import { register } from '../firebase/auth'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let email: string;
    let password: string;
    let passwordConfirm: string;

    async function handleRegister() {
        if (password !== passwordConfirm) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const resp = await register(email, password);
        if (resp.success === true) {
            dispatch('goToEmailVerfy');
        } else {
            console.error(resp.msg);
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
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
        <input type="password" placeholder="비밀번호 확인" bind:value="{passwordConfirm}" />
        <button on:click="{handleRegister}">계정 등록</button>
    </div>
{/if}

<style>
    .flex-container {
        display: flex;
        flex-direction: column;
    }
</style>