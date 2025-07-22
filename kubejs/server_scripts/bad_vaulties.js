
BlockEvents.rightClicked('block.right_click', event => {
    //main hand only
    const { block, hand, item, world, player } = event;
    if (item.id == 'pipez:item_pipe' && block.id == 'create:item_vault') {
        let cmd = `/tell ${player.username} Пожалуйста, не соединяй Pipez и хранилища предметов Create. Вместе они очень лагают.`
        console.log(cmd)
        event.server.runCommand(cmd)
        event.cancel()
    }
});