const ClosureCompiler = require('google-closure-compiler').compiler;

console.log(ClosureCompiler.COMPILER_PATH); // absolute path to the compiler jar
console.log(ClosureCompiler.CONTRIB_PATH); // absolute path to the contrib folder which contain externs

const closureCompilerForEnjine = new ClosureCompiler({
    js: [
        'Enjine/core.js',
        'Enjine/gameCanvas.js',
        'Enjine/keyboardInput.js',
        'Enjine/resources.js',
        'Enjine/drawable.js',
        'Enjine/state.js',
        'Enjine/gameTimer.js',
        'Enjine/camera.js',
        'Enjine/drawableManager.js',
        'Enjine/sprite.js',
        'Enjine/spriteFont.js',
        'Enjine/frameSprite.js',
        'Enjine/animatedSprite.js',
        'Enjine/collideable.js',
        'Enjine/application.js'
    ],
    compilation_level: 'SIMPLE',
    js_output_file: 'enjine.min.js',
    debug: true
});

const compilerProcessForEnjine = closureCompilerForEnjine.run((exitCode, stdOut, stdErr) => {
    //compilation complete
    console.log('Enjine compilation completed.');
});

const closureCompilerForCode = new ClosureCompiler({
    js: [
        'code/setup.js',
        'code/spriteCuts.js',
        'code/level.js',
        'code/backgroundGenerator.js',
        'code/backgroundRenderer.js',
        'code/improvedNoise.js',
        'code/notchSprite.js',
        'code/character.js',
        'code/levelRenderer.js',
        'code/levelGenerator.js',
        'code/spriteTemplate.js',
        'code/enemy.js',
        'code/fireball.js',
        'code/sparkle.js',
        'code/coinAnim.js',
        'code/mushroom.js',
		'code/particle.js',
		'code/fireFlower.js',
        'code/bulletBill.js',
        'code/flowerEnemy.js',
        'code/shell.js',

        'code/titleState.js',
        'code/loadingState.js',
        'code/loseState.js',
        'code/winState.js',
        'code/mapState.js',
        'code/levelState.js',

        'code/music.js',
        'code/midi.js'
    ],
    compilation_level: 'SIMPLE',
    js_output_file: 'mario.min.js',
    debug: true
});

const compilerProcessForCode = closureCompilerForCode.run((exitCode, stdOut, stdErr) => {
    //compilation complete
    console.log('Code compilation completed.');
});