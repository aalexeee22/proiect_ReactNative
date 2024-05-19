export interface Move {
    x: string
    y: number
    result: boolean
    playerId: string
}


export interface ShipCord {
    gameId: string
    x: string
    y: number
    result: boolean
    playerId: string
    hit: boolean

}

export interface Game {
    id: string
    player1: {
        id: string
        email: string
    }
    player2: {
        id: string
        email: string
    }
    player1Id: string
    player2Id: string
    status: string
    moves: Move[]
    playerToMove: number
    shipsCoord: ShipCord[]
}