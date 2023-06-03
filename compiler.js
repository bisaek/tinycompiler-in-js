import tokenizer from "./tokenizer.js";
import parser from "./parser.js";
import transformer from "./transformer.js";
import generateCode from "./generateCode.js";

export default function compiler(input) {
  // 1. Lexical Analysis
	const tokens = tokenizer(input)

	// 2. Syntactic Analysis

	const lispAST = parser(tokens)

  // 3. Transformation
	
	const jsAST = transformer(lispAST)

  // 4. Code Generation
	const jsCode = generateCode(jsAST)

  //

  return jsCode;
}