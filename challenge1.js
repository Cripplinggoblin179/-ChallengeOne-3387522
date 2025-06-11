
class TrieNode {
    constructor() {
        this.children = {}; 
        this.isEndOfWord = false; 
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    /**
     * Inserts a word into the trie
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;
        
       
        for (let char of word) {
           
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        
      
        current.isEndOfWord = true;
    }
    
    /**
     * Returns if the word is in the trie
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        
        
        for (let char of word) {
            if (!current.children[char]) {
                return false; 
            }
            current = current.children[char];
        }
        
       
        return current.isEndOfWord;
    }
    
    /**
     * Returns if there is any word in the trie that starts with the given prefix
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        
        
        for (let char of prefix) {
            if (!current.children[char]) {
                return false; 
            }
            current = current.children[char];
        }
        
       
        return true;
    }
}


console.log("=== Trie Implementation Test ===");


let trie = new Trie();

console.log("Operations and Results:");
console.log(`new Trie() -> ${null}`);

trie.insert("apple");
console.log(`insert("apple") -> ${null}`);

let result1 = trie.search("apple");
console.log(`search("apple") -> ${result1}`); 
let result2 = trie.search("app");
console.log(`search("app") -> ${result2}`); 

let result3 = trie.startsWith("app");
console.log(`startsWith("app") -> ${result3}`); 

trie.insert("app");
console.log(`insert("app") -> ${null}`);

let result4 = trie.search("app");
console.log(`search("app") -> ${result4}`); 

console.log("\nExpected Output: [null, null, true, false, true, null, true]");
console.log(`Actual Output:   [null, null, ${result1}, ${result2}, ${result3}, null, ${result4}]`);


console.log("\n=== Additional Tests ===");

let trie2 = new Trie();


trie2.insert("cat");
trie2.insert("car");
trie2.insert("card");
trie2.insert("care");
trie2.insert("careful");

console.log("\nAfter inserting: cat, car, card, care, careful");
console.log(`search("car") -> ${trie2.search("car")}`); 
console.log(`search("card") -> ${trie2.search("card")}`); 
console.log(`search("care") -> ${trie2.search("care")}`); 
console.log(`search("careful") -> ${trie2.search("careful")}`); 
console.log(`search("ca") -> ${trie2.search("ca")}`);

console.log(`startsWith("car") -> ${trie2.startsWith("car")}`); 
console.log(`startsWith("care") -> ${trie2.startsWith("care")}`); 
console.log(`startsWith("careful") -> ${trie2.startsWith("careful")}`); 
console.log(`startsWith("xyz") -> ${trie2.startsWith("xyz")}`);


let trie3 = new Trie();
trie3.insert("");
console.log(`\nEdge case - insert empty string:`);
console.log(`search("") -> ${trie3.search("")}`); 
console.log(`startsWith("") -> ${trie3.startsWith("")}`); 

console.log("\n=== Complexity Analysis ===");
console.log("Time Complexity:");
console.log("- Insert: O(m) where m is the length of the word");
console.log("- Search: O(m) where m is the length of the word");
console.log("- StartsWith: O(m) where m is the length of the prefix");
console.log("\nSpace Complexity: O(ALPHABET_SIZE * N * M)");
console.log("where N is number of words and M is average length of words");