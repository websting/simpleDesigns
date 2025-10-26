


// generateImagesJson.js
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

const { CLOUD_NAME, API_KEY, API_SECRET, FOLDER } = process.env;

async function fetchImages() {
  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`,
      { expression: `folder:${FOLDER}`, max_results: 100 },
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const imageList = response.data.resources.map((img) => ({
      public_id: img.public_id,
      url: img.secure_url,
    }));

    fs.writeFileSync(
      "./public/images.json",
      JSON.stringify(imageList, null, 2)
    );

    console.log("✅ images.json file written with", imageList.length, "images");
  } catch (error) {
    console.error("❌ Failed to fetch/write image list", error.message);
  }
}

fetchImages();