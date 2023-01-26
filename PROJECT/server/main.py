from flask import Flask, jsonify, request

app = Flask(__name__)

incomes = [
    { 'description': 'salary', 'amount': 5000 }
]


@app.route('/incomes')
def get_incomes():
    return jsonify(incomes)


@app.route('/feedback', methods=['POST'])
def add_income():
    
    print(request.get_json())
    incomes.append(request.get_json())
    return '', 204