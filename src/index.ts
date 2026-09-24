console.log("Hello from your TypeScript CLI!");

// You can read CLI arguments using process.argv
const args = process.argv.slice(2);
if (args.length > 0) {
    console.log(`Arguments passed: ${args.join(', ')}`);
}