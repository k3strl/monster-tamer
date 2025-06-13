import Phaser from './lib/phaser.js'
import { SCENE_KEYS } from './scenes/scene-keys.js';
import { PreloadScene } from './scenes/preload-scene.js';
import { BattleScene} from './scenes/battle-scene.js';

const game = new Phaser.Game({
  type: Phaser.CANVAS,
  pixelArt: false,
  scale: {
    parent: 'game-container',
    width: 1024,
    height: 576,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: '#000000',
});

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene);
game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
















// TODO LIST!
// // Project Setup:
// // TODO - create basic html page with minor css
// // TODO - running project on local web server
// // TODO - add phaser 3 library
// // TODO - create a basic phaser 3 game instance
// // TODO - add jsconfig to get phaser 3 types and intellisense

// Game Project Assets:
// // TODO - download game assets and add to project
// // TODO - show links to where assets can be found

// Battle System:
// // TODO - load game assets
// TODO - create battle scene layout !INPROGRESS
// TODO - create dialog menu
// TODO - create option menu
// TODO - create monster attack move list
// TODO - handle player input
// TODO - code optimization - move logic to components
  // TODO - create health component
  // TODO - create background component
  // TODO - create monster components
// TODO - adding basic attack logic
// TODO - taking damage and monster knock out
// TODO - battle state machine
  // TODO - what is a finite state machine
  // TODO - review the battle states and what each one represents
  // TODO - implement each state
  // TODO - add item, flee, and monster states
  // TODO - player input improvements
// TODO - battle scene polish
  // TODO - text animations
  // TODO - monster animations
  // TODO - skip animations
  // TODO - attack animations
  // TODO - scene transitions
  // TODO - custom fonts

// World Scene:
// TODO - load level background
// TODO - create player
// TODO - handle player input
// TODO - camera movement
// TODO - handle grid based movement
// TODO - handle collisions
// TODO - add wild monster encounter logic
// TODO - store player position in data manager

// Level Development With Tiled:
// TODO - Basic level design concepts
// TODO - Add collision layer
// TODO - Add custom types to Tiled
// TODO - Add game objects
// TODO - Add npcs
// TODO - Exporting level images and JSON

// World Scene Part 2:
// TODO - add interactive game objects
// TODO - dialog ui component
// TODO - add npcs
// TODO - add npc dialog
// TODO - add npc movement

// Title Screen:
// TODO - create basic title screen
// TODO - add options menu
// TODO - save & loading options
// TODO - connecting option data to battle scene

// Bug Fixes Part 1:
// TODO - battle scene - health bar value when battle starts
// TODO - health bar - animation when value of delay is provided
// TODO - battle scene - at battle start player can provide input
// TODO - world scene - player movement, handle when only sprite direction changes

// Tools Part 1:
// TODO - using tweakpane for testing
  // TODO - tweakpane basics
  // TODO - positioning game objects
  // TODO - monster attacks
  // TODO - animations
// TODO - util function for moving game objects

// Saving & Loading:
// TODO - add game menu with option to save game
// TODO - update menu scene with continue option to load game
// TODO - on new game, we should reset the player data (pos, monsters, etc)

// Monster Party & Monster Detail Scenes:
// TODO - create monster party scene
// TODO - allow player to select a monster in the scene
// TODO - create monster detail scene
// TODO - connect monster detail scene to monster party scene
// TODO - add game menu option for viewing monster party scene

// Inventory:
// TODO - create class for items and inventory
// TODO - create ui screen for viewing items
// TODO - update menu to have view bag option
// TODO - update data manager to allow saving of inventory items
// TODO - update ui screen to allow player to use items

// Battle Scene Part 2:
// TODO - using items
// TODO - running away
// TODO - enemy random attack
// TODO - player faint
// TODO - attacking order
// TODO - update data manager to persist monster data and current stats
// TODO - dynamic monster data based on player party and encounter

// Audio:
// TODO - adding background music
// TODO - adding battle music
// TODO - adding attack effects
// TODO - connecting audio options to settings

// World Scene Part 3:
// TODO - advanced wild monster encounter logic
// TODO - buildings
// TODO - items in the field
// TODO - npc event data structure
// TODO - respawn next to npc

// Leveling & Experience:
// TODO - review math for leveling and exp gain
// TODO - update monseters json file and types to include exp info
// TODO - add new assets for exp bar
// TODO - refactor hp bar into re-usable class
// TODO - update battle scene to display exp bar
// TODO - update monster details scene to display exp bar
// TODO - gain exp when battle is over
  // TODO - add new battle state for tracking
  // TODO - new leveling utils for updates
  // TODO - update monster classes to support
  // TODO - update battle menu ui to have wordwrap

// Multiple Monsters:
// TODO - load new assets
// TODO - battle scene
  // TODO - battle monster class
    // TODO - add support for switching monster details
  // TODO - player battle monster class
    // TODO - add support for switching monster details
    // TODO - update deatch animation to hide health bar components
  // TODO - battle menu
    // TODO - update switch monster logic to align with flee attempt
  // TODO - battle scene
    // TODO - new state for switching monsters and scene resume logic
    // TODO - update existing states to support switching active monster
    // TODO - update existing logic for switching monster when active monster is knocked out
    // TODO - update logic tied to exp gain and message ordering
    // TODO - add ui to show number of monsters in party
  // TODO - monster party scene
    // TODO - add support for selecting monster for switching active monster during battle
// TODO - world scene
  // TODO - refactor world menu into reusable component
  // TODO - create confirmation sub menu
  // TODO - switch monsters positions in party
  // TODO - release monster into the wild

// Catching Monsters:
// TODO - review feature and load assets
// TODO - item and monster model updates
  // TODO - add category to items
  // TODO - add new item type for capture
  // TODO - update monster id field to be a string
  // TODO - add new item to json data
  // TODO - add new item to data manager
// TODO - create ball class
  // TODO - test new animations in test scene
  // TODO - add new animations to battle monster class
// TODO - inventory scene
  // TODO - support for capture items
  // TODO - safe guard if monster party is full
// TODO - battle menu
  // TODO - support to get used item details
// TODO - battle scene
  // TODO - new battle states for using items
  // TODO - new battle state for catching monster with stubbed logic
// TODO - review monster catching logic

// Cutscenes & In Game Events:
// TODO - update npc animation logic
  // TODO - add new npc animations to animation json file
  // TODO - update npc json file to support animation key prefix
  // TODO - update npc class to support animation prefix
// TODO - update map data
  // TODO - update tilemap to show event areas
  // TODO - update world scene to create event zone areas
  // TODO - update world scene update logic to check for overlaps with event zones
// TODO - story events
  // TODO - create events json file for cutscenes
  // TODO - add events data types
  // TODO - update data utils for parsing events data
  // TODO - update data manager for viewed events
  // TODO - update npc class to support custom movement path
  // TODO - update world scene to handle custom events
// TODO - story flags
  // TODO - update data manager for story flags
  // TODO - update npc json file to support required story flags
  // TODO - update events json file to support setting and removing flags
  // TODO - add data types for story flags
// TODO - cutscenes
  // TODO - create new cutscene class and trigger from world scene
  // TODO - update dialog ui to be a new scene

// Full Screen Support:
// TODO - update controls to support full screen button
// TODO - update base scene to launch full screen mode

// Bug Fixes Part 2:
// TODO - fix bug with resetting battle scene state
// TODO - fix beach asset file name

// Multiple Encounter Areas & Special Tiles:
// TODO - tiled updates
  // TODO - support multiple encounter zones
  // TODO - new class with tile type
// TODO - update to support multiple encounter zones
// TODO - import new spritesheet
// TODO - refactor encounter check to start before player moves
// TODO - add grass tiles

// Possible Future Content:
//REVIEW - shops
//REVIEW - battle npcs
//REVIEW - monster encyclopedia
//REVIEW - monster league/gyms
