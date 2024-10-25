<script>
    import Footer from '$lib/c-footer.svelte';
    import TextAbout from '$lib/text-aboutme.svelte';
    import Orb from '$lib/orb.svelte';
    import ViewTransition from '../navigation.svelte';
    import ShaderAbout from '$lib/shader-about.svelte';
</script>

<div class="app">
    <ViewTransition />
  </div>

<main>
    <header>
        <h1>Hi, I am Lisa van Mansom</h1>
        <p>A Frontend developer</p>
        <Orb />
    </header>

    <section>
        <hgroup>
            <h2>Selected works</h2>
            <p> In my selected works, you'll find projects that blend creativity with technical skill, reflecting my journey as a developer. 
                Each piece represents a unique challenge, from solving complex coding problems to designing user-friendly interfaces. 
                Through these works, I aim to showcase not only my technical expertise but also my commitment to creating impactful, meaningful digital experiences. </p>
        </hgroup>

        <div class="l-d">
        <article>
            <div class="a-d">
                <a href="https://github.com/lisavanmansom/proof-of-concept">
                    <div>
                        <h3>Fresk digital</h3>
                        <h4>June 2024</h4>
                        <p>Dotenv / chart.js / node & express </p>
                    </div>
                </a>
            </div>
            <div>
                <img width="100" height="100" alt="website for fresk digital, data dashboard" src="../images/fresk-1.png">
                <img width="100" height="100" alt="website for fresk digital, login screen" src="../images/fresk-2.png">
            </div>
        </article>

        <article>
            <div class="a-d"> 
            <a href="https://github.com/lisavanmansom/pleasurable-ui">
                <div>
                    <h3>Tumi Mundo</h3>
                    <h4>May 2024</h4>
                    <p>GSAP / node & express </p>
                </div>
                </a>
            </div>
            <div>
                <img width="100" height="100" loading="lazy" alt="website for Tumi Mundo" src="../images/tumi-1.png">
                <img width="100" height="100" loading="lazy" alt="website for Tumi Mundo" src="../images/tumi-2.png">
            </div>
            
        </article>

        <article>
            <div class="a-d">
            <a href="https://github.com/lisavanmansom/fix-the-flow-interactive-website">
                <div>
                    <h3>Funda</h3>
                    <h4>December 2023</h4>
                    <p>html / css / Javascript</p>
                </div>
            </a>
            </div>
            <div>
                <img width="100" height="100" loading="lazy" alt="website for funda" src="../images/funda-1.png">
                <img width="100" height="100" loading="lazy" alt="website for funda" src="../images/funda-2.png">
            </div> 
        </article>

        <article>
            <div class="a-d">
            <a href="https://github.com/lisavanmansom/drop-and-heal">
                <div>
                    <h3>Drop & Heal</h3>
                    <h4>October 2023</h4>
                    <p>Sveltekit / React </p>
                </div>
            </a>
            </div>
            <div>
                <img width="100" height="100" loading="lazy" alt="website for drop and heal, rouwtaak 3" src="../images/dropheal-1.png">
                <img width="100" height="100" loading="lazy" alt="website for drop and heal, rouwtaak 2" src="../images/dropheal-2.png">
            </div>
        </article>

        <article>
            <div class="a-d">
            <a href="https://github.com/lisavanmansom/the-startup-website-bnr">
                <div>
                    <h3>BNR</h3>
                    <h4>January 2023</h4>
                    <p>html / css / Javascript</p>
                </div>
            </a>
            </div>
            <div>
                <img width="100" height="100" loading="lazy" alt="website for bnr" src="../images/bnr-1.png">
                <img width="100" height="100" loading="lazy" alt="website for bnr" src="../images/bnr-2.png">
            </div>
        </article>

        <article>
            <div class="a-d">
            <a href="https://github.com/lisavanmansom/connect-your-tribe-profile-card">
                <div>
                    <h3>Profile card / 2</h3>
                    <h4>February 2024</h4>
                    <p>node & express</p>
                </div>
            </a>
            </div>
            <div>
                <img width="100" height="100" loading="lazy" alt="" src="../images/pf-1.png">
                <img width="100" height="100" loading="lazy" alt="" src="../images/pf-2.png">
            </div>
            
        </article>

        <article>
            <div class="a-d">
            <a href="https://github.com/lisavanmansom/connect-your-tribe-squad-page">
                <div>
                    <h3>Squadpage museum</h3>
                    <h4>February 2024</h4>
                    <p>node & express</p>
                </div>
            </a>
            </div>
            <div>
                <img width="100" height="100" loading="lazy" alt="" src="../images/museum-2.png">
                <img width="100" height="100" loading="lazy" alt="" src="../images/museum-1.png">
            </div>
        </article>

        <article>
            <div class="a-d">
            <a href="https://github.com/lisavanmansom/tribeforlife-squadpage">
                <div>
                    <h3>Squadpage</h3>
                    <h4>September 2024</h4>
                    <p>Sveltekit</p>
                </div>
            </a>
            </div>
            <div>
                <img width="100" height="100" loading="lazy" alt="#" src="../images/squadw-1.png">
                <img width="100" height="100" loading="lazy" alt="#" src="../images/squadw-2.png">
            </div> 
        </article>
        
    </div>

    <ShaderAbout />

    </section>

    <section>
        <article>
            <h2>about me</h2>
            <p>My name is Lisa van Mansom and I am studying Frontend design & development at the Hva. 
                During my study I have learnt the best practices of HTML, CSS and JavaScript and how to use it in a creative way. 
                This year I have started using tech stacks like SvelteKit and React. 
                In my free time, to enhance more skills, I have decided to start learning WebGL, Gsap and other JS libraries. 
                Additionally, I am well-versed in the latest innovations within the frontend sector, for example I have worked with container queries and view transitions. 
                As a person I am ambitious, very eager to learn, structured and I work well together. Furthermore, I have an eye for detail, and I think it is important to work intelligently to deliver work at a high customer level. 
            </p>

            <p>Outside of coding, I am passionate about diving into classic and contemporary literature, as I believe every book offers a fresh perspective on the world. 
                I love the energy and creativity of live music, and going to concerts is one of my favorite ways to unwind and get inspired. 
                I also value spending quality time with friends, as those moments help me recharge and bring balance to my life.
            </p>
        </article>

        <article>
            <h2>Work Experience</h2>
            <p>Currently, I am active as a student assistant at the CMD course. 
                My work within this position is helping students with coding their website, organizing feedback sessions and helping them identify their areas of improvement. 
                By doing so, I have learnt to proactive share crucial knowledge to help others and various ways to navigate between diversity.
                Previously, I have studied graphic design at rocva. While studying I have worked with multiple Adobe softwares. 
                Part of my study was a yearlong internship which I spent at the e-commerce startup Positive Things. My work included web design, packaging and manual design, banner and product images. 
                </p>

            <h3>Student Assistant Frontend - Septembet 2024 / December 2024</h3>
            <p>Hva communication multimedia design</p>
            <ul>
                <li>Helping with lessons, holding feedback sessions about their code and work ethic and answering questions.</li>
                <li>Working with CMD-students and teachers. </li>
            </ul>
   
            <h3>Tumi Mundo - March 2024 / June 2024</h3>
            <p>Lessons page</p>
            <ul>
                <li>A language learning web application where children can learn a second language, multiple stories, lessons and playlist are part of the lessons overview page.</li>
                <li>Working with Node.js / Express.js, Directus and GSAP.</li>
            </ul>

            <h3>Fresk. Digital - June 2024</h3>
            <p>Data Dashboard</p>
            <ul>
                <li>Data-driven digital dashboard with a login page and an overview page of the data.</li>
                <li>Working with Chart.js, Google analytics and Node.js / Express.js.</li>
            </ul>

            <h3>Graphic Design internship - February 2021 / January 2022 </h3>
            <p>Positive Things</p>
            <ul>
                <li>At Positive Things I was used to working on different products including packaging and manual design, creating multiple E-books, product images and webdesign</li>
                <li>Working with Adobe Illustrator, Photoshop, Indesign and Dimension.</li>
            </ul>
        </article>

        <article>
            <h2>contact</h2>
            <ul>
                <li><a href="https://github.com/lisavanmansom">Github</a></li>
                <li><a href="https://www.linkedin.com/in/lisa-van-mansom-b78059231/">Linkedin</a></li>
                <li><a href="mailto:lisavanmansom@gmail.com">Mail</a></li>
                <li><a href="tel:0642629104">0642629104</a></li>
            </ul>
        </article>
    </section>

    
</main>

<Footer />

<style lang="postcss">
main {  color: var(--horizonte);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        overflow: hidden;
        width: 100%; min-height: 100dvh;
        text-transform: uppercase;
    }
    
    h1 { font-weight: 200; font-size: 1.5em; }
    h2 { font-weight: 200; font-size: 2em; }
    h3 { font-weight: 400; font-size: 1em; }
    h4 { font-weight: 100; font-size: .9em; }
    p  { font-weight: 100; font-size: .8em; }
    a  { text-decoration: none; cursor: pointer; color: var(--beijo);}

    header {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 20em;
        text-align: center;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    header h1, header p {
        z-index: 10;
    }

   section:nth-of-type(1) {
    position: relative;
    width: 100%;
    margin: .5em .25em;
    box-shadow: 0px 0px 140px rgb(17, 255, 0);
   }

   section:nth-of-type(1) hgroup {
    background-color: var(--horizonte);
    width: 100%;
    color: var(--beijo);
   }

   section:nth-of-type(1) hgroup h2 {
    padding: .5em .25em 0;
   }

   section:nth-of-type(1) hgroup p {
    padding: .5em 1em;
    max-width: 100ch;
   }

   .l-d {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.418), rgba(124, 90, 196, 0.304));
    backdrop-filter: blur(10px);
    container: list-banner / inline-size;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-backdrop-filter: blur(10px);
   }

   section:nth-of-type(1) article {
    align-items: center;
    border: .1em solid var(--horizonte);
    color: var(--beijo);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 34em;
    position: relative;
   }

   /* div in article, staat om de a heen */
   .a-d {
    background-color: var(--horizonte);
    /* box-shadow: 0px 0px 140px rgb(17, 255, 0); */
    display: flex;
    flex-direction: column;
   }

   .a-d a {
    display: flex;
    flex-direction: column;
   }

   .a-d a div {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: 4em;
    justify-content: space-between;
    padding: .5em .25em;
    width: 100vw;
   }

    .a-d a div p {
      font-weight: 100; 
      font-size: .8em;
      width: 100%;
    }
   
   section:nth-of-type(1) article img {
    height: 10em;
    object-fit: cover;
    width: 10em;
   }

   section:nth-of-type(1) article div:nth-of-type(2) {
     height: 10em;
     order: -1;
     display: flex;
     align-items: center;
     justify-content: center;
     transition: all 5s ease-in-out;
   }

   section:nth-of-type(1) article div:nth-of-type(2):hover {
     img:nth-of-type(1) {
        transform: matrix(2.1, 0, 0.6, 2.3, -30, 213);
     }
    img:nth-of-type(2) {
        transform: matrix(2.1, 0, -0.4, 2, 46, 101);
    }
   }

   section:nth-of-type(1) article img:nth-of-type(1) {
    transform: matrix(2.1, 0, -0.4, 2, 46, 101);
    position: absolute;
   }

   section:nth-of-type(1) article img:nth-of-type(2) {
     transform: matrix(2.1, 0, 0.6, 2.3, -30, 213);
     position: absolute;
   }

   /* section 2 styling // about me */
   section:nth-of-type(2) {
    color: var(--horizonte);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 0 2em;
    margin: 5em 0 5em 0;
    container: ab-banner / inline-size;
   }

   section:nth-of-type(2) article {
    display: flex;
    flex-direction: column;
    gap: 1em;
   }

   section:nth-of-type(2) h2 {
    width: 80%;
    border-bottom: .1em solid white;
   }

   section:nth-of-type(2) p {
    font-size: 1em;
    font-weight: 200;
    text-transform: initial;
    max-width: 75ch;
   }

   section:nth-of-type(2) ul {
    list-style: none;
   }
   section:nth-of-type(2) ul a {
    color: var(--horizonte);
    font-weight: 200;
   }

   section:nth-of-type(2) ul li {
    font-weight: 100;
    text-transform: initial;
    margin-bottom: 1em;
   }

   section:nth-of-type(2) article:nth-of-type(3) li {
    font-weight: 100;
    text-transform: initial;
    margin-bottom: 0em;
   }

   @container ab-banner (min-width: 500px) {
        section:nth-of-type(2) h2 {
        width: 410px;
   }
    }

   @container list-banner (min-width: 550px) {
        article {
            width: 50%;
        }

        .a-d a div {
          max-width: 50vw;
          padding: .5em .75em;
        }
    }

    @container list-banner (min-width: 1000px) {
        article {
            width: 33.3%;
        }

        .a-d a div {
          max-width: 33.3vw;
          padding: .5em .95em;
        }
    }

    @container list-banner (min-width: 2500px) {
        article {
            width: 25%;
        }

        .a-d a div {
          max-width: 25vw;
          padding: .5em 1.15em;
        }
    }

    @media (min-width: 875px) {
        section:nth-of-type(1) hgroup {
            padding: 2em;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
        }

        section:nth-of-type(1) hgroup h2 {
            padding-bottom: 1em
        }

        section:nth-of-type(2) {
            padding: 2em 12em;
        }
    }

</style>