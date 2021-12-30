<script context="module">
    export async function load({page}) {
        const slug = page.params.slug;
        return {props: {
            slug
        }};
    }
</script>

<script>
    export let slug;
</script>

<svelte:head>
    <title>{slug}</title>
</svelte:head>

<h1>You are in an article! It is blog {slug}</h1>
