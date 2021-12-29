<script context="module">
    export async function load({page}) {
        const id = page.params.id;
        return {props: {id}}
    }
</script>

<script>
    export let id = -1;
</script>

<h1>You are in an article! It is blog {id}</h1>
