# AI Career Advisor Agent 🤖🎓

An **AI-powered Career Guidance Platform** that helps students discover suitable careers, analyze their skills, and generate personalized learning roadmaps using **AI Agents, LLMs, NLP, and Vector Search**.

This project is designed for **hackathons, academic projects, and AI demonstrations**, combining modern AI techniques like **LLM reasoning, embeddings, vector databases, and multi-language interaction**.

---

# 🚀 Features

## 🤖 AI Agent System

Implements an **AutoGPT-style AI Agent** that can:

* Understand student queries
* Decide which tools to use
* Combine results from multiple AI modules

The agent coordinates:

* Career recommendation
* Job market analysis
* Learning roadmap generation
* Resume skill extraction
* Personality analysis

---

## 🧠 LLM-Powered Career Advisor

Uses a **Large Language Model (LLM)** to:

* Explain career recommendations
* Answer career-related questions
* Provide personalized guidance

Example query:

```
I like math and programming
```

Example response:

```
You may enjoy careers such as Data Scientist or AI Engineer because
these fields involve strong analytical thinking and programming.
```

---

## 🔍 Vector Search for Career Matching

Uses **embeddings + vector database** for semantic career search.

Instead of simple keyword matching, the system understands meaning.

Example:

```
User Input:
"I enjoy solving mathematical problems with computers"
```

The system may recommend:

* Data Scientist
* Machine Learning Engineer
* AI Engineer

---

## 📄 Resume Analyzer

Students can **upload a resume (PDF)** and the system will:

* Extract skills automatically
* Identify career matches
* Show missing skills

---

## 🧭 AI Learning Roadmap Generator

Generates a **step-by-step learning path** for a selected career.

Example roadmap for **Data Scientist**:

```
1. Learn Python
2. Learn Statistics
3. Learn Data Analysis
4. Study Machine Learning
5. Build ML Projects
6. Learn Deep Learning
```

---

## 📊 Job Market Demand Analysis

Displays **trending careers based on demand scores**.

Example output:

| Job Title             | Demand Score |
| --------------------- | ------------ |
| Data Scientist        | 95           |
| AI Engineer           | 92           |
| Cybersecurity Analyst | 90           |

---

## 🧪 Career Personality Test

Uses a **psychometric model (RIASEC)** to evaluate personality traits.

Traits include:

* Realistic
* Investigative
* Artistic
* Social
* Enterprising
* Conventional

The system recommends careers based on personality fit.

---

## 🌍 Multi-Language Support

Supports multiple languages including:

* English
* Hindi
* Telugu
* Meitei Mayek
* Other languages

The system:

1. Detects the language
2. Translates the input
3. Processes it
4. Returns the response in the user's language

---

## 💬 ChatGPT-Style Interface

The user interface mimics a **modern AI chat assistant**.

Features:

* Conversation memory
* Chat bubbles
* Natural dialogue experience
* Clean professional design

---

# 🏗️ System Architecture

```
Student
   │
   ▼
ChatGPT-style UI (Streamlit)
   │
   ▼
AI Agent Controller
   │
   ├── Resume Analyzer
   ├── Personality Test
   ├── Career Search Tool
   ├── Job Market Analyzer
   └── Learning Roadmap Generator
   │
   ▼
LLM Reasoning Layer
   │
   ▼
Vector Database (Embeddings)
   │
   ▼
Career Knowledge Base
```

---

# 🧩 Tech Stack

## Programming Language

* Python

## Frontend

* Streamlit

## AI / ML

* spaCy
* Scikit-learn
* Sentence Transformers

## Vector Database

* FAISS

## LLM Integration

* OpenAI API or local LLM

## Data Processing

* Pandas
* NumPy

## Visualization

* Plotly

## Resume Processing

* pdfplumber

## Translation

* Googletrans
* Langdetect

---

# 📂 Project Structure

```
career-ai-platform/

app.py

agent/
 ├ agent_controller.py
 └ memory.py

chatbot/
 └ llm_agent.py

tools/
 ├ career_search.py
 ├ job_market_tool.py
 └ roadmap_tool.py

models/
 ├ personality_test.py
 ├ skill_gap_analyzer.py
 └ course_recommender.py

nlp/
 ├ skill_extractor.py
 ├ translator.py
 └ language_detector.py

resume/
 └ resume_parser.py

vector_db/
 └ embed_careers.py

analytics/
 └ charts.py

data/
 ├ careers.csv
 ├ courses.csv
 └ job_market.csv
```

---

# ⚙️ Installation

Clone the repository:

```
git clone https://github.com/YaifabaSapamcha/Ai-chatbot-trial.git
```

Navigate to the project folder:

```
cd ai-career-advisor-agent
```

Install dependencies:

```
pip install -r requirements.txt
```

Download the NLP model:

```
python -m spacy download en_core_web_sm
```

---

# ▶️ Running the Application

Start the Streamlit app:

```
streamlit run app.py
```

The application will open in your browser.

---

# 📊 Example Workflow

```
Student asks:
"I like math and coding"
```

AI Agent:

1. Extracts skills
2. Searches vector career database
3. Analyzes job market demand
4. Generates learning roadmap

Output:

```
Recommended Careers
• Data Scientist
• AI Engineer
• Machine Learning Engineer
```

---

# 🏆 Hackathon Highlights

This project demonstrates:

* AI Agents
* LLM reasoning
* Vector search
* NLP skill extraction
* Resume analysis
* Psychometric career testing
* Multi-language AI interface

It showcases **end-to-end AI system design** suitable for:

* Hackathons
* AI projects
* Research demos
* Academic coursework

---

# 🔮 Future Improvements

Possible enhancements:

* Multi-agent collaboration system
* Reinforcement learning career recommendations
* Real-time job market scraping
* University recommendation system
* Internship matching system

---

# 👨‍💻 Author

Developed as an **AI-powered career guidance platform** to help students make better career decisions using modern AI technologies.

---

# ⭐ If you like this project

Give it a **star ⭐ on GitHub** and contribute!
