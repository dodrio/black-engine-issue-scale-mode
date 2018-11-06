import {
  Black,
  CanvasDriver,
  Input,
  Sprite,
  GameObject,
  StageScaleMode,
  StageOrientation,
  SplashScreen,
  AssetManager,
} from 'black-engine'
import bg from 'Assets/bg.png'

class Game extends GameObject {
  constructor() {
    super()

    SplashScreen.enabled = false
    Black.stage.scaleMode = StageScaleMode.LETTERBOX
    Black.stage.setSize(750, 1500)
    // Black.stage.setSize(1500, 750)
    Black.stage.orientation = StageOrientation.PORTRAIT
    this.touchable = true
  }

  onAdded() {
    const { default: assetManager } = AssetManager
    assetManager.enqueueImage('bg', bg)
    assetManager.loadQueue()

    assetManager.on('complete', () => {
      const bg = new Sprite('bg')
      this.addChild(bg)
    })
  }
}

const black = new Black('game-container', Game, CanvasDriver, [Input])
black.start()
black.pauseOnBlur = false
black.pauseOnHide = false
