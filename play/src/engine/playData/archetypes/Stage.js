export class Stage extends Archetype {
    spawnOrder() {
        return 1
    }

    shouldSpawn() {
        return entityInfos.get(0).state === EntityState.Despawned
    }

    updateParallel() {
        // ここにこの 1 行を追加！
        debug.log("Stage is running")

        // 前に書いた描画コードがあればそのままでOK
        for (let i = 0; i <= 16; i++) {
            const x = -1 + i * 0.125
            canvas.line(x, -1, x, 1, 1, '#FFFFFF')
        }
    }
}
