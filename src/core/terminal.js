const EventEmitter = require('events');
const termSize = require('term-size');

module.exports = class terminal {

    EVENT_RESIZE = 'resize';

    _eventBus = new EventEmitter();

    constructor() {

    }

    /**
     * Events
     */

    addListener ( eventName, callable ) {
        this._eventBus.addListener( eventName, callable );
    }

    once ( eventName, callable ) {
        this._eventBus.once( eventName, callable );
    }

    removeListener ( eventName, callable ) {
        this._eventBus.removeListener( eventName, callable );
    }

    _triggerEvent( eventName, data ) {
        this._eventBus.emit( eventName, data );
    }


    /**
     * Start
     */

    started = false;
    start() {
        // Check if we can start
        if ( this.started ) throw Error('Already started');

        // Mark class as started
        this.started = true;

        this._ensureResize();
        process.stdout.on('resize', () => {
            this._ensureResize();
        });

        // THE LOOP
        setInterval(() => {



        }, 0)
    }

    /**
     * resize
     */

    columns = 0;
    rows = 0;
    _ensureResize() {
        let updated = false;
        const { rows, columns } = termSize();
        if ( rows !== this.rows ) { this.rows = rows-1; updated = true; }
        if ( columns !== this.columns ) { this.columns = columns-1 ; updated = true; }
        if (updated) this._triggerEvent( this.EVENT_RESIZE, { rows: this.rows, columns: this.columns } );
    }

}