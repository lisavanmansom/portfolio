<script>
	import BinderElement from '$lib/c-binderElement.svelte';
    import Footer from '$lib/c-footer.svelte';
    import Shader from '$lib/shader.svelte';
    import ViewTransition from './navigation.svelte'
    import Text from '$lib/text.svelte';


</script>

<div class="app">
    <ViewTransition />
  </div>

<main>

    <BinderElement />

    <div><h1>Lisa van Mansom</h1>
    <p>frontend developer</p></div>
    <Shader />
    <Text />
</main>

<Footer />

<style>
    main {
        color: var(--horizonte);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        overflow: hidden;
        width: 100%; min-height: 100dvh;
        text-transform: uppercase;
        position: relative;
        /* gap: 4.5em; */
        margin: 2em 0;
    }

    main div { text-align: center; 
        /* padding: .5em 0 0 0; */
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        width: 100%; min-height: 100%;
    }

    h1 { font-weight: 200; font-size: 1.6em; z-index: 10;}
    p  { font-weight: 100; font-size: 1.3em; z-index: 10;}

    h1, p {
        transition: all .5s ease-in-out;
    }

    p:hover, h1:hover {
        transform: skew(5deg, 5deg);
    }

    @media (min-width: 500px) {
        h1 { font-size: 1.9em;}
        p  { font-size: 1.4em;}

        /* main div { padding: 2.5em 0 0 0; } */
    }

    @media (min-width:860px) {
        h1 { font-size: 2.5em;}
        p  { font-size: 1.8em;}
    }

</style>