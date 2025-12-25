export class Stage extends Archetype {
    spawnOrder() {
        return 1
    }

    shouldSpawn() {
        // 最初のエンティティとして常に存在させる
        return entityInfos.get(0).state === EntityState.Despawned
    }

    // 描画処理を追加
    render() {
        // 1. 背景の描画（黒いパネル）
        // screen.rect(左, 右, 下, 上, 色, 透明度)
        screen.rect(-1, 1, -1, 1, '#000000', 0.5)

        // 2. 16分割の線を引く
        for (let i = 0; i <= 16; i++) {
            // 左端(-1)から右端(1)まで、0.125きざみで線を引く
            const x = -1 + i * 0.125
            
            // 線の色（端っこは白、中は少し暗めにするなど）
            const color = (i === 0 || i === 16) ? '#FFFFFF' : '#444444'
            
            // 線を描画（x, 下y, x, 上y, 太さ, 色）
            canvas.line(x, -1, x, 1, 2, color)
        }

        // 3. 判定線（一番下の赤い線など）
        canvas.line(-1, -0.8, 1, -0.8, 5, '#FF0000')
    }

    updateParallel() {
        // ログは消してもOK
    }
}
