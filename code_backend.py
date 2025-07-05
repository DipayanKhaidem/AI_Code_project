from flask import Flask, request, jsonify
from flask_cors import CORS
import ollama
import re

app = Flask(__name__)
CORS(app)


conversations = {}



def detect_intent(prompt: str) -> str:
    prompt = prompt.lower()
    if any(word in prompt for word in ["explain", "describe", "what does", "analyze"]):
        return "explanation"
    elif "optimize" in prompt:
        return "optimize"
    else:
        return "code"

def extract_language(prompt: str) -> str:
    match = re.search(r'in\s+(\w+\+\+|\w+)', prompt.lower())
    return match.group(1) if match else "code"

def build_prompt(prompt: str, optimize: bool = False) -> str:
    intent = detect_intent(prompt)
    language = extract_language(prompt)

    if intent == "explanation":
        return f"Please explain the following {language} code:\n\n{prompt}"
    elif optimize:
        return f"Please optimize the following {language} code:\n\n{prompt}\n\nReturn only the optimized code."
    else:
        return f"Write a {language} program or snippet for the following requirement:\n\n{prompt}\n\nReturn only the code."

@app.route("/api/code", methods=["POST"])
def generate_code():
    data = request.get_json()
    prompt = data.get("prompt")
    optimize = data.get("optimize", False)
    session_id = data.get("session_id", "default")

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    try:
        full_prompt = build_prompt(prompt, optimize)

       
        if session_id not in conversations:
            conversations[session_id] = []

        conversations[session_id].append({"role": "user", "content": full_prompt})

        
        response = ollama.chat(
            model="llama3",
            messages=conversations[session_id]
        )
        code = response["message"]["content"]

      
        conversations[session_id].append({"role": "assistant", "content": code})

        return jsonify({"code": code})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/clear", methods=["POST"])
def clear_session():
    session_id = request.get_json().get("session_id", "default")
    conversations.pop(session_id, None)
    return jsonify({"status": "cleared"})



if __name__ == "__main__":
    app.run(debug=True, port=5002)
