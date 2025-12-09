
export interface projectInfo{
    id:number,
    name:string,
    image:string,
    videoLink:string,

    projectHighlightLink?:string
    projectHighlightImage_01?:string
    projectHighlightImage_02?:string
    projectHighlightDescription:string

    projectDuration:string
    projectInformation:string
}

export const projectInfos:projectInfo[] =[
    {
        "id": 0,
        "name":"Save The Sick",
        "image":"/saveTheSick.png",
        "videoLink":"8Y-82tufejI",
        "projectHighlightLink":"8Y-82tufejI",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game but the prefabs and animations were self made",
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management. The main goal of the project was to learn the FSM pattern and how to implement it to create simple AI behaviour patterns.",
        // "projectHighlightImage_01":"../public/code_01.png",
        // "projectHighlightImage_02":"../public/code_02.png"
    },
    {    
        "id":1,
        "name":"Pizza Fighter",
        "image":"/pizzaFighter.png",
        "projectHighlightLink":"zsu0N-3bDCw",
        "videoLink":"zsu0N-3bDCw",
        "projectDuration":"2 weeks",
        "projectInformation":"All elements of the game but the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Pizza collecting mechanism that stacks the pizza bullets around the player and let's the player decide if they want to shoot it forward, backwards or do a spread shot that shoots all currently held pizzas. The game has a linear difficulty progression system that makes enemies faster and spawn more often. The game has a scoring system based on the amount of killed enemies and the time survived. Players can also collect money that represents score points. Main goal of the project was to create an arcade game that has a unique shooting mechanism."

    },
    {
        "id":2,
        "name":"Void Blocks",
        "image":"../voidBlocks.png",
        "videoLink":"YYvFQPh_wHo?",
        "projectHighlightLink":"YYvFQPh_wHo?",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game were self made"    ,
        "projectHighlightDescription":"The goal of the project was to create a 3D escape the room style game with interactive environment. The player can pick up objects portal style and throw them. Learned a lot about game desigh theory and simple animation creations as well as using the Pro Builder tool to create the environment."

    },
    {
        "id":3,
        "name":"RPG Survival",
        "image":"../rpgImage.png",
        "projectHighlightLink":"oJqpW-Ra8TM",
        // "projectHighlightImage_01":"../public/code_01.png",
        // "projectHighlightImage_02":"../public/code_02.png",
        "videoLink":"oJqpW-Ra8TM",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"The project was made to try to recreate the Diablo/League of Legends style skill system. Players start with 3 base skills and enemies randomly drop additional skill that players can equip in the shop. Enemies drop gold/skillbooks/mana and health potions. Player can also purchase all items from shop apart from the skillbooks."
 
    },
    {
        "id":4,
        "name":"FPS shooter",
        "image":"../fpsShooter.png",
        "projectHighlightLink":"Ylb4w7QQPrQ",
        // "projectHighlightImage_01":"../public/code_01.png",
        // "projectHighlightImage_02":"../public/code_02.png",
        "videoLink":"oJqpW-Ra8TM",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"The project was made to get familiar with the Photon networking solution. The game is a Quake III Arena like Arcade shooter where the player can pick up different weapons and health. The game includes a leaderboard of active player's score that is based on the kill number."
 
    },
    {
        "id":5,
        "name":"The Machine",
        "image":"../aiCom.png",
        "videoLink":"T71F95nRcYw",
        "projectHighlightLink":"T71F95nRcYw",
        "projectDuration":"3 weeks",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":'Arcade style fps item collector game where the given time and health determines the loose condition. The project was created to learn and practice the MVC pattern alongside with the observer pattern, The game has a cinematic intro created with Cinemachine and Unity Timeline. The item and enemy spawn systems were created with the factory pattern using a static class. \n \nThe game was given an installer desktop app made in WPF without using XAML.'

    },
    {
        "id":6,
        "name":"Forest Streamer",
        "image":"../forestStreamer.png",
        "videoLink":"I2owX8FaVsk", 
        "projectHighlightLink":"I2owX8FaVsk",
        "projectDuration":"6 weeks", 
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":'The project was created in order to practice behaviour tree creation and blackboarding. \n\nThe base gameloop of the game is fulfilling the stream chat wishes, They are asking for different animals to be shown on the screen. You have a time limit to fulfill the wish. You have to either look at the animal through the tablet cam or set up cameras on the animal and change channel. You will get donations upon fulfilling the wish. \n\nFeeding animals has a chance to make them friendly. When crafting cameras You can set them on friendly animals and use it to make your job easier not having to look for the currently wished animal. '

    },
    {
        "id":7,
        "name":"The Island",
        "image":"../forestStreamer.png",
        "videoLink":"VF0MQ4QtKyI", 
        "projectHighlightLink":"VF0MQ4QtKyI",
        "projectDuration":"3 weeks", 
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":'The game prototype was created to plan and build a minecraft-like inventory system with all items being equippable. The enemies have a mix of state machine and behaviour tree ai behaviour. The prototype includes day and night cycle with an enemy wave trigger at night.'
    },
    {
        "id": 8,
        "name":"Don't Break the Glass",
        "image":"/saveTheSick.png",
        "videoLink":"8Y-82tufejI",
        "projectHighlightLink":"X0ZnLfXp67s",
        "projectDuration":"2 weeks",
        "projectInformation":"All elements of the game but the prefabs and animations were self made",
        "projectHighlightDescription":"The first game where I implemented global game state and used sub game states to control the flow of the game. The game also has a functional global leaderboard. ",
    },
    {
        "id": 9,
        "name":"Feed the Light",
        "image":"/feedTheLight.png",
        "videoLink":"FLfXtzf_TXA",
        "projectHighlightLink":"FLfXtzf_TXA",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game including the prefabs and animations were self made",
        "projectHighlightDescription":"The first game where I created all the models in blender excusively for the project. The game has a tile based grid map and a simple ambiance audio system that triggers noises and sounds based on the player's movement between tiles. The project has a settings menu and cutscene transitions. Player can also craft simple recipe items to increase the chance of survival and to encourage exploration. The game is using a wave function collapse implementation to generate random maps and to distribute items and locations on the map.",
    },
    {
        "id": 10,
        "name":"Castle of Doom",
        "image":"/castleOfDoom_02.png",
        "videoLink":"Gj0psT87_d8",
        "projectHighlightLink":"Gj0psT87_d8",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game but the prefabs and some animations were self made",
        "projectHighlightDescription":"The game is heavily inspired by the game Ziggurat 2. The game uses wave function collapse to generate prebuilt room tiles. Implemented a standard roguelite skill point gaining system after clearing the level boss that can be spent in the menu for permanent upgrades. While gaining experience the player can choose from 3 upgrades that last until the end of the run. \n \nThe game has 5 unique common enemy types and 1 boss. The game has an implemented json based save system to track settings and skill point progression and distribution",
    },
    {
        "id":11,
        "name":"Recipe App",
        "image":"../recipeApp.png",
        "videoLink":"none",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management."

    },
    {
        "id":12,
        "name":"Dine at Mine",
        "image":"../dineAtMine.png",
        "videoLink":"none",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management."
    },
    {
        "id":13,
        "name":"DnD Npc database",
        "image":"../dndSite.png",
        "videoLink":"none",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management."

    },
    {
        "id":14,
        "name":"AI Companionship",
        "image":"../aiCom.png",
        "videoLink":"none",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management."

    },

]