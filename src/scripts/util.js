// export function enemyVec() {
//     // const deg = 2 * Math.PI * Math.random();
//     // return scale([Math.sin(deg), Math.cos(deg)], length);
//     return [0.01,0];
// }

export function enemyVec(length) {
    //const deg = 2 * Math.PI * Math.random();
    return scale([0.5, 0], length);
}

// Scale the length of a vector by the given amount.
export function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
}