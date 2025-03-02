from bs4 import BeautifulSoup
import requests
import csv

company = input("Enter what company you want results about: ").lower()

valid = False

# CHANGE TO CORRECT PATH
with open("/content/sp_500_companies.csv", mode='r', newline='', encoding='utf-8') as file:
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
