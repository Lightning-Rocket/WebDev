import mysql.connector

mydb = mysql.connector.connect(host="localhost", user="root", password="", database="digital_santa")
mycursor = mydb.cursor()

query = "INSERT INTO user (fname, lname, email, phone) VALUES (%s, %s, %s, %s);"
value = ('Vee', 'dey', 'vd@gr.com', '123456789')

mycursor.execute(query, value)

mydb.commit()


