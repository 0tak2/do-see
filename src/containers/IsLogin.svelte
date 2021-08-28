<script lang="ts">
    import { user } from '../stores';
</script>

{#if $user.email !== ''}
    <slot></slot>
{/if}