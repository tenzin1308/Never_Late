import tabula
import pdfplumber
import pandas as pd
import pymongo
import json

dfs2 = tabula.read_pdf("https://www.clevelandmetroschools.org/cms/lib/OH01915844/Centricity/Domain/274/Tables%20of%20Values.pdf")
file = 'Assignment1.pdf'

lines = []

with pdfplumber.open(file) as pdf:
    pages = pdf.pages
    for page in pdf.pages:
        text = page.extract_text()
        for line in text.split('\n'):
            lines.append(line)
            print(line)

df = pd.DataFrame(lines)

df.to_csv('test.csv')

# Read pdf into a list of DataFrame
dfs = tabula.read_pdf("table_example.pdf", pages='all')
# Read remote pdf into a list of DataFrame
dfs2 = tabula.read_pdf("https://www.clevelandmetroschools.org/cms/lib/OH01915844/Centricity/Domain/274/Tables%20of%20Values.pdf")
# convert PDF into CSV
tabula.convert_into("table_example.pdf", "output2.csv", output_format="csv", pages='all')
tabula.convert_into("https://www.clevelandmetroschools.org/cms/lib/OH01915844/Centricity/Domain/274/Tables%20of%20Values.pdf", "output3.csv", output_format="csv", pages='all')

