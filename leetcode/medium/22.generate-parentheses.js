/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    addString("(",0,1,n,result);

    return result;
};  

function addString(str,closeCount,openCount,n,result){
    if(closeCount<n){
        if(openCount<n){
            addString(str+"(",closeCount,openCount+1,n,result);
            if(closeCount<openCount){
                addString(str+")",closeCount+1,openCount,n,result);
            }
        }else{
            addString(str+")",closeCount+1,openCount,n,result);
        }
    }else{
        result.push(str);
    }
}

console.log(generateParenthesis(3)) // output : ["((()))","(()())","(())()","()(())","()()()"]