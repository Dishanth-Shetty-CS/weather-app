# weather-app

**Step 1:** Unzip the folder.

**Step 2:** Inside the folder, you will find three files: `index.html`, `style.css`, and `script.js`.

**Step 3:** Right-click on the unzipped folder and select **"Open with Code"** to open it in Visual Studio Code.

**Step 4:** Open the `index.html` file, then right-click on the page and choose **"Open with Live Server"**.  
This will open the website in your browser. Make sure that the Live Server extension is installed.

**Step 5:** When the page loads, you will see the title **"Weather Application"** and an input box to enter the city name.

**Step 6:** Enter a city name in the input field and click the **"Fetch"** button.  
- The button text will change to **"Fetching..."** to show that the app is loading the weather data.  
- The button will be disabled during this time to prevent multiple clicks.

**Step 7:** Once the data is successfully loaded or if there is an error:  
- The button text will change back to **"Fetch"**.  
- The button will be enabled again so you can make another request.

**Step 8:** The weather information for the entered city will be displayed, including:  
- Temperature  
- Weather description  
- Weather icon  
- Humidity (%)  
- Wind speed (M/S)  
- Area / Location

**Step 9:** If the city name is blank or incorrect, an error message will appear.

**Please Note:** The application fetches real-time weather data from the OpenWeatherMap API. Make sure you have an internet connection.  
It may take a few seconds to load the data, so please be patient.
