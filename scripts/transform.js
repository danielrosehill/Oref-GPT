// Grab the first input item (assuming your input has one item with a "tweets" array)
const allTweets = items[0].json.tweets.slice(0, 20); // top 10 tweets only

// Map and format them into a readable string
const formatted = allTweets.map(tweet => {
  const author = tweet.author?.userName || "unknown";
  const time = tweet.createdAt || "unknown time";
  const url = tweet.url || "";
  const text = tweet.text.replace(/\n/g, ' '); // clean up newlines
  return `@${author} at ${time}:\n"${text}"\n${url}`;
});

// Join all into one string
const combinedText = formatted.join("\n\n");

return [{
  json: {
    combined_text: combinedText
  }
}];
