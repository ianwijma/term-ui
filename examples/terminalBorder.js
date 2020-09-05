const { Core } = require('../src/index');
const { Terminal } = Core;

const term = new Terminal();

term.addListener( term.EVENT_RESIZE, ({columns, rows}) => {
    const wr = char => process.stdout.write(char);

    const c = () => wr('C');
    const t = () => wr('T');
    const l = () => wr('L');
    const r = () => wr('R');
    const b = () => wr('B');
    const ws = () => wr(' ');
    const nl = () => wr('\n');

    for ( let row = 0; row < rows; row++ ) {
        for ( let col = 0; col < columns; col++ ) {
            if ( (col === 0 || col === columns-1) && (row === 0 || row === rows-1) ) {
                c();
            } else if ( row === 0 ) {
                t();
            } else if ( row === rows-1 ) {
                b();
            } else if ( col === 0 ) {
                l();
            } else if ( col === columns-1 ) {
                r();
            }else {
                ws();
            }
        }
        nl();
    }
});

term.start();