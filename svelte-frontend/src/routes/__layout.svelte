<script context="module">
    export async function load({page}) {
        return {props: {
            page
        }};
    }
</script>
<script>
    import NavBar from '../lib/components/NavBar.svelte';
    import Footer from '../lib/components/Footer.svelte';

    export let page;
    $: console.log(page);
</script>
<div>
    <NavBar />
    <slot />
    <Footer />
</div>
