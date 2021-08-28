<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { user } from '../stores';
    import { logOut } from '../firebase/auth';
    import AuthInfo from '../components/AuthInfo.svelte';

    const dispatch = createEventDispatcher();

    function handleLogin() {
        dispatch('gotoLogin');
    }

    async function handleLogOut() {
        const resp = await logOut();
        user.set({ uid:'', gtoken: '', email: '' });
    }
</script>

{#if $user.email !== ''}
    <div>
        <AuthInfo email="{$user.email}" uid="{$user.uid}" />
        <div>
            <button on:click="{handleLogOut}">로그아웃</button>
        </div>
    </div>
{:else}
    <div>로그인하셔야 시스템을 이용할 수 있습니다.</div>
    <button on:click="{handleLogin}">로그인</button>
{/if}