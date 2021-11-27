"""
    import library
"""
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
from pymongo import MongoClient
import requests
import sys
import os
import time
"""
    This file is for blackboard scraping using python 
"""

""" 
    setup username & password
"""
USER = sys.argv[1]
USERNAME = sys.argv[2]
PASSWORD = sys.argv[3]

"""
    connection to MongoDB
"""
# connection to MongoDB
client = MongoClient('mongodb+srv://Anil:Bhusal@cluster0.kjwlj.mongodb.net')
db = client.NeverLate
collection_name = db.neverlates

"""
    driver
"""
chrome_options = Options()
chrome_options.add_argument("--headless")
driver = webdriver.Chrome(
    executable_path='/var/www/actions-runner/_work/Never_Late/Never_Late/python/chromedriver', options=chrome_options)  # change the path if it doesn't work

"""
    login from the blackboard 
"""
driver.get('https://bbhosted.cuny.edu/webapps/calendar/viewPersonal')
driver.find_element_by_id("CUNYfirstUsernameH").send_keys(
    USERNAME)  # send username
driver.find_element_by_id("CUNYfirstPassword").send_keys(
    PASSWORD)  # send password
driver.find_element_by_id("submit").click()  # click on submit button
time.sleep(2)

""" 
    Start from August (begining of semester)
"""
while(driver.find_element_by_id('anonymous_element_7').text != 'August 2021'):
    driver.find_element_by_xpath("//button[@title='Previous Period']").click()
    time.sleep(5)  

""" 
    Go till December (end of semester)
"""
time.sleep(5) 
assignments = []
while(driver.find_element_by_id('anonymous_element_7').text != 'December 2021'):
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    divs = soup.find_all('div', {'class': 'fc-event-inner fc-event-skin'})
    if len(divs) > 0:
        for div in divs:
            aux_obj = {}
            aux_obj['Due Date'] = div.find('span', {'class': 'hideoff'}).text
            aux_obj['Time'] = div.find('span', {'class': 'fc-event-time'}).text
            aux_obj['Subject'] = div.find(
                'span', {'class': 'fc-event-title'}).text
            assignments.append(aux_obj)
    time.sleep(2)
    driver.find_element_by_xpath("//button[@title='Next Period']").click()
    time.sleep(10)
driver.quit()

entry = {
    'user': USER,
    'assignments': [index for assignment, index in enumerate(
        assignments) if index not in assignments[assignment + 1:]]
}
collection_name.update_one({'user': USER}, {"$set": entry}, True)
