const weirdExpressions = [
    "a othoba b",
    "b ebong c othoba d",
    "ebong ebong othoba othoba ebong",
    "((ebong) othoba ebong) ebong othoba",
    "(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
    "ebong",
];

for (const expression of weirdExpressions) {
    // fill this in
    const exp = expression.split(" ");

    for (let i = 0; i < exp.length; i++) {
        if (i === 0 && exp[i] === "ebong") {
            continue;
        }
        if (i === 0 && exp[i] === "othoba") {
            continue;
        }
        if (i !== 0 && exp[i] === "ebong" && exp[i - 1] === "&&") {
            continue;
        }
        if (i !== 0 && exp[i] === "ebong" && exp[i - 1] === "||") {
            continue;
        }
        if (i !== 0 && exp[i] === "othoba" && exp[i - 1] === "&&") {
            continue;
        }
        if (i !== 0 && exp[i] === "othoba" && exp[i - 1] === "||") {
            continue;
        }
        if (exp[i] !== "ebong" && exp[i] !== "othoba") {
            exp[i] = exp[i].replace(")ebong", ")&&");
            exp[i] = exp[i].replace(")othoba", ")||");
            continue;
        }
        if (exp.length > 1 && exp[i] === "ebong") {
            exp[i] = "&&";
        }
        if (exp.length > 1 && exp[i] === "othoba") {
            exp[i] = "||";
        }
    }

    console.log(exp.join(" "));
}
