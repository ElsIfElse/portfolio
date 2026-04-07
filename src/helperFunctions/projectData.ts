
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
    itchLink?:string
    githubRepo?:string
}

export const projectInfos:projectInfo[] =[
    {
        "id": 0,
        "name":"Space Deck",
        "image":"/spaceDeckThumbnail.png",
        "videoLink":"lYPMXEY9Dao",
        "projectHighlightLink":"lYPMXEY9Dao",
        "projectHighlightImage_01":"../spaceDeck_01.png",
        "projectHighlightImage_02":"../spaceDeck_02.png",
        "projectDuration":"3 weeks",
        "projectInformation":"All elements of the game but the card visuals and the background images were self made",
        "projectHighlightDescription":"Space Deck is an incremental roguelite like deck builder game prototype where, in between runs based on your previus progress You earn primary currency that can be spent to upgrade your deck. Secondary currency is earned based on the amount of primary upgrades purchased and can be used to unlock new cards and new secondary effects on cards.\n\nThe game includes a basic tutorial when the player first opens the game. Data is saved in local storage and loaded so progress is not lost.\n\nThe game states are handled by a very simple state machine. The project is handled by 2 main managers for the menu and gameplay state where they create the subhander UI and model objects and then initialize them to make sure they are all ready to be passed as dependencies for the other subhandlers.\n\nI attempted to use as little as possible Singleton Managers. Found it to be comfortable to only have the main state handler, the audiomanager and the main UI manager to be singletons classes that are handled by the game manager.",
        "itchLink":"https://elseifelse.itch.io/space-deck"
    },
    {
        "id": 1,
        "name":"Castle of Doom",
        "image":"/castleOfDoom_02.png",
        "videoLink":"Gj0psT87_d8",
        "projectHighlightLink":"Gj0psT87_d8",
        "projectHighlightImage_01":"../castleOfDoom.png",
        "projectHighlightImage_02":"../castleOfDoom_03.png",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game but the prefabs and some animations were self made",
        "projectHighlightDescription":"The game is heavily inspired by the game Ziggurat 2. The game uses wave function collapse to generate prebuilt room tiles. Implemented a standard roguelite skill point gaining system after clearing the level boss that can be spent in the menu for permanent upgrades. While gaining experience the player can choose from 3 upgrades that last until the end of the run. \n \nThe game has 5 unique common enemy types and 1 boss. The game has an implemented json based save system to track settings and skill point progression and distribution",
        "itchLink":"https://elseifelse.itch.io/castle-of-doom",
        
    },
    {
        "id": 2,
        "name":"Feed the Light",
        "image":"/feedTheLight.png",
        "videoLink":"FLfXtzf_TXA",
        "projectHighlightLink":"FLfXtzf_TXA",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game including the prefabs and animations were self made",
        "projectHighlightDescription":"The first game where I created all the models in blender excusively for the project. The game has a tile based grid map and a simple ambiance audio system that triggers noises and sounds based on the player's movement between tiles. The project has a settings menu and cutscene transitions. Player can also craft simple recipe items to increase the chance of survival and to encourage exploration. The game is using a wave function collapse implementation to generate random maps and to distribute items and locations on the map.",
        "itchLink":"https://elseifelse.itch.io/feed-the-light"
    },
    {
        "id": 3,
        "name":"Night Shift",
        "image":"/nightShiftThumbnail.png",
        "videoLink":"IV6KSMS1AIY",
        "projectHighlightLink":"IV6KSMS1AIY",
        "projectDuration":"6 weeks",
        "projectInformation":"Prefabs were made by SYNTY studios. All other elements were self made.",
        "projectHighlightDescription":"The project was heavily inspired by games like Frewatch, Gone home and Stanley's Parable. I wanted to implement a system where You can interact with almost all objects You see in the game in a unique way.\n\n The game contains different types of interaction classes. [Simple Interactions] where You can pick/inspect-rotate/throw objects. [Task Object Interactions] which changes behaviour based on the task progression. [Note Interactions] where the player can read/stash notes to observe later. [Unique Item Interactions] such as the vending machine, computers where You can read people's emails and get an environmental storytellying narrative from it.\n\nA node based conversation system was implemented to handle incoming phone calls and possible answers to questions form the caller. Answers have consequences on your work life balance meter and to future conversation options.\n\nThe base gameloop contains the player coming to work, picking up tasks, finishing them and making decisions based on what they interacted with or found.\n\nImplemented a global lock system to add reasons to locked mechanics and to remove those reasons. A mechanic is only enabled when the lock reason list is empty. This way the source of truth for the mechanic state is managed in one place.",
        "projectHighlightImage_02":"../nightShift_04.PNG",
        "projectHighlightImage_01":"../nightShift_02.PNG",
        "itchLink":""
    },
    {
        "id": 4,
        "name":"Soulslike System",
        "image":"/soulslikeThumbnail.jpeg",
        "videoLink":"euoNRkxSOOo",
        "projectHighlightLink":"euoNRkxSOOo",
        "projectDuration":"1 week",
        "projectInformation":"Animations and prefabs are made by SYNTY studio.",
        "projectHighlightDescription":"First implementation of a soulslike root motion based combat and movement system.\n\n     The prototype is using an action based player controller system where all player input leads to player action being added to the action list. Every action is it's own class that inherits from the base PlayerAction class. It contains the animation crossfade and the audi pooler call. Every action is returning it's own length so the ActionManager can determinte the buffer time and the amount of time it cuts off from the end so it can seemlessly connnect to the next action. The action list is being excecuted in order and uses a small buffer window so actions can be linked together. The biggest challenge was to make the actions seem fluid and not having seperate animations with clear connection points. The issue was solved by using a code driven animator transition system and cutting off a percentage of the current action's end. This surfaced a new issue where if two actions that were executed used the same animation it cannot fade into it's own animation clip. This was solved by duplicating the animations and flagging the animations with a simple counter to track which is currently used and to always use the other one.\n\n     The project is built in a hierarchical MVC pattern where each manager and subhandler class is initialized by it's owner. I used 2 step initialazation where first all objects are created and then they get all dependencies injected with their Initialize() method.\n\n    Implemented simple dictionary based pooling systems where the pool is accepting an enum for the GetPoolItem() method. All manager initialazation is using Scriptable Objects.",
        "projectHighlightImage_02":"",
        "projectHighlightImage_01":"",
        "itchLink":"",
        "githubRepo":"https://github.com/ElsIfElse/SoulslikeSystem"

    },
    {
        "id": 5,
        "name":"Don't Break the Glass",
        "image":"/saveTheSick.png",
        "videoLink":"8Y-82tufejI",
        "projectHighlightLink":"X0ZnLfXp67s",
        "projectDuration":"2 weeks",
        "projectInformation":"All elements of the game but the prefabs and animations were self made",
        "projectHighlightDescription":"The first game where I implemented global game state and used sub game states to control the flow of the game. The game also has a functional global leaderboard. ",
        "itchLink":"https://elseifelse.itch.io/dont-break-the-glass"
    },
    {
        "id":6,
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
        "id":7,
        "name":"Kingdom Manager",
        "image":"../kingdomManager.png",
        "projectHighlightLink":"oGm3-7TTxJ8",
        // "projectHighlightImage_01":"../public/kingdomManager_03.png",
        "projectHighlightImage_02":"../public/kingdomManager_04.png",
        "videoLink":"oGm3-7TTxJ8",
        "projectDuration":"1 week",
        "projectInformation":"The score was self composed. SFX is from Zapsplat.com. UI elements are from the asset store and rawpixel.",
        "projectHighlightDescription":"The project was created to start implementing and using the game design principles I learned along the way. I tried focusing on small scope project that had clearly stated constraints. The project is purely UI and has as few as 3 input methods. Attempted to create a deck based resource management game where most of the development time is spent on balancing the deck in terms of event types and occurrences of these different levels of events. ",
        "itchLink":"https://elseifelse.itch.io/kingdom-manager"
 
    },
    {
        "id":8,
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
        "id":9,
        "name":"Where is the Power?",
        "image":"../whereIsThePower.png",
        "projectHighlightLink":"LcjuwB-fyMk",
        "projectHighlightImage_01":"../whereIsThePower.png",
        // "projectHighlightImage_02":"../public/code_02.png",
        "videoLink":"LcjuwB-fyMk",
        "projectDuration":"3 days",
        "projectInformation":"Game was created from Kenney assets. All other elements were self made."    ,
        "projectHighlightDescription":"The project was made during the 2025 Kenney Game Jam. The jam's theme was POWER and the time limit was 3 days. The game is a first person view puzzle game with a linear storyline where your TV session is interrupted by a storm and a power outage. Fix the main switch and continue the couch potato life. \n\n During the game jam I had to learn and practice fast game design iteration and the quick and dirty way of implementing things and then cleaning it up afterwards.",
        "itchLink":"https://elseifelse.itch.io/where-is-the-power"
 
    },
    {
        "id":10,
        "name":"The Machine",
        "image":"../aiCom.png",
        "videoLink":"T71F95nRcYw",
        "projectHighlightLink":"T71F95nRcYw",
        "projectDuration":"3 weeks",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":'Arcade style fps item collector game where the given time and health determines the loose condition. The project was created to learn and practice the MVC pattern alongside with the observer pattern, The game has a cinematic intro created with Cinemachine and Unity Timeline. The item and enemy spawn systems were created with the factory pattern using a static class. \n \nThe game was given an installer desktop app made in WPF without using XAML.'

    },
    {
        "id":11,
        "name":"Forest Streamer",
        "image":"../forestStreamer.png",
        "videoLink":"I2owX8FaVsk", 
        "projectHighlightLink":"I2owX8FaVsk",
        "projectDuration":"6 weeks", 
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":'The project was created in order to practice behaviour tree creation and blackboarding. \n\nThe base gameloop of the game is fulfilling the stream chat wishes, They are asking for different animals to be shown on the screen. You have a time limit to fulfill the wish. You have to either look at the animal through the tablet cam or set up cameras on the animal and change channel. You will get donations upon fulfilling the wish. \n\nFeeding animals has a chance to make them friendly. When crafting cameras You can set them on friendly animals and use it to make your job easier not having to look for the currently wished animal. '

    },
    {
        "id":12,
        "name":"The Island",
        "image":"../forestStreamer.png",
        "videoLink":"VF0MQ4QtKyI", 
        "projectHighlightLink":"VF0MQ4QtKyI",
        "projectDuration":"3 weeks", 
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":'The game prototype was created to plan and build a minecraft-like inventory system with all items being equippable. The enemies have a mix of state machine and behaviour tree ai behaviour. The prototype includes day and night cycle with an enemy wave trigger at night.'
    },
    {
        "id": 13,
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
        "id":14,
        "name":"Pizza Fighter",
        "image":"/pizzaFighter.png",
        "projectHighlightLink":"zsu0N-3bDCw",
        "videoLink":"zsu0N-3bDCw",
        "projectDuration":"2 weeks",
        "projectInformation":"All elements of the game but the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Pizza collecting mechanism that stacks the pizza bullets around the player and let's the player decide if they want to shoot it forward, backwards or do a spread shot that shoots all currently held pizzas. The game has a linear difficulty progression system that makes enemies faster and spawn more often. The game has a scoring system based on the amount of killed enemies and the time survived. Players can also collect money that represents score points. Main goal of the project was to create an arcade game that has a unique shooting mechanism.",
        "itchLink":"https://elseifelse.itch.io/pizza-fighter"

    },
    {
        "id":15,
        "name":"Void Blocks",
        "image":"../voidBlocks.png",
        "videoLink":"YYvFQPh_wHo?",
        "projectHighlightLink":"YYvFQPh_wHo?",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game were self made"    ,
        "projectHighlightDescription":"The goal of the project was to create a 3D escape the room style game with interactive environment. The player can pick up objects portal style and throw them. Learned a lot about game desigh theory and simple animation creations as well as using the Pro Builder tool to create the environment.",
        "itchLink":"https://elseifelse.itch.io/void-blocks"

    },
    {
        "id":16,
        "name":"Recipe App",
        "image":"../recipeApp.png",
        "videoLink":"none",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management."
    },
    {
        "id":17,
        "name":"Dine at Mine",
        "image":"../dineAtMine.png",
        "videoLink":"none",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management."
    },
    {
        "id":18,
        "name":"DnD Npc database",
        "image":"../dndSite.png",
        "videoLink":"none",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management."

    },
    {
        "id":19,
        "name":"AI Companionship",
        "image":"../aiCom.png",
        "videoLink":"none",
        "projectDuration":"2 months",
        "projectInformation":"All elements of the game apart from the prefabs and animations were self made"    ,
        "projectHighlightDescription":"Created a complete resource management RTS game with dynamic AI behavior. Implemented complex resource allocation and player progression systems. Created custom UI for resource tracking and management."
    },

]