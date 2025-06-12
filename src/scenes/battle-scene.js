import {
  BATTLE_ASSET_KEYS,
  BATTLE_BACKGROUND_ASSET_KEYS,
  HEALTH_BAR_ASSET_KEYS,
  MONSTER_ASSET_KEYS,
} from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class BattleScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.BATTLE_SCENE,
    });
  }

  init() {}

  create() {
    console.log(`[${BattleScene.name}:create] invoked`);
    // create main background
    // order matters; Phaser will render things in the order we tell it to. If we render the monsters first, the background will be set over TOP of the monsters, which is not what we want. .setDepth can override this default behavior.
    this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);

    // render out player and enemy monsters
    this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
    this.add.image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true);

    //render out player monster name & health bar
    const playerMonsterName = this.add.text(
      30,
      20,
      MONSTER_ASSET_KEYS.IGUANIGNITE,
      {
        color: '#7E3D3F',
        fontSize: '32px',
      }
    );
    this.add.container(556, 318, [
      this.add
        .image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
        .setOrigin(0),
      playerMonsterName,
      this.#createHealth(34, 34),
      this.add.text(playerMonsterName.width + 35, 23, 'L5', {
        color: '#ED474B',
        fontSize: '28px',
      }),
      this.add.text(playerMonsterName.width + 30, 55, 'HP', {
        color: '#ED474B',
        fontSize: '28px',
      }),
    ]);
  }

  #createHealth(x, y) {
    const scaleY = 0.7;
    const leftCap = this.add
      .image(x, y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP)
      .setOrigin(0, 0.5)
      .setScale(1, scaleY);
    const middle = this.add
      .image(leftCap.x + leftCap.width, y, HEALTH_BAR_ASSET_KEYS.MIDDLE)
      .setOrigin(0, 0.5);
    middle.displayWidth = 360;
    const rightCap = this.add
      .image(middle.x + middle.displayWidth, y, HEALTH_BAR_ASSET_KEYS.RIGHT_CAP)
      .setOrigin(0, 0.5);
    return this.add.container(x, y, [leftCap, middle, rightCap]);
  }

  update() {}
}
