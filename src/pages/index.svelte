<script lang='ts'>
    import { metatags } from '@roxi/routify'
    import { redirect } from '@roxi/routify';
    import AuthInfoContainer from '../containers/AuthInfoContainer.svelte';
    import IsLogin from '../containers/IsLogin.svelte'

    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'

    function gotoLogin() {
       $redirect('/auth/login');
    }
</script>

<header>
    <AuthInfoContainer on:gotoLogin="{gotoLogin}" />
</header>

<IsLogin>
    <main>
        <h1>°C 도씨</h1>
        <p>도씨는 소규모 사회복지시설의 클라이언트 생활 관리를 위한 솔루션입니다.</p>
    </main>
</IsLogin>