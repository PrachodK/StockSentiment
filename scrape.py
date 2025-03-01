import requests
from bs4 import BeautifulSoup
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer


# Download VADER lexicon (if you haven't already)
nltk.download('vader_lexicon')

# URL of the article to scrape
url = "https://www.investors.com/news/technology/amazon-stock-quantum-chip-stocks-amzn-news/"

# Set headers to mimic a regular browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
}

# Fetch the webpage
response = requests.get(url, headers=headers)
if response.status_code != 200:
    print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
    exit()

html_content = response.text

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Attempt to locate the main article content:
# First, try finding the <article> tag.
article = soup.find('article')
if article:
    paragraphs = article.find_all('p')
else:
    # If no <article> tag is found, try looking for a <div> with 'article' in its class name.
    article_div = soup.find('div', class_=lambda x: x and 'article' in x.lower())
    if article_div:
        paragraphs = article_div.find_all('p')
    else:
        # Fallback: grab all paragraph tags from the page
        paragraphs = soup.find_all('p')

# Combine text from all paragraphs
article_text = " ".join([p.get_text(strip=True) for p in paragraphs])

print("----- Article Text Extracted -----")
print(article_text)
print("------------------------------------\n")

# Perform sentiment analysis using VADER
sia = SentimentIntensityAnalyzer()
sentiment_scores = sia.polarity_scores(article_text)

print("----- Sentiment Analysis -----")
print("Sentiment Scores:")
for key, score in sentiment_scores.items():
    print(f"{key}: {score}")
print("------------------------------")
