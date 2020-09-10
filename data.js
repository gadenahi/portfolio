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

const certificate_filters = ["all", "fullstack", "datascience", "python", "javascript", "sql", "bigquery", "ibmcloud", "googlecloud"]

const org_filters = ["ibm", "freecodecamp", "google"]

const certificates = [
    {
        id : 30,
        org: "ibm",
        url: "https://credentials.edx.org/credentials/d01d1b57330e483da5f6994e03d83b59/",
        caption: "Professional Certificate, IBM Data Science(2020)",
        category: ["datascience", "python", "sql", "ibmcloud", "ibm"]
    },
    {
        id : 29,
        org: "ibm",
        url: "https://credentials.edx.org/credentials/098b574700d74432a9fb997f638bc2d2/",
        caption: "Professional Certificate, Python Data Science(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 28,
        org: "ibm",
        url: "https://credentials.edx.org/credentials/250f5dafb0de40efbbf013a5b3c9f029/",
        caption: "Professional Certificate, Data Science Foundations(2020)",
        category: ["datascience", "python", "sql", "ibmcloud", "ibm"]
    },
    {
        id : 27,
        org: "ibm",
        url: "https://courses.edx.org/certificates/8b5ac79a2f7f4c2aa4321aaaafd63978",
        caption: "IBM Python Basics for Data Science(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 26,
        org: "ibm",
        url: "https://courses.edx.org/certificates/3532cb2223064903a9d17f8dd42689ea",
        caption: "IBM Introduction to Data Science(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 25,
        org: "ibm",
        url: "https://courses.edx.org/certificates/3fe7e50b826e43819967cb9e396d1c60",
        caption: "IBM Data Science Tools(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 24,
        org: "ibm",
        url: "https://courses.edx.org/certificates/1ff7eeb05c2b4a2cbd0cdd6e0a53eadd",
        caption: "IBM SQL for Data Science(2020)",
        category: ["datascience", "python", "sql", "ibmcloud", "ibm"]
    },
    {
        id : 23,
        org: "ibm",
        url: "https://courses.edx.org/certificates/cb8b4838ab134544a3fbe50c1da0f51b",
        caption: "IBM Analyzing Data with Python(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 22,
        org: "ibm",
        url: "https://courses.edx.org/certificates/267aa2a9f531413fab0dcbfab74bcc57",
        caption: "IBM The Data Science Method(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 21,
        org: "ibm",
        url: "https://courses.edx.org/certificates/a3a26fdc1396427ba447ee7a0ccb4575",
        caption: "IBM Visualizing Data with Python(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 20,
        org: "ibm",
        url: "https://courses.edx.org/certificates/954133c3694644c5ba72f8bf2a6de822",
        caption: "IBM Machine Learning with Python(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 19,
        org: "ibm",
        url: "https://courses.edx.org/certificates/2f099642be0341ee8eb6ddfc9826d8ed",
        caption: "IBM Data Science and MachineLearning Capstone Project(2020)",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id : 18,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/full-stack",
        caption: "FCC Full Stack Web Developer(2019)",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id : 17,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/responsive-web-design",
        caption: "FCC Responsive Web Design(2019)",
        category: ["fullstack", "freecodecamp"]
    },
    {
        id : 16,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/javascript-algorithms-and-data-structures",
        caption: "FCC JS Algorithms and Data Structures(2019)",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id : 15,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/front-end-libraries",
        caption: "FCC Front End Libraries(2019)",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id : 14,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/data-visualization",
        caption: "FCC Data Visualization(2019)",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id : 13,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/apis-and-microservices",
        caption: "FCC APIs and Microservices(2019)",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id : 12,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/quality-assurance-v7",
        caption: "FCC Quality Assuarance(2020)",
        category: ["fullstack", "javascript", "python", "freecodecamp"]
    },
    {
        id : 11,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/information-security-v7",
        caption: "FCC Information Security(2020)",
        category: ["fullstack", "javascript", "python", "freecodecamp"]
    },
    {
        id : 10,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/scientific-computing-with-python-v7",
        caption: "FCC Scientific Computing with Python(2020)",
        category: ["python", "freecodecamp"]
    },
    {
        id : 9,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/data-analysis-with-python-v7",
        caption: "FCC Data Analysis with Python(2020)",
        category: ["datascience", "python", "freecodecamp"]
    },
    {
        id : 8,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/machine-learning-with-python-v7",
        caption: "FCC Machine Learning with Python(2020)",
        category: ["datascience", "python", "freecodecamp"]
    },
    {
        id : 7,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/information-security-and-quality-assurance",
        caption: "FCC Information Security and Quality Assurance(2019)",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id : 6,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/F38Q8LMHV5TL",
        caption: "Google From Data to Insights with Google Cloud Platform(2020)",
        category: ["datascience", "bigquery", "sql", "googlecloud", "google"]
    },
    {
        id : 5,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/L2TV2QZNRXVA",
        caption: "Google Exploring and Preparing your Data with BigQuery(2020)",
        category: ["datascience", "bigquery", "sql", "googlecloud", "google"]
    },
    {
        id : 4,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/ZTPBMTNFLWEY",
        caption: "Google Creating New BgiQuery Datasets and Visualizing Insights(2020)",
        category: ["datascience", "bigquery", "sql", "googlecloud", "google"]
    },
    {
        id : 3,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/GJ5VKF2KYNA9",
        caption: "Google Achieving Advanced Insights with BigQuery(2020)",
        category: ["datascience", "bigquery", "sql", "googlecloud", "google"]
    },
    {
        id : 2,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/232H7CKCYK7W",
        caption: "Google Applying Machine Learning to your Data with GCP(2020)",
        category: ["datascience", "bigquery", "googlecloud", "google"]
    },
    {
        id : 1,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/RB5TLSQR7MAH",
        caption: "Google Fundamentals for Azure Professionals: Core Infrastructure(2020)",
        category: ["googlecloud", "google"]
    }
]

export { project_filters, projects, skills, certificate_filters, org_filters, certificates}