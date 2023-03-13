from flask import Flask, request, jsonify
import pandas as pd

api = Flask(__name__)

# @api.route('/profile',methods=["POST", "GET"])
# def my_profile():
#     response_body = {
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body
#read the data
collection_data= pd.read_csv('clean_data.csv',header=0)

@api.route('/profile',methods=["POST"])
def submit_input_value():
    input_value = request.form['inputValue']
    # print(input_value)
    index = collection_data[collection_data['address'].str.contains(input_value)].index.tolist()[0]
    day = collection_data['collectionday'][index]
    nextwaste = collection_data['nextwaste'][index]
    nextrecycle = collection_data['nextrecycle'][index]
    nextgreen = collection_data['nextgreen'][index]
    response_data = {'day': day, 'landfilldate':nextgreen,'recycledate':nextrecycle,'fooddate':nextwaste}
    # print(response_data)
    test = input_value.upper()
    response_test = {'response': test,'response1': test}
    # print(response_test)
    return jsonify(response_data)
