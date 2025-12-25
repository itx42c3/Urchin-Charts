export class Stage extends Archetype {
    spawnOrder() {
        return 1
    }

    shouldSpawn() {
        return entityInfos.get(0).state === EntityState.Despawned
    }

    // updateParallel は毎フレーム実行されるので、ここに描画命令を書くのが確実です
    updateParallel() {
        // --- 1. 背景を塗る ---
        // screen.draw(描画する物, 左, 右, 下, 上, Z順, 透明度)
        // ※SkinSprite.Background など、テンプレートで定義されている画像を使うのが一般的です
        
        // --- 2. 16分割の線を引く ---
        for (let i = 0; i <= 16; i++) {
            const x = -1 + i * 0.125
            const color = (i === 0 || i === 16) ? '#FFFFFF' : '#444444'
            
            // Sonolusの基本機能で線を引く
            canvas.line(x, -1, x, 1, 1, color)
        }

        // --- 3. 判定線を描く ---
        canvas.line(-1, -0.8, 1, -0.8, 2, '#FF0000')
    }
}
