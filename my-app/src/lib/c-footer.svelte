<footer>
    <ul>
        <li><a href="https://github.com/lisavanmansom">Github</a></li>
        <li><a href="https://www.linkedin.com/in/lisa-van-mansom-b78059231/">Linkedin</a></li>
        <li><a href="mailto:lisavanmansom@gmail.com">Mail</a></li>
        <li><a href="tel:0642629104">0642629104</a></li>
        <li><a href="https://github.com/lisavanmansom">Digital garden</a></li>
    </ul>
</footer>

<style>
    footer {
        background-color: #fff; color: var(--beijo);
        /* border-top-left-radius: 1em; border-top-right-radius: 1em; */
        border-top: .1em solid var(--kalimba);
        display: flex;
        align-items: center; justify-content: center;
        overflow-y: hidden;
        width: 100%; height: 2em;
        text-transform: uppercase;
        box-shadow: 0px 0px 140px rgb(17, 255, 0);
        filter: drop-shadow(1px 1px 30px var(--jupiter));
        filter: saturate(350%);
    }

    ul {
        list-style: none; line-height: 0.7em;
        display: flex; flex-direction: row;
        align-items: center; justify-content: center;
        flex-wrap: wrap; gap: 1em;
        padding: 1.2em 0;
    }

    li {margin: 0}

    a { color: inherit; font-weight: 200; font-size: .5em; 
        text-decoration: none;}

        @media (min-width:700px) {
            ul { gap: 2em}
            a { font-size: 1.1em; }
        }
</style>