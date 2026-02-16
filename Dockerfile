# Use an official Python runtime with a slim base
FROM python:3.9-slim-bullseye

# Install system dependencies required by OpenCV and Tesseract
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your application's code
COPY . .

# Make port 10000 available
EXPOSE 10000

# Run gunicorn when the container launches
CMD gunicorn app:app --bind 0.0.0.0:$PORT
