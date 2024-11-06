const PARAMS = {
    text: 'hello, world',
  };
  




const pane = new Tweakpane({
    title: 'Tone gui',
    expanded: true,
});

pane.addSeparator();

const instr = pane.addFolder({
    title: 'Sound',
});

// sound/tone context on and off
const btnSound = instr.addButton({
    title: '► | ◼︎',
    label: 'sound on/off',
});

playing = false;

btnSound.on('click', () => {
    console.log(Tone.getContext().state);
    if (playing) {
        Tone.getContext().rawContext.suspend();
        playing = false;
        //audioBuffer.disconnect();
    } else {
        playing = true;
        Tone.start();
    }
});


const SourceInput = 
    instr.addInput(PARAMS, 'text', '');
SourceInput.on('change', function (ev) {
    text = ev.value;
    console.log(text);
    

});

