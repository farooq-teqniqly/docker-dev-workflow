FROM python:3.9.0-slim-buster

ENV FLASK_APP=main.py
ENV FLASK_ENV=production

WORKDIR /app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY main.py .
CMD flask run -h 0.0.0.0