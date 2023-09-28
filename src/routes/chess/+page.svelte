<script>
    import { Chess } from 'chess.js'
    var st = null, cb, next, hist, mate
    const chess = new Chess()
    cb = chess.board()
    next=chess.turn()
    var cf = new Map([
        ['p', '♟'],['r', '♜'],['n', '♞'],['b', '♝'],['q', '♛'],['k', '♚'], [null, ' ']
    ])
    function drop(loc) {
        try {
            chess.move(st.square+"x"+loc)
            fetch('https://stockfish.online/api/stockfish.php?fen='+chess.fen()+'&depth=11&mode=bestmove').then(v => v.json()).then( v => {
                chess.move(v.data)
                cb = chess.board()
                hist = chess.history()
                next=chess.turn()
                mate=chess.isCheckmate()
            })
        } catch(e) {
            try {
                chess.move(st.type!='p'?st.type.toUpperCase()+loc:loc)
                fetch('https://stockfish.online/api/stockfish.php?fen='+chess.fen()+'&depth=11&mode=bestmove').then(v => v.json()).then( v => {
                    chess.move(v.data)
                    cb = chess.board()
                    hist = chess.history()
                    next=chess.turn()
                    mate=chess.isCheckmate()
                })
            } catch(e) {}
        }
        cb = chess.board()
        hist = chess.history()
        next=chess.turn()
        mate = chess.isCheckmate()
    }
</script>
{#if mate}
<h1>Matt</h1>
{:else}
<h1>Sakk</h1> 
{/if}
<table>
    {#each cb as cr, i}
        <tr>
            {#each cr as c, j}
                <td class={`x`+(i+j)%2+' '+next}
                    on:drop={() => drop(String.fromCharCode(97+j)+(8-i))}
                    on:dragover={e => (e.preventDefault(), true)}>
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <span
                        draggable={next=='w' && !mate ? true : false}
                        on:dragstart={() => {
                            st = c
                        }} 
                        class={c && c.color}>{cf.get(c && c.type)}</span>
                </td>
            {/each}
        </tr>
    {/each}
</table>
<style>
    table {
        margin: auto;
        border-spacing: 8px;
        user-select: none;
    }
    td {
        color: rgb(6, 67, 81);
        font-size: 40px;
        width: 50px;
        height: 50px;
        background-color: rgb(202, 195, 184);
        box-shadow: 1px 1px 3px black;
        border-radius: 8px;
    }
    td.next {
        cursor: pointer;
    }
    td.x1 {
        background-color: rgb(148, 174, 174);
    }
    td span {
        margin: 0px;
        padding: 0px;
        margin-top: -10px;
        cursor: grab;
        background: transparent;
        text-shadow: 1px 1px 3px white;
    }
    td span.w {
        margin: 0px;
        padding: 0px;
        margin-top: -10px;
        cursor: grab;
        background: transparent;
        color:rgb(224, 220, 121);
        text-shadow: 1px 1px 3px black;
    }
    td.b span {
        cursor: default;
    }
</style>