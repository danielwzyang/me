import Container from "../../components/Container"

export default function Goldfinger() {
    return <Container title="Goldfinger">
        <h1 class="text-3xl serif mb-3">Goldfinger</h1>
        <img src="/projects/goldfinger/cover.png" alt="goldfinger" class="mb-5 rounded-lg" />
        <div class="flex flex-col gap-3">
            <p>
                I'm horrible at chess, but watching it has always been fun.
                In hopes of making up for my below average chess skills, I decided to create a chess engine that could beat me (and my friends).
            </p>

            <p>
                In all honesty, it didn't take much for the engine to beat me, but I kept improving it to become what it is now.
                There's always room for improvement and optimization, which is what made this project so fun for me.
                I learned so many new concepts and even learned some chess along the way.
                I would recommend you to try to play against it or watch it play against itself!
            </p>

            <h1 class="text-2xl serif mt-3">Board Representation</h1>

            <p>
                In order for the engine to play, it has to understand what's happening in the board.
                With no guidance nor having done any research, I started with the intuitive approach of using 2D arrays.
                I also had move generation that was calculated on the fly.
            </p>

            <p>
                This approach ended up being super slow, which is a big problem when the engine needs all possible moves at every node.'
                I decided to do some research and learned about bitboards.
                This takes advantage of the fact that chess boards have 64 squares, and we can use 64 bits to represent every square.
                Given that each bit can only store an empty or occupied square, we have to have 12 bitboards: 1 for each piece.
                With bitboards, we can calculate occupancies to help precompute and store moves, making our search a lot faster.
            </p>

            <img src="/projects/goldfinger/movegen.png" alt="move generation" class="my-5 rounded-lg" />

            <p>
                We can also store the board's current state using something called Zobrist Hashing.
                This uses a bunch of pseudorandom numbers to help create a unique ID for every position.
                This lets us create a transposition table, something that stores crucial information about every position, such as the best move.
            </p>

            <h1 class="text-2xl serif mt-3">Evaluation</h1>

            <p>
                Evaluation is assigning a number value to the board to determine how good of a position it is.
                This can get very complex, so I opted for a simple evaluation function using material weights and tables called piece square tables that assign values to certain positions for each piece.
                For example, pawns close to promotion are worth a lot more than those stuck in the starting position.
            </p>

            <h1 class="text-2xl serif mt-3">Search</h1>

            <p>
                My search uses an algorithm called negamax, which is a backtracking algorithm used for zero-sum two player games.
                It tries to maximize the score of one player and minimize the score of the other.
                You can think about it this way: you want to win the game so you try to maximize your score, but your opponent doesn't want you to win so they try to minimize your score.
            </p>

            <p>
                It also uses something called alpha-beta pruning, which sets bounds for the search to get rid of unnecessary branches.
                Alpha is the minimum score that a player can get assuming they try to maximize their score.
                Beta is the maximum score that that player can get assumining their opponent tries to minimize that score. 
            </p>

            <p>
                It also uses a quiescence search, which evaluates a chain of captures to stabilize the search.
                For example, a queen taking a rook might sound like a good trade in alpha-beta, until it realizes that it loses the queen to a pawn somewhere in the quiescence search.
            </p>

            <h1 class="text-2xl serif mt-3">Smaller Details</h1>

            <p>
                There are a wide variety of pruning techniques and heuristics that help to increase the amount of pruning and depth reductions.
                This reduces the branching factor, allowing the search to go deeper.
            </p>

            <p>
                I also included basic UCI support, which is the universal communication interface for chess engines.
                This allows it to run with tools like lichess-bot and cutechess-cli.
                Along with UCI support, I added polyglot opening book support to allow for the theoretical best opening moves to be played.
            </p>
        </div>
    </Container>
}