#import library 
import xlrd
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
"""
    This file is for send reminder email to users.
"""

"""
    have a excel to store dummmy data 
"""
path = "clients.xlsx"
openFile = xlrd.open_workbook(path)
sheet = openFile.sheet_by_name('clients')


mail_list = []
hw = []
name = []
for k in range(sheet.nrows-1):
    client = sheet.cell_value(k+1,0)
    email = sheet.cell_value(k+1,1)
    task = sheet.cell_value(k+1,3)
    count_hw = sheet.cell_value(k+1,4)
    if task == 'No':
        mail_list.append(email) 
        hw.append(count_hw)
        name.append(client)

"""
    using smtplib.smtp as sender email
"""
email = 'some@gmail.com' 
password = 'pass' 
server = smtplib.SMTP('smtp.gmail.com', 123)
server.starttls()
server.login(email, password)

"""
    content of email
"""
for mail_to in mail_list:
    send_to_email = mail_to
    find_des = mail_list.index(send_to_email) 
    clientName = name[find_des] 
    subject = f'{clientName} you have a new homework'
    message = f'Dear {clientName}, \n' \
              f'we inform you that you have new {hw[find_des]}. \n'\
              '\n' \
              'Best Regards' 

    msg = MIMEMultipart()
    msg['From '] = send_to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(message, 'plain'))
    text = msg.as_string()
    print(f'Sending email to {clientName}... ') 
    server.sendmail(email, send_to_email, text)

server.quit()
print('Process is finished!')
time.sleep(10) 