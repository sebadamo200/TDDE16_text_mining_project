# TDDE16 Text Mining Project

This repository contains the code, data, and resources for sentiment classification of Google Play Store reviews using Naive Bayes and fine-tuned DistilBERT. Follow the instructions below to set up the environment and reproduce the results.

---

## Project Structure
- **`TDDE16_Project_sebkl144.ipynb`**: Notebook for preprocessing and Naive Bayes model implementation.
- **`TDDE16_distilBert_sentiment.ipynb`**: Notebook for fine-tuning and evaluating the DistilBERT model.
- **`fetchReviews.js`**: Script for scraping Google Play Store reviews.
- **`reviews.csv`**: Raw dataset of reviews.
- **`reviews_processed.csv`**: Preprocessed dataset.
- **`statistics.ipynb`**: Notebook for exploratory data analysis and visualizations.

---

## Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine using:
```bash
git clone https://github.com/sebadamo200/TDDE16_text_mining_project.git
cd TDDE16_text_mining_project
```
### 2. Install Dependencies
Ensure you have Python 3.8+ installed. Install the required Python libraries using the `requirements.txt` file:

```bash
pip install -r requirements.txt
```
### 3. Dataset
- **Raw Data**: The dataset of raw Google Play Store reviews is provided in `reviews.csv`.
- **Preprocessed Data**: The preprocessed data, after cleaning and transformation, is available in `reviews_processed.csv`.

### 4. Run the Notebooks
Open the Jupyter notebooks in your preferred environment and follow these steps:

- **`TDDE16_Project_sebkl144.ipynb`**: This notebook includes data preprocessing steps and the implementation of the Naive Bayes model.
- **`TDDE16_distilBert_sentiment.ipynb`**: This notebook details the process for fine-tuning and evaluating the DistilBERT model.

Follow the steps outlined in each notebook to reproduce the results.

### 5. Evaluation
- The notebooks include visualizations such as word clouds and confusion matrices to aid in interpretability.
- Model performance is evaluated using the following metrics:
  - **Precision**
  - **Recall**
  - **F1-score**
  - **Accuracy**

Refer to the notebooks for detailed analysis and comparisons between the Naive Bayes and DistilBERT models.

### 6. Reproduce the Results
All steps for preprocessing, training, and evaluation are documented in the notebooks. Follow these instructions to reproduce the results:

1. Run the preprocessing steps in **`TDDE16_Project_sebkl144.ipynb`** to clean and prepare the data.
2. Train and evaluate the Naive Bayes model in the same notebook.
3. Use **`TDDE16_distilBert_sentiment.ipynb`** to fine-tune and evaluate the DistilBERT model.
4. All hyperparameters and configurations are provided in the notebooks to ensure reproducibility.

