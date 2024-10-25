<script>
    import { onMount, onDestroy } from 'svelte';
    import vertexShaderSrc from '../routes/vertex.glsl?raw';
    import fragmentShaderSrc from '../routes/fragment.glsl?raw';

    let canvas;

    let animationFrameId;

    onMount(() => {
        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        // Compile shaders
        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSrc);
        const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSrc);

        // Link program
        const program = createProgram(gl, vertexShader, fragmentShader);
        gl.useProgram(program);

        // Look up attribute and uniform locations
        const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
        const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
        const timeUniformLocation = gl.getUniformLocation(program, 'u_time');

        // Create buffer and set up geometry
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        // Full-screen quad (two triangles)
        const positions = new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        // Enable the position attribute
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

        // Resize canvas to fit the display
        function resizeCanvas() {
            const displayWidth  = canvas.clientWidth;
            const displayHeight = canvas.clientHeight;

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            }
        }

        // Animation loop
        let startTime = performance.now();

        function render() {
            resizeCanvas();

            // Calculate elapsed time in seconds
            const currentTime = performance.now();
            const elapsedTime = (currentTime - startTime) / 1000.0;

            // Set the uniforms
            gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
            gl.uniform1f(timeUniformLocation, elapsedTime);

            // Draw the scene
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            // Request the next frame
            animationFrameId = requestAnimationFrame(render);
        }

        // Start rendering
        render();

        // Cleanup on component destroy
        return () => {
            cancelAnimationFrame(animationFrameId);
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            gl.deleteBuffer(positionBuffer);
        };
    });

    // Helper function to compile a shader
    function compileShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }

        console.error(type === gl.VERTEX_SHADER ? 'Vertex Shader' : 'Fragment Shader', 'compile error:', gl.getShaderInfoLog(shader));
        console.log('Shader source:', source);  // Log the source for reference
        gl.deleteShader(shader);
        return null;
        }

    // Helper function to create a program
    function createProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        const success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
            return program;
        }

        console.error(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
    }
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        border-bottom: solid .2em #410A8B;
        box-shadow: 0px 0px 35px rgb(149, 0, 255);
        filter: hue-rotate(350deg) invert(1) saturate(350%);
        min-height: 10em;
        width: 10em;
        pointer-events: none;
        transform: matrix(2.1, 0, -0.4, 2, 46, 101);
        width: 100%;
        z-index: -1;
    }

    @media (min-width: 500px) {
        canvas {
            height: 30em;
        }
    }

    @media (min-width: 860px) {
        canvas {
            height: 35em;
        }
    }

</style>
