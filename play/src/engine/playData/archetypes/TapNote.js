
export const TapNote = defineArchetype({
    // 1. ノーツが持つデータ（譜面から読み込む値）
    data: {
        beat: { name: 'beat', type: 'number' },   // 叩くタイミング
        lane: { name: 'lane', type: 'number' },   // 左端のレーン位置 (0-15)
        size: { name: 'size', type: 'number' },   // ノーツの幅 (1-16)
    },

    // 2. 毎フレームの処理（ノーツの移動など）
    updateSequential() {
        // 現在の時間とノーツのタイミングを比較して、
        // 画面上のどの高さに表示するかを計算する処理をここに書きます
    },

    // 3. 画面に描画する処理
    render() {
        // 16分割座標の計算
        // 左端: -1 + (this.lane * 0.125)
        // 右端: -1 + ((this.lane + this.size) * 0.125)
        // これを使って「ウニのノーツ」を描画します
    },

    // 4. 判定処理
    touch() {
        // 指がこのノーツの範囲（lane ～ lane + size）を叩いたか判定します
    }
})
