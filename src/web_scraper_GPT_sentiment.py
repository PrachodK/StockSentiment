from bs4 import BeautifulSoup
import requests
import csv
import openai
from getpass import getpass

company = input("Enter what company you want results about: ").lower()

valid = False

# CHANGE TO CORRECT PATH
with open("../assets/sp_500_companies.csv", mode='r', newline='', encoding='utf-8') as file:
  csv_reader = csv.reader(file)
  row = next(csv_reader, None)  # Get the first (and only) row if it exists
  if row and any(company in cell.lower() for cell in row):
    valid=True  # String found

if (valid):
  company_link = f"https://www.google.com/search?q={company}+news&sca_esv=cd75d570c707befa&rlz=1CAMUTD_enUS1147&biw=1366&bih=633&tbm=nws&ei=q5nDZ-zVEJuV5OMPjNSYiAY&ved=0ahUKEwis17b8heqLAxWbCnkGHQwqBmEQ4dUDCA4&uact=5&oq=apple+news&gs_lp=Egxnd3Mtd2l6LW5ld3MiCmFwcGxlIG5ld3MyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIIEAAYgAQYsQMyBRAAGIAEMggQABiABBixAzIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAESMwpULkHWOsMcAB4AJABAJgBVaAB4AOqAQE3uAEDyAEA-AEBmAIGoALFA8ICEBAAGIAEGLEDGEMYgwEYigXCAg4QABiABBixAxiDARiKBcICChAAGIAEGEMYigXCAg0QABiABBixAxiDARgKwgIKEAAYgAQYsQMYCsICBxAAGIAEGAqYAwCIBgGSBwE2oAfQKA&sclient=gws-wiz-news"

  recent_news_company = requests.get(company_link)
  recent_news_soup = BeautifulSoup(recent_news_company.content, 'html.parser')

  headlines = recent_news_soup.find_all('h3', class_='zBAuLc l97dzf')
  articles = []

  for headline in headlines:
    articles.append(headline.get_text(strip=True))
    print(headline.get_text(strip=True))
else:
  print("This is not a valid company")

#####

openai.api_key = ''

response = openai.ChatCompletion.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": f"Analyze the headlines based off of how positive the headline is to the {company}'s stock. Disregard any news not related to {company}. Summarize the positivity/negativity of each article and give each a rating from 0 (most negative) to 10 (most positive). Only focus on economic-related issues. Use tenths as needed. List the average rating first, then show your summary."},
        {"role": "user", "content": f"{articles[0]}, {articles[1]}, {articles[2]}, {articles[3]}, {articles[4]}, {articles[5]}, {articles[6]}, {articles[7]}, {articles[8]}, {articles[9]}"}
    ]
)

print(response['choices'][0]['message']['content'].strip())
