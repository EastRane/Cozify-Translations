ItemEvents.rightClicked("twilightforest:moon_dial", event => {
    let moonPhase = event.level.moonPhase;
    if (moonPhase == 0 ){
        let moonString = "Полнолуние"
        event.player.tell(`Текущая фаза луны: ${moonString}.`)
    } else if (moonPhase == 1){
        let moonString = "Убывающая луна"
        event.player.tell(`Текущая фаза луны: ${moonString}. До полнолуния осталось 7 дней.`)
    } else if (moonPhase == 2){
        let moonString = "Последняя четверть"
        event.player.tell(`Текущая фаза луны: ${moonString}. До полнолуния осталось 6 дней.`)
    } else if (moonPhase == 3){
        let moonString = "Убывающий серп"
        event.player.tell(`Текущая фаза луны: ${moonString}. До полнолуния осталось 5 дней.`)
    } else if (moonPhase == 4){
        let moonString = "Новолуние"
        event.player.tell(`Текущая фаза луны: ${moonString}. До полнолуния осталось 4 дня.`)
    } else if (moonPhase == 5){
        let moonString = "Растущий серп"
        event.player.tell(`Текущая фаза луны: ${moonString}. До полнолуния осталось 3 дня.`)
    } else if (moonPhase == 6){
        let moonString = "Первая четверть"
        event.player.tell(`Текущая фаза луны: ${moonString}. До полнолуния осталось 2 дня.`)
    } else if (moonPhase == 7){
        let moonString = "Растущая луна"
        event.player.tell(`Текущая фаза луны: ${moonString}. До полнолуния остался 1 день.`)
    }
})