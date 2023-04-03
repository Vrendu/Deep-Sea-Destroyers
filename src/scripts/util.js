export function enemyVec(length) {
    return scale([0.8, 0], length);
}

export function projectileVec(scaler){
    return scale([0, 0.8], scaler);
}

export function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
}

export function dist(pos1, pos2) {
    return Math.sqrt(
        Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
}