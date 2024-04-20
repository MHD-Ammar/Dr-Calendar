import flask 
import json
app  = flask.Flask("Dr_calendar")



#Function for open file and read it
def get_page(page_name):
    html_file = open(page_name)
    content = html_file.read()
    html_file.close()
    return content
#view doctor Schedule of the day
json_file = open("DB.json")
Schedule = json.load(json_file)

print(Schedule[9]["id"])
json_file.close

#Action When Patient Finished








@app.route("/")
def home_page():
    html_file = get_page("index.html")
    return html_file