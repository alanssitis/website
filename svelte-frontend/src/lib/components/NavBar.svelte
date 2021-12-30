<script>
    const navItems = [
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" }
        ];
</script>
<nav>
    {#each navItems as {label, href}}
        <a {href}>{label}</a>
    {/each}
</nav>
<style>
</style>
