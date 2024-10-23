<div>
    <section>
        <header>
            <strong>SupatupaCommander</strong>
            <a href="/workspace">Go to fullscreen</a>
        </header>
        <main>
            <Workspace />
        </main>
    </section>
</div>


<style>
div {
    height: 100vh;
    background-color: #f5f5f5;
    background-image: url(/screen-wallpaper.jpg);
}
a {
    color: #2182F8;
}
section {
    position: absolute;
    top: 60px;
    left: 220px;
    width: 1200px;
    height: 700px;
    display: grid;
    grid-template-rows: 50px auto;
    box-shadow: rgba(17, 12, 46, 1) 0px 48px 100px 0px;
    border-radius: 10px;
}
header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    place-items: center;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    border-radius: 10px 10px 0 0;
}
main {
    /* height: calc(100vh - 60px); */
    /* overflow: auto; */
    background-color: bisque;
}
</style>
<script>
import Workspace from './workspace/Workspace.svelte'
</script>