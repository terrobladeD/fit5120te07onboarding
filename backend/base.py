from flask import Flask, request, jsonify

api = Flask(__name__)

# @api.route('/profile',methods=["POST", "GET"])
# def my_profile():
#     response_body = {
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body

# @api.route('/profile',methods=["POST"])
# def submit_input_value():
#     input_value = request.form['inputValue']
#     # do something with the input value
#     processed_value = input_value.upper()
#     response_data = {'response': processed_value}
#     return jsonify(response_data)

@api.route('/Binday',methods=["POST"])
def get_bin_dates():
    street_address = request.form['inputValue']
    # do something with the input value
    if(street_address):
        response_data = {'day': 'Tuesday', 'landfilldate':'01-01-2020','recycledate':'02-02-2022','fooddate':'03-03-2023'}
    return jsonify(response_data)
