#!/usr/bin/env node
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    const name = chunk.toString().trim();
    if (name) {
      process.stdout.write(`Your name is: ${name}\n`);
    }
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
