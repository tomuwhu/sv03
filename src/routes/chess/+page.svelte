<script>
    import { Chess } from 'chess.js'
    var st = null, cb
    const chess = new Chess()
    cb = chess.board()
    var cf = new Map([
        ['p', '♟'],['r', '♜'],['n', '♞'],['b', '♝'],['q', '♛'],['k', '♚'], [null, ' ']
    ])
    function drop(c, loc) {
        console.log(st.square+"x"+loc);
        try {
            chess.move(st.square+"x"+loc)
        } catch(e) {}
        try {
            chess.move(st.type!='p'?st.type.toUpperCase()+loc:loc)
        } catch(e) {}
        cb = chess.board()
    }
</script>
<h1>Sakk</h1>
<table>
    {#each cb as cr, i}
        <tr>
            {#each cr as c, j}
                <td on:drop={() => drop(c, String.fromCharCode(97+j)+(8-i))}
                    on:dragover={e => (e.preventDefault(), true)}>
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <span
                        draggable="true"
                        on:dragstart={() => {
                            console.log(c)
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
        background-color: antiquewhite;
        box-shadow: 1px 1px 3px black;
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
        color:rgb(95, 122, 113);
        text-shadow: 1px 1px 3px black;
    }
</style>