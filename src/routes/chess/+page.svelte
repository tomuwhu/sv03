<script>
    import { Chess } from 'chess.js'
    var st = null, cb, next, hist=[], mate, iam='w'
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
    }
    const refresh = () => {
        cb = chess.board()
        hist = chess.history()
        next = chess.turn()
        mate = checkmate()
    }
    const fetcfish = () => fetch('https://stockfish.online/api/stockfish.php?fen='
        +chess.fen()
        +'&depth=11&mode=bestmove')
        .then(v => v.json())
        .then( v => {
            chess.move(v.data.split(" ")[1])
            refresh()
        })
    const checkmate = () => chess.isCheckmate() ? 'Matt' : chess.isDraw() ? 'Döntetlen'  : ''
    function drop(loc) {
        try {
            chess.move(st.square+"x"+loc)
            fetcfish()
        } catch(e) {
            if (st.type.toLowerCase() != 'p' || loc[0].toLowerCase() == st.square[0].toLowerCase()) try {
                chess.move('g1f3')
                fetcfish()
            } catch(e) {console.log(e)}
        }
        refresh()
    }
</script>
{#if mate}
<h1 class="matt">Matt</h1>
{:else}
<h1>Sakk</h1> 
{/if}
<button on:click={() => undo()}>Visszalép</button>
<table class={mate?'red':next == iam ? 'norm' : 'yt'}>
    {#each cb as cr, i}
        <tr>
            {#each cr as c, j}
                <td class={`x`+(i+j)%2 + ' ' + (next == iam ? 'iam' : '')}
                    on:drop={() => {
                        drop(String.fromCharCode(97+j)+(8-i))
                    }}
                    on:dragover={e => (e.preventDefault(), true)}>
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <span draggable={next == iam && !mate ? true : false}
                        on:dragstart={() => st = c} 
                        class={c && c.color}>{cf.get(c && c.type)}</span>
                </td>
            {/each}
        </tr>
    {/each}
</table>
<span class="hist">{hist.join(' - ')}</span>

<style>
    * {
        user-select: none;
    }
    table {
        margin: auto;
        border-spacing: 8px;
        border-radius: 12px;
        box-shadow: 1px 1px 3px inset black;
        padding: 15px;
    }
    :global(table.red) {
        background-color: rgb(210, 98, 98);
    }
    :global(table.norm) {
        background-color: rgb(157, 194, 178);
    }
    :global(table.yt) {
        background-color: rgb(158, 195, 227);
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
        margin-top: -20px;
        cursor: grab;
        background: transparent;
        text-shadow: 0px 0px 4px white;
    }
    td span.w {
        color:rgb(224, 220, 121);
        text-shadow: 0px 0px 4px black;
    }
    td.aim span {
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
        margin: 5px;
        border-radius: 7px;
        box-shadow: 1px 1px 3px black;
        background-color: aqua;
        padding: 6px;
        cursor: pointer;
    }
    button:hover {
        box-shadow: 1px 1px 3px black;
        background-color: rgb(114, 175, 175);
    }
    button:active {
        box-shadow: 1px 1px 3px black;
        background-color: rgb(255, 89, 0);
    }
</style>