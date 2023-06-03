import tokenizer from "./tokenizer.js";
import parser from "./parser.js";

export default function compiler(input) {
  // 1. Lexical Analysis
	const tokens = tokenizer(input)

	// 2. Syntactic Analysis

	const lispAST = parser(tokens)

  // 3. Transformation

  // 4. Code Generation

  //

  return lispAST;
}