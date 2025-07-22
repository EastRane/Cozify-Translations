StartupEvents.registry('item', event => {
event.create('lunar_coin').maxStackSize(64).displayName("Лунная монета")
event.create('solar_coin').maxStackSize(64).displayName("Солнечная монета")
event.create('arcane_coin').maxStackSize(64).displayName("Мистическая монета")
event.create('lunarcoin').texture('kubejs:item/lunar_coin').maxStackSize(64).displayName("Лунная монета")
event.create('solarcoin').texture('kubejs:item/solar_coin').maxStackSize(64).displayName("Солнечная монета")
event.create('arcanecoin').texture('kubejs:item/arcane_coin').maxStackSize(64).displayName("Мистическая монета")
event.create('ticket').displayName("Билет")
event.create('pink_moon').texture('kubejs:item/pink_moon').displayName("Розовая луна")
event.create('flower_moon').texture('kubejs:item/flower_moon').displayName("Цветочная луна")
event.create('strawberry_moon').texture('kubejs:item/strawberry_moon').displayName("Клубничная луна")
event.create('antler_moon').texture('kubejs:item/antler_moon').displayName("Оленья луна")
event.create('harvest_moon').texture('kubejs:item/harvest_moon').displayName("Урожайная луна")
event.create('corn_moon').texture('kubejs:item/corn_moon').displayName("Кукурузная луна")
event.create('hunter_moon').texture('kubejs:item/hunter_moon').displayName("Луна охотника")
event.create('frost_moon').texture('kubejs:item/frost_moon').displayName("Морозная луна")
event.create('oak_moon').texture('kubejs:item/oak_moon').displayName("Дубовая луна")
event.create('wolf_moon').texture('kubejs:item/wolf_moon').displayName("Волчья луна")


})
ItemEvents.modification(event => {
    event.modify('alexsmobs:emu_egg', item => {
      item.maxStackSize = 16
  })
    event.modify('minecraft:egg', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:turtle_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('alexsmobs:crocodile_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('alexsmobs:terrapin_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('duckling:duck_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('alexsmobs:crocodile_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('enviornmental:duck_egg', item => {
      item.maxStackSize = 64
    })

    event.modify('ae2:singularity', item => {
        item.fireResistant = true
      })

})



StartupEvents.registry('block', event => {

  //Emmu Blocks
  event.create('bat_wallpaper', 'cardinal')
  .model('kubejs:block/bat_wallpaper')
  .soundType('wood')
  .hardness(2)
  .displayName('Обои с летучими мышами') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('skull_wallpaper', 'cardinal')
  .model('kubejs:block/skull_wallpaper')
  .soundType('wood')
  .hardness(2)
  .displayName('Обои с черепами') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('witch_cat_plushie', 'cardinal')
  .model('kubejs:block/witch_cat_plushie')
  .soundType('wool')
  .fullBlock(false)
  .defaultCutout()
  .hardness(1.5)
  .displayName('Плюшевая кошка-ведьма')  

  event.create('mayor_gaylord', 'cardinal')
  .model('kubejs:block/gaylord')
  .soundType('wool')
  .fullBlock(false)
  .defaultCutout()
  .hardness(1.5)
  .displayName('Мэр Гейлорд')  
})