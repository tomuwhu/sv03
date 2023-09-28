<script>
    import { Chess } from 'chess.js'
    var st = null, cb, next, hist=[], mate, iam='w', msg = '', depth = Math.round(Math.random()*4)+9
    const chess = new Chess()
    cb = chess.board()
    next = chess.turn()
    var cf = new Map([
        ['p', '♟'],['r', '♜'],['n', '♞'],['b', '♝'],['q', '♛'],['k', '♚'], [null, ' ']
    ])
    const undo = () => {
        chess.undo()
        chess.undo()
        refresh()
        msg = ''
    }
    const turn = () => {
        chess.reset()
        iam =  iam == 'b' ? 'w' : 'b'
        refresh()
        if (iam == 'b') fetcfish()
    }
    const refresh = () => {
        cb = chess.board()
        if (iam == 'b') cb.reverse()
        hist = chess.history()
        next = chess.turn()
        mate = checkmate()
    }
    const fetcfish = () => fetch('https://stockfish.online/api/stockfish.php?fen='
        +chess.fen()
        +`&depth=${depth}&mode=bestmove`)
        .then(v => v.json())
        .then( v => {
            chess.move(v.data.split(" ")[1])
            refresh()
        })
    const checkmate = () => chess.isCheckmate() ? 'Matt' : chess.isDraw() ? 'Döntetlen'  : ''
    const drop = loc => {
        msg = ''
        try {
            chess.move(st.square + loc)
            fetcfish()
        } catch(e) {msg = ["Hibás lépés: " + e.toString().split(" ")[3]]}
        refresh()
    }
</script>
{#if mate}
<h1 class="matt">{checkmate()}</h1>
{:else}
<h1>Sakk</h1> 
{/if}
<button on:click={() => undo()}>Visszalép</button>
<button on:click={() => turn()}>Új játék</button>
<table class={mate?'red':next == iam ? 'norm' : 'yt'}>
    {#each cb as cr, i}
        <tr>
            {#each cr as c, j}
                <td class={`x`+(i+j)%2 + ' ' + (c && c.color == iam ? '' : 'iam')}
                    on:drop={() => {
                        if (iam == 'w') drop(String.fromCharCode(97+j)+(8-i))
                        else drop(String.fromCharCode(97+j)+(i+1))
                    }}
                    on:dragover={e => (e.preventDefault(), true)}>
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <span draggable={c && c.color == iam && !mate ? true : false}
                        on:dragstart={() => st = c} 
                        class={c && c.color}>{cf.get(c && c.type)}</span>
                </td>
            {/each}
        </tr>
    {/each}
</table>
<span class="hist">{hist.join(' - ')} <i>{msg}</i></span>

<style>
    * {
        user-select: none;
    }
    h1 {
        color: rgb(62, 80, 80);
        text-shadow: 1px 1px 3px gray;
        padding: 0px;
    }
    table {
        margin: auto;
        border-spacing: 8px;
        border-radius: 12px;
        box-shadow: 1px 1px 3px inset black;
        padding: 8px;
        border: solid 1px black;
    }
    :global(table.red) {
        background-color: rgb(210, 98, 98);
    }
    :global(table.norm) {
        background-color: rgb(157, 194, 178);
    }
    :global(table.yt) {
        background-color: rgb(225, 227, 158);
    }
    td {
        color: rgb(6, 40, 47);
        font-size: 40px;
        width: 50px;
        height: 50px;
        background-color: rgb(225, 223, 219);
        box-shadow: 1px 1px 3px black;
        border-radius: 8px;
    }
    td.next {
        cursor: pointer;
    }
    td.x1 {
        background-color: rgb(97, 120, 120);
    }
    td span {
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 40px;
        transform: translateY(-3px);
        cursor: grab;
        background: transparent;
        text-shadow: 0px 0px 4px white;
        vertical-align: middle;
    }
    td span.w {
        color:rgb(224, 220, 121);
        text-shadow: 0px 0px 4px black;
    }
    td.iam span {
        cursor: default;
    }
    span.hist {
        background-color: antiquewhite;
        border-radius: 10px;
        padding: 5px;
        padding-left: 15px;
        padding-right: 15px;
        margin: 15px;
        font-size: 11px;
        display: inline-block;
        max-width: 80%;
        color: green;
        min-height: 10px;
    }
    h1.matt {
        color: brown;
    }
    button {
        all: unset;
        width: 60px;
        text-shadow: 1px 1px 3px rgb(110, 110, 110);
        margin: 7px;
        border-radius: 7px;
        box-shadow: 1px 1px 3px black;
        background-color: rgb(187, 244, 244);
        padding: 3px;
        border: solid 1px black;
        cursor: pointer;
        font-size: 12px;
    }
    button:hover {
        box-shadow: 1px 1px 3px black;
        background-color: rgb(114, 175, 175);
    }
    button:active {
        box-shadow: 1px 1px 3px black;
        background-color: rgb(255, 89, 0);
    }
    i {
        color: red;
    }
</style>