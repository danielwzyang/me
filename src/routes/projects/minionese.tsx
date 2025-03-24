import Container from "../../components/Container"

export default function Minionese() {
    return <Container title="Minionese">
        <h1 class="text-3xl serif mb-3">Minionese</h1>
        <img src="/projects/minionese/cover.png" alt="minionese" class="mb-5 rounded-lg" />
        <div class="flex flex-col gap-3">
            <p>
                Growing up, minions were always my favorite animated characters. I loved their childish demeanor and indecipherable
                yet familiar language. At the time I made this project, I didn't have a lot of ideas, so I decided to create an
                interpreter for their language, Minionese.
            </p>

            <p>
                This project is made up of three parts: the lexer, parser, and interpreter. The lexer converts text into a list of
                tokens. Those tokens are then used by the parser to create something called an abstract syntax tree (AST). The AST is
                a tree that shows the nested statements and expressions to be executed. Finally, the interpreter evaluates the AST at
                runtime.
            </p>

            <h1 class="text-2xl serif mt-3">Lexer</h1>

            <p>
                My lexer tokenizes using regular expressions. I create a
                <a href="https://docs.oracle.com/javase/8/docs/api/java/util/regex/Matcher.html"> Matcher </a>
                object which follows predefined groups of regular expression patterns. These groups recognize different types of
                tokens. For example, binary operators like + or -. The matcher reads the input string and iteratively looks for
                matches. For each match, it creates a Token object and moves forward to the next corresponding match. Each Token
                object stores a value and a type. These types cover important values, identifiers, and syntax that the parser uses to
                create the AST.
            </p>

            <p>
                There are some special cases to deal with when tokenizing, namely keywords. For example, "la" is used to define
                variables and "fin" is used to define constants. These keywords are stored in a hash map with their corresponding
                special types. This hash map is used when identifiers are matched to check if they are keywords. If they are, that
                special type is prioritized over the default identifier type.
            </p>

            <img src="/projects/minionese/keywords.png" alt="keywords" class="mb-5 rounded-lg" />

            <h1 class="text-2xl serif">Parser and Runtime Values</h1>

            <p>
                After the file is interpreted, a list of tokens is generated and the parser is created. The list of tokens is
                essentially a queue, where the tokens are added to the end in the lexer and popped from the head in the parser.
                Depending on the type of the token, the parser calls a helper function either parse a statement or an expression,
                whose class is a child of the statement class.
            </p>

            <p>
                The statement parser is pretty straightforward and uses a switch statement to parse different types of statements.
                The switch statement will call helper functions that essentially pop expected tokens. For example, assignment
                statements are made of the following: define, identifier, equals, and expression. The expression parser is a little
                more complicated and uses something called
                <a href="https://en.wikipedia.org/wiki/Operator-precedence_grammar"> operator-precedence grammar</a>.
                Essentially, this is the order of operations including syntax. For example, assignment is at the bottom of the order
                of precedence. This means that when assignment occurs, the expression that the identifier is equal to has to be
                evaluated first. The functions that parse the expressions call the function that's above it in the order of
                precedence before creating a node. In these functions, errors are handled in a panic mode, meaning that when an
                unexpected token type shows up, the program prints the error and exits. If no errors occur, the AST is full of nodes
                that came from the order of tokens. Nodes can have pointers that connect to other nodes, such as the left and right
                pointers for binary expressions.
            </p>

            <p>
                Every node in the AST has its own type which can be evaluated using the evaluate function. I opted for an evaluate
                function for each class over a separate interpreter because I didn't want to deal with an overload of generic types.
                These evaluate functions return a RuntimeValue object, which has children encompassing data types, methods, and more.
                These RuntimeValues have operate functions, which allows for things like string concatenation or boolean operators.
            </p>

            <h1 class="text-2xl serif mt-3">Example Code</h1>

            <img src="/projects/minionese/twosum.png" alt="two sum" class="mb-5 rounded-lg" />

            <p>
                This is some minionese code solving the famous LeetCode problem,
                <a href="https://leetcode.com/problems/two-sum/">Two Sum</a>.
                This problem gives an array of integers and asks for the indices of the two numbers that add up to a target sum.
            </p>

            <p>
                The widely accepted solution for this problem is using a hashmap that records the indices of previously visited elements. When traversing through each element, a complement is calculated, which is the necessary addend to reach the target sum. The complement is then checked for existence in the hashmap. If the complement exists, that means it's been visited and we have the index of it, so we can return our solution of [complement's index, current index]. Otherwise, we store our current index as the key value pair of (currentvalue : currentindex) in the hashmap.
            </p>

            <p>
                This is a rough explanation of the minionese code. First, the function twoSum is defined that has the parameters nums and target. Minionese is typeless, so it just assumes the inputs are valid. It creates a hashmap called seen to store the visited indices. Then, it runs a for loop to loop through the indices of the given array. If the map has the complement, then it returns an array with [complement's index, current index]. Otherwise it adds the current value and index to the hashmap. There is no other return statement because it can be assumed that the pair exists. For the test cases, I used the print function, bello, and called the twoSum function. The strings act as comments since they don't evaluate to anything in the interpreter. 
            </p>
        </div>
    </Container>
}