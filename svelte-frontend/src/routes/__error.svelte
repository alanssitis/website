<script context="module">
    export function load({error, status}) {
        return {
            props: {
                message: error.message,
                errStatus: status
            }
        }
    }
</script>

<script>
    export let message = "error";
    export let errStatus = "???";
</script>

<h1>{message}</h1>
<h1>{errStatus}</h1>
