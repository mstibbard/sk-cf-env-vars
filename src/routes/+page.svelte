<script>
    export let data;
</script>

<h1>SvelteKit environment variables on Cloudflare</h1>
<p>If the Cloudflare Adapter reads wrangler.toml [vars] the below will display 4 environment variables:</p>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>