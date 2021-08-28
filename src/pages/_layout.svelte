<!-- routify:options preload="proximity" -->

<script>
  import { url } from '@roxi/routify'
</script>

{#if !window.location.href.includes($url('/auth/'))}
    <header>도씨</header>
{/if}

<slot />

<footer>
    °C 도씨 v1.0.0<br />
    <a href="mailto:limorbear@gmail.com">limorbear@gmail.com</a><br />
    ©임영택, 2021
</footer>
