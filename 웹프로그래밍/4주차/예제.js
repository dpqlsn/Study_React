// 큐 구현

export function getFinalState(baseState, queue) {
    let finalState = baseState;
    let update;

    queue.forEach((q) => {
        finalState = typeof q === "function" ? q(finalState) : q;
    })

    return finalState;
}
