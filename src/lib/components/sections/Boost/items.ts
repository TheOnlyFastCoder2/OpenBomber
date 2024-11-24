import IMGBomb from '../../../../assets/imgs/boost/BOMB.png';
import IMGRadius from '../../../../assets/imgs/boost/RADIUS.png';
import IMGSpeed from '../../../../assets/imgs/boost/SPEEDUP.png';
import IMGShield from '../../../../assets/imgs/boost/SHIELD.png';
import IMGStrayBomb from '../../../../assets/imgs/boost/STRAYBOMB.png';
import IMGSlowingDown from '../../../../assets/imgs/boost/SLOWINGDOWN.png';
import IMGKickingBombs from '../../../../assets/imgs/boost/KICKINGBOMBS.png';

export default [
  {
    name: "bomb",
    url: IMGBomb,
    descriprion: (
      `
        Increasing the number of simultaneous player bombs on the map. 
        Stacks with previous ones. Doesn't save for new games
      `
    )
  },
  {
    name: "radius",
    url: IMGRadius,
    descriprion: (
      `
       Increasing bomb explosion radius. 
       Stacks with the previous one. 
       Only applies to newly installed bombs. 
       Doesn't save for new games
      `
    )
  },
  {
    name: "speed up",
    url: IMGSpeed,
    descriprion: (
      `
       Increases player speed. Issued for 25 seconds. 
       Time adds up to the previous ones. Reduces time - speed, if already activated.
       Doesn't save for new games
      `
    )
  },
  {
    name: "shield",
    url: IMGShield,
    descriprion: (
      `
      Protects the player from 1 explosion. 
      Issued for 50 seconds. Time adds up to the previous ones. 
      Disappears immediately after protecting the player from the explosion. 
      Doesn't save for new games
      `
    )
  },
  {
    name: "stray bomb",
    url: IMGStrayBomb,
    descriprion: (
      `
        Replaces classic bombs with crazy ones. A stray bomb can explode in 500 to 5000 milliseconds, 
        can have a radius ranging from nominal (sum + radius) to (sum + radius) times 5. 
        Has a 10% chance of not exploding. Issued for 30 seconds. Adds up in time with the previous ones. 
        Doesn't save for new games
      `
    )
  },
  {
    name: "slowing down",
    url: IMGSlowingDown,
    descriprion: (
      `
        Reducing player speed. Issued for 25 seconds. 
        Time adds up to the previous ones. Reduces time + speed if already activated. 
        Sets the player on fire, allowing them to kill with touch. 
        Doesn't save for new games
      `
    )
  },
  {
    name: "kicking bombs",
    url: IMGKickingBombs,
    descriprion: (
      `
       Allows the player to kick bombs. The bomb flies until it encounters an obstacle. 
       Issued for 35 seconds. Time adds up to the previous ones. 
       Doesn't save for new games
      `
    )
  },
]