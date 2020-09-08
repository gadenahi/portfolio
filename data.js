const project_filters = ["all", "python", "flask", "javascript", "node", "express", "jquery", "react", "d3", "postgresql", "chai", "matplotlib", "scipy", "scikitlearn", "tensorflow", "datascience", "jupyternotebooks"]

const projects = [
  {
      id: 21,
      url: "https://docmanage111.herokuapp.com/",
      image: "./static/report_shopping_site.png",
      caption: "Report shopping site",
      langs: ["python", "flask", "javascript", "jquery", "postgresql", "matplotlib"]
  },
  {
      id: 20,
      url: "https://blog-site111.herokuapp.com/",
      image: "./static/blog_site.png",
      caption: "Blog site",
      langs: ["python", "flask", "javascript", "jquery", "postgresql"]
  },
  {
      id: 19,
      url: "https://highlevelwingedcloudcomputing--five-nine.repl.co/",
      image: "./static/American_british_english_translator.png",
      caption: "American/British\nEnglish Translator",
      langs: ["javascript", "node", "jquery", "express", "chai"]
  },
  {
      id: 18,
      url: "https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/0e4e40b8-806a-4ff9-a870-dce50ffb78fe/view?access_token=5405e90fef91dc0e596e9949b87b54dfbd0ba201c0157cc45e9ca01f11a35788",
      image: "./static/ds_ml_capstone project.png",
      caption: "Data Science\nMachine Learning\nCapstone Project",
      langs: ["python", "matplotlib", "scipy", "scikitlearn", "datascience"]
  },
  {
      id: 17,
      url: "https://github.com/gadenahi/neural_network_sms_text_classifier/blob/master/sms_text_classification.ipynb",
      image: "./static/sms_text_classification.png",
      caption: "Neural Network\nSMS Text Classifier",
      langs: ["python", "matplotlib", "tensorflow", "datascience", "jupyternotebooks"]
  },
  {
      id: 16,
      url: "https://github.com/gadenahi/predict_healthcare_costs_using_a_regression_algorithm/blob/master/predict_health_costs_with_regression.ipynb",
      image: "./static/predict_healthcare_costs.png",
      caption: "Predict Healthcare_costs\nRegression Algorithm",
      langs: ["python", "matplotlib", "tensorflow", "datascience", "jupyternotebooks"]
  },
  {
      id: 15,
      url: "https://github.com/gadenahi/book_recommendation_knn/blob/master/book_recommendation_knn.ipynb",
      image: "./static/book_recommendation_knn.png",
      caption: "Book recommendation\nK-Nearest Neighbors",
      langs: ["python", "matplotlib", "scipy", "scikitlearn", "datascience", "jupyternotebooks"]
  },
  {
      id: 14,
      url: "https://github.com/gadenahi/cat_dog_image_classifier/blob/master/cat_dog_image_classifier.ipynb",
      image: "./static/cat_dog_image_classifier.png",
      caption: "Cat/Dog Image Classifier",
      langs: ["python", "matplotlib", "tensorflow", "datascience", "jupyternotebooks"]
  },
  {
      id: 13,
      url: "https://github.com/gadenahi/sea_level_predictor",
      image: "./static/sea_level_plot.png",
      caption: "Sea Level Predictor",
      langs: ["python", "matplotlib", "scipy", "datascience"]
  },
  {
      id: 12,
      url: "https://github.com/gadenahi/page_view_time_visualizer",
      image: "./static/page_view_visualizer_box_plot.png",
      caption: "Page View Time Visualizer",
      langs: ["python", "matplotlib", "datascience"]
  },
  {
      id: 11,
      url: "https://reasonablewobblyfolders--five-nine.repl.co/",
      image: "./static/sudoku_solver.png",
      caption: "Sudoku Solver",
      langs: ["javascript", "node", "jquery", "express", "chai"]
  },
  {
      id: 10,
      url: "https://github.com/gadenahi/web_scraping_with_auto_scrolling",
      image: "./static/web_scraping_for_ces.png",
      caption: "Web Scraping for CES",
      langs: ["python"]
  },
  {
      id: 9,
      url: "https://gadenahi.github.io/pomodoro-clock/",
      image: "./static/pomodoro_clock.png",
      caption: "Pomodoro Clock",
      langs: ["javascript", "react"]
  },
  {
      id: 8,
      url: "https://gadenahi.github.io/drum-machine/",
      image: "./static/drum_machine.png",
      caption: "Drum Machine",
      langs: ["javascript", "react"]
  },
  {
      id: 7,
      url: "https://gadenahi.github.io/twitch_streamers/",
      image: "./static/twitch_streamers.png",
      caption: "Twitch Streamers",
      langs: ["javascript", "react"]
  },
  {
      id: 6,
      url: "https://gadenahi.github.io/js-calculator/",
      image: "./static/calculator.png",
      caption: "Calculator",
      langs: ["javascript", "react"]
  },
  {
      id: 5,
      url: "https://gadenahi.github.io/build_a_wikipedia_viewer/",
      image: "./static/wikipedia_viewer.png",
      caption: "Wikipedia Viewer",
      langs: ["javascript", "jquery"]
  },
  {
      id: 4,
      url: "https://gadenahi.github.io/show_the_local_weather/",
      image: "./static/local_weather.png",
      caption: "Show local weather",
      langs: ["javascript", "jquery"]
  },
  {
      id: 3,
      url: "https://gadenahi.github.io/visualize-data-with-a-choropleth-map/",
      image: "./static/choropleth_map.png",
      caption: "Choropleth Map for\nUS Educational Attainment",
      langs: ["javascript", "d3"]
  },
  {
      id: 2,
      url: "https://gadenahi.github.io/visualize-data-with-a-heat-map/",
      image: "./static/global_land_surface_temp.png",
      caption: "Heat Map for\nGlobal Land-Surface Temp",
      langs: ["javascript", "d3"]
  },
  {
      id: 1,
      url: "https://gadenahi.github.io/visualize_data_with_a_treemap_diagram/",
      image: "./static/treemap_diagram.png",
      caption: "Treemap Diagram for\nVideo Game Sales",
      langs: ["javascript", "d3"]
  }
]

const skills = ["python", "flask", "javascript", "react", "redux", "node", "express", "jquery", "html", "css", "scss", "bootstrap", "mongodb", "postgresql", "mongoose", "sqlalchemy", "sql", "d3", "selenium", "pandas", "numpy", "matplotlib", "seaborn", "scipy", "scikit-learn", "tensorflow", "chai", "helmetjs", "npm", "github", "jupyter notebooks", "responsive web design"]

export { project_filters, projects, skills }