const { Core, Layout, Modifier } = require('../src/index');
const { Terminal } = Core;
const { Grid, List, Pane } = Layout;
const { Border } = Modifier;



const border = new Border({
    style: {
        top: '-',
        bottom: '-',
        left: '|',
        right: '|',
    },
    width: {
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
    }
});
const grid = new Grid({
    columns: [
        '1fr',
        '2fr'
    ],
    rows: [
        '1fr',
        '20'
    ],
    modifiers: [ border ],
    content: [
        // Playlist
        {
            columns: 1,
            rows: 2,
            content: new List(), // contains a scroll-able list with click-able songs
        },
        // Song details
        {
            columns: 1,
            rows: 1,
            content: new Pane(), // Contains current music showing logic
        },
        // Music controls
        {
            columns: 1,
            rows: 1,
            content: new Pane(), // Contains music control logic
        }
    ],
});

const term = new Terminal({
    content: [
        grid
    ]
});

term.start();